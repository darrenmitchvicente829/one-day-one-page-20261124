// The day's stories: everything the page says comes from this file.
// Rule for inclusion: the event happened, or was first reported, on Tuesday 24 November 2026, by UTC or by the
// local date where it happened. SOURCES.md lists the reports behind each item and what was left out and why.
// This is the full-day edition: every item is given as it stood when the page closed at 22:30 UTC.
//
// kind: 'lead' (three large cards), 'small' (ten cards), 'list' (the "also" column).
// tag:  CONFIRMED, OFFICIAL, REPORTED or CLAIM (see the legend on the page).
window.DAY = {
  date: 'Tuesday 24 November 2026',
  short: 'TUE 24 NOV 2026',
  weekday: 'Tuesday',
  dayMonth: '24 November',
  kicker: 'ONE DAY OF WORLD NEWS ON ONE PAGE · FULL-DAY EDITION',
  deck: [
    "Iran's Guards say mines set three tankers ablaze",
    "Asia's markets roar back",
    '96 drones over Ukraine in a night',
  ],

  regions: [
    { key: 'eu', name: 'EUROPE', color: '#2563a8' },
    { key: 'me', name: 'MIDDLE EAST', color: '#c0392b' },
    { key: 'af', name: 'AFRICA', color: '#2e8b57' },
    { key: 'ea', name: 'EAST ASIA', color: '#7d3c98' },
    { key: 'sa', name: 'SOUTH ASIA', color: '#b9770e' },
    { key: 'se', name: 'SE ASIA', color: '#138d75' },
    { key: 'oc', name: 'OCEANIA', color: '#0e8aa0' },
    { key: 'na', name: 'N. AMERICA', color: '#9c5a2b' },
    { key: 'la', name: 'LATIN AMERICA', color: '#5d7a1f' },
    { key: 'world', name: 'WORLD', color: '#566573' },
  ],

  // Times in UTC, from the first market opening of the day to the last close.
  timeline: [
    { t: '00:00', text: 'Seoul opens +3.6%' },
    { t: '01:32', text: 'Nepal quake' },
    { t: '05:30', text: 'Taipei closes +9%' },
    { t: '06:00', text: 'Kyiv counts 96 drones' },
    { t: '14:53', text: 'Full moon' },
    { t: '20:00', text: 'Champions League' },
    { t: '21:00', text: 'Wall St closes' },
  ],

  numbers: [
    { n: '3', label: 'tankers ablaze, Iran claims' },
    { n: '+9%', label: 'Taiwan’s Taiex at the close' },
    { n: '96', label: 'drones at Ukraine overnight' },
    { n: '1–0', label: 'Senegal’s final win restored' },
    { n: '204', label: 'runs off 53 balls, aged 15' },
    { n: '$41bn', label: 'Sanofi’s cash bid for Insmed' },
  ],

  stories: [
    {
      id: 1, kind: 'lead', region: 'me', field: 'SHIPPING', place: 'STRAIT OF HORMUZ', tag: 'CLAIM', art: 'hormuz',
      head: 'Iran says mines set three tankers ablaze; oil up 2%',
      body: 'UK monitors say three ships were hit by “unidentified projectiles” but sailed on, crews safe. The Guards later said a container ship was targeted. Brent settled at $91.40.',
      src: 'UKMTO · Al Jazeera · CNBC · Reuters', lon: 56.4, lat: 26.6,
    },
    {
      id: 2, kind: 'lead', region: 'ea', field: 'MARKETS', place: 'TAIPEI · SEOUL · TOKYO', tag: 'CONFIRMED', art: 'markets',
      head: 'Asia’s markets roar back; Wall Street cools',
      body: 'Taiex +9%, Kospi +6% to retake 5,000, Nikkei +3.9% after Jensen Huang’s return to Nvidia. Later in New York the Nasdaq fell 1.5% and Nvidia 6%; the Dow rose 0.9%.',
      src: 'AP · CNA · Nikkei Asia · CNBC', lon: 120.2, lat: 23.6,
    },
    {
      id: 3, kind: 'lead', region: 'eu', field: 'WAR', place: 'ZAPORIZHZHIA, UKRAINE', tag: 'OFFICIAL', art: 'ukraine',
      head: 'Russia fires 96 drones; Zaporizhzhia flats hit',
      body: 'Kyiv says 73 were downed by 08:00. A late-Monday strike tore open a five-storey block: two dead, over 40 hurt. Putin called retaliation for refinery raids “inevitable”.',
      src: 'Ukrainian Air Force · Kyiv Independent · Al Jazeera', lon: 36.6, lat: 48.9,
    },

    {
      id: 4, kind: 'small', region: 'af', field: 'SPORT', place: 'DAKAR · LAUSANNE', tag: 'CONFIRMED', art: 'senegal',
      head: 'Court hands Senegal back Africa’s crown',
      body: 'CAS unanimously restores the 1–0 final win stripped in March; Morocco vows to fight on.',
      src: 'AFP · CAS', lon: -17.4, lat: 14.7,
    },
    {
      id: 5, kind: 'small', region: 'na', field: 'LAW', place: 'NEW YORK', tag: 'CONFIRMED', art: 'huawei',
      head: 'Huawei convicted in US secrets trial',
      body: 'Guilty on 10 of 12 counts, including bank fraud; cleared of racketeering. It will appeal.',
      src: 'Reuters', lon: -74.0, lat: 40.7,
    },
    {
      id: 6, kind: 'small', region: 'me', field: 'WAR', place: 'GAZA CITY', tag: 'CONFIRMED', art: 'gaza',
      head: 'Israel kills Hamas’s security chief',
      body: 'Naim Abu Nahal dies in a Gaza City strike; medics count seven dead across Gaza.',
      src: 'Reuters · JPost', lon: 34.4, lat: 31.5,
    },
    {
      id: 7, kind: 'small', region: 'eu', field: 'DIPLOMACY', place: 'UZHHOROD, UKRAINE', tag: 'OFFICIAL', art: 'uzhhorod',
      head: 'Hungary’s Magyar meets Zelensky',
      body: 'On his first official visit, the two reach “concrete agreements” on gas, diesel and rail.',
      src: 'Ukrinform', lon: 20.4, lat: 48.6,
    },
    {
      id: 8, kind: 'small', region: 'ea', field: 'SECURITY', place: 'ULLEUNG, S. KOREA', tag: 'OFFICIAL', art: 'ulleung',
      head: 'Russian jets trip Korean air-raid alert',
      body: 'F-15Ks scramble; the 07:52 alert is lifted at 07:57. No airspace breach, Seoul says.',
      src: 'Korea Times · AP', lon: 130.9, lat: 37.5,
    },
    {
      id: 9, kind: 'small', region: 'ea', field: 'SPACE', place: 'JIUQUAN, CHINA', tag: 'OFFICIAL', art: 'jiuquan',
      head: 'Pakistan’s first astronaut named',
      body: 'China names Zeeshan Ali to the Shenzhou-24 crew, the first foreigner bound for Tiangong.',
      src: 'CMSA · Dawn', lon: 100.3, lat: 40.9,
    },
    {
      id: 10, kind: 'small', region: 'oc', field: 'TECHNOLOGY', place: 'CANBERRA', tag: 'CONFIRMED', art: 'canberra',
      head: 'Australia deal: tech fines up to 5%',
      body: 'Labor–Greens deal on a “digital duty of care” ties fines to global revenue; users may sue.',
      src: 'ABC · RNZ', lon: 149.1, lat: -35.3,
    },
    {
      id: 11, kind: 'small', region: 'la', field: 'SECURITY', place: 'VILLAVICENCIO, COLOMBIA', tag: 'OFFICIAL', art: 'villavicencio',
      head: 'Colombia blames rebels for car bomb',
      body: 'Monday night’s blast at Meta’s state HQ hurt at least 23, as the FARC peace deal turned 10.',
      src: 'Al Jazeera', lon: -73.6, lat: 4.1,
    },
    {
      id: 12, kind: 'small', region: 'se', field: 'TRADE', place: 'SINGAPORE', tag: 'OFFICIAL', art: 'singapore',
      head: 'Singapore: no backdoor for US chips',
      body: 'Wong vows to uphold export rules after the US blacklists Megaspeed and six other firms.',
      src: 'Financial Times', lon: 103.8, lat: 1.35,
    },
    {
      id: 13, kind: 'small', region: 'sa', field: 'DISASTER', place: 'TAPLEJUNG, NEPAL', tag: 'CONFIRMED', art: 'nepal',
      head: 'Magnitude-5.6 quake jolts eastern Nepal',
      body: 'Hit near the Tibet border at 07:17; felt in India, Bhutan and Bangladesh. No deaths reported.',
      src: 'Kathmandu Post', lon: 87.8, lat: 27.6,
    },

    { id: 14, kind: 'list', region: 'eu', field: 'SPORT', place: 'Madrid', head: 'Real Madrid 5–1 PSV, Mbappé 2', detail: 'Arsenal 1–1 Dortmund', src: 'RTBF · Goal', lon: -3.7, lat: 40.4 },
    { id: 15, kind: 'list', region: 'eu', field: 'SPORT', place: 'Geneva', head: 'Gukesh, Sindarov draw Game 1', detail: 'chess world title', src: 'ChessBase', lon: 6.1, lat: 46.2 },
    { id: 16, kind: 'list', region: 'eu', field: 'RIGHTS', place: 'Strasbourg', head: 'pushbacks ruled inhuman', detail: 'Poland and Latvia', src: 'Euronews', lon: 7.75, lat: 48.6 },
    { id: 17, kind: 'list', region: 'eu', field: 'BUSINESS', place: 'Paris', head: 'Sanofi buys Insmed for $41bn', detail: 'all cash, $175 a share', src: 'AFP', lon: 2.35, lat: 48.85 },
    { id: 18, kind: 'list', region: 'eu', field: 'RELIGION', place: 'Vatican', head: 'Francis’s diary published', detail: 'tells of seeing the devil', src: 'AFP', lon: 12.45, lat: 41.9 },
    { id: 19, kind: 'list', region: 'me', field: 'WAR', place: 'Riyadh', head: 'drone hits finance tower', detail: '11 hurt; Houthis blamed', src: 'Al Jazeera', lon: 46.7, lat: 24.7 },
    { id: 20, kind: 'list', region: 'me', field: 'ENERGY', place: 'Baghdad', head: 'PM orders oilfield takeover', detail: 'in Kurdish-held areas', src: 'Al Jazeera', lon: 44.4, lat: 33.3 },
    { id: 21, kind: 'list', region: 'af', field: 'WEATHER', place: 'Johannesburg', head: 'flood warning raised', detail: 'Gauteng storms', src: 'SAWS · EWN', lon: 28.0, lat: -26.2 },
    { id: 22, kind: 'list', region: 'af', field: 'ECONOMY', place: 'Abuja', head: 'Tinubu cuts budget by ₦3.2trn', detail: '2026 plan cut', src: 'Premium Times', lon: 7.5, lat: 9.1 },
    { id: 23, kind: 'list', region: 'ea', field: 'POLITICS', place: 'Shanghai', head: 'party chief put under probe', detail: 'Chen Jining, Politburo', src: 'Xinhua', lon: 121.5, lat: 31.2 },
    { id: 24, kind: 'list', region: 'sa', field: 'POLITICS', place: 'Dhaka', head: 'Hasina sets 16 Dec for return', detail: 'minister: “in handcuffs”', src: 'Reuters', lon: 90.4, lat: 23.8 },
    { id: 25, kind: 'list', region: 'sa', field: 'SPORT', place: 'Doha', head: 'Indian, 15, hits 204 off 53 balls', detail: 'V. Sooryavanshi, India A', src: 'Cricinfo', lon: 51.5, lat: 25.3 },
    { id: 26, kind: 'list', region: 'se', field: 'MIGRATION', place: 'Malaysia', head: 'to send 6,803 back to Myanmar', detail: 'PM Anwar', src: 'Morning Star', lon: 101.7, lat: 3.1 },
    { id: 27, kind: 'list', region: 'oc', field: 'DIPLOMACY', place: 'Honiara', head: 'Solomons to drop China pact', detail: 'A$980m Australia treaty', src: 'ABC', lon: 160.0, lat: -9.4 },
    { id: 28, kind: 'list', region: 'oc', field: 'ENVIRONMENT', place: 'Pago Pago', head: 'US leases seabed to miner', detail: '31.5m acres, $6m', src: 'RNZ', lon: -170.7, lat: -14.3 },
    { id: 29, kind: 'list', region: 'na', field: 'SPORT', place: 'Landover', head: 'Commanders 22–20 Bengals', detail: 'last-second field goal', src: 'NFL', lon: -80.5, lat: 35.0 },
    { id: 30, kind: 'list', region: 'na', field: 'CULTURE', place: 'New York', head: '‘Carême’ wins Intl Emmy', detail: 'best drama; France', src: 'Deadline', lon: -70.5, lat: 44.5 },
    { id: 31, kind: 'list', region: 'la', field: 'CRIME', place: 'Cartagena', head: 'gunmen hold 30 in store', detail: 'botched heist; 10 freed', src: 'El Tiempo', lon: -75.5, lat: 10.4 },
    { id: 32, kind: 'list', region: 'la', field: 'ECONOMY', place: 'Brasília', head: 'fiscal package goes to Lula', detail: 'passed 353–128', src: 'Rio Times', lon: -47.9, lat: -15.8 },
    { id: 33, kind: 'list', region: 'world', field: 'SCIENCE', place: 'Worldwide', head: 'supermoon, full at 14:53 UTC', detail: 'first of three in a row', src: 'USNO' },
    { id: 34, kind: 'list', region: 'world', field: 'RIGHTS', place: 'UN', head: 'partners, kin kill 129 women a day', detail: '47,000 in 2025', src: 'UNODC · UN Women' },
  ],

  // The date check box at the foot of the page.
  check: {
    rule: 'Every story here happened, or was first reported, on Tuesday 24 November 2026 (UTC or local date). Full-day edition, closed at 22:30 UTC.',
    notes: [
      { lead: 'Left out as Monday’s news', text: 'Nvidia reinstates Jensen Huang · the Zamfara road crash that killed 15 · Russia’s “open war” warning to Estonia · Trump’s death-penalty directive.' },
      { lead: 'Earlier still', text: 'COP31 ends with no deal (Sun 22) · Ukraine sinks a Russian corvette in Libya (Sun 22) · Indonesia’s factory fire (Sat 21).' },
      { lead: 'Ran overnight into Tuesday', text: 'the Hormuz statement, the Zaporizhzhia strike and the Colombia blast came late Monday; the NFL game and the Emmys ended Monday night in the Americas, which is Tuesday UTC.' },
      { lead: 'Pictures and map', text: 'drawn for this page; no photographs.' },
    ],
  },

  legend: [
    { tag: 'CONFIRMED', text: 'two or more outlets, or a final result' },
    { tag: 'OFFICIAL', text: 'on record from an authority' },
    { tag: 'REPORTED', text: 'carried by the outlets named' },
    { tag: 'CLAIM', text: 'one side’s account, unverified' },
  ],
};
