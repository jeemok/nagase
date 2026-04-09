// =============================================
// NAGASE KL GLOBAL PASSPORT — DATA FILE
// =============================================
//
// HOW TO UPDATE STAMPS:
// 1. Find the member by name in the MEMBERS list below
// 2. Add the country number to their "stamps" array
//    Country numbers: 1=Japan, 2=Brazil, 3=UK, 4=France,
//    5=Italy, 6=Australia, 7=South Korea, 8=Mexico,
//    9=Egypt, 10=Canada, 11=India, 12=Germany,
//    13=Spain, 14=Thailand, 15=Kenya, 16=Argentina,
//    17=New Zealand, 18=Norway
// 3. Save, commit, and push — Vercel auto-deploys
//
// EXAMPLE: To mark someone as completing Japan & Brazil:
//   stamps: [1, 2]
//
// =============================================

const COUNTRIES = [
  { id: 1,  name: "Japan",          month: "May 2025",  activity: "Badminton",     flag: "🇯🇵" },
  { id: 2,  name: "Brazil",         month: "Jun 2025",  activity: "Football",      flag: "🇧🇷" },
  { id: 3,  name: "United Kingdom", month: "Jul 2025",  activity: "Cricket",       flag: "🇬🇧" },
  { id: 4,  name: "France",         month: "Aug 2025",  activity: "Cycling",       flag: "🇫🇷" },
  { id: 5,  name: "Italy",          month: "Sep 2025",  activity: "Volleyball",    flag: "🇮🇹" },
  { id: 6,  name: "Australia",      month: "Oct 2025",  activity: "Swimming",      flag: "🇦🇺" },
  { id: 7,  name: "South Korea",    month: "Nov 2025",  activity: "Taekwondo",     flag: "🇰🇷" },
  { id: 8,  name: "Mexico",         month: "Dec 2025",  activity: "Boxing",        flag: "🇲🇽" },
  { id: 9,  name: "Egypt",          month: "Jan 2026",  activity: "Rowing",        flag: "🇪🇬" },
  { id: 10, name: "Canada",         month: "Feb 2026",  activity: "Ice Hockey",    flag: "🇨🇦" },
  { id: 11, name: "India",          month: "Mar 2026",  activity: "Kabaddi",       flag: "🇮🇳" },
  { id: 12, name: "Germany",        month: "Apr 2026",  activity: "Track & Field", flag: "🇩🇪" },
  { id: 13, name: "Spain",          month: "May 2026",  activity: "Tennis",        flag: "🇪🇸" },
  { id: 14, name: "Thailand",       month: "Jun 2026",  activity: "Muay Thai",     flag: "🇹🇭" },
  { id: 15, name: "Kenya",          month: "Jul 2026",  activity: "Marathon",      flag: "🇰🇪" },
  { id: 16, name: "Argentina",      month: "Aug 2026",  activity: "Polo",          flag: "🇦🇷" },
  { id: 17, name: "New Zealand",    month: "Sep 2026",  activity: "Rugby",         flag: "🇳🇿" },
  { id: 18, name: "Norway",         month: "Oct 2026",  activity: "Skiing",        flag: "🇳🇴" },
];

