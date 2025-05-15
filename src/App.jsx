import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Book, FileText, Newspaper, Video, Users, Info, Home } from 'lucide-react';
import AboutSection from './components/about/about';
import HomeSection from './components/home/home';
import JadidsSection from './components/jadids/jadids';
import BooksSection from './components/books/books';
import PeriodicalsSection from './components/periodicals/periodicals';
import ArticlesSection from './components/articles/articles';

// O'zbek milliy ranglarini qo'llaymiz
const theme = {
  primary: 'rgb(11, 11, 75)', // Ko'k
  secondary: '#FFFFFF', // Oq
  accent: '#24A96B', // Yashil
  dark: 'rgb(4, 4, 46)', // To'q ko'k
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
    { id: 'periodicals', label: 'Jurnal va gazetalar', icon: <Newspaper size={20} /> }
  ];

  // Bo'limlar uchun ma'lumotlar
  const jadids = [
    {
      id: 1,
      name: 'Abdulla Avloniy',
      years: '1878-1934',
      image: '/images/Abdulla_Avloniy.jpg',
      shortBio: `O'zbek ma'rifatparvari, yozuvchi, shoir, dramaturg, jurnalist, pedagog va jamoat arbobi.`,
    },
    {
      id: 2,
      name: `Mahmudxo'ja Behbudiy`,
      years: '1875-1919',
      image: '/images/Mahmudxoja_Behbudiy.jpg',
      shortBio: `Turkiston jadidchilik harakatining asoschisi, ma'rifatparvar, yozuvchi, jurnalist va jamoat arbobi.`,
    },
    {
      id: 3,
      name: `Abdulhamid Cho'lpon`,
      years: '1897-1938',
      image: '/images/cholpon_.jpg',
      shortBio: `O'zbek shoiri, yozuvchi, dramaturg va tarjimon.`,
    },
    {
      id: 4,
      name: 'Abdurauf Fitrat',
      years: '1886-1938',
      image: '/images/Abdurauf_Fitrat_.jpg',
      shortBio: `O'zbek yozuvchisi, shoir, olim, dramaturg, adabiyotshunos va jamoat arbobi.`,
    },
  ];

  const books = [
    {
      id: 1,
      title: 'Turkiy Guliston yoxud axloq',
      author: 'Abdulla Avloniy',
      year: '1913',
      url: '/books/turkiy_guliston.pdf',
      image: '/images/Turkiy_guliston.jpg',
      type: 'original',
    },
    {
      id: 2,
      title: 'Padarkush',
      author: `Mahmudxo'ja Behbudiy`,
      year: '1913',
      url: '/books/padarkush.pdf',
      image: '/images/padarkush.png',
      type: 'original',
    },
    {
      id: 3,
      title: `Milliy uyg'onish: jasorat, ma'rifat, fidoyilik`,
      author: 'Begali Qosimov',
      year: '2002',
      url: '/books/milliy_uygonish.pdf',
      image: '/images/milliy_uygonish.jpg',
      type: 'research',
    },
    {
      id: 4,
      title: 'Ismoil Gaspirinskiy va Turkiston',
      author: `Naim Karimov`,
      year: '2005',
      image: '/images/Ismoil-Gaspirinskiy-va-Turkiston.jpg',
      url: '/books/Ismoil_Gaspirinskiy_va_Turkiston.pdf',
      type: 'research',
    },
  ];

  const articles = [
    {
      id: 1,
      title: `XX asr boshida Turkistonda ta'lim tizimi islohotlari`,
      author: 'Tohir Qahhor',
      source: `O'zbekiston tarixi jurnali`,
      year: '2018',
      image: '/images/bukhari_buxoriy.jpg',
    },
    {
      id: 2,
      title: 'Jadidlar matbuotining tili va uslubi',
      author: 'Bahtiyor Mengliyev',
      source: `Til va adabiyot ta'limi`,
      year: '2019',
      image: '/images/jadidlar.jpg',
    },
    {
      id: 3,
      title: 'Jadidlar merosi: bugungi kun ahamiyati',
      author: 'Shuhrat Sirojiddinov',
      source: `O'zbekiston adabiyoti va san'ati`,
      year: '2020',
      image: '/images/jadid.jpg',
    },
  ];

  const periodicals = [
    {
      id: 1,
      title: 'Taraqqiy',
      type: 'Gazeta',
      year: '1906',
      editor: 'Ismoil Obidov',
      image: '/images/taraqqiy_.jpg',
    },
    {
      id: 2,
      title: 'Sadoi Turkiston',
      type: 'Gazeta',
      year: '1914-1915',
      editor: `Ubaydulla Xo'jayev`,
      image: '/images/sadoi_turkiston.jpg',
    },
    {
      id: 3,
      title: 'Oyna',
      type: 'Jurnal',
      year: '1913-1915',
      editor: `Mahmudxo'ja Behbudiy`,
      image: '/images/Oyna.jpg',
    },
  ];



  // Sahifalarni ko'rsatish
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection theme={theme} cardBg={cardBg} cardBorder={cardBorder} textColor={textColor} jadids={jadids} books={books} />;
      case 'about':
        return <AboutSection textColor={textColor} light={theme.light} cardBg={cardBg} cardBorder={cardBorder} />;
      case 'jadids':
        return <JadidsSection jadids={jadids} cardBg={cardBg} cardBorder={cardBorder} textColor={textColor} />;
      case 'books':
        return <BooksSection books={books} cardBg={cardBg} cardBorder={cardBorder} textColor={textColor} />;
      case 'articles':
        return <ArticlesSection articles={articles} cardBg={cardBg} cardBorder={cardBorder} textColor={textColor} />;
      case 'periodicals':
        return <PeriodicalsSection periodicals={periodicals} cardBg={cardBg} cardBorder={cardBorder} textColor={textColor} />;
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
                className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm transition-colors ${activeSection === item.id ? 'text-white bg-opacity-30 bg-white' : 'text-white hover:bg-opacity-20 hover:bg-white'
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
                className={`flex items-center space-x-2 w-full text-left px-4 py-3 rounded-md mb-2 transition-colors ${activeSection === item.id ? 'bg-opacity-30 bg-white text-white' : 'text-white hover:bg-opacity-20 hover:bg-white'
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

      <main className="flex-grow container mx-auto py-8 px-6">
        {renderSection()}
      </main>

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


<>
// Bosh sahifa komponenti
  <HomeSection />
  // Biz haqimizda komponenti
  <AboutSection />
  // JadidsSection komponenti davom ettirildi
  <JadidsSection />
  // Kitoblar komponenti
  <BooksSection />
  // Maqolalar komponenti
  <ArticlesSection />
  // Jurnal va gazetalar komponenti
  <PeriodicalsSection />
</>








