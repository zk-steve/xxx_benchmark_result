window.BENCHMARK_DATA = {
  "lastUpdate": 1740121439892,
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
          "id": "ebad0a78b0f0be74e167c4506efbfa97c3d5e667",
          "message": "Merge pull request #7 from zk-steve/avx-2-improve\n\nimprove mul avx-2",
          "timestamp": "2025-01-09T11:43:04+07:00",
          "tree_id": "1f5dd693bda18848f8fdc323e94a5adc086d46a0",
          "url": "https://github.com/zk-steve/rust_interview/commit/ebad0a78b0f0be74e167c4506efbfa97c3d5e667"
        },
        "date": 1736398258194,
        "tool": "cargo",
        "benches": [
          {
            "name": "forward_inplace/u64_prime/2048",
            "value": 20230,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/2048",
            "value": 31936,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/2048",
            "value": 19495,
            "range": "± 568",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/4096",
            "value": 42852,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/4096",
            "value": 68646,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/4096",
            "value": 42271,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/8192",
            "value": 92305,
            "range": "± 543",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/8192",
            "value": 146595,
            "range": "± 505",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/8192",
            "value": 91179,
            "range": "± 2601",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/16384",
            "value": 196336,
            "range": "± 955",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/16384",
            "value": 311998,
            "range": "± 1178",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/16384",
            "value": 196541,
            "range": "± 1347",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/32768",
            "value": 407147,
            "range": "± 994",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/32768",
            "value": 662172,
            "range": "± 3321",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/32768",
            "value": 420453,
            "range": "± 3644",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/65536",
            "value": 861024,
            "range": "± 4182",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/65536",
            "value": 1400492,
            "range": "± 10381",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/65536",
            "value": 934420,
            "range": "± 8444",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/2048",
            "value": 32261,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/2048",
            "value": 22663,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/4096",
            "value": 69393,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/4096",
            "value": 48890,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/8192",
            "value": 147483,
            "range": "± 1339",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/8192",
            "value": 105663,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/16384",
            "value": 314200,
            "range": "± 1913",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/16384",
            "value": 225811,
            "range": "± 812",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/32768",
            "value": 665751,
            "range": "± 2528",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/32768",
            "value": 481750,
            "range": "± 3961",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/65536",
            "value": 1406875,
            "range": "± 14284",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/65536",
            "value": 1023541,
            "range": "± 11438",
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
          "id": "ebad0a78b0f0be74e167c4506efbfa97c3d5e667",
          "message": "Merge pull request #7 from zk-steve/avx-2-improve\n\nimprove mul avx-2",
          "timestamp": "2025-01-09T11:43:04+07:00",
          "tree_id": "1f5dd693bda18848f8fdc323e94a5adc086d46a0",
          "url": "https://github.com/zk-steve/rust_interview/commit/ebad0a78b0f0be74e167c4506efbfa97c3d5e667"
        },
        "date": 1736839684444,
        "tool": "cargo",
        "benches": [
          {
            "name": "forward_inplace/u64_prime/2048",
            "value": 19198,
            "range": "± 422",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/2048",
            "value": 30719,
            "range": "± 1045",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/2048",
            "value": 18532,
            "range": "± 548",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/4096",
            "value": 42146,
            "range": "± 934",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/4096",
            "value": 66267,
            "range": "± 1291",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/4096",
            "value": 40809,
            "range": "± 1677",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/8192",
            "value": 87466,
            "range": "± 2189",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/8192",
            "value": 138664,
            "range": "± 3273",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/8192",
            "value": 86398,
            "range": "± 4437",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/16384",
            "value": 185947,
            "range": "± 3796",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/16384",
            "value": 297274,
            "range": "± 7770",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/16384",
            "value": 188992,
            "range": "± 4592",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/32768",
            "value": 389057,
            "range": "± 9981",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/32768",
            "value": 647165,
            "range": "± 27133",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/32768",
            "value": 401029,
            "range": "± 26269",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/u64_prime/65536",
            "value": 830685,
            "range": "± 24705",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_prime/65536",
            "value": 1322062,
            "range": "± 29277",
            "unit": "ns/iter"
          },
          {
            "name": "forward_inplace/goldilocks_v2_prime/65536",
            "value": 929633,
            "range": "± 22839",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/2048",
            "value": 31356,
            "range": "± 1228",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/2048",
            "value": 22031,
            "range": "± 441",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/4096",
            "value": 65867,
            "range": "± 1378",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/4096",
            "value": 47548,
            "range": "± 1080",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/8192",
            "value": 141353,
            "range": "± 2974",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/8192",
            "value": 100826,
            "range": "± 2045",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/16384",
            "value": 296833,
            "range": "± 5713",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/16384",
            "value": 213413,
            "range": "± 4259",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/32768",
            "value": 638211,
            "range": "± 24023",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/32768",
            "value": 469432,
            "range": "± 17440",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_prime/65536",
            "value": 1358286,
            "range": "± 25235",
            "unit": "ns/iter"
          },
          {
            "name": "backward_inplace/goldilocks_v2_prime/65536",
            "value": 996957,
            "range": "± 156108",
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
      }
    ]
  }
}