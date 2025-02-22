window.BENCHMARK_DATA = {
  "lastUpdate": 1740213293972,
  "repoUrl": "https://github.com/zk-steve/rust_interview",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "33181397+zk-steve@users.noreply.github.com",
            "name": "Steve",
            "username": "zk-steve"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87bdeae8cdb0e425190887d3c84bd31fd320206d",
          "message": "Merge pull request #8 from zk-steve/avx-align-memory\n\nimprove avx-2 by aligning memory",
          "timestamp": "2025-01-14T16:30:58+07:00",
          "tree_id": "3f1fca7be6b1276e18d44b199cd3ace8d81101ba",
          "url": "https://github.com/zk-steve/rust_interview/commit/87bdeae8cdb0e425190887d3c84bd31fd320206d"
        },
        "date": 1736847476137,
        "tool": "cargo",
        "benches": [
          {
            "name": "forward_inplace/u64_prime/2048",
            "value": 19227,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/2048",
            "value": 30439,
            "range": "± 558",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/2048",
            "value": 18921,
            "range": "± 452",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/4096",
            "value": 41089,
            "range": "± 687",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/4096",
            "value": 65844,
            "range": "± 1282",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/4096",
            "value": 42018,
            "range": "± 1017",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/8192",
            "value": 86810,
            "range": "± 2178",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/8192",
            "value": 138923,
            "range": "± 3117",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/8192",
            "value": 88869,
            "range": "± 1790",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/16384",
            "value": 182646,
            "range": "± 3581",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/16384",
            "value": 293457,
            "range": "± 7476",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/16384",
            "value": 189122,
            "range": "± 4310",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/32768",
            "value": 385480,
            "range": "± 9124",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/32768",
            "value": 633872,
            "range": "± 10083",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/32768",
            "value": 409218,
            "range": "± 6566",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/65536",
            "value": 825290,
            "range": "± 21485",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/65536",
            "value": 1345319,
            "range": "± 23090",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/65536",
            "value": 875716,
            "range": "± 18566",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/2048",
            "value": 30344,
            "range": "± 613",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/2048",
            "value": 21729,
            "range": "± 587",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/4096",
            "value": 66163,
            "range": "± 1416",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/4096",
            "value": 46417,
            "range": "± 1686",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/8192",
            "value": 144352,
            "range": "± 2800",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/8192",
            "value": 102383,
            "range": "± 1705",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/16384",
            "value": 293627,
            "range": "± 5506",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/16384",
            "value": 214036,
            "range": "± 4355",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/32768",
            "value": 639153,
            "range": "± 11036",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/32768",
            "value": 464778,
            "range": "± 7693",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/65536",
            "value": 1343438,
            "range": "± 26914",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/65536",
            "value": 979042,
            "range": "± 19816",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33181397+zk-steve@users.noreply.github.com",
            "name": "Steve",
            "username": "zk-steve"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "998acd53ec5f19682e24b53e32ddaf55482cbeae",
          "message": "Merge pull request #9 from zk-steve/shoup\n\nShoup",
          "timestamp": "2025-02-11T12:54:07+07:00",
          "tree_id": "ed54bac3128493bcc4dfa4db3cd82b18ccf492f3",
          "url": "https://github.com/zk-steve/rust_interview/commit/998acd53ec5f19682e24b53e32ddaf55482cbeae"
        },
        "date": 1739253790590,
        "tool": "cargo",
        "benches": [
          {
            "name": "forward_inplace/u64_prime/2048",
            "value": 16484,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/2048",
            "value": 19625,
            "range": "± 1027",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/2048",
            "value": 31077,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/2048",
            "value": 19094,
            "range": "± 375",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/4096",
            "value": 34915,
            "range": "± 4875",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/4096",
            "value": 41802,
            "range": "± 816",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/4096",
            "value": 67105,
            "range": "± 948",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/4096",
            "value": 41383,
            "range": "± 655",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/8192",
            "value": 74066,
            "range": "± 1089",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/8192",
            "value": 88981,
            "range": "± 3833",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/8192",
            "value": 143388,
            "range": "± 5316",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/8192",
            "value": 89031,
            "range": "± 2952",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/16384",
            "value": 155685,
            "range": "± 1925",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/16384",
            "value": 188970,
            "range": "± 3193",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/16384",
            "value": 299491,
            "range": "± 10354",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/16384",
            "value": 192375,
            "range": "± 3781",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/32768",
            "value": 328297,
            "range": "± 6526",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/32768",
            "value": 399274,
            "range": "± 7806",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/32768",
            "value": 647562,
            "range": "± 11671",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/32768",
            "value": 411027,
            "range": "± 10225",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/65536",
            "value": 695341,
            "range": "± 6934",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/65536",
            "value": 843455,
            "range": "± 18826",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/65536",
            "value": 1370468,
            "range": "± 23280",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/65536",
            "value": 883320,
            "range": "± 18876",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/2048",
            "value": 14726,
            "range": "± 492",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/2048",
            "value": 19654,
            "range": "± 319",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/2048",
            "value": 31401,
            "range": "± 1384",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/2048",
            "value": 22191,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/4096",
            "value": 31891,
            "range": "± 532",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/4096",
            "value": 42263,
            "range": "± 456",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/4096",
            "value": 66889,
            "range": "± 1772",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/4096",
            "value": 48037,
            "range": "± 693",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/8192",
            "value": 68293,
            "range": "± 1393",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/8192",
            "value": 90425,
            "range": "± 6230",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/8192",
            "value": 143676,
            "range": "± 7996",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/8192",
            "value": 103947,
            "range": "± 1686",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/16384",
            "value": 145216,
            "range": "± 8686",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/16384",
            "value": 192173,
            "range": "± 2733",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/16384",
            "value": 305918,
            "range": "± 4307",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/16384",
            "value": 222275,
            "range": "± 13436",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/32768",
            "value": 307278,
            "range": "± 8153",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/32768",
            "value": 407813,
            "range": "± 8420",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/32768",
            "value": 648053,
            "range": "± 15185",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/32768",
            "value": 473309,
            "range": "± 7282",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/65536",
            "value": 654726,
            "range": "± 10979",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/65536",
            "value": 866210,
            "range": "± 29852",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/65536",
            "value": 1372165,
            "range": "± 38236",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/65536",
            "value": 1069217,
            "range": "± 22199",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sonntuet1997@gmail.com",
            "name": "Steve",
            "username": "zk-steve"
          },
          "committer": {
            "email": "sonntuet1997@gmail.com",
            "name": "Steve",
            "username": "zk-steve"
          },
          "distinct": true,
          "id": "df9109d40159f49d3cd19609f1a8f7097f3b2821",
          "message": "limit chart items",
          "timestamp": "2025-02-11T06:53:14Z",
          "tree_id": "cbe68dc67b96b5b6d354e04b1a7d8c16f27a7e70",
          "url": "https://github.com/zk-steve/rust_interview/commit/df9109d40159f49d3cd19609f1a8f7097f3b2821"
        },
        "date": 1739257339323,
        "tool": "cargo",
        "benches": [
          {
            "name": "forward_inplace/u64_prime/2048",
            "value": 16459,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/2048",
            "value": 19381,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/2048",
            "value": 31248,
            "range": "± 462",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/2048",
            "value": 19028,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/4096",
            "value": 34866,
            "range": "± 605",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/4096",
            "value": 41810,
            "range": "± 422",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/4096",
            "value": 66804,
            "range": "± 1167",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/4096",
            "value": 41384,
            "range": "± 1177",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/8192",
            "value": 73880,
            "range": "± 1171",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/8192",
            "value": 89210,
            "range": "± 1886",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/8192",
            "value": 143096,
            "range": "± 2428",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/8192",
            "value": 89009,
            "range": "± 1535",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/16384",
            "value": 156273,
            "range": "± 5480",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/16384",
            "value": 188227,
            "range": "± 6339",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/16384",
            "value": 304623,
            "range": "± 7307",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/16384",
            "value": 193521,
            "range": "± 36100",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/32768",
            "value": 330721,
            "range": "± 84209",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/32768",
            "value": 413356,
            "range": "± 77988",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/32768",
            "value": 646818,
            "range": "± 21655",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/32768",
            "value": 413907,
            "range": "± 8761",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/65536",
            "value": 698991,
            "range": "± 20064",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/65536",
            "value": 844005,
            "range": "± 45098",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/65536",
            "value": 1376957,
            "range": "± 47428",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/65536",
            "value": 933819,
            "range": "± 20344",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/2048",
            "value": 14914,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/2048",
            "value": 19691,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/2048",
            "value": 31529,
            "range": "± 521",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/2048",
            "value": 22216,
            "range": "± 598",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/4096",
            "value": 31863,
            "range": "± 945",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/4096",
            "value": 42244,
            "range": "± 443",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/4096",
            "value": 67588,
            "range": "± 1330",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/4096",
            "value": 48020,
            "range": "± 1016",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/8192",
            "value": 68384,
            "range": "± 2774",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/8192",
            "value": 90780,
            "range": "± 1733",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/8192",
            "value": 144040,
            "range": "± 2354",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/8192",
            "value": 103808,
            "range": "± 4499",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/16384",
            "value": 145369,
            "range": "± 6969",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/16384",
            "value": 193325,
            "range": "± 3128",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/16384",
            "value": 306309,
            "range": "± 5865",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/16384",
            "value": 221212,
            "range": "± 11561",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/32768",
            "value": 307217,
            "range": "± 4393",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/32768",
            "value": 407857,
            "range": "± 10965",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/32768",
            "value": 649639,
            "range": "± 9064",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/32768",
            "value": 473884,
            "range": "± 9019",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/65536",
            "value": 665087,
            "range": "± 10306",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/65536",
            "value": 868400,
            "range": "± 11847",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/65536",
            "value": 1369493,
            "range": "± 74942",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/65536",
            "value": 1002131,
            "range": "± 17852",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sonntuet1997@gmail.com",
            "name": "Steve Nguyen",
            "username": "zk-steve"
          },
          "committer": {
            "email": "sonntuet1997@gmail.com",
            "name": "Steve Nguyen",
            "username": "zk-steve"
          },
          "distinct": true,
          "id": "8650cae1fc201415e28e0617018154692264113e",
          "message": "fix minor code",
          "timestamp": "2025-02-11T16:37:12+07:00",
          "tree_id": "a26d7f595f96077e1782bed4c5b7789766271fbe",
          "url": "https://github.com/zk-steve/rust_interview/commit/8650cae1fc201415e28e0617018154692264113e"
        },
        "date": 1739267165482,
        "tool": "cargo",
        "benches": [
          {
            "name": "forward_inplace/u64_prime/2048",
            "value": 12857,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/2048",
            "value": 18812,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/2048",
            "value": 30193,
            "range": "± 607",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/2048",
            "value": 18319,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/4096",
            "value": 26703,
            "range": "± 441",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/4096",
            "value": 40350,
            "range": "± 995",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/4096",
            "value": 64232,
            "range": "± 3408",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/4096",
            "value": 39741,
            "range": "± 861",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/8192",
            "value": 56082,
            "range": "± 910",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/8192",
            "value": 85307,
            "range": "± 2363",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/8192",
            "value": 137434,
            "range": "± 2861",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/8192",
            "value": 86272,
            "range": "± 1875",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/16384",
            "value": 117072,
            "range": "± 2488",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/16384",
            "value": 181061,
            "range": "± 4452",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/16384",
            "value": 291339,
            "range": "± 4031",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/16384",
            "value": 184476,
            "range": "± 9698",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/32768",
            "value": 244369,
            "range": "± 4860",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/32768",
            "value": 381098,
            "range": "± 6066",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/32768",
            "value": 619929,
            "range": "± 14858",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/32768",
            "value": 393025,
            "range": "± 13852",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/65536",
            "value": 513243,
            "range": "± 9310",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/65536",
            "value": 811330,
            "range": "± 41538",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/65536",
            "value": 1307967,
            "range": "± 16591",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/65536",
            "value": 846117,
            "range": "± 25069",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/2048",
            "value": 11329,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/2048",
            "value": 18866,
            "range": "± 373",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/2048",
            "value": 30886,
            "range": "± 774",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/2048",
            "value": 21274,
            "range": "± 419",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/4096",
            "value": 24080,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/4096",
            "value": 40568,
            "range": "± 756",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/4096",
            "value": 65021,
            "range": "± 6846",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/4096",
            "value": 46279,
            "range": "± 1010",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/8192",
            "value": 51915,
            "range": "± 922",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/8192",
            "value": 87136,
            "range": "± 1532",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/8192",
            "value": 139682,
            "range": "± 4796",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/8192",
            "value": 99802,
            "range": "± 2101",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/16384",
            "value": 108483,
            "range": "± 2284",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/16384",
            "value": 185311,
            "range": "± 4362",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/16384",
            "value": 292891,
            "range": "± 10859",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/16384",
            "value": 212140,
            "range": "± 6059",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/32768",
            "value": 229603,
            "range": "± 6716",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/32768",
            "value": 390338,
            "range": "± 5887",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/32768",
            "value": 616693,
            "range": "± 20735",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/32768",
            "value": 454786,
            "range": "± 8332",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/65536",
            "value": 483465,
            "range": "± 6937",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/65536",
            "value": 831229,
            "range": "± 13634",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/65536",
            "value": 1333238,
            "range": "± 62006",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/65536",
            "value": 964478,
            "range": "± 19737",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33181397+zk-steve@users.noreply.github.com",
            "name": "Steve",
            "username": "zk-steve"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6677beeea4973188733594a2e11e3c0c881eec96",
          "message": "Merge pull request #11 from zk-steve/improve-shoup\n\nImprove shoup",
          "timestamp": "2025-02-17T08:54:56+07:00",
          "tree_id": "7235373d57b964904999d15a35ae204f0583ae17",
          "url": "https://github.com/zk-steve/rust_interview/commit/6677beeea4973188733594a2e11e3c0c881eec96"
        },
        "date": 1739757831014,
        "tool": "cargo",
        "benches": [
          {
            "name": "forward_inplace/u64_prime/2048",
            "value": 11840,
            "range": "± 385",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/2048",
            "value": 19031,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/2048",
            "value": 30762,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/2048",
            "value": 18680,
            "range": "± 364",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/4096",
            "value": 25492,
            "range": "± 585",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/4096",
            "value": 40668,
            "range": "± 695",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/4096",
            "value": 65504,
            "range": "± 1436",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/4096",
            "value": 40735,
            "range": "± 967",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/8192",
            "value": 53137,
            "range": "± 1153",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/8192",
            "value": 86079,
            "range": "± 1612",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/8192",
            "value": 139806,
            "range": "± 5012",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/8192",
            "value": 88168,
            "range": "± 1524",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/16384",
            "value": 111767,
            "range": "± 2795",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/16384",
            "value": 181059,
            "range": "± 3325",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/16384",
            "value": 295831,
            "range": "± 4938",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/16384",
            "value": 187949,
            "range": "± 7941",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/32768",
            "value": 234353,
            "range": "± 5445",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/32768",
            "value": 383823,
            "range": "± 5893",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/32768",
            "value": 635934,
            "range": "± 9995",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/32768",
            "value": 396517,
            "range": "± 7504",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/65536",
            "value": 492734,
            "range": "± 11999",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/65536",
            "value": 818386,
            "range": "± 15692",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/65536",
            "value": 1365308,
            "range": "± 29798",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/65536",
            "value": 855207,
            "range": "± 15167",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/2048",
            "value": 10250,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/2048",
            "value": 19605,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/2048",
            "value": 31528,
            "range": "± 917",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/2048",
            "value": 21290,
            "range": "± 458",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/4096",
            "value": 22325,
            "range": "± 632",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/4096",
            "value": 41360,
            "range": "± 2345",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/4096",
            "value": 65687,
            "range": "± 1667",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/4096",
            "value": 46276,
            "range": "± 864",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/8192",
            "value": 47825,
            "range": "± 935",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/8192",
            "value": 88605,
            "range": "± 1654",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/8192",
            "value": 140169,
            "range": "± 2840",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/8192",
            "value": 99346,
            "range": "± 1880",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/16384",
            "value": 100475,
            "range": "± 2053",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/16384",
            "value": 188086,
            "range": "± 9217",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/16384",
            "value": 300251,
            "range": "± 7691",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/16384",
            "value": 218942,
            "range": "± 7625",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/32768",
            "value": 212521,
            "range": "± 5054",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/32768",
            "value": 407179,
            "range": "± 8859",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/32768",
            "value": 635897,
            "range": "± 28820",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/32768",
            "value": 463010,
            "range": "± 9121",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/65536",
            "value": 456382,
            "range": "± 12294",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/65536",
            "value": 855325,
            "range": "± 31323",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/65536",
            "value": 1343692,
            "range": "± 43994",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/65536",
            "value": 968033,
            "range": "± 23250",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33181397+zk-steve@users.noreply.github.com",
            "name": "Steve",
            "username": "zk-steve"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ace0b4cb2e9179dc2c98b3abb5ea84b69c05b8b7",
          "message": "Merge pull request #12 from zk-steve/update-u60\n\nUpdate u60",
          "timestamp": "2025-02-20T14:53:56+07:00",
          "tree_id": "e55364825d1c2f7ed38e189773b644b2a2b01804",
          "url": "https://github.com/zk-steve/rust_interview/commit/ace0b4cb2e9179dc2c98b3abb5ea84b69c05b8b7"
        },
        "date": 1740038747166,
        "tool": "cargo",
        "benches": [
          {
            "name": "forward_inplace/u64_prime/2048",
            "value": 12328,
            "range": "± 416",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/2048",
            "value": 12004,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/2048",
            "value": 31604,
            "range": "± 1758",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/2048",
            "value": 19152,
            "range": "± 829",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/4096",
            "value": 25948,
            "range": "± 2417",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/4096",
            "value": 25336,
            "range": "± 1864",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/4096",
            "value": 67816,
            "range": "± 762",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/4096",
            "value": 41461,
            "range": "± 1145",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/8192",
            "value": 54758,
            "range": "± 640",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/8192",
            "value": 53595,
            "range": "± 639",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/8192",
            "value": 144583,
            "range": "± 5733",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/8192",
            "value": 89646,
            "range": "± 17076",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/16384",
            "value": 115349,
            "range": "± 11029",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/16384",
            "value": 114953,
            "range": "± 27815",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/16384",
            "value": 307798,
            "range": "± 54346",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/16384",
            "value": 192571,
            "range": "± 22265",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/32768",
            "value": 242033,
            "range": "± 2673",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/32768",
            "value": 236253,
            "range": "± 2918",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/32768",
            "value": 652665,
            "range": "± 120295",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/32768",
            "value": 412245,
            "range": "± 13680",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/65536",
            "value": 509663,
            "range": "± 10706",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/65536",
            "value": 497591,
            "range": "± 9462",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/65536",
            "value": 1393506,
            "range": "± 329569",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/65536",
            "value": 888932,
            "range": "± 163242",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/2048",
            "value": 10830,
            "range": "± 906",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/2048",
            "value": 10805,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/2048",
            "value": 31523,
            "range": "± 9142",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/2048",
            "value": 22350,
            "range": "± 3919",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/4096",
            "value": 23485,
            "range": "± 6340",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/4096",
            "value": 23044,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/4096",
            "value": 67526,
            "range": "± 11217",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/4096",
            "value": 48091,
            "range": "± 865",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/8192",
            "value": 49388,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/8192",
            "value": 49489,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/8192",
            "value": 143980,
            "range": "± 1731",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/8192",
            "value": 103961,
            "range": "± 1793",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/16384",
            "value": 104950,
            "range": "± 2054",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/16384",
            "value": 104966,
            "range": "± 1302",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/16384",
            "value": 306472,
            "range": "± 2994",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/16384",
            "value": 222778,
            "range": "± 3753",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/32768",
            "value": 222557,
            "range": "± 5645",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/32768",
            "value": 222770,
            "range": "± 6840",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/32768",
            "value": 643321,
            "range": "± 20226",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/32768",
            "value": 473983,
            "range": "± 10435",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/65536",
            "value": 475902,
            "range": "± 7094",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/65536",
            "value": 496392,
            "range": "± 7623",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/65536",
            "value": 1376825,
            "range": "± 16928",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/65536",
            "value": 1008963,
            "range": "± 24694",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33181397+zk-steve@users.noreply.github.com",
            "name": "Steve",
            "username": "zk-steve"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1237e754031b051b34f6321c8af479bab3270312",
          "message": "Merge pull request #13 from zk-steve/improve-avx-mul\n\nimprove avx mul",
          "timestamp": "2025-02-21T13:55:23+07:00",
          "tree_id": "b4bb63aace95b19b85d48bd676730568b41afd13",
          "url": "https://github.com/zk-steve/rust_interview/commit/1237e754031b051b34f6321c8af479bab3270312"
        },
        "date": 1740121438735,
        "tool": "cargo",
        "benches": [
          {
            "name": "forward_inplace/u64_prime/2048",
            "value": 12368,
            "range": "± 615",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/2048",
            "value": 12077,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/2048",
            "value": 31597,
            "range": "± 1463",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/2048",
            "value": 19616,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/4096",
            "value": 25967,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/4096",
            "value": 25497,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/4096",
            "value": 67795,
            "range": "± 1590",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/4096",
            "value": 42597,
            "range": "± 1004",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/8192",
            "value": 55153,
            "range": "± 2583",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/8192",
            "value": 53610,
            "range": "± 950",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/8192",
            "value": 144447,
            "range": "± 6218",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/8192",
            "value": 91850,
            "range": "± 1870",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/16384",
            "value": 115755,
            "range": "± 2762",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/16384",
            "value": 113065,
            "range": "± 2292",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/16384",
            "value": 307117,
            "range": "± 3686",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/16384",
            "value": 197898,
            "range": "± 5015",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/32768",
            "value": 242516,
            "range": "± 3460",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/32768",
            "value": 237257,
            "range": "± 7905",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/32768",
            "value": 652029,
            "range": "± 6673",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/32768",
            "value": 420690,
            "range": "± 19611",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/65536",
            "value": 509443,
            "range": "± 6152",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/65536",
            "value": 499058,
            "range": "± 10001",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/65536",
            "value": 1377097,
            "range": "± 20260",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/65536",
            "value": 904104,
            "range": "± 11456",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/2048",
            "value": 10888,
            "range": "± 522",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/2048",
            "value": 10897,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/2048",
            "value": 31517,
            "range": "± 525",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/2048",
            "value": 22332,
            "range": "± 2930",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/4096",
            "value": 23088,
            "range": "± 441",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/4096",
            "value": 23359,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/4096",
            "value": 67838,
            "range": "± 2170",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/4096",
            "value": 48055,
            "range": "± 1096",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/8192",
            "value": 49961,
            "range": "± 1579",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/8192",
            "value": 50102,
            "range": "± 1503",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/8192",
            "value": 144985,
            "range": "± 2896",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/8192",
            "value": 103529,
            "range": "± 1304",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/16384",
            "value": 106229,
            "range": "± 1285",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/16384",
            "value": 106511,
            "range": "± 1623",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/16384",
            "value": 308736,
            "range": "± 6412",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/16384",
            "value": 220748,
            "range": "± 6116",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/32768",
            "value": 223094,
            "range": "± 4214",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/32768",
            "value": 225733,
            "range": "± 5824",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/32768",
            "value": 651681,
            "range": "± 19605",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/32768",
            "value": 473263,
            "range": "± 5077",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/65536",
            "value": 479129,
            "range": "± 22599",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/65536",
            "value": 482065,
            "range": "± 6901",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/65536",
            "value": 1374677,
            "range": "± 23078",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/65536",
            "value": 1006576,
            "range": "± 15366",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33181397+zk-steve@users.noreply.github.com",
            "name": "Steve",
            "username": "zk-steve"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22bdebd433b41eb046dd9774cb3fd671dbc27527",
          "message": "Merge pull request #14 from zk-steve/optimize-reduce\n\noptimize reduce 2p",
          "timestamp": "2025-02-21T17:59:24+07:00",
          "tree_id": "1a496b2eee4c221ff1d6dfa61513336d108797b8",
          "url": "https://github.com/zk-steve/rust_interview/commit/22bdebd433b41eb046dd9774cb3fd671dbc27527"
        },
        "date": 1740136086176,
        "tool": "cargo",
        "benches": [
          {
            "name": "forward_inplace/u64_prime/2048",
            "value": 8906,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/2048",
            "value": 12063,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/2048",
            "value": 31623,
            "range": "± 458",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/2048",
            "value": 19598,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/4096",
            "value": 18995,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/4096",
            "value": 25434,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/4096",
            "value": 67969,
            "range": "± 1228",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/4096",
            "value": 42600,
            "range": "± 587",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/8192",
            "value": 41294,
            "range": "± 610",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/8192",
            "value": 53870,
            "range": "± 689",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/8192",
            "value": 145090,
            "range": "± 2294",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/8192",
            "value": 92209,
            "range": "± 1476",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/16384",
            "value": 87904,
            "range": "± 3045",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/16384",
            "value": 113068,
            "range": "± 2618",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/16384",
            "value": 308919,
            "range": "± 3669",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/16384",
            "value": 197958,
            "range": "± 5038",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/32768",
            "value": 186527,
            "range": "± 9690",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/32768",
            "value": 237675,
            "range": "± 2672",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/32768",
            "value": 647271,
            "range": "± 63622",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/32768",
            "value": 424849,
            "range": "± 11076",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/65536",
            "value": 398723,
            "range": "± 18894",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/65536",
            "value": 498693,
            "range": "± 10670",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/65536",
            "value": 1381890,
            "range": "± 18494",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/65536",
            "value": 906195,
            "range": "± 12748",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/2048",
            "value": 10896,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/2048",
            "value": 10972,
            "range": "± 2372",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/2048",
            "value": 31703,
            "range": "± 693",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/2048",
            "value": 22231,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/4096",
            "value": 23344,
            "range": "± 378",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/4096",
            "value": 23346,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/4096",
            "value": 67927,
            "range": "± 1430",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/4096",
            "value": 47961,
            "range": "± 1750",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/8192",
            "value": 50089,
            "range": "± 1785",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/8192",
            "value": 49997,
            "range": "± 921",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/8192",
            "value": 145473,
            "range": "± 1242",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/8192",
            "value": 103648,
            "range": "± 1840",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/16384",
            "value": 106591,
            "range": "± 5349",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/16384",
            "value": 106178,
            "range": "± 1539",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/16384",
            "value": 306803,
            "range": "± 5932",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/16384",
            "value": 221516,
            "range": "± 9838",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/32768",
            "value": 226162,
            "range": "± 3228",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/32768",
            "value": 223565,
            "range": "± 4114",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/32768",
            "value": 651184,
            "range": "± 21232",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/32768",
            "value": 472522,
            "range": "± 7355",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/65536",
            "value": 478820,
            "range": "± 8091",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/65536",
            "value": 477966,
            "range": "± 13334",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/65536",
            "value": 1376452,
            "range": "± 28566",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/65536",
            "value": 1028129,
            "range": "± 20200",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sonntuet1997@gmail.com",
            "name": "Steve",
            "username": "zk-steve"
          },
          "committer": {
            "email": "sonntuet1997@gmail.com",
            "name": "Steve",
            "username": "zk-steve"
          },
          "distinct": true,
          "id": "9476673a3fba71a765e3f727839125704ae53950",
          "message": "minor refactor",
          "timestamp": "2025-02-22T03:25:46Z",
          "tree_id": "458819ff98edfad7110973270f2ca6873e9e2ca9",
          "url": "https://github.com/zk-steve/rust_interview/commit/9476673a3fba71a765e3f727839125704ae53950"
        },
        "date": 1740195297320,
        "tool": "cargo",
        "benches": [
          {
            "name": "forward_inplace/u64_prime/2048",
            "value": 8905,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/2048",
            "value": 12034,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/2048",
            "value": 31597,
            "range": "± 12787",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/2048",
            "value": 19219,
            "range": "± 3070",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/4096",
            "value": 19442,
            "range": "± 7818",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/4096",
            "value": 29834,
            "range": "± 16283",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/4096",
            "value": 67807,
            "range": "± 2436",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/4096",
            "value": 41260,
            "range": "± 1122",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/8192",
            "value": 41191,
            "range": "± 1420",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/8192",
            "value": 53644,
            "range": "± 2444",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/8192",
            "value": 143931,
            "range": "± 3301",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/8192",
            "value": 89649,
            "range": "± 1959",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/16384",
            "value": 87398,
            "range": "± 2806",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/16384",
            "value": 112794,
            "range": "± 4683",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/16384",
            "value": 304249,
            "range": "± 7380",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/16384",
            "value": 205866,
            "range": "± 100552",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/32768",
            "value": 186252,
            "range": "± 4529",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/32768",
            "value": 236906,
            "range": "± 36954",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/32768",
            "value": 651597,
            "range": "± 10724",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/32768",
            "value": 412858,
            "range": "± 14176",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/65536",
            "value": 398674,
            "range": "± 45907",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/65536",
            "value": 496774,
            "range": "± 5644",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/65536",
            "value": 1376539,
            "range": "± 13743",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/65536",
            "value": 886368,
            "range": "± 34314",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/2048",
            "value": 10898,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/2048",
            "value": 10911,
            "range": "± 1829",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/2048",
            "value": 31558,
            "range": "± 2851",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/2048",
            "value": 22141,
            "range": "± 1797",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/4096",
            "value": 23305,
            "range": "± 468",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/4096",
            "value": 23358,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/4096",
            "value": 67656,
            "range": "± 2424",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/4096",
            "value": 47843,
            "range": "± 639",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/8192",
            "value": 49982,
            "range": "± 1474",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/8192",
            "value": 50179,
            "range": "± 2128",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/8192",
            "value": 142960,
            "range": "± 2610",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/8192",
            "value": 102802,
            "range": "± 1694",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/16384",
            "value": 106431,
            "range": "± 1962",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/16384",
            "value": 106649,
            "range": "± 4857",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/16384",
            "value": 305175,
            "range": "± 4185",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/16384",
            "value": 221488,
            "range": "± 2633",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/32768",
            "value": 225445,
            "range": "± 11521",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/32768",
            "value": 225958,
            "range": "± 4371",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/32768",
            "value": 648318,
            "range": "± 22524",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/32768",
            "value": 472650,
            "range": "± 7072",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/65536",
            "value": 478785,
            "range": "± 15873",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/65536",
            "value": 480487,
            "range": "± 13686",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/65536",
            "value": 1363944,
            "range": "± 61700",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/65536",
            "value": 1006290,
            "range": "± 8590",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33181397+zk-steve@users.noreply.github.com",
            "name": "Steve",
            "username": "zk-steve"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3299b64e95bc6222e7d8888884466b5aa60542c",
          "message": "Merge pull request #15 from zk-steve/avx-last-loop\n\navx for the last loop",
          "timestamp": "2025-02-22T15:26:02+07:00",
          "tree_id": "e377a4c0b10b705d702abdefc44b62dfefa027be",
          "url": "https://github.com/zk-steve/rust_interview/commit/e3299b64e95bc6222e7d8888884466b5aa60542c"
        },
        "date": 1740213292806,
        "tool": "cargo",
        "benches": [
          {
            "name": "forward_inplace/u64_prime/2048",
            "value": 8522,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/2048",
            "value": 12043,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/2048",
            "value": 31012,
            "range": "± 834",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/2048",
            "value": 18917,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/4096",
            "value": 18485,
            "range": "± 571",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/4096",
            "value": 25430,
            "range": "± 664",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/4096",
            "value": 67638,
            "range": "± 2046",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/4096",
            "value": 41311,
            "range": "± 1088",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/8192",
            "value": 39187,
            "range": "± 823",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/8192",
            "value": 53858,
            "range": "± 2593",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/8192",
            "value": 144313,
            "range": "± 2555",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/8192",
            "value": 88713,
            "range": "± 4325",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/16384",
            "value": 85185,
            "range": "± 1543",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/16384",
            "value": 113254,
            "range": "± 1396",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/16384",
            "value": 303982,
            "range": "± 6055",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/16384",
            "value": 190372,
            "range": "± 4535",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/32768",
            "value": 181948,
            "range": "± 3128",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/32768",
            "value": 234775,
            "range": "± 7891",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/32768",
            "value": 647059,
            "range": "± 12112",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/32768",
            "value": 410751,
            "range": "± 8306",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/65536",
            "value": 382456,
            "range": "± 7633",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u60_prime/65536",
            "value": 496108,
            "range": "± 8211",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/65536",
            "value": 1369309,
            "range": "± 21410",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/65536",
            "value": 878593,
            "range": "± 13776",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/2048",
            "value": 10776,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/2048",
            "value": 10864,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/2048",
            "value": 31394,
            "range": "± 511",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/2048",
            "value": 22007,
            "range": "± 503",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/4096",
            "value": 22991,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/4096",
            "value": 23349,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/4096",
            "value": 67516,
            "range": "± 992",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/4096",
            "value": 47470,
            "range": "± 1283",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/8192",
            "value": 48647,
            "range": "± 1032",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/8192",
            "value": 50085,
            "range": "± 908",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/8192",
            "value": 144406,
            "range": "± 12396",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/8192",
            "value": 103233,
            "range": "± 1359",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/16384",
            "value": 105015,
            "range": "± 1831",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/16384",
            "value": 105292,
            "range": "± 2004",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/16384",
            "value": 304488,
            "range": "± 9141",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/16384",
            "value": 221054,
            "range": "± 3301",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/32768",
            "value": 223775,
            "range": "± 6057",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/32768",
            "value": 225185,
            "range": "± 3077",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/32768",
            "value": 644163,
            "range": "± 9927",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/32768",
            "value": 472103,
            "range": "± 5329",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u64_prime/65536",
            "value": 470721,
            "range": "± 19183",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/u60_prime/65536",
            "value": 479045,
            "range": "± 7903",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/65536",
            "value": 1373559,
            "range": "± 90065",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/65536",
            "value": 1002135,
            "range": "± 25018",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}