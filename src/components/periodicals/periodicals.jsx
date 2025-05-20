import React, { useState } from 'react';

function PeriodicalsSection({ periodicals, cardBg, cardBorder, textColor }) {

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Jurnal va gazetalar</h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {periodicals.map((periodical) => (
          <div
            key={periodical.id}
            className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            style={{ backgroundColor: cardBg, borderColor: cardBorder, borderWidth: '1px' }}
          >
            <a href={periodical.url}>
              <div className="overflow-hidden text-center flex items-center justify-center">
                <img src={periodical.image} alt={periodical.title} style={{ maxWidth: "300px" }} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{periodical.title}</h3>
                <button
                  className="text-sm w-full py-2 rounded-md text-white"
                  style={{ backgroundColor: '#1E5B94' }}
                >
                  Batafsil o'qish
                </button>
              </div>
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}

export default PeriodicalsSection;