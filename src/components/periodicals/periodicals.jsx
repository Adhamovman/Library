import React, { useState } from 'react';

function PeriodicalsSection({ periodicals, cardBg, cardBorder, textColor }) {
  const [selectedPeriodical, setSelectedPeriodical] = useState(null);

  // Jurnal va gazetalar haqida to'liq ma'lumot
  const periodicalDetails = {
    1: {
      description: `"Taraqqiy" - 1906-yilda Toshkentda tatar ma'rifatparvari Ismoil Obidov tomonidan tashkil etilgan ilk turkiy tildagi gazeta. Gazeta haftalik bo'lib, jami 27 soni chop etilgan. "Taraqqiy" gazetasi jadidlarning ilk matbuot nashri hisoblanadi.

      Gazeta o'z sahifalarida ma'rifat, ilm-fan, ijtimoiy islohotlar va dunyodagi yangiliklar haqida maqolalar chop etgan. Gazetada ta'lim tizimini isloh qilish, yangi usul maktablarini tashkil etish, ayollar huquqi va madaniy hayotni zamonaviylashtirish kabi masalalar ko'tarilgan.

      "Taraqqiy" gazetasi Turkiston o'lkasida milliy matbuotning shakllanishiga asos solgan dastlabki nashrlardan biri sifatida tarixiy ahamiyatga ega.`,
      content: [
        "Ma'rifat va ta'lim masalalari",
        "Yangi usul maktablari haqida xabarlar",
        "Dunyo yangiliklari",
        "Turkiston hayotidan lavhalar",
        "Adabiy asarlar va she'rlar",
        "O'quvchilar maktublari",
        "E'lonlar va xabarlar"
      ],
      impact: `"Taraqqiy" gazetasi o'zbek milliy matbuotining shakllanishida muhim rol o'ynagan. Bu gazeta orqali jadidlarning g'oyalari, xususan, ma'rifat, yangi usul maktablari, ijtimoiy islohotlar va madaniy yangilanish g'oyalari keng jamoatchilikka yetkazilgan.

      Gazetaning muhim ahamiyati shundaki, u Turkiston o'lkasida mahalliy tilda nashr etiladigan vaqtli matbuotni shakllantirish va rivojlantirishga asos solgan. "Taraqqiy" orqali mahalliy aholida ijtimoiy-siyosiy va madaniy-ma'rifiy masalalarga qiziqish uyg'otilgan.

      Garchi gazeta uzoq vaqt nashr etilmagan bo'lsa-da, u keyinchalik tashkil etilgan boshqa jadid matbuot nashrlari uchun namuna vazifasini o'tagan va milliy uyg'onish davrida matbuot erkinligi uchun kurashda muhim qadam bo'lgan.`
    },
    2: {
      description: `"Sadoi Turkiston" - 1914-1915 yillarda Toshkentda nashr etilgan o'zbekcha gazeta. Bu gazeta yirik jadid namoyandasi Ubaydulla Xo'jayev tomonidan tashkil etilgan va tahrir qilingan. Gazeta haftalik bo'lib, jami 66 soni chop etilgan.

      "Sadoi Turkiston" o'z sahifalarida ta'lim, madaniyat, milliy o'zlik, matbuot erkinligi, jamiyatni isloh qilish va dunyodagi eng so'nggi yangiliklar haqida maqolalar chop etgan. Gazetada Behbudiy, Avloniy, Fitrat, Cho'lpon kabi mashhur jadid ma'rifatparvarlari o'z maqolalari bilan qatnashgan.

      Gazeta 1915-yil aprelida podshoh hukumati tomonidan yopilgan.`,
      content: [
        "Ta'lim va madaniyat masalalari",
        "Turkiston hayotidan xabarlar",
        "Musulmon dunyosi yangiliklari",
        "Birinchi jahon urushi haqida ma'lumotlar",
        "Badiiy adabiyot namunalari",
        "Milliy madaniyat va san'at masalalari",
        "Yangi usul maktablari haqida xabarlar",
        "O'quvchilar maktublari va mulohazalari"
      ],
      impact: `"Sadoi Turkiston" gazetasi Turkiston jadidchilik harakatining eng muhim matbuot organlaridan biri sifatida katta tarixiy ahamiyatga ega. Bu gazeta orqali jadidlarning ma'rifatparvarlik, ijtimoiy islohotlar, milliy o'zlikni anglash va madaniy yangilanish g'oyalari keng jamoatchilikka yetkazilgan.

      Gazeta o'z davrida Turkiston jamiyatining ma'naviy-ma'rifiy ufqini kengaytirishga, aholining ijtimoiy-siyosiy ongini o'stirishga va milliy matbuotni rivojlantirishga katta hissa qo'shgan. "Sadoi Turkiston" sahifalarida jadidlarning muhim maqolalari, she'rlari, hikoyalari va publitsistik asarlari chop etilgan.

      "Sadoi Turkiston" xalqni ma'rifatli qilish, jamiyatni isloh qilish va milliy o'zlikni saqlash yo'lidagi kurashda muhim qurol vazifasini bajargan. Gazetaning madaniy va ma'rifiy merosi bugungi kunda ham o'zbek matbuoti va ijtimoiy fikri rivojida muhim manba sifatida qadrlanadi.`
    },
    3: {
      description: `"Oyna" - 1913-1915 yillarda Samarqandda Mahmudxo'ja Behbudiy tomonidan nashr etilgan ijtimoiy-siyosiy, madaniy-ma'rifiy oylik jurnal. Jurnal turkiy (o'zbek) va fors tillarida chop etilgan. "Oyna" jurnalining jami 68 soni nashrdan chiqqan.

      Jurnalda ta'lim, madaniyat, din, axloq, tarix, adabiyot va fanlar haqidagi maqolalar, badiiy asarlar va xorij yangiliklari keng yoritilgan. "Oyna" o'zining mazmundorligi, ko'tarilgan masalalarning dolzarbligi va yuksak sifati bilan ajralib turgan.

      Behbudiy nashr etgan bu jurnal nafaqat Turkiston, balki qo'shni hududlarda ham mashhur bo'lgan va jadidchilik g'oyalarini tarqatishda muhim rol o'ynagan.`,
      content: [
        "Ta'lim va maktab islohotlari masalalari",
        "Din va axloq masalalari",
        "Tarix va madaniyat",
        "Adabiyot va san'at",
        "Fan va texnika yangiliklari",
        "Musulmon mamlakatlari hayoti",
        "Ijtimoiy-siyosiy maqolalar",
        "Samarqand viloyati hayotidan lavhalar",
        "Xorij yangiliklari"
      ],
      impact: `"Oyna" jurnali jadidchilik harakatining eng muhim nashrlaridan biri sifatida Turkiston ma'rifatparvarligida chuqur iz qoldirgan. Behbudiy rahbarligida nashr etilgan bu jurnal orqali jadidlarning asosiy g'oyalari, xususan, ta'lim tizimini isloh qilish, ilm-fan, madaniyat va adabiyotni rivojlantirish g'oyalari keng jamoatchilikka yetkazilgan.

      "Oyna" sahifalarida o'sha davr ziyolilari va ma'rifatparvarlarining eng dolzarb masalalarga oid maqolalari, badiiy asarlari va tarjimalari chop etilgan. Jurnal nafaqat axborot manbayi, balki ma'rifat va ilm-fan tarqatish quroli ham bo'lgan.

      Jurnal o'zbek matbuoti tarixida formatlanishi, mazmuni va sifati jihatidan yuksak darajadagi nashr sifatida o'rin tutadi. "Oyna" orqali Behbudiy va boshqa jadidlar milliy ma'naviyat, madaniyat va o'zlikni saqlash yo'lida muhim ishlarni amalga oshirgan.`
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Jurnal va gazetalar</h1>

      {selectedPeriodical ? (
        <div>
          <button
            className="mb-6 px-4 py-2 rounded-md flex items-center"
            style={{ backgroundColor: 'rgba(30, 91, 148, 0.1)', color: textColor }}
            onClick={() => setSelectedPeriodical(null)}
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
                  src={periodicals.find(p => p.id === selectedPeriodical).image}
                  alt={periodicals.find(p => p.id === selectedPeriodical).title}
                  className="w-64 h-auto object-cover rounded-md shadow-md"
                />
              </div>

              <div className="md:w-2/3 p-6">
                <h2 className="text-3xl font-bold mb-2">{periodicals.find(p => p.id === selectedPeriodical).title}</h2>
                <p className="text-xl opacity-80 mb-4">{periodicals.find(p => p.id === selectedPeriodical).type}, {periodicals.find(p => p.id === selectedPeriodical).year}</p>
                <p className="mb-6 text-sm italic">Muharrir: {periodicals.find(p => p.id === selectedPeriodical).editor}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Tavsif</h3>
                  <p className="whitespace-pre-line">{periodicalDetails[selectedPeriodical].description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Mundarija</h3>
                  <ul className="list-disc pl-6">
                    {periodicalDetails[selectedPeriodical].content.map((item, index) => (
                      <li key={index} className="mb-2">{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Tarixiy ahamiyati</h3>
                  <p className="whitespace-pre-line">{periodicalDetails[selectedPeriodical].impact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {periodicals.map((periodical) => (
            <div
              key={periodical.id}
              className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              style={{ backgroundColor: cardBg, borderColor: cardBorder, borderWidth: '1px' }}
              onClick={() => setSelectedPeriodical(periodical.id)}
            >
              <div className="h-48 overflow-hidden">
                <img src={periodical.image} alt={periodical.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{periodical.title}</h3>
                <p className="text-sm mb-1">{periodical.type}, {periodical.year}</p>
                <p className="text-xs opacity-70 mb-3">Muharrir: {periodical.editor}</p>
                <button
                  className="text-sm px-3 py-1 rounded-md text-white"
                  style={{ backgroundColor: '#1E5B94' }}
                >
                  Batafsil o'qish
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PeriodicalsSection;