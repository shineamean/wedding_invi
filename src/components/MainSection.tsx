import './MainSection.css'

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="main-image">
        <img src="/photo1.webp" alt="신랑 신부 사진" className="main-photo" />
      </div>
      
      <div className="main-title">
        <p className="date-text">2025. 12. 14 SUN</p>
        <h1 className="couple-names myeongjo">
          김지환 <span className="heart">💍</span> 김이현
        </h1>
      </div>
    </section>
  )
}

export default MainSection
