// =============================================
// NAGASE KL GLOBAL PASSPORT — DATA FILE
// =============================================
//
// HOW TO UPDATE:
//
// RELEASE A COUNTRY (make it visible):
//   Change  released: false  →  released: true
//   Add stamp image: put image in /stamps/ folder,
//   then set stamp: "filename.png"
//
// ADD STAMPS TO A MEMBER:
// 1. Find the member by name in the MEMBERS list below
// 2. Add the country number to their "stamps" array
//    Country numbers: 1=Thailand, 2=Japan, 3=Brazil, 4=UK,
//    5=France, 6=Italy, 7=Australia, 8=South Korea,
//    9=Mexico, 10=Egypt, 11=Canada, 12=India,
//    13=Germany, 14=Spain, 15=Kenya, 16=Argentina,
//    17=New Zealand, 18=Norway
// 3. Save, commit, and push — Vercel auto-deploys
//
// EXAMPLE: To mark someone as completing Japan & Brazil:
//   stamps: [1, 2]
//
// =============================================

// To release a country, change released to true and set the month.
// To add a stamp image, put the image in /stamps/ folder
// and set the "stamp" field to the filename, e.g. "japan.png"
const COUNTRIES = [
  { id: 1,  name: "Thailand",       month: "APR 2026", stamp: "thailand.svg", released: true },
  { id: 2,  name: "Japan",          month: "",          stamp: "",             released: false },
  { id: 3,  name: "Brazil",         month: "",          stamp: "",             released: false },
  { id: 4,  name: "United Kingdom", month: "",          stamp: "",             released: false },
  { id: 5,  name: "France",         month: "",          stamp: "",             released: false },
  { id: 6,  name: "Italy",          month: "",          stamp: "",             released: false },
  { id: 7,  name: "Australia",      month: "",          stamp: "",             released: false },
  { id: 8,  name: "South Korea",    month: "",          stamp: "",             released: false },
  { id: 9,  name: "Mexico",         month: "",          stamp: "",             released: false },
  { id: 10, name: "Egypt",          month: "",          stamp: "",             released: false },
  { id: 11, name: "Canada",         month: "",          stamp: "",             released: false },
  { id: 12, name: "India",          month: "",          stamp: "",             released: false },
  { id: 13, name: "Germany",        month: "",          stamp: "",             released: false },
  { id: 14, name: "Spain",          month: "",          stamp: "",             released: false },
  { id: 15, name: "Kenya",          month: "",          stamp: "",             released: false },
  { id: 16, name: "Argentina",      month: "",          stamp: "",             released: false },
  { id: 17, name: "New Zealand",    month: "",          stamp: "",             released: false },
  { id: 18, name: "Norway",         month: "",          stamp: "",             released: false },
];

