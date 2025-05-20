import React, { useState } from 'react';

function JadidsSection({ jadids, cardBg, cardBorder, textColor }) {
  const [selectedJadid, setSelectedJadid] = useState(null);

  // Jadid haqida to'liq ma'lumot
  const jadidDetails = {
    1: {
      bio: `Abdulla Avloniy (1878-1934) - o'zbek jadid ma'rifatparvarlarining yirik vakili, ma'rifatparvar, adib, pedagog, shoir va jamoat arbobi. Avloniy 1878-yil 12-iyulda Toshkent shahrida hunarmand oilasida dunyoga kelgan. Boshlang'ich ta'limni mahalliy maktabda olgan. Keyinchalik mustaqil o'qib bilim olgan.

      1907-yilda Toshkentda yangi usul maktabini ochgan. U "Jamiyati Xayriya" tashkilotining faol a'zosi bo'lgan. 1908-yilda "Shuhrat" gazetasining muharriri bo'lgan. 

      Avloniyning "Turkiy Guliston yoxud axloq" (1913) asari jadid pedagogikasining muhim yodgorliklaridan biri hisoblanadi. Uning "Advokatlik osonmi?" (1914), "Biz va siz" (1917), "Ikki sevgi" (1918) kabi dramalariga ham muallif.

      Avloniy 1934-yil 25-avgustda Toshkentda vafot etgan.`,
      works: [
        "Turkiy Guliston yoxud axloq (1913)",
        "Birinchi muallim (1909)",
        "Ikkinchi muallim (1912)",
        "Advokatlik osonmi? (1914)",
        "Biz va siz (1917)",
        "Ikki sevgi (1918)",
        "Maktab gulistoni (she'rlar to'plami)",
        "Darsliklar to'plami"
      ],
      influence: `Abdulla Avloniy o'zbek xalqi ma'rifatida, ayniqsa, pedagogika sohasida ulkan iz qoldirgan. Uning "Turkiy Guliston yoxud axloq" asari XX asr boshida yaratilgan muhim pedagogik asar bo'lib, yosh avlodni tarbiyalash, axloq-odob qoidalarini o'rgatish hamda ma'rifat tarqatishga qaratilgan.

      Avloniy tashkil etgan "yangi usul" maktabi Turkistonda zamonaviy ta'limning rivojlanishiga katta hissa qo'shgan. U darsliklar yaratish, o'qitish metodlari va ta'lim tizimini isloh qilishda faol qatnashgan.

      Bundan tashqari, Avloniy teatr, she'riyat va publitsistika orqali ham xalqni ma'rifatli qilish yo'lida xizmat qilgan. Uning asarlari bugungi kunda ham o'zbek adabiyoti va ma'rifatchilik tarixida muhim o'rin tutadi.`
    },
    2: {
      bio: `Mahmudxo'ja Behbudiy (1875-1919) - Turkiston jadidchilik harakatining asoschisi va yirik namoyandasi, ma'rifatparvar, yozuvchi, jurnalist, notiq va jamoat arbobi. Behbudiy 1875-yilda Samarqand yaqinidagi Baxshitepa qishlog'ida muftiy oilasida tug'ilgan.

      Behbudiy dastlab madrasada ta'lim olgan, keyinchalik rus-tuzem maktabida ruscha o'rgangan. U arab, fors va rus tillarini mukammal bilgan. 1899-1900 yillarda Makka va Madinaga haj safarini uyushtirgan, shuningdek Qohira, Istanbul, Damashq shaharlarida bo'lib, yangi g'oyalarni o'rgangan.

      1913-1915 yillarda "Oyna" jurnalini nashr etgan. "Padarkush" (1913) dramasini yozgan. Behbudiy Turkistonda teatr san'atining rivojlanishiga katta hissa qo'shgan. 

      Behbudiy 1919-yil 25-martda Qarshida fojiali ravishda qatl etilgan.`,
      works: [
        "Padarkush (1913)",
        "Muntaxabi jug'rofiyai umroniy (1903)",
        "Kitob ul-atfol (1904)",
        "Amaliyoti islom (1908)",
        "Oyna jurnali (1913-1915)",
        "Mabdai ta'lim (1922)"
      ],
      influence: `Mahmudxo'ja Behbudiy Turkiston jadidchilik harakatining asoschisi sifatida o'zbek ma'rifatparvarligi tarixida o'chmas iz qoldirgan. U o'z davrida Turkiston o'lkasida ta'lim tizimini isloh qilish, matbuot erkinligi uchun kurashish va madaniyatni rivojlantirishga ulkan hissa qo'shgan.

      Behbudiy tashkil etgan "Oyna" jurnali va nashr ettirgan boshqa matbuot organlari orqali ilg'or g'oyalarni targ'ib qilgan. Uning "Padarkush" dramasi o'zbek milliy teatri tarixidagi dastlabki asarlardan biri bo'lib, katta ahamiyatga ega bo'lgan.

      Behbudiy yaratgan darsliklar, maqolalar, notiqlik matnlari hamda adabiy asarlar Turkiston jamiyati ma'naviy-ma'rifiy yuksalishiga katta ta'sir ko'rsatgan.`
    },
    3: {
      bio: `Abdulhamid Cho'lpon (1897-1938) - o'zbek shoiri, yozuvchi, dramaturg, tarjimon va jamoat arbobi. Cho'lpon (asl ismi Abdulhamid Sulaymon o'g'li Yunusov) 1897-yil 25-noyabrda Andijon shahrida tug'ilgan.

      Boshlang'ich ta'limni eski maktabda olgan, keyinchalik rus-tuzem maktabida o'qigan. 1914-yilda Toshkentga ko'chib kelgan va jadidchilik harakatiga qo'shilgan. 1920-1930-yillarda gazeta va jurnallarda faol ijod qilgan.

      Cho'lponning "Uyg'onish", "Buloqlar" (1922), "Tong sirlari" (1926) she'riy to'plamlari va "Kecha va kunduz" (1936) romani mashhur. U o'zbek adabiyotida lirik she'riyatning eng yorqin vakillaridan biri hisoblanadi.

      Cho'lpon 1937-yilda qamoqqa olingan va 1938-yil 4-oktabrda otib tashlangan. 1956-yilda oqlangan.`,
      works: [
        "Uyg'onish (she'riy to'plam)",
        "Buloqlar (she'riy to'plam, 1922)",
        "Tong sirlari (she'riy to'plam, 1926)",
        "Kecha va kunduz (roman, 1936)",
        "Yorqinoy (hikoya)",
        "Do'xtur Muhammadyor (hikoya)",
        "Oydin kechalarda (drama)"
      ],
      influence: `Cho'lpon o'zbek adabiyotining rivojiga beqiyos hissa qo'shgan. Uning she'rlari milliy uyg'onish, ozodlik va ma'rifat g'oyalari bilan sug'orilgan bo'lib, o'zbek adabiyotida yangi yo'nalishlar rivojiga turtki bergan.

      Cho'lpon nafaqat adabiyotda, balki teatr, tarjima va publitsistika sohalarida ham samarali faoliyat yuritgan. U Shekspir, Pushkin, Gorki asarlarini o'zbek tiliga tarjima qilgan.

      Cho'lponning "Kecha va kunduz" romani o'zbek nasrining muhim namunasi bo'lib, XX asr boshidagi o'zbek jamiyatining ijtimoiy-madaniy hayotini aks ettirgan.

      Cho'lpon asarlari uzoq vaqt taqiqlangan bo'lsa-da, mustaqillikdan so'ng to'liq qayta nashr etildi va adib merosi chuqur o'rganila boshlandi.`
    },
    4: {
      bio: `Abdurauf Fitrat (1886-1938) - o'zbek ma'rifatparvari, yozuvchi, olim, dramaturg, adabiyotshunos va jamoat arbobi. Fitrat 1886-yilda Buxoroda tug'ilgan. Dastlab Buxorodagi Mir Arab madrasasida ta'lim olgan.

      1909-1913 yillarda Istanbulda o'qigan va u yerda "Buxoro Ta'limi" jamiyatini tuzgan. 1913-yilda Buxoroga qaytib, mahalliy jadidchilik harakatiga qo'shilgan. 1917-yilda "Yosh buxoroliklar" partiyasiga a'zo bo'lgan.

      Fitrat 1923-1924 yillarda O'zbekiston Xalq Maorif komissari bo'lib ishlagan. 1920-1930 yillarda ilmiy va adabiy faoliyat bilan shug'ullangan.

      Fitrat 1938-yil 4-oktabrda "xalq dushmani" sifatida qatag'on qilingan. 1956-yilda oqlangan.`,
      works: [
        "Munozara (1909)",
        "Sayyohi hindi (1912)",
        "Qiyomat (drama)",
        "Abulfayzxon (drama)",
        "O'zbek klassik musiqasi va uning tarixi (1927)",
        "O'zbek adabiyoti namunalari (1928)",
        "Eng eski turkiy adabiyot namunalari (1927)"
      ],
      influence: `Fitrat o'zbek ma'rifatparvarligi, adabiyoti va ilm-fanida chuqur iz qoldirgan. U o'z davrida ta'lim tizimini isloh qilish, milliy uyg'onish g'oyalarini targ'ib qilish hamda adabiyot va san'atni rivojlantirishga ulkan hissa qo'shgan.

      Fitrat nafaqat adib va dramaturg, balki etuk adabiyotshunos, tilshunos va tarixchi olim ham bo'lgan. Uning o'zbek adabiyoti tarixi, klassik musiqa, til masalalariga oid ilmiy ishlari hozirga qadar o'z ahamiyatini yo'qotmagan.

      Fitrat dramalarida tarixiy-ijtimoiy masalalar ko'tarilgan va milliy o'zlikni anglash, ma'rifatparvarlik g'oyalari aks ettirilgan. Uning ilmiy-pedagogik faoliyati o'zbek madaniyati va ma'rifati rivojiga katta ta'sir ko'rsatgan.`
    },
    5: {
      bio: `Munavvar Qori Abdurashidxonov (1878-1931) - o'zbek ma'rifatparvari, pedagog, jurnalist, yangi usul maktablari tashkilotchisi va jamoat arbobi. Munavvar Qori 1878-yil Toshkent shahrida tavallud topgan. U dastlab eski maktabda, so'ngra madrasada ta'lim olgan.

    1901-yilda Toshkentda birinchi yangi usul maktabini ochgan. 1906-yilda "Xurshid" gazetasini, 1917-yilda "Najot" gazetasini tashkil etgan. 1917-1918-yillarda "Sho'roi Islomiya" va "Turk adami markaziyat" tashkilotlari rahbarlaridan biri bo'lgan.

    1923-1929-yillarda O'zbekiston Maorif xalq komissarligida ishlagan. 1929-yilda hibsga olinib, 1931-yilda Moskvada otib tashlangan. 1956-yilda oqlangan.`,
      works: [
        "Adibi avval (1917)",
        "Adibi soniy (1917)",
        "Yer yuzi (darslik, 1917)",
        "Haqqi savod (1917)",
        "Ta'libi avval (1926)"
      ],
      influence: `Munavvar Qori o'zbek ma'rifatparvarligi va jadidchilik harakatining yetakchi namoyandalaridan biri sifatida milliy ta'limni modernizatsiya qilish, matbuot orqali milliy uyg'onish g'oyalarini targ'ib qilish, jamiyatda ijtimoiy-siyosiy islohotlarni amalga oshirishga katta hissa qo'shgan.

    U ochgan yangi usul maktablari, yaratgan darsliklari va o'quv qo'llanmalari milliy ta'lim tizimini shakllantirish va rivojlantirishda muhim rol o'ynagan. Munavvar Qori milliy matbuot va jurnalistikaning rivojlanishiga ham katta ta'sir ko'rsatgan.

    Munavvar Qorining ma'rifatparvarlik faoliyati va pedagogik merosi bugungi kunda ham o'z ahamiyatini yo'qotmagan va zamonaviy O'zbekiston ta'lim tizimida uning g'oyalari davom ettirilmoqda.`
    },
    6: {
      bio: `Hamza Hakimzoda Niyoziy (1889-1929) - o'zbek shoiri, dramaturg, bastakor, pedagog va jamoat arbobi. Hamza 1889-yil 6-martda Qo'qon shahrida tug'ilgan. U dastlab otasining maktabida, so'ngra Qo'qon madrasasida ta'lim olgan.

    1911-yilda Hamza yangi usul maktabini ochgan va unda o'qituvchilik qilgan. 1915-1917-yillarda Farg'onaning turli shaharlarida sayyor maktablar tashkil etgan. 1918-1919-yillarda teatr truppasi bilan O'zbekiston va Tojikiston bo'ylab safarlar qilgan.

    1919-1920-yillarda Farg'ona viloyatida xalq maorifi bo'limini boshqargan. 1926-1929-yillarda Shohimardonda maktab ochib, o'qituvchilik qilgan. 1929-yil 18-martda Shohimardonda fojiali ravishda o'ldirilgan.`,
      works: [
        "Zaharli hayot yoxud ishq qurbonlari (drama)",
        "Zamonamizning ulamo'lari (1914)",
        "Milliy ashulalar uchun milliy she'rlar (1915)",
        "Boy ila xizmatchi (drama, 1918)",
        "Maysaraning ishi (drama)",
        "Paranji sirlari (1927)"
      ],
      influence: `Hamza Hakimzoda Niyoziy o'zbek adabiyoti, teatri va musiqa san'atining rivojlanishiga katta hissa qo'shgan. Uning asarlari milliy uyg'onish davri o'zbek adabiyotining muhim namunalari hisoblanadi.

    Hamza o'z asarlarida ijtimoiy adolatsizlik, jaholat, diniy mutaassiblik, ayollar erki kabi dolzarb masalalarni ko'tarib chiqqan. Uning dramaturgyasi o'zbek teatri rivojida muhim bosqich bo'ldi.

    Hamza pedagog sifatida ham katta meros qoldirgan. U yaratgan darsliklar, qo'llanmalar va ta'lim usullari milliy pedagogika rivojida muhim ahamiyatga ega. Uning ma'rifatparvarlik faoliyati zamonaviy o'zbek ma'rifati va madaniyati uchun ham ibratlidir.`
    },
    7: {
      bio: `Abdullo Qodiriy (1894-1938) - o'zbek yozuvchisi, romanavis, dramaturg, publitsist va o'zbek romanchiligining asoschisi. Qodiriy 1894-yil 10-aprelda Toshkentda tug'ilgan. Dastlab eski maktabda, so'ngra rus-tuzem maktabida ta'lim olgan.

    1917-yildan e'tiboran "Mushtum" jurnalida "Kalvak Maxzum", "To'g'ono'g'li", "Julqunboy" taxalluslari bilan hajviy asarlar yoza boshlagan. 1920-yillarda "O'tkan kunlar" va "Mehrobdan chayon" kabi mashhur romanlarini yaratgan.

    Qodiriy 1926-1929-yillarda Moskvadagi jurnalistika kurslarida o'qigan. 1937-yil 31-dekabrda hibsga olinib, 1938-yil 4-oktabrda otib tashlangan. 1956-yilda oqlangan.`,
      works: [
        "O'tkan kunlar (roman, 1925)",
        "Mehrobdan chayon (roman, 1929)",
        "Obid ketmon (qissa, 1934)",
        "Kalvak Maxzumning xotira daftaridan (hajviya)",
        "Jinlar bazmi (drama)",
        "Uloqda (hikoya)"
      ],
      influence: `Abdullo Qodiriy o'zbek adabiyotida roman janrining asoschisi sifatida tan olingan. Uning "O'tkan kunlar" va "Mehrobdan chayon" romanlari o'zbek adabiyotining muhim yutuqlaridan hisoblanadi.

    Qodiriy o'z asarlarida milliy o'zlikni anglash, tarixiy xotira, insoniy qadriyatlar, sevgi va sadoqat kabi abadiy mavzularni yoritgan. Uning qalamiga mansub asarlar badiiy jihatdan yuqori saviyaga ega bo'lib, xalq orasida keng tarqalgan.

    Qodiriy asarlaridagi obrazlar, til va uslub o'zbek adabiyotining keyingi taraqqiyotiga katta ta'sir ko'rsatgan. Uning hajviy asarlari esa o'zbek satirasining nodir namunalaridir. Qodiriy ijodi bugungi kunda ham o'z qimmatini yo'qotmagan va milliy adabiyotimizning oltin fondini tashkil etadi.`
    },
    8: {
      bio: `Ubaydulla Xo'jayev (1880-1938) - o'zbek siyosiy arbobi, huquqshunos, publitsist va jadidchilik harakatining faol a'zosi. Xo'jayev 1880-yilda Toshkentda tug'ilgan. Dastlab eski maktab va madrasada, so'ngra Toshkent gimnaziyasida ta'lim olgan.

    1907-1908-yillarda Sankt-Peterburgda huquqshunoslik kursida o'qigan. 1914-yildan advokatlik faoliyatini boshlagan. 1917-yil Turkiston o'lka musulmonlari qurultoyida "Sho'roi Islomiya" tashkilotini tuzish tashabbuskori bo'lgan.

    1917-1920-yillarda Turkiston Muxtoriyati hukumatida adliya vaziri sifatida faoliyat ko'rsatgan. 1920-1937-yillarda ilmiy-pedagogik va advokatlik faoliyati bilan shug'ullangan. 1937-yilda hibsga olinib, 1938-yilda otib tashlangan. 1956-yilda oqlangan.`,
      works: [
        "Turkiston muxtoriyati (1917)",
        "Musulmonlarga qonun kerak (1917)",
        "Huquq asoslari (1919)",
        "Adliya ishlari (1920)",
        "Turkistonda milliy masala (1922)"
      ],
      influence: `Ubaydulla Xo'jayev o'zbek milliy-ozodlik harakati, huquqshunoslik va davlatchilik rivojiga katta hissa qo'shgan. U Turkiston muxtoriyati hukumatining faol a'zosi sifatida milliy davlat qurilishi g'oyalarini ilgari surgan.

    Xo'jayev o'zbek huquqshunosligining asoschisi sifatida ham muhim o'rin tutadi. Uning huquqiy qarashlari, advokatlik faoliyati va yuridik asarlari o'zbek huquqshunoslik fanining shakllanishida muhim ahamiyat kasb etgan.

    Ubaydulla Xo'jayevning ijtimoiy-siyosiy faoliyati va g'oyalari milliy ozodlik harakati va davlatchilik an'analarini rivojlantirishda o'z aksini topgan. Uning merosi bugungi kunda ham o'zbek huquqshunosligi va siyosatshunosligida o'rganilmoqda.`
    },
    9: {
      bio: `Ishoqxon Ibrat (1862-1937) - o'zbek ma'rifatparvari, tilshunos olim, tarixchi, shoir va jadidchilik harakatining faol ishtirokchisi. Ibrat 1862-yilda Namangan viloyatining To'raqo'rg'on tumanida tug'ilgan. Dastlab mahalliy madrasada ta'lim olgan.

    1886-1892-yillarda Hindiston, Afg'oniston, Arabiston, Turkiya, Bulg'oriya kabi mamlakatlarda bo'lib, chet tillarni o'rgangan. 1892-yilda vataniga qaytib, matbaa tashkil etgan va yangi usul maktabini ochgan.

    1901-yilda To'raqo'rg'onda litografiya tashkil etgan. 1907-1917-yillarda ma'rifiy va adabiy faoliyat bilan shug'ullangan. 1937-yilda hibsga olinib, 80 yoshida vafot etgan. 1991-yilda oqlangan.`,
      works: [
        "Lug'ati sitta al-sina (Olti tilli lug'at, 1901)",
        "Tarixi Farg'ona (1916)",
        "Jome' ul-xutut (Yozuvlar to'plami, 1912)",
        "Mezon uz-zamon (1918)",
        "Ilmi Ibrat (1909)",
        "Tarixi madaniyat (1927)"
      ],
      influence: `Ishoqxon Ibrat o'zbek ma'rifatparvarligi, tilshunosligi va tarixshunosligiga katta hissa qo'shgan. Uning tilshunoslik sohasidagi ishlari, xususan, "Lug'ati sitta al-sina" asari o'z davrida muhim ilmiy-ma'rifiy ahamiyatga ega bo'lgan.

    Ibrat ko'plab tillarda savodi bor bo'lgan polyglot olim sifatida til o'rganish usullari va metodikasini ishlab chiqqan. Uning tarixga oid asarlari mahalliy tarixshunoslikda muhim o'rin tutadi.

    Ishoqxon Ibrat o'zbek jadidchilik harakatining namoyandasi sifatida yangi usul maktablarini tashkil etish, matbaachilik ishlarini yo'lga qo'yish orqali milliy ma'rifat va madaniyat rivojiga katta hissa qo'shgan. Uning ilmiy-ma'rifiy merosi bugungi kunda ham o'z ahamiyatini yo'qotmagan.`
    },
    10: {
      bio: `Ashurali Zohiriy (1885-1937) - o'zbek ma'rifatparvari, yozuvchi, jurnalist va yangi usul maktabi o'qituvchisi. Zohiriy 1885-yilda Qo'qon shahrida tug'ilgan. Dastlab eski maktab va madrasada ta'lim olgan.

    1909-1913-yillarda Istanbulda o'qigan. 1914-yilda Qo'qonga qaytib, yangi usul maktabini ochgan va o'qituvchilik qilgan. 1917-yildan e'tiboran gazeta va jurnallarda maqolalar chop etgan.

    1920-1930-yillar davomida o'qituvchilik va jurnalistlik faoliyati bilan shug'ullangan. 1927-1929-yillarda "Yangi yo'l" jurnalida ishlagan. 1937-yilda hibsga olinib, otib tashlangan. 1956-yilda oqlangan.`,
      works: [
        "Usuli jadid (1914)",
        "Yangi maktab darsliklari (1915)",
        "Turkiy Guliston yoxud axloq (1914)",
        "Arab alifbosi va uning islohoti (1925)",
        "Yangi yozuv va imlo qoidalari (1929)",
        "O'qish kitobi (1927)"
      ],
      influence: `Ashurali Zohiriy o'zbek ma'rifatparvarligi va jadidchilik harakatida muhim o'rin tutgan. Uning pedagogik faoliyati, yaratgan darsliklari va o'quv qo'llanmalari milliy ta'lim tizimini rivojlantirishga katta hissa qo'shgan.

    Zohiriy o'z maqolalari va asarlarida ta'lim islohoti, til va imlo masalalari, ayollar ta'limi va ijtimoiy hayotdagi ishtiroki kabi dolzarb masalalarni ko'tarib chiqqan. Jumladan, u arab alifbosini isloh qilish va milliy yozuvni soddalashtirish yo'lida faoliyat olib borgan.

    Ashurali Zohiriyning matbaachilik va jurnalistlik faoliyati milliy matbuot tarixida ham muhim o'rin tutadi. Uning ma'rifiy qarashlari va pedagogik g'oyalari bugungi kunda ham o'z ahamiyatini yo'qotmagan.`
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Jadidlar</h1>

      {selectedJadid ? (
        <div>
          <button
            className="mb-6 px-4 py-2 rounded-md flex items-center"
            style={{ backgroundColor: 'rgba(30, 91, 148, 0.1)', color: textColor }}
            onClick={() => setSelectedJadid(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span className="ml-2">Orqaga qaytish</span>
          </button>

          <div
            className="rounded-lg shadow-md overflow-hidden"
            style={{ backgroundColor: cardBg, borderColor: cardBorder, borderWidth: '1px' }}
          >
            <div className="md:flex">
              <div className="md:w-1/3 p-6 flex justify-center">
                <img
                  src={jadids.find(j => j.id === selectedJadid).image}
                  alt={jadids.find(j => j.id === selectedJadid).name}
                  className="w-64 h-auto object-cover rounded-md shadow-md"
                />
              </div>

              <div className="md:w-2/3 p-6">
                <h2 className="text-3xl font-bold mb-2">{jadids.find(j => j.id === selectedJadid).name}</h2>
                <p className="text-xl opacity-80 mb-6">{jadids.find(j => j.id === selectedJadid).years}</p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Hayoti va faoliyati</h3>
                  <p className="whitespace-pre-line">{jadidDetails[selectedJadid].bio}</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Asosiy asarlari</h3>
                  <ul className="list-disc pl-6">
                    {jadidDetails[selectedJadid].works.map((work, index) => (
                      <li key={index} className="mb-2">{work}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Ma'rifatchilik faoliyati va ta'siri</h3>
                  <p className="whitespace-pre-line">{jadidDetails[selectedJadid].influence}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {jadids.map((jadid) => (
            <div
              key={jadid.id}
              className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              style={{ backgroundColor: cardBg, borderColor: cardBorder, borderWidth: '1px' }}
              onClick={() => setSelectedJadid(jadid.id)}
            >
              <div className="h-64 overflow-hidden">
                <img src={jadid.image} alt={jadid.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{jadid.name}</h3>
                <p className="text-sm opacity-70 mb-3">{jadid.years}</p>
                <p className="text-sm">{jadid.shortBio}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default JadidsSection;