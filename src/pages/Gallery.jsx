import React, { useState } from 'react';

const images = [
  {
    src: '/anytimemovers.jpeg',
    alt: 'Any Time Movers AU',
    caption: 'On the day of Big Project.',
  },
  {
    src: '/anytimemovers2.png',
    alt: 'Any Time Movers AU',
    caption: 'Any Time Movers AU',
  },
  {
    src: '/anytimemovers3.jpeg',
    alt: 'Any Time Movers AU',
    caption: 'Any Time Movers AU',
  },
  {
    src: '/anytimemovers4.jpeg',
    alt: 'Any Time Movers AU',
    caption: 'Any Time Movers AU',
  },
  {
    src: '/anytimemovers5.jpeg',
    alt: 'Any Time Movers AU',
    caption: 'Any Time Movers AU',
  },
  {
    src: '/anytimemovers6.jpeg',
    alt: 'Any Time Movers AU',
    caption: 'Any Time Movers AU',
  },
  {
    src: '/anytimemovers7.jpeg',
    alt: 'Any Time Movers AU',
    caption: 'Any Time Movers AU',
  },
  {
    src: '/anytimemovers8.jpeg',
    alt: 'Any Time Movers AU',
    caption: 'Any Time Movers AU',
  },
  
];

const Gallery = () => {
  const [modalIndex, setModalIndex] = useState(null);

  const openModal = (index) => {
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalIndex(null);
  };

  const prevImage = () => {
    setModalIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setModalIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        Our Gallery
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px',
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => openModal(i)}
            style={{
              cursor: 'pointer',
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            aria-label={`Open image: ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalIndex !== null && (
        <div
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              position: 'relative',
              background: '#fff',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            }}
          >
            <button
              onClick={closeModal}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                background: 'transparent',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#333',
                fontWeight: 'bold',
              }}
            >
              &times;
            </button>

            <img
              src={images[modalIndex].src}
              alt={images[modalIndex].alt}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <p
              id="modal-title"
              style={{
                padding: '10px 15px',
                fontSize: '1.1rem',
                textAlign: 'center',
                background: '#f5f5f5',
                margin: 0,
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              {images[modalIndex].caption}
            </p>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              aria-label="Previous image"
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.7)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.7)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
