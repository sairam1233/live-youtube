import React, { useState } from 'react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  thumbnail: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: "/images/4.jpg",
    alt: "Dhoti ceremony ritual",
    thumbnail: "/images/4.jpg"
  },
  {
    id: 2,
    src: "/images/2.jpg",
    alt: "Family participating in Dhoti ceremony",
    thumbnail: "/images/2.jpg"
  },
  {
    id: 3,
    src: "/images/3.jpg",
    alt: "Blessings during the Dhoti ceremony",
    thumbnail: "/images/3.jpg"
  },
];

const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">

        {/* Video player at the top */}
        <div className="mb-16">
  <div className="text-center mb-8">
    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
      Invitation Video
    </h2>
    <p className="text-gray-600 max-w-xl mx-auto">
      Watch the special invitation for the Dhoti Ceremony celebration.
    </p>
  </div>

  <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
    <video
      src="/video/invitation.mp4"
      controls
      className="w-full h-auto object-cover"
      poster="/images/1.jpg" // optional poster image
    >
      Your browser does not support the video tag.
    </video>
  </div>
</div>


        {/* Gallery title and description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore moments from the Dhoti Ceremony of ch. Bhargava Nandan & ch. Thaman Sandesh
          </p>
        </div>

        {/* Photos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => openLightbox(photo)}
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img 
                  src={photo.thumbnail} 
                  alt={photo.alt}
                  className="absolute inset-0 w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white bg-opacity-0 group-hover:bg-opacity-70 p-2 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="max-w-6xl max-h-[90vh] w-full h-full relative flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedPhoto.src} 
              alt={selectedPhoto.alt} 
              className="max-w-full max-h-full object-contain"
            />
            <button 
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-opacity"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
