// Copyright (c) 2017-present PyO3 Project and Contributors

use std;

#[macro_use] mod macros;

pub mod async;
pub mod basic;
pub mod buffer;
pub mod context;
pub mod descr;
pub mod mapping;
pub mod methods;
pub mod number;
pub mod iter;
pub mod gc;
pub mod sequence;
pub mod typeob;

pub use self::basic::PyObjectProtocol;
pub use self::async::PyAsyncProtocol;
pub use self::iter::PyIterProtocol;
pub use self::buffer::PyBufferProtocol;
pub use self::context::PyContextProtocol;
pub use self::descr::PyDescrProtocol;
pub use self::number::PyNumberProtocol;
pub use self::mapping::PyMappingProtocol;
pub use self::sequence::PySequenceProtocol;

pub use self::typeob::PyTypeObject;
pub use self::gc::{PyVisit, PyGCProtocol, PyTraverseError};
pub use self::methods::{PyMethodDef, PyMethodDefType, PyMethodType,
                        PyGetterDef, PySetterDef};

pub static NO_METHODS: &'static [&'static str] = &[];
pub static NO_PY_METHODS: &'static [PyMethodDefType] = &[];

use ffi;
use err::PyResult;
use python::Python;


#[derive(Debug)]
pub enum CompareOp {
    Lt = ffi::Py_LT as isize,
    Le = ffi::Py_LE as isize,
    Eq = ffi::Py_EQ as isize,
    Ne = ffi::Py_NE as isize,
    Gt = ffi::Py_GT as isize,
    Ge = ffi::Py_GE as isize
}


pub trait BaseObject {
    type Type;

    /// Allocates a new object (usually by calling ty->tp_alloc),
    /// and initializes it using init_val.
    /// `ty` must be derived from the Self type, and the resulting object
    /// must be of type `ty`.
    unsafe fn alloc(_py: Python, value: Self::Type) -> PyResult<*mut ffi::PyObject>;

    /// Calls the rust destructor for the object and frees the memory
    /// (usually by calling ptr->ob_type->tp_free).
    /// This function is used as tp_dealloc implementation.
    unsafe fn dealloc(_py: Python, obj: *mut ffi::PyObject);

}


/// A PythonObject that is usable as a base type for #[class]
impl<T> BaseObject for T where T : typeob::PyTypeObjectInfo {
    type Type = T::Type;

    /// Allocates a new object (usually by calling ty->tp_alloc),
    /// and initializes it using init_val.
    /// `ty` must be derived from the Self type, and the resulting object
    /// must be of type `ty`.
    unsafe fn alloc(_py: Python, value: T::Type) -> PyResult<*mut ffi::PyObject> {
        let obj = ffi::PyType_GenericAlloc(
            <Self as typeob::PyTypeObjectInfo>::type_object(), 0);

        let offset = <Self as typeob::PyTypeObjectInfo>::offset();
        let ptr = (obj as *mut u8).offset(offset as isize) as *mut Self::Type;
        std::ptr::write(ptr, value);

        Ok(obj)
    }

    /// Calls the rust destructor for the object and frees the memory
    /// (usually by calling ptr->ob_type->tp_free).
    /// This function is used as tp_dealloc implementation.
    unsafe fn dealloc(_py: Python, obj: *mut ffi::PyObject) {
        let ptr = (obj as *mut u8).offset(
            <Self as typeob::PyTypeObjectInfo>::offset() as isize) as *mut Self::Type;
        std::ptr::drop_in_place(ptr);

        let ty = ffi::Py_TYPE(obj);
        if ffi::PyType_IS_GC(ty) != 0 {
            ffi::PyObject_GC_Del(obj as *mut ::c_void);
        } else {
            ffi::PyObject_Free(obj as *mut ::c_void);
        }
        // For heap types, PyType_GenericAlloc calls INCREF on the type objects,
        // so we need to call DECREF here:
        if ffi::PyType_HasFeature(ty, ffi::Py_TPFLAGS_HEAPTYPE) != 0 {
            ffi::Py_DECREF(ty as *mut ffi::PyObject);
        }
    }
}
