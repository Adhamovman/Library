

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Sun, Moon, Menu, X, Book, FileText, Newspaper, Video, Users, Info, Home, Search } from 'lucide-react';
import AboutSection from './components/about/about';
import HomeSection from './components/home/home';
import JadidsSection from './components/jadids/jadids';
import BooksSection from './components/books/books';
import PeriodicalsSection from './components/periodicals/periodicals';
import ArticlesSection from './components/articles/articles';
import VideosSection from './components/videos/videos';
import logo from './assets/favicon.png';

const theme = {
  primary: 'rgb(11, 11, 75)',
  secondary: '#FFFFFF',
  accent: '#24A96B',
  dark: 'rrgb(5, 5, 56)',
  light: '#F5F7FA',
  textDark: '#031B34',
  textLight: '#FFFFFF',
};

const books = [
  {
    id: 1,
    title: 'Turkiy Guliston yoxud axloq',
    author: 'Abdulla Avloniy',
    year: '1913',
    url: '/books/turkiy_guliston.pdf',
    image: '/images/kitoblar/Turkiy_guliston.jpg',
    type: 'original',
  },
  {
    id: 2,
    title: 'Padarkush',
    author: `Mahmudxo'ja Behbudiy`,
    year: '1913',
    url: '/books/padarkush.pdf',
    image: '/images/kitoblar/padarkush.png',
    type: 'original',
  },
  {
    id: 3,
    title: `Milliy uyg'onish: jasorat, ma'rifat, fidoyilik`,
    author: 'Begali Qosimov',
    year: '2002',
    url: '/books/milliy_uygonish.pdf',
    image: '/images/kitoblar/milliy_uygonish.jpg',
    type: 'research',
  },
  {
    id: 4,
    title: 'Ismoil Gaspirinskiy va Turkiston',
    author: `Naim Karimov`,
    year: '2005',
    image: '/images/kitoblar/Ismoil-Gaspirinskiy-va-Turkiston.jpg',
    url: '/books/Ismoil_Gaspirinskiy_va_Turkiston.pdf',
    type: 'research',
  },
  {
    id: 5,
    title: "Cho'lpon va tanqid",
    author: `Bahodir Karimov`,
    year: '2004',
    image: '/images/kitoblar/cholpon_va_tanqid.png',
    url: '/books/cholpon_va_tanqid.pdf',
    type: 'research',
  },
  {
    id: 6,
    title: `Jadid she'riyati`,
    author: `N.Xoliqova`,
    year: '2005',
    image: `/images/kitoblar/N.Xoliqova._Jadid_she'riyati.jpg`,
    url: `/books/N.Xoliqova._Jadid_she'riyati.jpg`,
    type: 'research',
  },
  {
    id: 7,
    title: 'Ikki tarixiy siymo: Ahmad Donish va Sadriddin',
    author: `Rahmonov.T, Orziev.M`,
    year: '2015',
    image: '/images/kitoblar/Ikki_tarixiy_siymo_Ahmad_Donish_va_Sadriddin.jpg',
    url: '/books/Ikki_tarixiy_siymo_Ahmad_Donish_va_Sadriddin.pdf',
    type: 'research',
  },
  {
    id: 8,
    title: 'XORAZM JADIDCHILIGI ISLOHOTLAR TALIM VA ADABIYOT',
    author: `SAYYORA SAMANDAR, UMID BEKMUHAMMAD`,
    year: '2024',
    image: '/images/kitoblar/XORAZM_JADIDCHILIGI_ISLOHOTLAR_TALIM_VA_ADABIYOT.jpg',
    url: '/books/XORAZM_JADIDCHILIGI_ISLOHOTLAR_TALIM_VA_ADABIYOT.pdf',
    type: 'research',
  },
  {
    id: 9,
    title: 'BINAFSHA',
    author: `ABDULHAMID CHO'LPON`,
    year: '1922',
    image: '/images/kitoblar/Abdulhamid Cho‘lpon. “Binafsha”.jpg',
    url: '/books/Abdulhamid Cho‘lpon. “Binafsha”.pdf',
    type: 'original',
  },
  {
    id: 10,
    title: `Advokatlik bo'lish osonmi?`,
    author: `Abdulla Avloniy`,
    year: '1914',
    image: `/images/kitoblar/Abdulla Avloniy 'Advokatlik bo'lish osonmi'.jpg`,
    url: '/books/abdulla-avloniy.-advokatlik-osonmi-drama.pdf',
    type: 'original',
  },
  {
    id: 11,
    title: 'Mehrobdan chayon',
    author: `Abdulla Qodiriy`,
    year: '1928',
    image: '/images/kitoblar/Abdulla Qodiriy. “Mehrobdan Chayon”.jpg',
    url: '/books/abdulla-qodiriy-mehrobdan-chayon-roman.pdf',
    type: 'original',
  },
  {
    id: 12,
    title: 'Aruz haqida',
    author: `Abdurauf Fitrat`,
    year: '1936',
    image: '/images/kitoblar/Abdurauf Fitrat. “Aruz haqida”.jpg',
    url: '/books/Abdurauf Fitrat. “Aruz haqida”.pdf',
    type: 'original',
  },
  {
    id: 13,
    title: 'Yangi saodat',
    author: `Hamza Hakimzoda Niyoziy`,
    year: '1914',
    image: '/images/kitoblar/Hamza Hakimzoda Niyoziy. “Yangi saodat”.jpg',
    url: '/books/Hamza Hakimzoda Niyoziy. “Yangi saodat”.pdf',
    type: 'original',
  },
  {
    id: 14,
    title: 'Chadidoni Samarqand',
    author: `Hamza Cho'ra`,
    year: '2024',
    image: '/images/kitoblar/Ҳамза_Ҷӯра.Ҷадидони_Самарқанд_.jpg',
    url: '/books/Ҳамза_Ҷӯра.Ҷадидони_Самарқанд_.pdf',
    type: 'research',
  },
  {
    id: 15,
    title: `Turkiston hurriyati yo'lida`,
    author: `Muslimbek Alijonov`,
    year: '2024',
    image: '/images/kitoblar/Muslimbek_Alijonov_Turkiston_hurriyati_yolida_2024_cv4wShX.jpg',
    url: '/books/Muslimbek_Alijonov_Turkiston_hurriyati_yolida_2024_cv4wShX.pdf',
    type: 'research',
  },

];

