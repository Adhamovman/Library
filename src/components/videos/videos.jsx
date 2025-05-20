import { useState } from "react";

function VideosSection({ videos, cardBg, cardBorder, textColor }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Videolar</h1>

      {selectedVideo ? (
        <div>
          <button
            className="mb-6 px-4 py-2 rounded-md flex items-center"
            style={{ backgroundColor: 'rgba(30, 91, 148, 0.1)', color: textColor }}
            onClick={() => setSelectedVideo(null)}
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
              <div className="md:w-1/2 p-6 flex justify-center">
                <iframe className="w-full object-cover rounded-md shadow-md"
                  style={{ height: '315px' }}
                  src={videos.find(v => v.id === selectedVideo).url}
                  title={videos.find(v => v.id === selectedVideo).title}

                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>

              <div className="md:w-1/2 p-6">
                <h2 className="text-2xl font-bold mb-2">{videos.find(v => v.id === selectedVideo).title}</h2>
                <p className="text-sm mb-2">Muallif: {videos.find(v => v.id === selectedVideo).author}</p>
                <p className="text-sm opacity-70 mb-4">Davomiyligi: {videos.find(v => v.id === selectedVideo).duration}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              style={{ backgroundColor: cardBg, borderColor: cardBorder, borderWidth: '1px' }}
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="h-40 overflow-hidden">
                <img src={video.image} alt={video.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                <p className="text-sm mb-1">{video.author}</p>
                <p className="text-xs opacity-70">Davomiyligi: {video.duration}</p>
                <button
                  className="mt-3 text-sm px-3 py-1 rounded-md text-white"
                  style={{ backgroundColor: '#1E5B94' }}
                >
                  Batafsil ko‘rish
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VideosSection;