const MEMBERS = [
  { name: "Ahmad Hafiz Bin Abdullah",    email: "hafiz@nagase.com.my",             stamps: [] },
  { name: "Alicia Poon Zi Yet",          email: "alicia@nagase.com.my",            stamps: [] },
  { name: "Angela Chong Suk Chien",      email: "angela@nagase.com.my",            stamps: [] },
  { name: "Atsuki Katsunori",            email: "katsunori.atsuki@nagase.co.jp",   stamps: [] },
  { name: "Boey Cheah Jen Bao",          email: "boey@nagase.com.my",              stamps: [] },
  { name: "Brandon Liang Chi Wai",       email: "brandon@nagase.com.my",           stamps: [] },
  { name: "Catherine Ch'ng Phei Yeun",   email: "catherine@nagase.com.my",         stamps: [] },
  { name: "Chai Pei Yee",               email: "peiyee@nagase.com.my",             stamps: [] },
  { name: "Charles Chen Wei Lun",        email: "charles@nagase.com.my",           stamps: [] },
  { name: "Chiang Wen Ying",            email: "chiang@nagase.com.my",             stamps: [] },
  { name: "Chong Kim Lean",             email: "chong@nagase.com.my",              stamps: [] },
  { name: "Darren Teh Sze Wei",         email: "darren@nagase.com.my",             stamps: [] },
  { name: "Dawson Tan Mun Ting",        email: "dawson@nagase.com.my",             stamps: [] },
  { name: "Ding Fan Shee",              email: "ding@nagase.com.my",               stamps: [] },
  { name: "Ean Cheong Yee Yan",         email: "ean@nagase.com.my",               stamps: [] },
  { name: "Erica Chiew Lai Wah",        email: "erica@nagase.com.my",             stamps: [] },
  { name: "Eve Chai Pei Hua",           email: "eve@nagase.com.my",               stamps: [] },
  { name: "Grace Tan Li Yin",           email: "grace@nagase.com.my",             stamps: [] },
  { name: "Janice How Jia Yeng",        email: "janice@nagase.com.my",            stamps: [] },
  { name: "Jeston Lim Wei Jian",        email: "jeston@nagase.com.my",            stamps: [] },
  { name: "Joey Yu Szu Hui",            email: "joey@nagase.com.my",              stamps: [] },
  { name: "Johnny Kwee Jyh Tzuen",      email: "johnny@nagase.com.my",            stamps: [] },
  { name: "Keith Chu Yu Huan",          email: "keith@nagase.com.my",             stamps: [] },
  { name: "Kek Yin Teng",              email: "kek@nagase.com.my",                stamps: [] },
  { name: "Kenny Yap Woon Hoi",         email: "kennyyap@nagase.com.my",          stamps: [] },
  { name: "Kenth Leong Khan Shing",     email: "kenth@nagase.com.my",             stamps: [] },
  { name: "Khoo Ee Leen",              email: "khoo@nagase.com.my",               stamps: [] },
  { name: "Kon Suli",                  email: "suli@nagase.com.my",               stamps: [] },
  { name: "Kow Yip Chang",             email: "kow@nagase.com.my",                stamps: [] },
  { name: "Lai Mei Yun",               email: "meiyun@nagase.com.my",             stamps: [] },
  { name: "Lam Shin Wei",              email: "lam@nagase.com.my",                stamps: [] },
  { name: "Lee Wai Leng",              email: "waileng@nagase.com.my",            stamps: [] },
  { name: "Lim Chun Hoe",              email: "chunhoe@nagase.com.my",            stamps: [] },
  { name: "Lim Khang Jing",            email: "jing@nagase.com.my",               stamps: [] },
  { name: "Lo Kit Yan",                email: "kityan@nagase.com.my",             stamps: [] },
  { name: "Loi Siew Thong",            email: "siewthong@nagase.com.my",          stamps: [] },
  { name: "Maznah Binti Suffian",       email: "maznah@nagase.com.my",            stamps: [] },
  { name: "Melvin Tan Kok Guan",        email: "melvin@nagase.com.my",            stamps: [] },
  { name: "Michelle Lee Yin Fun",       email: "michellelee@nagase.com.my",       stamps: [] },
  { name: "Michelle Yap Jing Yi",       email: "michelleyap@nagase.com.my",       stamps: [] },
  { name: "Mohd Farrel Mohd Yousof",    email: "farrel@nagase.com.my",            stamps: [] },
  { name: "Morita Takehiro",            email: "takehiro.morita@nagase.co.jp",    stamps: [] },
  { name: "Phua Boon Guan",             email: "phua@nagase.com.my",              stamps: [] },
  { name: "Shanice Loo Lay Swan",       email: "shanice@nagase.com.my",           stamps: [] },
  { name: "Shibata Kenro",              email: "kenro.shibata@nagase.co.jp",      stamps: [] },
  { name: "Steven Low Ching Yong",      email: "stevenlow@nagase.com.my",         stamps: [] },
  { name: "Sua Meng Fang",              email: "sua@nagase.com.my",               stamps: [] },
  { name: "Suzanne Chin Yoke Sim",      email: "suzanne@nagase.com.my",           stamps: [] },
  { name: "T-Jay Lee Teng Chun",        email: "lee@nagase.com.my",               stamps: [] },
  { name: "Tan Wei Rou",               email: "weirou@nagase.com.my",             stamps: [] },
  { name: "Yong Sui Wei",              email: "yongsw@nagase.com.my",             stamps: [] },
  { name: "Yukee Yoo Ying Ying",        email: "yukee@nagase.com.my",             stamps: [] },
];
