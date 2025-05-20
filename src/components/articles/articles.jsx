import React, { useState } from 'react';

function ArticlesSection({ articles, cardBg, cardBorder, textColor }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Maqola haqida to'liq ma'lumot
  const articleDetails = {
    1: {
      abstract: `Ushbu maqolada XX asr boshida Turkiston o'lkasida ta'lim tizimidagi islohotlar va ularning jadidchilik harakati bilan bog'liqligi tahlil qilinadi. Maqolada jadidlarning yangi usul maktablari, ular joriy etgan o'qitish metodlari, darsliklar yaratish borasidagi sa'y-harakatlari va ma'rifatchilik g'oyalarini yoyishdagi roli yoritilgan.`,
      content: `Maqolada XX asr boshlarida Turkistonda mavjud bo'lgan an'anaviy ta'lim tizimi - maktab va madrasalar hamda ularning faoliyatidagi muammolar tahlil etiladi. Jadidlar tomonidan tashkil etilgan "usuli jadid" maktablarining pedagogik tamoyillari, o'quv dasturlari, darsliklar va o'qitish metodlari batafsil o'rganilgan.

      Tadqiqotda Mahmudxo'ja Behbudiy, Abdulla Avloniy, Munavvar qori Abdurashidxonov kabi mashhur jadid ma'rifatparvarlarining ta'lim sohasidagi islohotchilik faoliyati ko'rsatib berilgan. Shuningdek, jadidlar tashkil etgan maktablarning geografiyasi, ularning moliyaviy ahvoli, o'qituvchilar tarkibi va o'quvchilar kontingenti haqida statistik ma'lumotlar keltirilgan.

      Maqolada jadidlarning ta'lim sohasidagi faoliyati mahalliy mustamlaka ma'muriyati va konservativ diniy doiralar tomonidan qarshiliklarga uchrashi hamda bu to'siqlarni yengib o'tish jarayonlari ham yoritilgan. Shuningdek, jadid maktablari bilan rus-tuzem maktablari o'rtasidagi farqlar va o'xshashliklar qiyosiy tahlil qilingan.

      Tadqiqot natijalariga ko'ra, jadidlarning ta'lim sohasidagi islohotlari Turkiston jamiyatida ma'rifat tarqatish, milliy o'zlikni anglash va ijtimoiy taraqqiyotga erishish yo'lidagi muhim qadam bo'lganligi ta'kidlangan.`,
      references: [
        "Qosimov B. Milliy uyg'onish. Toshkent, 2002.",
        "Alimova D. Jadidchilik harakati va uning ijtimoiy-siyosiy mohiyati. Toshkent, 1999.",
        "Xoliqova R. Markaziy Osiyoda jadidchilik va ta'lim islohoti. Toshkent, 2005.",
        "Mahmudxo'ja Behbudiy. Tanlangan asarlar. Toshkent, 1997.",
        "Abdulla Avloniy. Tanlangan asarlar. 2-jild. Toshkent, 1998.",
        "TsGA RUz, f. 47, op. 1, d. 149, l. 18-20."
      ]
    },
    2: {
      abstract: `Ushbu maqolada jadidlar matbuotining til xususiyatlari va uslubiy o'ziga xosligi o'rganilgan. Tadqiqotda "Taraqqiy", "Xurshid", "Sadoi Turkiston", "Oyna" kabi jadid gazeta va jurnallari tilining leksik, grammatik va stilistik xususiyatlari, publicistik diskurs va lingvistik vositalar tahlil qilingan.`,
      content: `Maqolada jadid matbuoti namunalari bo'lgan "Taraqqiy", "Xurshid", "Sadoi Turkiston", "Oyna", "Turon" kabi gazeta va jurnallar materiallarida qo'llanilgan til xususiyatlari keng ko'lamda tahlil etilgan. Tadqiqotda jadidlar matbuotining o'zbek adabiy tili shakllanishiga qo'shgan hissasi, uning lug'at tarkibi, grammatik qurilishi va uslubiy xususiyatlari ochib berilgan.

      Muallifning ta'kidlashicha, jadidlar matbuoti o'z davrida yangi ijtimoiy-siyosiy, madaniy-ma'rifiy terminlar va iboralarni keng iste'molga kiritdi. Ular rus tili va yevropa tillari orqali o'zlashgan xalqaro terminlarni milliy til negizida moslashtirish va ommalashtirishga harakat qilishgan. Bundan tashqari, jadidlar matbuoti tilida arab va fors tillari ta'sirini kamaytirib, sodda va tushunarli o'zbek adabiy tilini shakllantirish tendensiyasi kuzatilgan.

      Maqolada jadid nashrlari tilining publitsistik uslubini yaratishdagi roli alohida ta'kidlangan. Bu nashrlarda qo'llanilgan sarlavhalar, shiorlar, murojaatlar, ma'rifiy-targ'ibot materiallarining lingvistik tahlili amalga oshirilgan.

      Shuningdek, jadidlar matbuotida keng qo'llanilgan badiiy-tasviriy vositalar, obrazli iboralar, ritorik usullar va stilistik figuralar tadqiq etilgan. Maqolada jadid nashrlari tilini tahlil qilish orqali o'sha davr ijtimoiy-siyosiy va madaniy-ma'rifiy hayotini o'rganishning imkoniyatlari ko'rsatib berilgan.`,
      references: [
        "Ne'matov H., Bozorov O. Til va nutq. Toshkent, 1993.",
        "Sodiqov Q. Turkiy yozma yodgorliklar tili: adabiy til tarixidan. Toshkent, 2006.",
        "Mahmudov N. Tilning mukammal tadqiqi yo'llarini izlab. Toshkent, 2012.",
        "Sirojiddinov Sh., Umarova S. Jadid publitsistikasi. Toshkent, 2011.",
        "Dolimov U. Turkistonda jadid maktablari. Toshkent, 2006."
      ]
    },
    3: {
      abstract: `Maqolada jadidlar merosining bugungi kun uchun ahamiyati, uning zamonaviy O'zbekiston madaniyati, ta'lim tizimi va ijtimoiy-siyosiy fikr rivojidagi o'rni baholanadi. Muallif jadidlar g'oyalarining mustaqillik davri islohotlari bilan uyg'unligi va davomiyligini ko'rsatib bergan.`,
      content: `Maqolada jadidlar ilgari surgan g'oyalar va ularning bugungi kun O'zbekistoni uchun dolzarbligi atroflicha tahlil qilingan. Muallif jadid ma'rifatparvarlarining milliy ta'lim tizimini isloh qilish, matbuot erkinligi, ayollar huquqlari, ijtimoiy adolat, milliy o'zlikni anglash kabi masalalardagi qarashlari zamonaviy jamiyat talablari bilan hamohang ekanligini ko'rsatib bergan.

      Tadqiqotda Behbudiy, Fitrat, Cho'lpon, Avloniy kabi jadid ma'rifatparvarlari ilgari surgan g'oyalarning bugungi kunda davom ettirilayotgani va rivojlantirilayotganiga alohida e'tibor qaratilgan. Maqolada jadidlar merosidan foydalanish, uni o'rganish va keng ommaga yetkazish borasida amalga oshirilayotgan ishlar, xususan, jadidlar asarlari va ular haqidagi tadqiqotlarning nashr etilishi, teatr sahna asarlari va badiiy filmlar yaratilishi tahlil qilingan.

      Muallif jadidlar g'oyalarining zamonaviy O'zbekiston ta'lim tizimi, madaniyati va ijtimoiy-siyosiy hayotiga ta'siri masalasida to'xtalib, bu merosning milliy taraqqiyot va ma'naviy yangilanish jarayonlaridagi ahamiyatini ochib bergan. Shuningdek, jadidlar merosini yanada chuqurroq o'rganish va undan samarali foydalanish borasidagi takliflar ilgari surilgan.

      Maqolada jadidlar merosining global kontekstda ahamiyati ham ko'rsatib berilgan. Muallif, jadidlarning ta'lim, matbuot erkinligi, insoniy qadriyatlar borasidagi g'oyalari umuminsoniy ahamiyatga ega ekanligini ta'kidlagan.`,
      references: [
        "Karimov I. Yuksak ma'naviyat - yengilmas kuch. Toshkent, 2008.",
        "Qosimov B. O'zbek adabiyoti va madaniyati tarixining muammolari. Toshkent, 2016.",
        "Jo'rayev N. O'zbekiston tarixi: Mustaqillik davri. Toshkent, 2005.",
        "Sirojiddinov Sh. Cho'lpon va jadidchilik. Toshkent, 2020.",
        "Abdullaev R. Milliy istiqlol g'oyasi: asosiy tushunchalar va tamoyillar. Toshkent, 2001."
      ]
    },

    4: {
      abstract: `Maqolada jadidchilik harakatining tarixiy shakllanishi, uning asosiy g'oyalari va bugungi kun O'zbekistoni uchun ahamiyati batafsil tahlil qilingan. Muallif jadidlar tomonidan ilgari surilgan islohotchilik g'oyalarining milliy o'zlikni anglash va zamonaviy taraqqiyot jarayonlariga ta'sirini ko'rsatib bergan.`,
      content: `Maqolada XIX asr oxiri - XX asr boshlarida Turkistonda shakllangan jadidchilik harakatining tarixiy sharoitlari, g'oyaviy asoslari va asosiy yo'nalishlari chuqur tahlil etilgan. Muallif jadidchilik harakatining ma'rifatparvarlik g'oyalari, yangi usul maktablarini tashkil etish, matbuot erkinligi, til va adabiyot islohotlari kabi masalalarga alohida e'tibor qaratgan.

  Tadqiqotda Mahmudxo'ja Behbudiy, Abdulla Avloniy, Abdurauf Fitrat, Abdulhamid Cho'lpon kabi jadid ma'rifatparvarlarining ijtimoiy-siyosiy va madaniy-ma'rifiy qarashlari batafsil yoritilgan. Muallif jadidlarning milliy o'zlikni anglash, til va adabiyotni isloh qilish, zamonaviy bilimlarni egallash orqali millatni taraqqiyotga olib chiqish g'oyalarini tahlil qilgan.

  Maqolada jadidchilik harakatining tarixiy ahamiyati va bugungi O'zbekiston ijtimoiy-siyosiy hayotidagi o'rni ham ko'rsatib berilgan. Muallif jadidlar g'oyalarining milliy mustaqillik mafkurasi shakllanishiga ta'siri, ularning ma'rifat va taraqqiyot to'g'risidagi qarashlarining zamonaviy talqini haqida so'z yuritgan.

  Shuningdek, maqolada jadidchilik merosini o'rganish va undan zamonaviy sharoitda foydalanish masalalari, bu borada olib borilayotgan ilmiy tadqiqotlar va amaliy ishlar tahlili berilgan. Muallif jadidlar ilgari surgan g'oyalarning bugungi kunda yangicha ahamiyat kasb etayotganini ta'kidlab, ularning milliy taraqqiyot yo'lidagi dolzarbligini ko'rsatib bergan.`,
      references: [
        "Qosimov B. Milliy uyg'onish: ma'rifat, jasorat, fidoyilik. Toshkent, 2002.",
        "Alimova D. Jadidchilik harakati va uning tarixiy ahamiyati. Toshkent, 1999.",
        "Saidov A. Jadidlar merosi va zamonaviy O'zbekiston. Toshkent, 2019.",
        "Karimov N. XX asr o'zbek adabiyoti taraqqiyotining o'ziga xos xususiyatlari. Toshkent, 2010.",
        "Rizaev Sh. Jadid dramasi. Toshkent, 1997."
      ]
    },

    5: {
      abstract: `Maqolada XX asr boshlarida jadidlar tomonidan nashr etilgan gazeta va jurnallarning tarixiy ahamiyati, ularning milliy uyg'onish va ijtimoiy-siyosiy islohotlar yo'lidagi o'rni tahlil qilingan. Muallif "Sadoi Turkiston", "Taraqqiy", "Xurshid", "Oyina" kabi nashrlarda ilgari surilgan g'oyalarning davr ijtimoiy-siyosiy hayotidagi ta'sirini ochib bergan.`,
      content: `Maqolada jadidlar matbuotining shakllanishi, uning rivojlanish bosqichlari va milliy uyg'onish davridagi o'rni atroflicha tahlil qilingan. Muallif jadidlarning matbuot orqali milliy o'zlikni anglash, ma'rifat tarqatish va ijtimoiy islohotlarni targ'ib qilish borasidagi faoliyatini batafsil yoritgan.

  Tadqiqotda "Taraqqiy", "Xurshid", "Sadoi Turkiston", "Oyina", "Al-Isloh" kabi gazeta va jurnallarning nashri, ularning mazmuni va yo'nalishi, redaktor va mualliflar tarkibi, targ'ib qilingan g'oyalar tahlil qilingan. Muallif jadidlar matbuotining o'sha davr ijtimoiy-siyosiy hayotidagi tutgan o'rni, uning jamiyat ongini o'zgartirishdagi ahamiyati haqida so'z yuritgan.

  Maqolada jadidlar matbuotida ko'tarilgan asosiy masalalar - ta'lim islohoti, til va adabiyot, ayollar masalasi, milliy taraqqiyot, diniy islohot, siyosiy va ijtimoiy o'zgarishlar - atroflicha yoritilgan. Muallif matbuot orqali jadidlar qanday g'oyalarni targ'ib qilgani, qanday muammolarni ko'targani va qanday yechimlarni taklif qilganini ko'rsatib bergan.

  Shuningdek, maqolada jadidlar matbuotining zamonaviy o'zbek jurnalistikasi rivojidagi ahamiyati, uning milliy matbuot tarixi va an'analaridagi o'rni ham tahlil qilingan. Muallif jadidlar boshlagan erkin matbuot va so'z erkinligi tamoyillarining bugungi O'zbekiston matbuoti uchun ahamiyatini ta'kidlagan.`,
      references: [
        "Dolimov U. Turkistonda jadid maktablari. Toshkent, 2006.",
        "Karimov N. XX asr o'zbek matbuoti tarixidan. Toshkent, 2011.",
        "Qosimov B. Milliy uyg'onish: jasorat, ma'rifat, fidoyilik. Toshkent, 2002.",
        "Rizaev Sh. Jadid dramasi. Toshkent, 1997.",
        "Shamsutdinov R. Turkiston matbuoti tarixi. Toshkent, 2007."
      ]
    },

    6: {
      abstract: `Maqolada jadidlar merosining bugungi kun uchun ahamiyati, uning zamonaviy O'zbekiston madaniyati, ta'lim tizimi va ijtimoiy-siyosiy fikr rivojidagi o'rni baholanadi. Muallif jadidlar g'oyalarining mustaqillik davri islohotlari bilan uyg'unligi va davomiyligini ko'rsatib bergan.`,
      content: `Maqolada jadidlar ilgari surgan g'oyalar va ularning bugungi kun O'zbekistoni uchun dolzarbligi atroflicha tahlil qilingan. Muallif jadid ma'rifatparvarlarining milliy ta'lim tizimini isloh qilish, matbuot erkinligi, ayollar huquqlari, ijtimoiy adolat, milliy o'zlikni anglash kabi masalalardagi qarashlari zamonaviy jamiyat talablari bilan hamohang ekanligini ko'rsatib bergan.

  Tadqiqotda Behbudiy, Fitrat, Cho'lpon, Avloniy kabi jadid ma'rifatparvarlari ilgari surgan g'oyalarning bugungi kunda davom ettirilayotgani va rivojlantirilayotganiga alohida e'tibor qaratilgan. Maqolada jadidlar merosidan foydalanish, uni o'rganish va keng ommaga yetkazish borasida amalga oshirilayotgan ishlar, xususan, jadidlar asarlari va ular haqidagi tadqiqotlarning nashr etilishi, teatr sahna asarlari va badiiy filmlar yaratilishi tahlil qilingan.

  Muallif jadidlar g'oyalarining zamonaviy O'zbekiston ta'lim tizimi, madaniyati va ijtimoiy-siyosiy hayotiga ta'siri masalasida to'xtalib, bu merosning milliy taraqqiyot va ma'naviy yangilanish jarayonlaridagi ahamiyatini ochib bergan. Shuningdek, jadidlar merosini yanada chuqurroq o'rganish va undan samarali foydalanish borasidagi takliflar ilgari surilgan.

  Maqolada jadidlar merosining global kontekstda ahamiyati ham ko'rsatib berilgan. Muallif, jadidlarning ta'lim, matbuot erkinligi, insoniy qadriyatlar borasidagi g'oyalari umuminsoniy ahamiyatga ega ekanligini ta'kidlagan.`,
      references: [
        "Karimov I. Yuksak ma'naviyat - yengilmas kuch. Toshkent, 2008.",
        "Qosimov B. O'zbek adabiyoti va madaniyati tarixining muammolari. Toshkent, 2016.",
        "Jo'rayev N. O'zbekiston tarixi: Mustaqillik davri. Toshkent, 2005.",
        "Sirojiddinov Sh. Cho'lpon va jadidchilik. Toshkent, 2020.",
        "Abdullaev R. Milliy istiqlol g'oyasi: asosiy tushunchalar va tamoyillar. Toshkent, 2001."
      ]
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Maqolalar</h1>

      {selectedArticle ? (
        <div>
          <button
            className="mb-6 px-4 py-2 rounded-md flex items-center"
            style={{ backgroundColor: 'rgba(30, 91, 148, 0.1)', color: textColor }}
            onClick={() => setSelectedArticle(null)}
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
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{articles.find(a => a.id === selectedArticle).title}</h2>
              <div className="flex items-center mb-6">
                <span className="mr-4">{articles.find(a => a.id === selectedArticle).author}</span>
                <span className="opacity-70">{articles.find(a => a.id === selectedArticle).source}, {articles.find(a => a.id === selectedArticle).year}</span>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Annotatsiya</h3>
                <p className="italic">{articleDetails[selectedArticle].abstract}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Maqola mazmuni</h3>
                <p className="whitespace-pre-line">{articleDetails[selectedArticle].content}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Foydalanilgan adabiyotlar</h3>
                <ul className="list-disc pl-6">
                  {articleDetails[selectedArticle].references.map((ref, index) => (
                    <li key={index} className="mb-2">{ref}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              style={{ backgroundColor: cardBg, borderColor: cardBorder, borderWidth: '1px' }}
              onClick={() => setSelectedArticle(article.id)}
            >
              <div className="h-48 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-sm mb-1">{article.author}</p>
                <p className="text-xs opacity-70 mb-3">{article.source}, {article.year}</p>
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

export default ArticlesSection;