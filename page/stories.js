// The day's stories: everything the page says comes from this file.
// Rule for inclusion: the event happened, or was first reported, on Tuesday 24 November 2026, by UTC or by the
// local date where it happened. SOURCES.md lists the reports behind each item and what was left out and why.
//
// kind: 'lead' (three large cards), 'small' (ten cards), 'list' (the "also" column).
// tag:  CONFIRMED, OFFICIAL, REPORTED or CLAIM (see the legend on the page). due: still to happen at press time.
window.DAY = {
  date: 'Tuesday 24 November 2026',
  short: 'TUE 24 NOV 2026',
  weekday: 'Tuesday',
  dayMonth: '24 November',
  press: '07:30 UTC',
  kicker: 'ONE DAY OF WORLD NEWS ON ONE PAGE',
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

  // Times in UTC. later: scheduled for after press time.
  timeline: [
    { t: '00:00', text: 'Seoul opens +3.6%' },
    { t: '01:32', text: 'Nepal quake' },
    { t: '03:35', text: 'Canberra tech deal' },
    { t: '05:30', text: 'Taipei closes +9%' },
    { t: '06:00', text: 'Kyiv counts 96 drones' },
    { t: '14:53', text: 'Full moon', later: true },
    { t: '20:00', text: 'Champions League', later: true },
  ],

  numbers: [
    { n: '3', label: 'tankers ablaze, Iran claims' },
    { n: '+9%', label: 'Taiwan’s Taiex at the close' },
    { n: '96', label: 'drones at Ukraine overnight' },
    { n: '5.6', label: 'magnitude, east Nepal quake' },
    { n: '5%', label: 'max tech fine in Australia' },
    { n: '1,283', label: 'asylum seekers moved by EU' },
  ],

  stories: [
    {
      id: 1, kind: 'lead', region: 'me', field: 'SHIPPING', place: 'STRAIT OF HORMUZ', tag: 'CLAIM', art: 'hormuz',
      head: 'Iran says mines set three tankers ablaze in Hormuz',
      body: 'The IRGC Navy’s late-Monday statement was still unverified on Tuesday. Two ships had US air escort, it says. Qatar’s PM: the region “cannot withstand another escalation”.',
      src: 'Al Jazeera · Anadolu · Iran International', lon: 56.4, lat: 26.6,
    },
    {
      id: 2, kind: 'lead', region: 'ea', field: 'MARKETS', place: 'TAIPEI · SEOUL · TOKYO', tag: 'CONFIRMED', art: 'markets',
      head: 'Asian markets roar back as Nvidia founder returns',
      body: 'Taiwan’s Taiex closes up 9% after last week’s AI rout; Seoul’s Kospi gains 7% to retake 5,000; Tokyo’s Nikkei adds 4%. Jensen Huang returned to Nvidia on Monday.',
      src: 'AP · CNA · Nikkei Asia · ABC', lon: 120.2, lat: 23.6,
    },
    {
      id: 3, kind: 'lead', region: 'eu', field: 'WAR', place: 'ZAPORIZHZHIA, UKRAINE', tag: 'OFFICIAL', art: 'ukraine',
      head: 'Russia fires 96 drones; Zaporizhzhia flats hit',
      body: 'Ukraine’s air force says 73 were downed or jammed by 08:00; 13 sites were hit. A late-Monday strike tore open a five-storey block: two dead, at least 30 hurt.',
      src: 'Ukrainian Air Force · Ukrinform · Kyiv Independent', lon: 35.1, lat: 48.9,
    },

    {
      id: 4, kind: 'small', region: 'ea', field: 'SECURITY', place: 'ULLEUNG, S. KOREA', tag: 'OFFICIAL', art: 'ulleung',
      head: 'Russian jets trip Korean air-raid alert',
      body: 'F-15Ks scramble; the 07:52 alert on Ulleung lasts 3 minutes. No airspace breach, Seoul says.',
      src: 'Yonhap · SBS', lon: 130.9, lat: 37.5,
    },
    {
      id: 5, kind: 'small', region: 'ea', field: 'SPACE', place: 'JIUQUAN, CHINA', tag: 'OFFICIAL', art: 'jiuquan',
      head: 'Pakistan’s first astronaut named',
      body: 'Zeeshan Ali joins Shenzhou-24, due to launch Wednesday: Tiangong’s first foreign visitor.',
      src: 'CMSA · Dawn', lon: 100.3, lat: 40.9,
    },
    {
      id: 6, kind: 'small', region: 'oc', field: 'TECHNOLOGY', place: 'CANBERRA', tag: 'CONFIRMED', art: 'canberra',
      head: 'Australia deal: tech fines up to 5%',
      body: 'Labor–Greens deal on a “digital duty of care” ties fines to global revenue; users may sue.',
      src: 'ABC · Reuters', lon: 149.1, lat: -35.3,
    },
    {
      id: 7, kind: 'small', region: 'la', field: 'SECURITY', place: 'VILLAVICENCIO, COLOMBIA', tag: 'REPORTED', art: 'villavicencio',
      head: 'Car bomb wrecks Colombian state HQ',
      body: 'Blast late Monday at the Meta governor’s office, a day before the 2016 peace deal turns 10.',
      src: 'AFP · BNO', lon: -73.6, lat: 4.1,
    },
    {
      id: 8, kind: 'small', region: 'me', field: 'WAR', place: 'KHAN YOUNIS, GAZA', tag: 'REPORTED', art: 'khanyounis',
      head: 'Drone strike kills 3 at Gaza police post',
      body: 'Israeli strike in Al-Mawasi early Tuesday also wounds five, a hospital source says.',
      src: 'Anadolu · Times of Israel', lon: 34.3, lat: 31.3,
    },
    {
      id: 9, kind: 'small', region: 'se', field: 'TRADE', place: 'SINGAPORE', tag: 'OFFICIAL', art: 'singapore',
      head: 'Singapore: no backdoor for US chips',
      body: 'Wong vows to uphold export rules after the US blacklists Megaspeed and six other firms.',
      src: 'Financial Times', lon: 103.8, lat: 1.35,
    },
    {
      id: 10, kind: 'small', region: 'sa', field: 'DISASTER', place: 'TAPLEJUNG, NEPAL', tag: 'CONFIRMED', art: 'nepal',
      head: 'Magnitude-5.6 quake jolts eastern Nepal',
      body: 'Hit near the Tibet border at 07:17; felt in India, Bhutan and Bangladesh. No deaths.',
      src: 'Kathmandu Post', lon: 87.8, lat: 27.6,
    },
    {
      id: 11, kind: 'small', region: 'eu', field: 'MIGRATION', place: 'BRUSSELS', tag: 'REPORTED', art: 'brussels',
      head: 'EU pact moves 1,283 migrants, not 30,000',
      body: 'First-year relocations fall far short of the Commission’s plan; Hungary and Slovakia opt out.',
      src: 'Euronews', lon: 4.35, lat: 50.85,
    },
    {
      id: 12, kind: 'small', region: 'af', field: 'WEATHER', place: 'JOHANNESBURG', tag: 'OFFICIAL', art: 'johannesburg',
      head: 'Johannesburg put on flood alert',
      body: 'Weather service warns of flash floods across Gauteng until Tuesday evening.',
      src: 'SAWS · EWN', lon: 28.0, lat: -26.2,
    },
    {
      id: 13, kind: 'small', region: 'na', field: 'SPORT', place: 'LANDOVER, USA', tag: 'CONFIRMED', art: 'landover',
      head: 'Commanders stun Bengals 22–20',
      body: 'Stevens’ 26-yard field goal as time expires settles Monday Night Football (Tue UTC).',
      src: 'NFL', lon: -76.9, lat: 38.9,
    },

    { id: 14, kind: 'list', region: 'eu', field: 'TRADE', place: 'Kyiv', head: 'Western chips in Russian drone', detail: 'made in 2026', src: 'Kyiv Independent', lon: 30.5, lat: 50.4 },
    { id: 15, kind: 'list', region: 'eu', field: 'SPORT', place: 'London', head: 'Champions League, matchday 5', detail: 'Arsenal v Dortmund, 20:00', src: 'UEFA', due: true, lon: -0.1, lat: 51.5 },
    { id: 16, kind: 'list', region: 'eu', field: 'SPORT', place: 'Geneva', head: 'world chess title match opens', detail: 'Gukesh v Sindarov, Game 1', src: 'FIDE', due: true, lon: 6.1, lat: 46.2 },
    { id: 17, kind: 'list', region: 'eu', field: 'RELIGION', place: 'Vatican', head: 'Francis’s diary revealed', detail: 'tells of seeing the devil', src: 'AFP', lon: 12.45, lat: 41.9 },
    { id: 18, kind: 'list', region: 'me', field: 'HEALTH', place: 'Israel', head: '31,500 wounded troops treated', detail: '62% psychological', src: 'ministry', lon: 35.6, lat: 33.6 },
    { id: 19, kind: 'list', region: 'af', field: 'ACCIDENT', place: 'Zamfara, Nigeria', head: 'road crash kills 15', detail: '27 more hurt', src: 'Premium Times', lon: 6.2, lat: 12.2 },
    { id: 20, kind: 'list', region: 'af', field: 'LAW', place: 'Dakar', head: 'AFCON title ruling due today', detail: 'Senegal’s appeal, p.m.', src: 'CAS', due: true, lon: -17.4, lat: 14.7 },
    { id: 21, kind: 'list', region: 'ea', field: 'POLITICS', place: 'Tokyo', head: '6 parties to censure minister', detail: 'Seki refuses to quit', src: 'Kyodo', lon: 139.7, lat: 35.7 },
    { id: 22, kind: 'list', region: 'ea', field: 'SCIENCE', place: 'Iwo Jima', head: 'eruption adds 50 hectares', detail: 'new land seen from orbit', src: 'NASA', lon: 141.3, lat: 24.8 },
    { id: 23, kind: 'list', region: 'sa', field: 'ACCIDENT', place: 'Kannauj, India', head: 'truck hits school bus', detail: '4 children dead', src: 'The Week', lon: 79.9, lat: 27.1 },
    { id: 24, kind: 'list', region: 'se', field: 'WEATHER', place: 'Jakarta', head: 'tidal-flood alert issued', detail: 'supermoon high tides', src: 'BMKG', lon: 106.8, lat: -6.2 },
    { id: 25, kind: 'list', region: 'oc', field: 'DIPLOMACY', place: 'Canberra', head: 'Vanuatu pact opposed', detail: 'net-zero row, A$500m', src: 'ABC', lon: 168.3, lat: -17.7 },
    { id: 26, kind: 'list', region: 'oc', field: 'ECONOMY', place: 'Australia', head: 'Bendigo Bank fined A$8m', detail: '2023 cyber breach', src: 'ABC', lon: 144.3, lat: -36.8 },
    { id: 27, kind: 'list', region: 'oc', field: 'DISASTER', place: 'Rarotonga', head: 'cyclone relief ship sails', detail: 'for Pukapuka, Nassau', src: 'RNZ', lon: -159.8, lat: -21.2 },
    { id: 28, kind: 'list', region: 'oc', field: 'ENVIRONMENT', place: 'Pago Pago', head: 'US leases seabed to miner', detail: '31.5m acres, $6m', src: 'RNZ', lon: -170.7, lat: -14.3 },
    { id: 29, kind: 'list', region: 'na', field: 'TECHNOLOGY', place: 'Washington', head: 'Iran probed over ship hacks', detail: 'up to 50 vessels hit', src: 'WSJ', lon: -80.5, lat: 35.0 },
    { id: 30, kind: 'list', region: 'na', field: 'CULTURE', place: 'New York', head: '‘Carême’ wins Intl Emmy', detail: 'best drama; France', src: 'Deadline', lon: -72.5, lat: 43.2 },
    { id: 31, kind: 'list', region: 'na', field: 'SPORT', place: 'Los Angeles', head: 'Lakers beat Jazz 109–94', detail: 'NBA, Mon night (Tue UTC)', src: 'AP', lon: -118.2, lat: 34.0 },
    { id: 32, kind: 'list', region: 'la', field: 'ECONOMY', place: 'Brasília', head: 'budget package passes', detail: '353–128, late Mon', src: 'Rio Times', lon: -47.9, lat: -15.8 },
    { id: 33, kind: 'list', region: 'la', field: 'HEALTH', place: 'Havana', head: 'WHO chief tours hospitals', detail: 'day 3 of Tedros visit', src: 'AP', lon: -82.4, lat: 23.1 },
    { id: 34, kind: 'list', region: 'world', field: 'SCIENCE', place: 'Worldwide', head: 'supermoon, full 14:53 UTC', detail: 'first of three in a row', src: 'USNO', due: true },
  ],

  // The date check box at the foot of the page.
  check: {
    rule: 'Every story here happened, or was first reported, on Tuesday 24 November 2026 (UTC or local date). Press time: 07:30 UTC.',
    notes: [
      { lead: 'Left out as Monday’s news', text: 'Nvidia reinstates Jensen Huang and Wall Street rebounds 4.7% · Trump’s death-penalty memo · EU sports ban on Russia · FIFA names 2031 and 2035 Women’s World Cup hosts · Kyiv-region strikes that killed 15.' },
      { lead: 'Earlier still', text: 'COP31 ends with no deal (Sun 22) · Russian warship hit at Benghazi (Sun 22).' },
      { lead: 'Ran overnight into Tuesday', text: 'the Hormuz statement, the Zaporizhzhia strike and the Colombia blast; the NFL game and the Emmys ended Monday night in the Americas, which is Tuesday UTC.' },
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
