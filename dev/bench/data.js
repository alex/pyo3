window.BENCHMARK_DATA = {
  "lastUpdate": 1703178381992,
  "repoUrl": "https://github.com/alex/pyo3",
  "entries": {
    "pyo3-bench": [
      {
        "commit": {
          "author": {
            "email": "adamreichold@users.noreply.github.com",
            "name": "Adam Reichold",
            "username": "adamreichold"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1fa47b04099d8b3ac81ebe1452c3ed6b4ae96486",
          "message": "Merge pull request #3687 from alex/abi3-py312\n\nadded `abi3-py312` feature",
          "timestamp": "2023-12-21T16:05:34Z",
          "tree_id": "c375d32a7fcc5f552764191740d9415314ae79bc",
          "url": "https://github.com/alex/pyo3/commit/1fa47b04099d8b3ac81ebe1452c3ed6b4ae96486"
        },
        "date": 1703178372938,
        "tool": "cargo",
        "benches": [
          {
            "name": "identify_object_type",
            "value": 489,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "collect_generic_iterator",
            "value": 11208673,
            "range": "± 45166",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_extract_fail",
            "value": 248,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_small",
            "value": 58,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_big_negative",
            "value": 173,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_big_positive",
            "value": 142,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_huge_negative",
            "value": 1319,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "extract_bigint_huge_positive",
            "value": 1095,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "call_0",
            "value": 32607,
            "range": "± 643",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 106330,
            "range": "± 4900",
            "unit": "ns/iter"
          },
          {
            "name": "ordered_dunder_methods",
            "value": 44,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ordered_richcmp",
            "value": 45,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "decimal_via_extract",
            "value": 369,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2271318,
            "range": "± 26228",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4856002,
            "range": "± 30277",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2622132,
            "range": "± 102489",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8786851,
            "range": "± 298315",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 10911214,
            "range": "± 198907",
            "unit": "ns/iter"
          },
          {
            "name": "mapping_from_dict",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "err_new_restore_and_fetch",
            "value": 166,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "err_new_without_gil",
            "value": 13,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_extract_success",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_extract_fail",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_downcast_success",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_str_downcast_fail",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_extract_success",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_extract_fail",
            "value": 245,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_downcast_success",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_int_downcast_fail",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_float_extract_success",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_float_extract_fail",
            "value": 231,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "extract_float_downcast_success",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "extract_float_downcast_fail",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "enum_from_pyobject",
            "value": 989,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "list_via_downcast",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "list_via_extract",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "not_a_list_via_downcast",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "not_a_list_via_extract",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "not_a_list_via_extract_enum",
            "value": 564,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "f64_from_pyobject",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 61,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 63,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "getattr_direct",
            "value": 116,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "getattr_intern",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1672351,
            "range": "± 22751",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1148078,
            "range": "± 120746",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 960673,
            "range": "± 20270",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 866828,
            "range": "± 8764",
            "unit": "ns/iter"
          },
          {
            "name": "sequence_from_list",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 3255,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 2169,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "set_new",
            "value": 1827556,
            "range": "± 68721",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1972478,
            "range": "± 16186",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7412242,
            "range": "± 57703",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 3265459,
            "range": "± 19555",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1307832,
            "range": "± 5259",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1139228,
            "range": "± 80921",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 860896,
            "range": "± 9642",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 781332,
            "range": "± 10040",
            "unit": "ns/iter"
          },
          {
            "name": "sequence_from_tuple",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new_list",
            "value": 200135,
            "range": "± 7702",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_to_list",
            "value": 80884,
            "range": "± 1276",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_into_py",
            "value": 96,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}