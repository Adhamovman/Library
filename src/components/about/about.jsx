function AboutSection({ textColor, cardBg, cardBorder }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Biz haqimizda</h1>
      
      <div 
        className="rounded-lg p-6 mb-8 shadow-md"
        style={{ backgroundColor: cardBg, borderColor: cardBorder, borderWidth: '1px' }}
      >
        <h2 className="text-2xl font-semibold mb-4">Elektron kutubxona maqsadi</h2>
        <p className="mb-4">
          "Jadid ma'rifatchiligi" elektron kutubxonasining asosiy maqsadi o'zbek jadidlarining boy merosini saqlash, o'rganish va keng ommaga yetkazishdir. Bu loyiha orqali biz quyidagi vazifalarni amalga oshirishni maqsad qilib qo'yganmiz:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Jadidlar asarlarini elektron formatda jamlash va saqlash</li>
          <li className="mb-2">Jadidlar hayoti va ijodi haqidagi ilmiy tadqiqotlarni to'plash</li>
          <li className="mb-2">Jadid matbuoti namunalarini tadqiqotchilar uchun ochiq qilish</li>
          <li className="mb-2">Jadidchilik harakati tarixi haqida ma'lumotlarni tizimlash</li>
          <li className="mb-2">O'zbek madaniyati va ma'rifati rivojida jadidlarning o'rnini ko'rsatish</li>
        </ul>
      </div>
      
      <div 
        className="rounded-lg p-6 mb-8 shadow-md"
        style={{ backgroundColor: cardBg, borderColor: cardBorder, borderWidth: '1px' }}
      >
        <h2 className="text-2xl font-semibold mb-4">Kutubxona bo'limlari</h2>
        <p className="mb-4">
          Kutubxonamiz quyidagi asosiy bo'limlardan tashkil topgan:
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2"><strong>Jadidlar</strong> - Mashhur jadid ma'rifatparvarlari haqida ma'lumotlar</li>
          <li className="mb-2"><strong>Kitoblar</strong> - Jadidlar asarlari va ular haqidagi kitoblar to'plami</li>
          <li className="mb-2"><strong>Maqolalar</strong> - Jadidlar merosini o'rganishga bag'ishlangan ilmiy maqolalar</li>
          <li className="mb-2"><strong>Jurnal va gazetalar</strong> - Jadidlar nashr etgan va ular haqidagi davriy matbuot materiallari</li>
          <li className="mb-2"><strong>Videolar</strong> - Jadidchilik harakati tarixi, jadidlar hayoti va merosiga bag'ishlangan video materiallar</li>
        </ul>
      </div>
      
      <div 
        className="rounded-lg p-6 shadow-md"
        style={{ backgroundColor: cardBg, borderColor: cardBorder, borderWidth: '1px' }}
      >
        <h2 className="text-2xl font-semibold mb-4">Hamkorlik taklifi</h2>
        <p className="mb-4">
          "Jadid ma'rifatchiligi" elektron kutubxonasi doimo yangi materiallar bilan boyib boradi. Agar sizda jadidlar merosi bilan bog'liq materiallar yoki takliflar bo'lsa, biz bilan bog'lanishingizni so'raymiz.
        </p>
        <div className="bg-opacity-10 p-4 rounded-md mb-4" style={{ color: textColor }}>
          <p className="font-semibold mb-2">Bog'lanish uchun:</p>
          <p className="mb-1">Email: info@jadid-marifat.uz</p>
          <p>Telefon: +998 XX XXX XX XX</p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;