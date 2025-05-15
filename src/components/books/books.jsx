import React, { useState } from 'react';

function BooksSection({ books, cardBg, cardBorder, textColor }) {
  const [selectedBook, setSelectedBook] = useState(null);
  const [filter, setFilter] = useState('all');

  // Kitob haqida to'liq ma'lumot
  const bookDetails = {
    1: {
      description: `"Turkiy Guliston yoxud axloq" (1913) - Abdulla Avloniyning eng mashhur va ahamiyatli asarlaridan biri hisoblanadi. Bu asarda muallif yosh avlod tarbiyasi, axloq-odob qoidalari, ma'rifat va ma'naviyat masalalarini ko'tarib chiqqan. 

      Asar ikki qismdan iborat bo'lib, birinchi qismda axloqiy fazilatlar, ikkinchi qismda esa axloqiy illatlar haqida so'z yuritiladi. Kitobda insonning ma'naviy kamoloti, yaxshi xulq-atvor, vatanparvarlik, ilm-ma'rifat, sabr-qanoat kabi fazilatlar ulug'lanadi.

      "Turkiy Guliston" nomidan ko'rinib turibdiki, asar Sa'diy Sheroziyning mashhur "Guliston" asariga hamohang ravishda yozilgan. Biroq, Avloniy o'z asarini turkiy (o'zbek) tilida yaratib, mahalliy muhitga va zamonaviy talablarga moslashtirgan.`,
      content: [
        "Muqaddima",
        "Birinchi qism: Axloqiy fazilatlar",
        "Ilm (bilim) haqida",
        "Vatan muhabbati",
        "Intizom (tartib) va uning ahamiyati",
        "Iffat va hayo",
        "Sabr va bardosh",
        "Ikkinchi qism: Axloqiy illatlar",
        "Jaholat (bilimsizlik) va uning zararlari",
        "Dangasalik va tanballik",
        "G'azab va uning oqibatlari",
        "Hasad va uning zararlari",
        "Yolg'onchilik va aldov"
      ],
      impact: `"Turkiy Guliston yoxud axloq" o'zbek pedagogikasi va ma'rifatchiligi tarixida muhim o'rin tutadi. Bu asar XX asr boshida jadidchilik harakatining asosiy g'oyalarini aks ettirgan va milliy ta'lim tizimini isloh qilishga qaratilgan muhim qo'llanma bo'lgan.

      Kitob yangi usul maktablarida darslik sifatida foydalanilgan va yoshlar tarbiyasida katta ahamiyat kasb etgan. Asar o'z davrida axloqiy-ma'rifiy qarashlarni shakllantirish, milliy o'zlikni anglash va ma'naviy qadriyatlarni saqlashga xizmat qilgan.

      "Turkiy Guliston" orqali Avloniy an'anaviy sharq falsafasi va axloq qoidalarini zamonaviy qadriyatlar bilan uyg'unlashtirishga harakat qilgan.`
    },
    2: {
      description: `"Padarkush" (1913) - Mahmudxo'ja Behbudiyning eng mashhur dramasi va Turkiston jadidlarining ilk teatr asarlaridan biri hisoblanadi. Drama o'sha davr Turkiston jamiyatidagi muammolarni, xususan, ma'rifatsizlik, jaholat va eskilik sarqitlarini keskin tanqid qilgan.

      Asarda boy oilaning ilmsiz, tarbiyasiz o'g'li tomonidan o'z otasining o'ldirilishi voqeasi tasvirlangan. Drama orqali muallif ilm-ma'rifatning ahamiyati, ota-ona va farzandlar o'rtasidagi munosabat, tarbiyaning roli kabi dolzarb masalalarni ko'tarib chiqqan.

      "Padarkush" fojia janrida yozilgan bo'lib, 4 pardadan iborat. Asar ilk bor 1913-yil 15-yanvar kuni Samarqandda sahnalashtirilgan va o'zbek milliy teatrining tug'ilishiga asos bo'lgan.`,
      content: [
        "Muqaddima - Behbudiyning kirish so'zi",
        "1-parda: Boy oilasining hayoti",
        "2-parda: O'g'ilning buzilishi",
        "3-parda: Otaning o'ldirilishi",
        "4-parda: Jazo va pushaymon"
      ],
      impact: `"Padarkush" dramasi o'zbek teatri va dramaturgiyasi tarixida inqilobiy ahamiyatga ega asardir. Bu asar milliy teatrning shakllanishiga turtki bergan va jadidlarning ma'rifatparvarlik g'oyalarini sahna orqali yoyishda muhim rol o'ynagan.

      Drama orqali Behbudiy ilm-ma'rifatsizlik va jaholatning oqibatlari haqida jamiyatga ta'sirli murojaat qilgan. Asarning asosiy g'oyasi - faqat ma'rifat va ilm orqaligina jamiyatni jaholatdan qutqarish mumkin, degan fikrdir.

      "Padarkush" dramasi nafaqat badiiy, balki ijtimoiy-siyosiy ahamiyatga ham ega bo'lib, jamiyatni isloh qilish, yangicha ta'lim va tarbiya tizimini joriy etish uchun kurashgan jadidlarning dasturi vazifasini bajargan.`
    },
    3: {
      description: `"Milliy uyg'onish: jasorat, ma'rifat, fidoyilik" (2002) - professor Begali Qosimov tomonidan yozilgan fundamental ilmiy tadqiqot asari. Bu kitobda XIX asr oxiri - XX asr boshidagi o'zbek adabiyotining eng muhim davri - jadid adabiyoti har tomonlama tahlil qilingan.

      Asar jadidchilik harakati tarixi, uning adabiyotdagi o'rni, jadid adiblari ijodi, ular yaratgan asarlarning mavzu va g'oyaviy yo'nalishlari, badiiy xususiyatlari haqida batafsil ma'lumot beradi.

      Kitobda Mahmudxo'ja Behbudiy, Abdulla Avloniy, Abdulhamid Cho'lpon, Abdurauf Fitrat, Abdulla Qodiriy kabi mashhur jadid adiblarining hayoti va ijodi, ularning o'zbek adabiyoti rivojiga qo'shgan hissasi ilmiy asosda yoritilgan.`,
      content: [
        "Kirish: Jadidchilik harakati va uning adabiyotdagi ifodasi",
        "I bob: Jadid adabiyotining shakllanishi va rivojlanish bosqichlari",
        "II bob: Jadid adabiyotining janr xususiyatlari",
        "III bob: Mahmudxo'ja Behbudiy ijodi",
        "IV bob: Abdulla Avloniy va uning adabiy merosi",
        "V bob: Abdulhamid Cho'lpon ijodiyoti",
        "VI bob: Abdurauf Fitrat - jadid adabiyotining yirik vakili",
        "VII bob: Jadid nasri va dramaturgiyasi",
        "VIII bob: Jadid adabiyotida she'riyat",
        "IX bob: Jadid matbuoti va adabiy tanqid",
        "Xulosa: Jadid adabiyotining o'zbek adabiyoti tarixidagi o'rni"
      ],
      impact: `"Milliy uyg'onish: jasorat, ma'rifat, fidoyilik" kitobining ilmiy-madaniy ahamiyati juda katta. Bu asar mustaqillik davrida jadidlar merosini chuqur va xolisona o'rganish, sovet davrida noto'g'ri baholangan adiblar ijodini qayta kashf etish yo'lidagi muhim qadamlardan biri bo'ldi.

      Professor Begali Qosimovning bu tadqiqoti jadid adabiyotini o'zbek adabiyoti tarixining eng yorqin sahifalaridan biri sifatida ko'rsatib bergan va shu davr adabiyotini o'rganishda asosiy manbalardan biriga aylangan.

      Kitob nafaqat adabiyotshunoslar va tadqiqotchilar, balki keng o'quvchilar ommasi uchun ham muhim manba bo'lib xizmat qilmoqda. Bu asar orqali ko'plab o'quvchilar jadid adabiyotining g'oyaviy-badiiy olamiga kirib, milliy ma'naviy merosimizning bu qimmatli qatlamini chuqurroq anglab olish imkoniga ega bo'ldilar.`
    },

    4: {
      "description": "`Ismoil Gaspirinskiy va Turkiston` (2005) - mas'ul muharrir Naim Karimov bo'lgan ilmiy-nazariy to‘plam. Asar XIX asr oxiri – XX asr boshlarida Turkistonda jadidchilik harakati va ma'rifatparvarlik g‘oyalarining shakllanishida Ismoil Gaspirinskiyning tutgan o‘rni, uning faoliyati va 'Tercüman' gazetasi orqali musulmon dunyosiga ko‘rsatgan ta’siri haqida hikoya qiladi.\n\nUnda Gaspirinskiyning yangi usul maktablari, ta’limdagi islohotlar, diniy-ma’rifiy yangilanish borasidagi qarashlari va ularning Turkiston jadidlariga ta’siri keng yoritilgan. Kitob Gaspirinskiy shaxsini nafaqat jurnalist va islohotchi sifatida, balki musulmon ummati uchun yo‘lko‘rsatkich bo‘lgan ma’rifatparvar arbob sifatida tahlil qiladi.",
      "content": [
        "Kirish: Ismoil Gaspirinskiy shaxsiyati va tarixiy davr",
        "I bob: Gaspirinskiy va 'Tercüman' gazetasi",
        "II bob: Usuli jadid maktablari va ta’lim islohotlari",
        "III bob: Gaspirinskiyning musulmon dunyosidagi obro‘si",
        "IV bob: Gaspirinskiy va Turkiston jadidlari o‘rtasidagi aloqalar",
        "V bob: Turkiston matbuoti va Gaspirinskiy g‘oyalari",
        "VI bob: Jadidchilikdagi Gaspirinskiy ta’sirining davomiyligi",
        "Xulosa: Gaspirinskiyning tarixiy merosi"
      ],
      "impact": "`Ismoil Gaspirinskiy va Turkiston` asari jadidchilik harakatining shakllanishi va rivojlanishida Gaspirinskiy g‘oyalarining naqadar muhim bo‘lganini ko‘rsatib bergan. Kitob Gaspirinskiyni Turkiston ma’naviy uyg‘onishining ilhom manbai sifatida tasvirlaydi.\n\nBu asar tarixchilar, tadqiqotchilar, talabalar va ma’naviyat masalalariga qiziquvchilar uchun bebaho manbadir. U Gaspirinskiyning ilmiy merosi orqali musulmon jamoalarining zamonaviylashuv yo‘llarini tushunishga xizmat qiladi."
    }

  };

  // Filtrlangan kitoblar
  const filteredBooks = filter === 'all' ? books : books.filter(book => book.type === filter);

  // BooksSection komponenti davom ettirildi
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Kitoblar</h1>

      {selectedBook ? (
        <div>
          <button
            className="mb-6 px-4 py-2 rounded-md flex items-center"
            style={{ backgroundColor: 'rgba(30, 91, 148, 0.1)', color: textColor }}
            onClick={() => setSelectedBook(null)}
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
                  src={books.find(b => b.id === selectedBook).image}
                  alt={books.find(b => b.id === selectedBook).title}
                  className="w-64 h-auto object-cover rounded-md shadow-md"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-lg">{books.find(b => b.id === selectedBook).title}</h3>
                  <p className="mt-1">{books.find(b => b.id === selectedBook).author}</p>
                  <p className="mt-1 opacity-70">{books.find(b => b.id === selectedBook).year}</p>
                </div>
              </div>

              <div className="md:w-2/3 p-6">
                <h2 className="text-3xl font-bold mb-6">Kitob haqida</h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Tavsif</h3>
                  <p className="whitespace-pre-line">{bookDetails[selectedBook].description}</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Mundarija</h3>
                  <ul className="list-disc pl-6">
                    {bookDetails[selectedBook].content.map((item, index) => (
                      <li key={index} className="mb-2">{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Ahamiyati va ta'siri</h3>
                  <p className="whitespace-pre-line">{bookDetails[selectedBook].impact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-6 flex flex-wrap gap-4">
            <button
              className={`px-4 py-2 rounded-md transition-colors ${filter === 'all' ? 'text-white' : 'hover:bg-opacity-10 hover:bg-gray-500'}`}
              style={{ backgroundColor: filter === 'all' ? '#1E5B94' : 'transparent', color: filter === 'all' ? 'white' : textColor }}
              onClick={() => setFilter('all')}
            >
              Barcha kitoblar
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${filter === 'original' ? 'text-white' : 'hover:bg-opacity-10 hover:bg-gray-500'}`}
              style={{ backgroundColor: filter === 'original' ? '#24A96B' : 'transparent', color: filter === 'original' ? 'white' : textColor }}
              onClick={() => setFilter('original')}
            >
              Jadidlar asarlari
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${filter === 'research' ? 'text-white' : 'hover:bg-opacity-10 hover:bg-gray-500'}`}
              style={{ backgroundColor: filter === 'research' ? '#1E5B94' : 'transparent', color: filter === 'research' ? 'white' : textColor }}
              onClick={() => setFilter('research')}
            >
              Tadqiqotlar
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                style={{ backgroundColor: cardBg, borderColor: cardBorder, borderWidth: '1px' }}
                onClick={() => setSelectedBook(book.id)}
              >
                <div className="h-64 overflow-hidden flex items-center justify-center">
                  <img src={book.image} alt={book.title} className="h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
                  <p className="text-sm mb-2">{book.author}</p>
                  <p className="text-xs opacity-70">{book.year}</p>
                  <div className="mt-3">
                    <span
                      className="inline-block px-2 py-1 rounded-full text-xs text-white"
                      style={{
                        backgroundColor: book.type === 'original' ? '#24A96B' : '#1E5B94'
                      }}
                    >
                      {book.type === 'original' ? 'Jadidlar asari' : 'Tadqiqot'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default BooksSection;