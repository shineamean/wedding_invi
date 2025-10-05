import { useState } from 'react'
import './Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Placeholder images - 실제로는 실제 이미지 경로를 사용
  const images = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    placeholder: `Photo ${i + 1}`,
  }))

  return (
    <section className="gallery">
      <div className="gallery-content">
        <h2 className="serif">Gallery</h2>
        <p className="subtitle">우리의 아름다운 순간들</p>

        <div className="gallery-grid">
          {images.map((img) => (
            <div
              key={img.id}
              className="gallery-item"
              onClick={() => setSelectedImage(img.id)}
            >
              <div className="gallery-placeholder">
                <span>📷</span>
                <p>{img.placeholder}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content">
            <button className="close-btn" onClick={() => setSelectedImage(null)}>
              ✕
            </button>
            <div className="lightbox-image">
              <span>📷</span>
              <p>Photo {selectedImage}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
