import QuoteCarousel from "../quoteCarousel/quoteCarousel";

function HomeSection({ theme, cardBg, cardBorder, textColor, jadids, books }) {
  return (
    <div>
      {/* Hero section */}

      <QuoteCarousel cardBg={cardBg} cardBorder={cardBorder} textColor={textColor} />


      {/* Asosiy jadidlar */}
      <div className="mb-12">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold" style={{ color: textColor }}>Mashhur jadidlar</h2>
          <button
            className="text-sm flex items-center"
            style={{ color: textColor }}
            onClick={() => { }}
          >
            <a href="/jadids">Barchasini ko'rish</a>
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
            style={{ color: textColor }}
            onClick={() => { }}
          >
            <a href="/books">Barchasini ko'rish</a>
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
export default HomeSection;
