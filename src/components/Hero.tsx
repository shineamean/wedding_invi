import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="date-badge">2025. 03. 15</div>
        
        <div className="hero-text">
          <h1 className="serif">우리 결혼합니다</h1>
          
          <div className="names">
            <div className="name-group">
              <span className="family-name">김</span>
              <span className="given-name">신랑</span>
            </div>
            <span className="separator">♥</span>
            <div className="name-group">
              <span className="family-name">이</span>
              <span className="given-name">신부</span>
            </div>
          </div>
        </div>

        <div className="wedding-date">
          <p className="day">2025년 3월 15일 토요일 오후 2시</p>
          <p className="venue">○○웨딩홀 3층 그랜드홀</p>
        </div>

        <div className="hero-image">
          <div className="image-placeholder">
            <span>📷</span>
            <p>Wedding Photo</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
