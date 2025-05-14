import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Book, FileText, Newspaper, Video, Users, Info, Home } from 'lucide-react';

// O'zbek milliy ranglarini qo'llaymiz
const theme = {
  primary: '#1E5B94', // Ko'k
  secondary: '#FFFFFF', // Oq
  accent: '#24A96B', // Yashil
  dark: '#03204C', // To'q ko'k
  light: '#F5F7FA', // Och kulrang
  textDark: '#031B34',
  textLight: '#FFFFFF',
};

export default function JadidLibrary() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Asosiy matn va ranglar uchun stil
  const bodyBg = darkMode ? theme.dark : theme.light;
  const textColor = darkMode ? theme.textLight : theme.textDark;
  const headerBg = darkMode ? theme.dark : theme.primary;
  const footerBg = darkMode ? theme.dark : theme.primary;
  const cardBg = darkMode ? '#062348' : theme.secondary;
  const cardBorder = darkMode ? '#1E5B94' : '#E3E8EF';

  const navItems = [
    { id: 'home', label: 'Bosh sahifa', icon: <Home size={20} /> },
    { id: 'about', label: 'Biz haqimizda', icon: <Info size={20} /> },
    { id: 'jadids', label: 'Jadidlar', icon: <Users size={20} /> },
    { id: 'books', label: 'Kitoblar', icon: <Book size={20} /> },
    { id: 'articles', label: 'Maqolalar', icon: <FileText size={20} /> },
    { id: 'periodicals', label: 'Jurnal va gazetalar', icon: <Newspaper size={20} /> },
    { id: 'videos', label: 'Videolar', icon: <Video size={20} /> },
  ];

  // Bo'limlar uchun ma'lumotlar
  const jadids = [
    {
      id: 1,
      name: 'Abdulla Avloniy',
      years: '1878-1934',
      image: '/api/placeholder/280/320',
      shortBio: 'O'zbek ma'rifatparvari, yozuvchi, shoir, dramaturg, jurnalist, pedagog va jamoat arbobi.',
    },
    {
      id: 2,
      name: 'Mahmudxo'ja Behbudiy',
      years: '1875-1919',
      image: '/api/placeholder/280/320',
      shortBio: 'Turkiston jadidchilik harakatining asoschisi, ma'rifatparvar, yozuvchi, jurnalist va jamoat arbobi.',
    },
    {
      id: 3,
      name: 'Abdulhamid Cho'lpon',
      years: '1897-1938',
      image: '/api/placeholder/280/320',
      shortBio: 'O'zbek shoiri, yozuvchi, dramaturg va tarjimon.',
    },
    {
      id: 4,
      name: 'Abdurauf Fitrat',
      years: '1886-1938',
      image: '/api/placeholder/280/320',
      shortBio: 'O'zbek yozuvchisi, shoir, olim, dramaturg, adabiyotshunos va jamoat arbobi.',
    },
  ];

  const books = [
    {
      id: 1,
      title: 'Turkiy Guliston yoxud axloq',
      author: 'Abdulla Avloniy',
      year: '1913',
      image: '/api/placeholder/200/300',
      type: 'original',
    },
    {
      id: 2,
      title: 'Padarkush',
      author: 'Mahmudxo'ja Behbudiy',
      year: '1913',
      image: '/api/placeholder/200/300',
      type: 'original',
    },
    {
      id: 3,
      title: 'Jadid adabiyoti tarixi',
      author: 'Begali Qosimov',
      year: '2002',
      image: '/api/placeholder/200/300',
      type: 'research',
    },
    {
      id: 4,
      title: 'Turkistonda jadidchilik harakati',
      author: 'Sherali Jo'rayev',
      year: '2015',
      image: '/api/placeholder/200/300',
      type: 'research',
    },
  ];

  const articles = [
    {
      id: 1,
      title: 'XX asr boshida Turkistonda ta'lim tizimi islohotlari',
      author: 'Tohir Qahhor',
      source: 'O'zbekiston tarixi jurnali',
      year: '2018',
      image: '/api/placeholder/300/200',
    },
    {
      id: 2,
      title: 'Jadidlar matbuotining tili va uslubi',
      author: 'Bahtiyor Mengliyev',
      source: 'Til va adabiyot ta'limi',
      year: '2019',
      image: '/api/placeholder/300/200',
    },
    {
      id: 3,
      title: 'Jadidlar merosi: bugungi kun ahamiyati',
      author: 'Shuhrat Sirojiddinov',
      source: 'O'zbekiston adabiyoti va san'ati',
      year: '2020',
      image: '/api/placeholder/300/200',
    },
  ];

  const periodicals = [
    {
      id: 1,
      title: 'Taraqqiy',
      type: 'Gazeta',
      year: '1906',
      editor: 'Ismoil Obidov',
      image: '/api/placeholder/300/200',
    },
    {
      id: 2,
      title: 'Sadoi Turkiston',
      type: 'Gazeta',
      year: '1914-1915',
      editor: 'Ubaydulla Xo'jayev',
      image: '/api/placeholder/300/200',
    },
    {
      id: 3,
      title: 'Oyna',
      type: 'Jurnal',
      year: '1913-1915',
      editor: 'Mahmudxo'ja Behbudiy',
      image: '/api/placeholder/300/200',
    },
  ];

  const videos = [
    {
      id: 1,
      title: 'Jadidlar tarixi: yangi qarash',
      author: 'Tarix instituti',
      duration: '45:18',
      image: '/api/placeholder/320/180',
    },
    {
      id: 2,
      title: 'Abdulla Avloniy hayoti va ijodi',
      author: 'O'zMU professori S.Karimov',
      duration: '38:22',
      image: '/api/placeholder/320/180',
    },
    {
      id: 3,
      title: 'Turkiston jadidchiligi va uning merosi',
      author: 'Jahon iqtisodiyoti va diplomatiya universiteti',
      duration: '52:45',
      image: '/api/placeholder/320/180',
    },
  ];

  // Sahifalarni ko'rsatish
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection theme={theme} cardBg={cardBg} cardBorder={cardBorder} textColor={textColor} jadids={jadids} books={books} />;
      case 'about':
        return <AboutSection textColor={textColor} cardBg={cardBg} cardBorder={cardBorder} />;
      case 'jadids':
        return <JadidsSection jadids={jadids} cardBg={cardBg} cardBorder={cardBorder} textColor={textColor} />;
      case 'books':
        return <BooksSection books={books} cardBg={cardBg} cardBorder={cardBorder} textColor={textColor} />;
      case 'articles':
        return <ArticlesSection articles={articles} cardBg={cardBg} cardBorder={cardBorder} textColor={textColor} />;
      case 'periodicals':
        return <PeriodicalsSection periodicals={periodicals} cardBg={cardBg} cardBorder={cardBorder} textColor={textColor} />;
      case 'videos':
        return <VideosSection videos={videos} cardBg={cardBg} cardBorder={cardBorder} textColor={textColor} />;
      default:
        return <HomeSection theme={theme} cardBg={cardBg} cardBorder={cardBorder} textColor={textColor} jadids={jadids} books={books} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300`} style={{ backgroundColor: bodyBg, color: textColor }}>
      {/* Header */}
      <header className="py-4 px-6 shadow-md" style={{ backgroundColor: headerBg }}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="text-white font-semibold text-2xl">Jadid Ma'rifatchiligi</div>
          </div>
          
          {/* Desktop navigatsiya */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm transition-colors ${
                  activeSection === item.id ? 'text-white bg-opacity-30 bg-white' : 'text-white hover:bg-opacity-20 hover:bg-white'
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
            
            <button
              onClick={toggleDarkMode}
              className="text-white p-2 rounded-full hover:bg-opacity-20 hover:bg-white"
              aria-label="Theme toggler"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
          
          {/* Mobile menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="text-white p-2 rounded-full hover:bg-opacity-20 hover:bg-white mr-3"
              aria-label="Theme toggler"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 rounded-full hover:bg-opacity-20 hover:bg-white"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="md:hidden" style={{ backgroundColor: headerBg }}>
          <div className="container mx-auto py-4 px-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`flex items-center space-x-2 w-full text-left px-4 py-3 rounded-md mb-2 transition-colors ${
                  activeSection === item.id ? 'bg-opacity-30 bg-white text-white' : 'text-white hover:bg-opacity-20 hover:bg-white'
                }`}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto py-8 px-6">
        {renderSection()}
      </main>
      
      {/* Footer */}
      <footer className="py-6 px-6" style={{ backgroundColor: footerBg }}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">Jadid Ma'rifatchiligi</h3>
              <p className="text-sm opacity-80">O'zbek jadidlari merosi elektron kutubxonasi</p>
            </div>
            
            <div className="text-white text-sm">
              <p>&copy; {new Date().getFullYear()} Jadid Ma'rifatchiligi elektron kutubxonasi</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Bosh sahifa komponenti
function HomeSection({ theme, cardBg, cardBorder, textColor, jadids, books }) {
  return (
    <div>
      {/* Hero section */}
      <div className="py-12 px-6 rounded-lg mb-12 flex flex-col items-center text-center" style={{ backgroundColor: theme.primary, color: theme.textLight }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Jadid Ma'rifatchiligi</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl">O'zbek jadidlari merosi elektron kutubxonasi</p>
        <p className="max-w-2xl mb-8 opacity-90">
          Jadid ma'rifatchilari merosini o'rganish, saqlash va keng ommaga taqdim etish maqsadida yaratilgan ushbu kutubxona orqali tarixiy manbalar, ilmiy tadqiqotlar, kitoblar va ko'plab materiallardan foydalanishingiz mumkin.
        </p>
      </div>
      
      {/* Asosiy jadidlar */}
      <div className="mb-12">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold" style={{ color: textColor }}>Mashhur jadidlar</h2>
          <button 
            className="text-sm flex items-center" 
            style={{ color: theme.primary }}
            onClick={() => {}}
          >
            Barchasini ko'rish
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {jadids.slice(0, 4).map((jadid) => (
            <div 
              key={jadid.id} 
              className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: cardBg, borderColor: cardBorder, borderWidth: '1px' }}
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
      </div>
      
      {/* Yangi qo'shilgan kitoblar */}
      <div className="mb-12">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold" style={{ color: textColor }}>Yangi qo'shilgan kitoblar</h2>
          <button 
            className="text-sm flex items-center" 
            style={{ color: theme.primary }}
            onClick={() => {}}
          >
            Barchasini ko'rish
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.slice(0, 4).map((book) => (
            <div 
              key={book.id} 
              className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: cardBg, borderColor: cardBorder, borderWidth: '1px' }}
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
                    className="inline-block px-2 py-1 rounded-full text-xs" 
                    style={{ 
                      backgroundColor: book.type === 'original' ? theme.accent : theme.primary,
                      color: theme.textLight
                    }}
                  >
                    {book.type === 'original' ? 'Jadidlar asari' : 'Tadqiqot'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Biz haqimizda komponenti
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
        <div className="bg-opacity-10 p-4 rounded-md mb-4" style={{ backgroundColor: textColor }}>
          <p className="font-semibold mb-2">Bog'lanish uchun:</p>
          <p className="mb-1">Email: info@jadid-marifat.uz</p>
          <p>Telefon: +998 XX XXX XX XX</p>
        </div>
      </div>
    </div>
  );
}

// JadidsSection komponenti davom ettirildi
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

// Kitoblar komponenti
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
      description: `"Jadid adabiyoti tarixi" (2002) - professor Begali Qosimov tomonidan yozilgan fundamental ilmiy tadqiqot asari. Bu kitobda XIX asr oxiri - XX asr boshidagi o'zbek adabiyotining eng muhim davri - jadid adabiyoti har tomonlama tahlil qilingan.

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
      impact: `"Jadid adabiyoti tarixi" kitobining ilmiy-madaniy ahamiyati juda katta. Bu asar mustaqillik davrida jadidlar merosini chuqur va xolisona o'rganish, sovet davrida noto'g'ri baholangan adiblar ijodini qayta kashf etish yo'lidagi muhim qadamlardan biri bo'ldi.

      Professor Begali Qosimovning bu tadqiqoti jadid adabiyotini o'zbek adabiyoti tarixining eng yorqin sahifalaridan biri sifatida ko'rsatib bergan va shu davr adabiyotini o'rganishda asosiy manbalardan biriga aylangan.

      Kitob nafaqat adabiyotshunoslar va tadqiqotchilar, balki keng o'quvchilar ommasi uchun ham muhim manba bo'lib xizmat qilmoqda. Bu asar orqali ko'plab o'quvchilar jadid adabiyotining g'oyaviy-badiiy olamiga kirib, milliy ma'naviy merosimizning bu qimmatli qatlamini chuqurroq anglab olish imkoniga ega bo'ldilar.`
    },
    4: {
      description: `"Turkistonda jadidchilik harakati" (2015) - tarixchi olim Sherali Jo'rayev tomonidan yaratilgan ilmiy-tarixiy tadqiqot asari. Bu kitob XIX asr oxiri - XX asr boshlarida Turkistonda vujudga kelgan jadidchilik harakatining tarixi, uning ijtimoiy-siyosiy, madaniy-ma'rifiy jihatlari hamda tarixiy ahamiyatini yoritishga bag'ishlangan.

      Asarda jadidchilik harakatining vujudga kelish sabablari, nazariy asoslari, asosiy yo'nalishlari, yetakchi vakillari va ularning faoliyati haqida batafsil ma'lumot berilgan. Shuningdek, jadidlarning ma'rifatparvarlik, matbuot, ta'lim tizimi islohotlari, milliy teatr san'atining shakllanishidagi roli chuqur tahlil qilingan.

      Muallif jadidchilik harakatini Turkiston tarixidagi muhim hodisa sifatida baholab, uning milliy uyg'onish va ma'rifatparvarlik g'oyalarini tarqatishdagi ahamiyatini ko'rsatib bergan.`,
      content: [
        "Kirish: Jadidchilik harakatining o'rganilish tarixi",
        "I bob: Turkistonda XIX asr oxiri - XX asr boshlaridagi ijtimoiy-siyosiy vaziyat",
        "II bob: Jadidchilik harakatining vujudga kelishi va uning g'oyaviy asoslari",
        "III bob: Jadidlarning ma'rifatparvarlik faoliyati",
        "IV bob: Jadidlarning ta'lim sohasidagi islohotlari",
        "V bob: Jadid matbuoti va uning jamiyat hayotidagi o'rni",
        "VI bob: Jadidlar va milliy teatr",
        "VII bob: Jadidchilik harakatining taraqqiyparvar yo'nalishlari",
        "VIII bob: Jadidchilik harakatining siyosiy qiyofasi",
        "IX bob: Sovet hokimiyatining jadidlarga munosabati va qatag'on",
        "Xulosa: Jadidchilik harakatining tarixiy ahamiyati"
      ],
      impact: `"Turkistonda jadidchilik harakati" asari o'zbek tarixshunosligida jadidchilik harakatining xolisona va chuqur o'rganilishiga katta hissa qo'shgan. Bu kitob jadidchilik harakatini sovet davridagi bir tomonlama, siyosiylashgan talqinlardan farqli ravishda, yangicha metodologik yondashuvlar asosida tadqiq etgan.

      Asar jadidchilik harakatini Turkistonning milliy va madaniy uyg'onishi, ma'naviy yangilanishi yo'lidagi muhim bosqich sifatida ko'rsatib bergan. Shuningdek, kitobda jadidlar faoliyatining ijtimoiy-siyosiy, madaniy-ma'rifiy jihatlari kompleks tarzda o'rganilgan.

      Bu ilmiy tadqiqot asari nafaqat tarixchilar, balki keng qamrovli o'quvchilar, xususan, talabalar, o'qituvchilar va mutaxassislar uchun ham muhim ma'lumot manbai bo'lib xizmat qilmoqda. Kitob milliy tarixni chuqur anglash va o'zlikni namoyon etishda ahamiyatli o'rin tutadi.`
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

// Maqolalar komponenti
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
        "Karimov I. Yuksak ma'naviyat – yengilmas kuch. Toshkent, 2008.",
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

// Jurnal va gazetalar komponenti
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
      <h1 className