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
//    Country numbers: 1=Thailand, 2=Netherlands, 3=Egypt, 4=Brazil,
//    5=UK, 6=France, 7=Italy, 8=Australia, 9=South Korea,
//    10=Mexico, 11=Japan, 12=Canada, 13=India,
//    14=Germany, 15=Spain, 16=Kenya, 17=Argentina,
//    18=New Zealand, 19=Norway
// 3. Save, commit, and push — Vercel auto-deploys
//
// EXAMPLE: To mark someone as completing Netherlands & Egypt:
//   stamps: [2, 3]
//
// =============================================

// To release a country, change released to true and set the month.
// To add a stamp image, put the image in /stamps/ folder
// and set the "stamp" field to the filename, e.g. "japan.png"
const COUNTRIES = [
  { id: 1,  name: "Thailand",       month: "APR 2026", stamp: "thailand.svg", released: true },
  { id: 2,  name: "Netherlands",     month: "MAY 2026",  stamp: "netherlands.svg", released: true  },
  { id: 3,  name: "Egypt",          month: "MAY 2026",  stamp: "egypt.svg",       released: true,  music: "music/egypt.mp3" },
  { id: 4,  name: "Brazil",         month: "JUN 2026",  stamp: "brazil.svg",   released: true  },
  { id: 5,  name: "United Kingdom", month: "",          stamp: "",             released: false },
  { id: 6,  name: "France",         month: "",          stamp: "",             released: false },
  { id: 7,  name: "Italy",          month: "",          stamp: "",             released: false },
  { id: 8,  name: "Australia",      month: "",          stamp: "",             released: false },
  { id: 9,  name: "South Korea",    month: "",          stamp: "",             released: false },
  { id: 10, name: "Mexico",         month: "",          stamp: "",             released: false },
  { id: 11, name: "Japan",          month: "",           stamp: "",             released: false },
  { id: 12, name: "Canada",         month: "",          stamp: "",             released: false },
  { id: 13, name: "India",          month: "",          stamp: "",             released: false },
  { id: 14, name: "Germany",        month: "",          stamp: "",             released: false },
  { id: 15, name: "Spain",          month: "",          stamp: "",             released: false },
  { id: 16, name: "Kenya",          month: "",          stamp: "",             released: false },
  { id: 17, name: "Argentina",      month: "",          stamp: "",             released: false },
  { id: 18, name: "New Zealand",    month: "",          stamp: "",             released: false },
  { id: 19, name: "Norway",         month: "",          stamp: "",             released: false },
];