// Main layout component that wraps all pages
function Layout({ children, darkMode, setDarkMode, cardBg, cardBorder }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  const location = useLocation();

  const toggleDarkMode = () => {
    localStorage.setItem('darkMode', !darkMode);
    setDarkMode(!darkMode);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (searchOpen) {
      setSearchQuery('');
      setSearchResults([]);
    }
  };
  // Qidiruv funksiyasi
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = books.filter(book =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
    );

    setSearchResults(results);
  };

  // Asosiy matn va ranglar uchun stil
  const bodyBg = darkMode ? theme.dark : theme.light;
  const textColor = darkMode ? theme.textLight : theme.textDark;
  const headerBg = darkMode ? theme.dark : theme.primary;
  const footerBg = darkMode ? theme.dark : theme.primary;

  const navItems = [
    { id: 'home', path: '/', label: 'Bosh sahifa', icon: <Home size={20} /> },
    { id: 'about', path: '/about', label: 'Biz haqimizda', icon: <Info size={20} /> },
    { id: 'jadids', path: '/jadids', label: 'Jadidlar', icon: <Users size={20} /> },
    { id: 'books', path: '/books', label: 'Kitoblar', icon: <Book size={20} /> },
    { id: 'articles', path: '/articles', label: 'Maqolalar', icon: <FileText size={20} /> },
    { id: 'periodicals', path: '/periodicals', label: 'Jurnal va gazetalar', icon: <Newspaper size={20} /> },
    { id: 'videos', path: '/videos', label: 'Videolar', icon: <Video size={20} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300" style={{ backgroundColor: bodyBg, color: textColor }}>
      {/* Header */}
      <header className="py-4 px-6 shadow-md" style={{ backgroundColor: headerBg }}>
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-white font-semibold flex items-center">
              <img style={{ maxWidth: '50px' }} src={logo} alt="logo" />
              <p>Jadid Ma'rifatchiligi</p></div>
          </Link>

          {/* Desktop navigatsiya */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm transition-colors ${location.pathname === item.path ? 'text-white bg-opacity-30 bg-white' : 'text-white hover:bg-opacity-20 hover:bg-white'
                  }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}

            <button
              onClick={toggleSearch}
              className={`text-white p-2 rounded-full hover:bg-opacity-20 hover:bg-white ${searchOpen ? 'bg-opacity-30 bg-white' : ''}`}
              aria-label="Qidirish"
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleDarkMode}
              className="text-white p-2 rounded-full hover:bg-opacity-20 hover:bg-white"
              aria-label="Theme toggler"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile menu */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleSearch}
              className={`text-white p-2 rounded-full hover:bg-opacity-20 hover:bg-white mr-3 ${searchOpen ? 'bg-opacity-30 bg-white' : ''}`}
              aria-label="Qidirish"
            >
              <Search size={20} />
            </button>

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
        {searchOpen && (
          <div className="container mx-auto mt-4 pb-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Kitob nomi yoki muallif..."
                className="w-full px-4 py-2 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {searchQuery && (
                <div className="absolute right-3 top-2">
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSearchResults([]);
                    }}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={18} />
                  </button>
                </div>
              )}
            </div>

            {searchResults.length > 0 && (
              <div
                className="mt-2 rounded-md shadow-lg overflow-y-auto max-h-72"
                style={{ backgroundColor: cardBg, borderColor: cardBorder, borderWidth: '1px' }}
              >
                {searchResults.map(book => (
                  <div
                    key={book.id}
                    className="flex items-center p-3 border-b cursor-pointer hover:bg-opacity-10 hover:bg-gray-500"
                    style={{ borderColor: cardBorder }}
                    onClick={() => {

                      setSearchOpen(false);
                      setSearchQuery('');
                      setSearchResults([]);
                      window.open(book.url, '_blank');
                    }}
                  >
                    <div className="flex-shrink-0 w-12 h-16 mr-3">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{book.title}</h4>
                      <p className="text-sm opacity-70">{book.author}, {book.year}</p>
                      <span
                        className="inline-block px-2 py-0.5 mt-1 rounded-full text-xs text-white"
                        style={{
                          backgroundColor: book.type === 'original' ? '#24A96B' : '#1E5B94',
                        }}
                      >
                        {book.type === 'original' ? 'Jadidlar asari' : 'Tadqiqot'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </header>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden" style={{ backgroundColor: headerBg }}>
          <div className="container mx-auto py-4 px-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`flex items-center space-x-2 w-full text-left px-4 py-3 rounded-md mb-2 transition-colors ${location.pathname === item.path ? 'bg-opacity-30 bg-white text-white' : 'text-white hover:bg-opacity-20 hover:bg-white'
                  }`}
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <main className="flex-grow container mx-auto py-6 px-6">
        {children}
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

export default function JadidLibrary() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  // Bo'limlar uchun ma'lumotlar
  const jadids = [
    {
      id: 1,
      name: 'Abdulla Avloniy',
      years: '1878-1934',
      image: '/images/jadidlar/Abdulla_Avloniy.jpg',
      shortBio: `O'zbek ma'rifatparvari, yozuvchi, shoir, dramaturg, jurnalist, pedagog va jamoat arbobi.`,
    },
    {
      id: 2,
      name: `Mahmudxo'ja Behbudiy`,
      years: '1875-1919',
      image: '/images/jadidlar/Mahmudxoja_Behbudiy.jpg',
      shortBio: `Turkiston jadidchilik harakatining asoschisi, ma'rifatparvar, yozuvchi, jurnalist va jamoat arbobi.`,
    },
    {
      id: 3,
      name: `Abdulhamid Cho'lpon`,
      years: '1897-1938',
      image: '/images/jadidlar/cholpon_.jpg',
      shortBio: `O'zbek shoiri, yozuvchi, dramaturg va tarjimon.`,
    },
    {
      id: 4,
      name: 'Abdurauf Fitrat',
      years: '1886-1938',
      image: '/images/jadidlar/Abdurauf_Fitrat_.jpg',
      shortBio: `O'zbek yozuvchisi, shoir, olim, dramaturg, adabiyotshunos va jamoat arbobi.`,
    },
    {
      id: 5,
      name: 'Munavvar Qori Abdurashidxonov',
      years: '1878-1931',
      image: '/images/jadidlar/Munavvar_qori.webp',
      shortBio: `O'zbek ma'rifatparvari, pedagog, jurnalist, yangi usul maktablari tashkilotchisi va jamoat arbobi.`,
    },
    {
      id: 6,
      name: 'Hamza Hakimzoda Niyoziy',
      years: '1889-1929',
      image: '/images/jadidlar/Hamza_Niyazi.jpg',
      shortBio: `O'zbek shoiri, dramaturg, bastakor, pedagog va jamoat arbobi.`,
    },
    {
      id: 7,
      name: 'Abdullo Qodiriy',
      years: '1894-1938',
      image: '/images/jadidlar/Abdullo Qodiriy.jpg',
      shortBio: `O'zbek yozuvchisi, romanavis, dramaturg, publitsist va o'zbek romanchiligining asoschisi.`,
    },
    {
      id: 8,
      name: `Ubaydulla Xo'jayev`,
      years: '1880-1938',
      image: `/images/jadidlar/Ubaydulla Xo'jayev.jpg`,
      shortBio: `O'zbek siyosiy arbobi, huquqshunos, publitsist va jadidchilik harakatining faol a'zosi.`,
    },
    {
      id: 9,
      name: 'Ishoqxon Ibrat',
      years: '1862-1937',
      image: '/images/jadidlar/Ishoqxon Ibrat.jpg',
      shortBio: `O'zbek ma'rifatparvari, tilshunos olim, tarixchi, shoir va jadidchilik harakatining faol ishtirokchisi.`,
    },
    {
      id: 10,
      name: 'Ashurali Zohiriy',
      years: '1885-1937',
      image: '/images/jadidlar/Ashurali Zohiriy.jpg',
      shortBio: `O'zbek ma'rifatparvari, yozuvchi, jurnalist va yangi usul maktabi o'qituvchisi.`,
    },
  ];



  const articles = [
    {
      id: 1,
      title: `XX asr boshida Turkistonda ta'lim tizimi islohotlari`,
      author: 'Tohir Qahhor',
      source: `O'zbekiston tarixi jurnali`,
      year: '2018',
      image: '/images/maqola/bukhari_buxoriy.jpg',
    },
    {
      id: 2,
      title: 'Jadidlar matbuotining tili va uslubi',
      author: 'Bahtiyor Mengliyev',
      source: `Til va adabiyot ta'limi`,
      year: '2019',
      image: '/images/maqola/jadidlar.jpg',
    },
    {
      id: 3,
      title: 'Jadidlar merosi: bugungi kun ahamiyati',
      author: 'Shuhrat Sirojiddinov',
      source: `O'zbekiston adabiyoti va san'ati`,
      year: '2020',
      image: '/images/maqola/jadid.jpg',
    },
    {
      id: 4,
      title: 'Jadidchilik harakati: tarixiy ahamiyati va zamonaviy talqini',
      author: 'Akmal Saidov',
      source: `O'zbekiston tarixi`,
      year: '2021',
      image: '/images/maqola/Jadidchilik harakati.png',
    }, {
      id: 5,
      title: `Jadidlar matbuoti: milliy uyg'onish va islohotchilik g'oyalari`,
      author: 'Naim Karimov',
      source: `Sharq yulduzi`,
      year: '2019',
      image: '/images/maqola/Jadidlar matbuoti.webp',
    },
    {
      id: 6,
      title: 'Jadidlar merosi: bugungi kun ahamiyati',
      author: 'Shuhrat Sirojiddinov',
      source: `O'zbekiston adabiyoti va san'ati`,
      year: '2020',
      image: '/images/maqola/jadidlar_va_bugun.jpg',
    },
  ];

  const periodicals = [
    {
      id: 1,
      title: 'Jadid. 2025-yil 16-may. 20-son',
      image: '/images/gazeta/jadid.-2025-yil-16-may.-20-son_page-0001-303x421.jpg',
      url: "/books/jadid.-2025-yil-16-may.-20-son-1.pdf"
    },
    {
      id: 2,
      title: 'Jadid. 2025-yil 9-may. 19-son',
      image: '/images/gazeta/19-1-8-latinnicza_page-0001-303x421.jpg',
      url: "/books/jadid.-2025-yil-9-may.-19-son-1.pdf"
    },
    {
      id: 3,
      title: 'Jadid. 2025-yil 2-may. 18-son',
      image: '/images/gazeta/jadid.-2025-yil-2-may.-18-son_page-0001-303x421.jpg',
      url: "/books/jadid.-2025-yil-2-may.-18-son-1.pdf"
    },
    {
      id: 4,
      title: 'Jadid. 2025-yil 25-aprel. 17-son',
      image: '/images/gazeta/jadid.-2025-yil-25-aprel.-17-son_page-0001-303x421.jpg',
      url: "/books/jadid.-2025-yil-25-aprel.-17-son-1.pdf"
    },
    {
      id: 5,
      title: 'Jadid. 2025-yil 18-aprel. 16-son',
      image: '/images/gazeta/jadid.-2025-yil-18-aprel.-16-son_page-0001-303x421.jpg',
      url: "/books/jadid.-2025-yil-18-aprel.-16-son-1.pdf"
    },
    {
      id: 6,
      title: 'Jadid. 2025-yil 11-aprel. 15-son',
      image: '/images/gazeta/jadid.-2025-yil-11-aprel.-15-son_page-0001-303x421.jpg',
      url: "/books/jadid.-2025-yil-11-aprel.-15-son-1.pdf"
    },
    {
      id: 7,
      title: 'Jadid. 2025-yil 4-aprel. 14-son',
      image: '/images/gazeta/jadid.-2025-yil-4-aprel.-14-son_page-0001-303x421.jpg',
      url: "/books/jadid.-2025-yil-4-aprel.-14-son-1.pdf"
    },
    {
      id: 8,
      title: 'Jadid. 2025-yil 28-mart. 13-son',
      image: '/images/gazeta/jadid.-2025-yil-28-mart.-13-son_page-0001-303x421.jpg',
      url: "/books/jadid.-2025-yil-28-mart.-13-son-1.pdf"
    },
    {
      id: 9,
      title: 'Jadid. 2025-yil 21-mart. 12-son',
      image: '/images/gazeta/12-1-8-latinnicza_page-0001-303x421.jpg',
      url: "/books/12-1-8-lotin.pdf"
    },
    {
      id: 10,
      title: 'Jadid. 2025-yil 14-mart. 11-son',
      image: '/images/gazeta/jadid.-2025-yil-14-mart.-11-son_page-0001-303x421.jpg',
      url: "/books/jadid.-2025-yil-14-mart.-11-son.pdf"
    },
    {
      id: 11,
      title: 'Jadid. 2025-yil 7-mart. 10-son',
      image: '/images/gazeta/jadid.-2025-yil-7-mart.-10-son_page-0001-303x421.jpg',
      url: "/books/jadid.-2025-yil-7-mart.-10-son.pdf"
    },
    {
      id: 12,
      title: 'Jadid. 2025-yil 28-fevral. 9-son',
      image: '/images/gazeta/jadid.-2025-yil-28-fevral.-9-son_page-0001-303x421.jpg',
      url: "/books/jadid.-2025-yil-28-fevral.-9-son.pdf"
    },
    {
      id: 13,
      title: 'Jadid. 2025-yil 21-fevral. 8-son',
      image: '/images/gazeta/jadid.-2025-yil-21-fevral.-8-son_page-0001-303x421.jpg',
      url: "/books/jadid.-2025-yil-21-fevral.-8-son.pdf"
    },
    {
      id: 14,
      title: 'Jadid. 2025-yil 14-fevral. 7-son',
      image: '/images/gazeta/jadid.-2025-yil-14-fevral.-7-son_page-0001-303x421.jpg',
      url: "/books/jadid.-2025-yil-14-fevral.-7-son.pdf"
    },
    {
      id: 15,
      title: 'Jadid. 2025-yil 7-fevral. 6-son',
      image: '/images/gazeta/jadid.-2025-yil-7-fevral.-6-son_page-0001-303x421.jpg',
      url: "/books/jadid.-2025-yil-7-fevral.-6-son.pdf"
    },
    {
      id: 16,
      title: 'Jadid. 2025-yil 31-yanvar. 5-son',
      image: '/images/gazeta/jadid.-2025-yil-31-yanvar.-5-son_page-0001-303x421.jpg',
      url: "/books/jadid.-2025-yil-31-yanvar.-5-son.pdf"
    },
    {
      id: 17,
      title: 'Jadid. 2025-yil 24-yanvar. 4-son',
      image: '/images/gazeta/jadid.-2025-yil-24-yanvar.-4-son_page-0001-303x421.jpg',
      url: "/books/jadid.-2025-yil-24-yanvar.-4-son.pdf"
    },
    {
      id: 18,
      title: 'Jadid. 2025-yil 17-yanvar. 3-son',
      image: '/images/gazeta/jadid.-2025-yil-17-yanvar.-3-son_page-0001-303x421.jpg',
      url: "/books/jadid.-2025-yil-17-yanvar.-3-son.pdf"
    },
    {
      id: 19,
      title: 'Jadid. 2025-yil 10-yanvar. 2-son',
      image: '/images/gazeta/2-02-latin_page-0001-303x421.jpg',
      url: "/books/2-02-latin.pdf"
    },
    {
      id: 20,
      title: 'Jadid. 2025-yil 3-yanvar. 1-son',
      image: '/images/gazeta/1-01-latinnicza_page-0001-303x421.jpg',
      url: "/books/1-01-latinnicza.pdf"
    },
  ];

  const videos = [
    {
      id: 1,
      title: 'Jadidlar: milliy o‘zlik, istiqlol va davlatchilik g‘oyalari',
      author: 'Yoshlar telekanali',
      duration: '5:22',
      image: 'https://img.youtube.com/vi/OUs4LWS98OE/hqdefault.jpg',
      url: "https://www.youtube.com/embed/OUs4LWS98OE"
    },
    {
      id: 2,
      title: 'JADIDLAR',
      author: 'Andijon VTRK',
      duration: '2:06',
      image: 'https://img.youtube.com/vi/AM5R4hry1KM/hqdefault.jpg',
      url: "https://www.youtube.com/embed/AM5R4hry1KM"
    },
    {
      id: 3,
      title: 'Jadidlar. Hujjatli film.',
      author: 'Ular',
      duration: '51:36',
      image: 'https://img.youtube.com/vi/1ZCZRLwbiaY/hqdefault.jpg',
      url: "https://www.youtube.com/embed/1ZCZRLwbiaY"
    },
    {
      id: 4,
      title: 'Jadidlar',
      author: 'MUROD ODILOV',
      duration: '3:09',
      image: 'https://img.youtube.com/vi/BC_VekRtjsM/hqdefault.jpg',
      url: "https://www.youtube.com/embed/BC_VekRtjsM"
    },
    {
      id: 5,
      title: 'Jadidchilik harakati haqida | Ustoz Abdulloh Zufar',
      author: 'Yusuf Media',
      duration: '28:16',
      image: 'https://img.youtube.com/vi/tGpAVka9hXg/hqdefault.jpg',
      url: "https://www.youtube.com/embed/tGpAVka9hXg"
    },
    {
      id: 6,
      title: 'Jadidlar - kim? | Manba',
      author: 'Manba',
      duration: '4:56',
      image: 'https://img.youtube.com/vi/yXKh3X5ylrQ/hqdefault.jpg',
      url: "https://www.youtube.com/embed/yXKh3X5ylrQ"
    },
    {
      id: 7,
      title: `G'ulom Zafariy | "Jadidlar" to'plami | audio kitob`,
      author: 'Yoshlar eduuz | TO‘IFOM',
      duration: '2:18:37',
      image: 'https://img.youtube.com/vi/ADDBi379-j8/hqdefault.jpg',
      url: "https://www.youtube.com/embed/ADDBi379-j8"
    },
    {
      id: 8,
      title: 'JADIDLAR | ABDURAUF FITRAT',
      author: `Madaniyat va Ma'rifat`,
      duration: '27:25',
      image: 'https://img.youtube.com/vi/ODj3LpSJJPs/hqdefault.jpg',
      url: "https://www.youtube.com/embed/ODj3LpSJJPs"
    },
    {
      id: 9,
      title: 'Jadidlar haqida haqiqatlar: Turkiston legioni, Mustafo Cho‘qay, Sobir Rahimov @QURULTOY',
      author: 'QURULTOY',
      duration: '1:51:03',
      image: 'https://img.youtube.com/vi/fE_6ZFuGVSk/hqdefault.jpg',
      url: "https://www.youtube.com/embed/fE_6ZFuGVSk"
    },
    {
      id: 10,
      title: 'Mahmudxo‘ja Behbudiy jadidchilik harakatining yirik namoyondasi edi.',
      author: 'Samarqand yoshlari',
      duration: '4:32',
      image: 'https://img.youtube.com/vi/XD93EGj32A4/hqdefault.jpg',
      url: "https://www.youtube.com/embed/XD93EGj32A4"
    },
    {
      id: 11,
      title: `Jadidlar - maʼrifat elchilari // Mahmudxo'ja Behbudiy`,
      author: 'Tetapoya UZ',
      duration: '4:01',
      image: 'https://img.youtube.com/vi/Nr6zeWoWPDY/hqdefault.jpg',
      url: "https://www.youtube.com/embed/Nr6zeWoWPDY"
    },
    {
      id: 12,
      title: '“Jadidlar g‘oyalari yangi O‘zbekiston strategiyasi bilan hamohangdir” — Shavkat Mirziyoyev',
      author: 'Uzun tumani hokimligi axborot xizmati',
      duration: '3:33',
      image: 'https://img.youtube.com/vi/uGfHBAm_O9Y/hqdefault.jpg',
      url: "https://www.youtube.com/embed/uGfHBAm_O9Y"
    },
    {
      id: 13,
      title: 'Jadidlar tadbiridan lavhalar',
      author: 'Chirchiq Yuksalish maktabi',
      duration: '0:56',
      image: 'https://img.youtube.com/vi/z0uVbjRCsA8/hqdefault.jpg',
      url: "https://www.youtube.com/embed/z0uVbjRCsA8"
    },
    {
      id: 14,
      title: `ABDULLA AVLONIY. JADIDCHILIK NAMOYONDALARIDAN BIRI. O'ZBEK MA'RIFATPARVARINING HAYOT VA IJOD YO'LI.`,
      author: 'KITOBXON BLOGI',
      duration: '4:08',
      image: 'https://img.youtube.com/vi/WvBFjIwe1Wk/hqdefault.jpg',
      url: "https://www.youtube.com/embed/WvBFjIwe1Wk"
    },
    {
      id: 15,
      title: 'Jadidlar 1 qism',
      author: 'Александр Гамиров',
      duration: '37:12',
      image: 'https://img.youtube.com/vi/c9eRbV1MTbA/hqdefault.jpg',
      url: "https://www.youtube.com/embed/c9eRbV1MTbA"
    },
  ];

  // Stil uchun
  const cardBg = darkMode ? theme.dark : theme.secondary;
  const cardBorder = darkMode ? '#1E5B94' : '#E3E8EF';
  const textColor = darkMode ? theme.textLight : theme.textDark;

  return (
    <Router>
      <Layout darkMode={darkMode} cardBg={cardBg} cardBorder={cardBorder} setDarkMode={setDarkMode}>
        <Routes>
          <Route
            path="/"
            element={<HomeSection theme={theme} cardBg={cardBg} cardBorder={cardBorder} textColor={textColor} jadids={jadids} books={books} />}
          />
          <Route
            path="/about"
            element={<AboutSection textColor={textColor} light={theme.light} cardBg={cardBg} cardBorder={cardBorder} />}
          />
          <Route
            path="/jadids"
            element={<JadidsSection jadids={jadids} cardBg={cardBg} cardBorder={cardBorder} textColor={textColor} />}
          />
          <Route
            path="/books"
            element={<BooksSection books={books} cardBg={cardBg} cardBorder={cardBorder} textColor={textColor} />}
          />
          <Route
            path="/articles"
            element={<ArticlesSection articles={articles} cardBg={cardBg} cardBorder={cardBorder} textColor={textColor} />}
          />
          <Route
            path="/periodicals"
            element={<PeriodicalsSection periodicals={periodicals} cardBg={cardBg} cardBorder={cardBorder} textColor={textColor} />}
          />
          <Route
            path="/videos"
            element={<VideosSection videos={videos} cardBg={cardBg} cardBorder={cardBorder} textColor={textColor} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}