const MEMBERS = [
  { name: "Ahmad Hafiz Bin Abdullah",    email: "hafiz@nagase.com.my",             stamps: [1] },
  { name: "Alicia Poon Zi Yet",          email: "alicia@nagase.com.my",            stamps: [1] },
  { name: "Angela Chong Suk Chien",      email: "angela@nagase.com.my",            stamps: [1] },
  { name: "Atsuki Katsunori",            email: "katsunori.atsuki@nagase.co.jp",   stamps: [] },
  { name: "Boey Cheah Jen Bao",          email: "boey@nagase.com.my",              stamps: [1] },
  { name: "Brandon Liang Chi Wai",       email: "brandon@nagase.com.my",           stamps: [1] },
  { name: "Catherine Ch'ng Phei Yeun",   email: "catherine@nagase.com.my",         stamps: [1] },
  { name: "Chai Pei Yee",               email: "peiyee@nagase.com.my",             stamps: [1] },
  { name: "Charles Chen Wei Lun",        email: "charles@nagase.com.my",           stamps: [] },
  { name: "Chiang Wen Ying",            email: "chiang@nagase.com.my",             stamps: [] },
  { name: "Chong Kim Lean",             email: "chong@nagase.com.my",              stamps: [] },
  { name: "Darren Teh Sze Wei",         email: "darren@nagase.com.my",             stamps: [] },
  { name: "Dawson Tan Mun Ting",        email: "dawson@nagase.com.my",             stamps: [1] },
  { name: "Ding Fan Shee",              email: "ding@nagase.com.my",               stamps: [1] },
  { name: "Ean Cheong Yee Yan",         email: "ean@nagase.com.my",               stamps: [1] },
  { name: "Erica Chiew Lai Wah",        email: "erica@nagase.com.my",             stamps: [1] },
  { name: "Eve Chai Pei Hua",           email: "eve@nagase.com.my",               stamps: [1] },
  { name: "Grace Tan Li Yin",           email: "grace@nagase.com.my",             stamps: [1] },
  { name: "Jadoli",                       email: "jackdolliey@gmail.com",           stamps: [1] },
  { name: "Janice How Jia Yeng",        email: "janice@nagase.com.my",            stamps: [1] },
  { name: "Jeston Lim Wei Jian",        email: "jeston@nagase.com.my",            stamps: [1] },
  { name: "Joey Yu Szu Hui",            email: "joey@nagase.com.my",              stamps: [1] },
  { name: "Johnny Kwee Jyh Tzuen",      email: "johnny@nagase.com.my",            stamps: [1] },
  { name: "Keith Chu Yu Huan",          email: "keith@nagase.com.my",             stamps: [1] },
  { name: "Kek Yin Teng",              email: "kek@nagase.com.my",                stamps: [1] },
  { name: "Kenny Yap Woon Hoi",         email: "kennyyap@nagase.com.my",          stamps: [1] },
  { name: "Kenth Leong Khan Shing",     email: "kenth@nagase.com.my",             stamps: [1] },
  { name: "Khoo Ee Leen",              email: "khoo@nagase.com.my",               stamps: [1] },
  { name: "Kon Suli",                  email: "suli@nagase.com.my",               stamps: [1] },
  { name: "Kow Yip Chang",             email: "kow@nagase.com.my",                stamps: [1] },
  { name: "Lai Mei Yun",               email: "meiyun@nagase.com.my",             stamps: [1] },
  { name: "Lam Shin Wei",              email: "lam@nagase.com.my",                stamps: [1] },
  { name: "Lee Wai Leng",              email: "waileng@nagase.com.my",            stamps: [] },
  { name: "Lim Chun Hoe",              email: "chunhoe@nagase.com.my",            stamps: [1] },
  { name: "Lim Khang Jing",            email: "jing@nagase.com.my",               stamps: [1] },
  { name: "Lo Kit Yan",                email: "kityan@nagase.com.my",             stamps: [1] },
  { name: "Loi Siew Thong",            email: "siewthong@nagase.com.my",          stamps: [1] },
  { name: "Maznah Binti Suffian",       email: "maznah@nagase.com.my",            stamps: [1] },
  { name: "Melvin Tan Kok Guan",        email: "melvin@nagase.com.my",            stamps: [] },
  { name: "Michelle Lee Yin Fun",       email: "michellelee@nagase.com.my",       stamps: [] },
  { name: "Michelle Yap Jing Yi",       email: "michelleyap@nagase.com.my",       stamps: [1] },
  { name: "Mohd Farrel Mohd Yousof",    email: "farrel@nagase.com.my",            stamps: [] },
  { name: "Morita Takehiro",            email: "takehiro.morita@nagase.co.jp",    stamps: [] },
  { name: "Nezam",                      email: "mohdnezamyahaya@gmail.com",        stamps: [1] },
  { name: "Phua Boon Guan",             email: "phua@nagase.com.my",              stamps: [1] },
  { name: "Shanice Loo Lay Swan",       email: "shanice@nagase.com.my",           stamps: [1] },
  { name: "Shibata Kenro",              email: "kenro.shibata@nagase.co.jp",      stamps: [] },
  { name: "Steven Low Ching Yong",      email: "stevenlow@nagase.com.my",         stamps: [1] },
  { name: "Sua Meng Fang",              email: "sua@nagase.com.my",               stamps: [1] },
  { name: "Suzanne Chin Yoke Sim",      email: "suzanne@nagase.com.my",           stamps: [1] },
  { name: "T-Jay Lee Teng Chun",        email: "lee@nagase.com.my",               stamps: [1] },
  { name: "Tan Wei Rou",               email: "weirou@nagase.com.my",             stamps: [1] },
  { name: "Yong Sui Wei",              email: "yongsw@nagase.com.my",             stamps: [1] },
  { name: "Yukee Yoo Ying Ying",        email: "yukee@nagase.com.my",             stamps: [] },
  { name: "Zambri",                     email: "zambrimustapa77@gmail.com",        stamps: [1] },
];