const MEMBERS = [
  { name: "Ahmad Hafiz Bin Abdullah",    email: "hafiz@nagase.com.my",             stamps: [1, 2, 3, 4] },
  { name: "Alicia Poon Zi Yet",          email: "alicia@nagase.com.my",            stamps: [1, 2, 3, 4] },
  { name: "Angela Chong Suk Chien",      email: "angela@nagase.com.my",            stamps: [1, 2, 3, 4] },
  { name: "Atsuki Katsunori",            email: "katsunori.atsuki@nagase.co.jp",   stamps: [2] },
  { name: "Boey Cheah Jen Bao",          email: "boey@nagase.com.my",              stamps: [1, 2, 3, 4] },
  { name: "Brandon Liang Chi Wai",       email: "brandon@nagase.com.my",           stamps: [1, 2, 3, 4] },
  { name: "Catherine Ch'ng Phei Yeun",   email: "catherine@nagase.com.my",         stamps: [1, 2, 3, 4] },
  { name: "Chai Pei Yee",               email: "peiyee@nagase.com.my",             stamps: [1, 2, 3, 4] },
  { name: "Charles Chen Wei Lun",        email: "charles@nagase.com.my",           stamps: [] },
  { name: "Chiang Wen Ying",            email: "chiang@nagase.com.my",             stamps: [3, 4] },
  { name: "Chong Kim Lean",             email: "chong@nagase.com.my",              stamps: [2, 3, 4] },
  { name: "Darren Teh Sze Wei",         email: "darren@nagase.com.my",             stamps: [2, 3] },
  { name: "Dawson Tan Mun Ting",        email: "dawson@nagase.com.my",             stamps: [1, 2, 3, 4] },
  { name: "Ding Fan Shee",              email: "ding@nagase.com.my",               stamps: [1, 2] },
  { name: "Ean Cheong Yee Yan",         email: "ean@nagase.com.my",               stamps: [1, 2, 3, 4] },
  { name: "Erica Chiew Lai Wah",        email: "erica@nagase.com.my",             stamps: [1, 2, 3, 4] },
  { name: "Eve Chai Pei Hua",           email: "eve@nagase.com.my",               stamps: [1, 2, 3, 4] },
  { name: "Grace Tan Li Yin",           email: "grace@nagase.com.my",             stamps: [1, 2, 3, 4] },
  { name: "Jadoli",                       email: "jackdolliey@gmail.com",           stamps: [1, 3] },
  { name: "Janice How Jia Yeng",        email: "janice@nagase.com.my",            stamps: [1, 2, 3] },
  { name: "Jeston Lim Wei Jian",        email: "jeston@nagase.com.my",            stamps: [1, 3] },
  { name: "Joey Yu Szu Hui",            email: "joey@nagase.com.my",              stamps: [1] },
  { name: "Johnny Kwee Jyh Tzuen",      email: "johnny@nagase.com.my",            stamps: [1, 2, 3, 4] },
  { name: "Keith Chu Yu Huan",          email: "keith@nagase.com.my",             stamps: [1, 2, 3, 4] },
  { name: "Kek Yin Teng",              email: "kek@nagase.com.my",                stamps: [1, 2, 4] },
  { name: "Kenny Yap Woon Hoi",         email: "kennyyap@nagase.com.my",          stamps: [1, 2, 4] },
  { name: "Kenth Leong Khan Shing",     email: "kenth@nagase.com.my",             stamps: [1, 2, 3, 4] },
  { name: "Khoo Ee Leen",              email: "khoo@nagase.com.my",               stamps: [1, 2, 3, 4] },
  { name: "Kon Suli",                  email: "suli@nagase.com.my",               stamps: [1, 2, 3, 4] },
  { name: "Kow Yip Chang",             email: "kow@nagase.com.my",                stamps: [1, 2, 4] },
  { name: "Lai Mei Yun",               email: "meiyun@nagase.com.my",             stamps: [1, 3] },
  { name: "Lam Shin Wei",              email: "lam@nagase.com.my",                stamps: [1, 2, 3, 4] },
  { name: "Lee Wai Leng",              email: "waileng@nagase.com.my",            stamps: [3] },
  { name: "Lim Chun Hoe",              email: "chunhoe@nagase.com.my",            stamps: [1, 2, 3, 4] },
  { name: "Lim Khang Jing",            email: "jing@nagase.com.my",               stamps: [1, 2, 4] },
  { name: "Lo Kit Yan",                email: "kityan@nagase.com.my",             stamps: [1, 2, 3, 4] },
  { name: "Loi Siew Thong",            email: "siewthong@nagase.com.my",          stamps: [1, 2, 3, 4] },
  { name: "Maznah Binti Suffian",       email: "maznah@nagase.com.my",            stamps: [1, 2, 3, 4] },
  { name: "Melvin Tan Kok Guan",        email: "melvin@nagase.com.my",            stamps: [] },
  { name: "Michelle Lee Yin Fun",       email: "michellelee@nagase.com.my",       stamps: [] },
  { name: "Michelle Yap Jing Yi",       email: "michelleyap@nagase.com.my",       stamps: [1, 2, 3, 4] },
  { name: "Mohd Farrel Mohd Yousof",    email: "farrel@nagase.com.my",            stamps: [2, 3] },
  { name: "Morita Takehiro",            email: "takehiro.morita@nagase.co.jp",    stamps: [] },
  { name: "Nezam",                      email: "mohdnezamyahaya@gmail.com",        stamps: [1, 2, 4] },
  { name: "Phua Boon Guan",             email: "phua@nagase.com.my",              stamps: [1, 2, 3, 4] },
  { name: "Shanice Loo Lay Swan",       email: "shanice@nagase.com.my",           stamps: [1, 2, 4] },
  { name: "Shibata Kenro",              email: "kenro.shibata@nagase.co.jp",      stamps: [3] },
  { name: "Steven Low Ching Yong",      email: "stevenlow@nagase.com.my",         stamps: [1, 2, 3, 4] },
  { name: "Sua Meng Fang",              email: "sua@nagase.com.my",               stamps: [1, 2, 3] },
  { name: "Suzanne Chin Yoke Sim",      email: "suzanne@nagase.com.my",           stamps: [1, 2, 3, 4] },
  { name: "T-Jay Lee Teng Chun",        email: "lee@nagase.com.my",               stamps: [1, 2, 3, 4] },
  { name: "Tan Wei Rou",               email: "weirou@nagase.com.my",             stamps: [1, 2, 4] },
  { name: "Yong Sui Wei",              email: "yongsw@nagase.com.my",             stamps: [1, 4] },
  { name: "Yukee Yoo Ying Ying",        email: "yukee@nagase.com.my",             stamps: [] },
  { name: "Zambri",                     email: "zambrimustapa77@gmail.com",        stamps: [1, 2, 4] },
];

// =============================================
// PHOTOS
// =============================================
// To add photos for a country, add an entry keyed by country ID.
// List photo paths relative to the site root.
// =============================================
const PHOTOS = {
  3: [ // Egypt — MAY 2026
    "photos/may-egypt/IMG_6731.webp",
    "photos/may-egypt/IMG_6732.webp",
    "photos/may-egypt/IMG_6733.webp",
    "photos/may-egypt/IMG_6737.webp",
    "photos/may-egypt/IMG_6738.webp",
    "photos/may-egypt/IMG_6739.webp",
    "photos/may-egypt/IMG_6740.webp",
    "photos/may-egypt/IMG_6741.webp",
    "photos/may-egypt/IMG_6743.webp",
    "photos/may-egypt/IMG_6746.webp",
    "photos/may-egypt/IMG_6747.webp",
    "photos/may-egypt/IMG_6750.webp",
    "photos/may-egypt/IMG_6751.webp",
    "photos/may-egypt/IMG_6752.webp",
    "photos/may-egypt/IMG_6753.webp",
    "photos/may-egypt/277effbc-5061-431b-bfe2-bf15e7236b8c.webp",
    "photos/may-egypt/5be63b23-83c0-4ab9-8a2b-9d0f6eda2f88.webp",
    "photos/may-egypt/665ef7ea-90d2-4d5b-9563-b8c7fb3b4aed.webp",
    "photos/may-egypt/8acf9dae-f654-4c8c-92a0-9b2ba2543384.webp",
    "photos/may-egypt/b1f48e80-3fb9-48fd-85b5-2b58748a080c.webp",
    "photos/may-egypt/c2ee7c52-daf2-467f-8289-e96d9b949c92.webp",
  ],
};
