window.BENCHMARK_DATA = {
  "lastUpdate": 1739257340498,
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
            "name": "backward_inplace/prime/2048",
            "value": 20126,
            "range": "± 62",
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
            "name": "backward_inplace/prime/4096",
            "value": 43180,
            "range": "± 222",
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
            "name": "backward_inplace/prime/8192",
            "value": 92842,
            "range": "± 580",
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
            "name": "backward_inplace/prime/16384",
            "value": 197390,
            "range": "± 528",
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
            "name": "backward_inplace/prime/32768",
            "value": 418715,
            "range": "± 2029",
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
            "name": "backward_inplace/prime/65536",
            "value": 890310,
            "range": "± 4405",
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
            "name": "backward_inplace/prime/2048",
            "value": 19703,
            "range": "± 2610",
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
            "name": "backward_inplace/prime/4096",
            "value": 42679,
            "range": "± 858",
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
            "name": "backward_inplace/prime/8192",
            "value": 90298,
            "range": "± 1740",
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
            "name": "backward_inplace/prime/16384",
            "value": 192262,
            "range": "± 3554",
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
            "name": "backward_inplace/prime/32768",
            "value": 395205,
            "range": "± 10728",
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
            "name": "backward_inplace/prime/65536",
            "value": 855328,
            "range": "± 16489",
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
            "name": "backward_inplace/prime/2048",
            "value": 18894,
            "range": "± 323",
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
            "name": "backward_inplace/prime/4096",
            "value": 40695,
            "range": "± 2056",
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
            "name": "backward_inplace/prime/8192",
            "value": 89002,
            "range": "± 2157",
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
            "name": "backward_inplace/prime/16384",
            "value": 185347,
            "range": "± 3296",
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
            "name": "backward_inplace/prime/32768",
            "value": 388994,
            "range": "± 7732",
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
            "name": "backward_inplace/prime/65536",
            "value": 838354,
            "range": "± 19134",
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
      }
    ]
  }
}