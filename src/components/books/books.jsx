import React, { useState } from 'react';

function BooksSection({ books, cardBg, cardBorder, textColor }) {
  const [filter, setFilter] = useState('all');

  const filteredBooks = filter === 'all' ? books : books.filter(book => book.type === filter);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Kitoblar</h1>

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
            >
              <a href={book.url}>
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
              </a>
            </div>
          ))}
        </div>
      </>

    </div>
  );
}

export default BooksSection;