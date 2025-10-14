import { useState } from 'react'
import './GallerySection.css'

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const basePath = import.meta.env.BASE_URL
  
  const images = [
    { id: 1, src: `${basePath}photo1.webp`, alt: '사진 1' },
    { id: 2, src: `${basePath}photo2.webp`, alt: '사진 2' },
    { id: 3, src: `${basePath}photo3.webp`, alt: '사진 3' },
    { id: 4, src: `${basePath}photo4.webp`, alt: '사진 4' }
  ]

  const handleImageClick = (id: number) => {
    setSelectedImage(id)
  }

  const handleClose = () => {
    setSelectedImage(null)
  }

  return (
    <section className="gallery-section">
      <h2 className="section-title myeongjo">Gallery</h2>
      
      <div className="gallery-grid">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => handleImageClick(image.id)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="lightbox" onClick={handleClose}>
          <div className="lightbox-content">
            <button className="close-btn" onClick={handleClose}>✕</button>
            <img 
              src={images.find(img => img.id === selectedImage)?.src} 
              alt={images.find(img => img.id === selectedImage)?.alt}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default GallerySection

