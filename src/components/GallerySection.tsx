import { useState } from 'react'
import './GallerySection.css'

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  
  const images = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    placeholder: `${i + 1}`,
  }))

  const openLightbox = (id: number) => {
    setSelectedImage(id)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const showNext = () => {
    if (selectedImage !== null && selectedImage < images.length) {
      setSelectedImage(selectedImage + 1)
    }
  }

  const showPrev = () => {
    if (selectedImage !== null && selectedImage > 1) {
      setSelectedImage(selectedImage - 1)
    }
  }

  return (
    <section className="gallery-section">
      <h2 className="section-title myeongjo">Gallery</h2>
      
      <div className="gallery-grid">
        {images.map((img) => (
          <div
            key={img.id}
            className="gallery-item"
            onClick={() => openLightbox(img.id)}
          >
            <div className="gallery-placeholder">
              <span className="photo-number">{img.placeholder}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            ✕
          </button>
          <button className="lightbox-prev" onClick={(e) => {
            e.stopPropagation()
            showPrev()
          }}>
            ‹
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image">
              <span className="photo-number-large">{selectedImage}</span>
            </div>
            <div className="lightbox-counter">
              {selectedImage} / {images.length}
            </div>
          </div>
          <button className="lightbox-next" onClick={(e) => {
            e.stopPropagation()
            showNext()
          }}>
            ›
          </button>
        </div>
      )}
    </section>
  )
}

export default GallerySection
