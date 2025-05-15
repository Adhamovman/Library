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