import './LocationSection.css'

const LocationSection = () => {
  const copyAddress = () => {
    const address = '서울시 강남구 역삼로 607'
    navigator.clipboard.writeText(address)
    alert('주소가 복사되었습니다')
  }

  return (
    <section className="location-section">
      <h2 className="section-title myeongjo">오시는 길</h2>

      <div className="venue-box">
        <h3 className="venue-name">라온제나컨벤션</h3>
        <p className="venue-floor">4층 그랜드볼룸</p>
        <p className="venue-address">서울시 강남구 역삼로 607</p>
        <p className="venue-tel">TEL. 02-568-1766</p>
      </div>

      <div className="map-container">
        <div className="map-placeholder">
          <span>🗺️</span>
          <p>지도</p>
        </div>
      </div>

      <div className="map-buttons">
        <button className="map-btn kakao">카카오내비</button>
        <button className="map-btn naver">네이버지도</button>
        <button className="map-btn tmap">티맵</button>
      </div>

      <button className="copy-btn" onClick={copyAddress}>
        주소 복사하기
      </button>

      <div className="transport-info">
        <div className="transport-item">
          <div className="transport-icon">🚇</div>
          <div className="transport-details">
            <div className="transport-title">지하철</div>
            <p>2호선 선릉역 5번 출구 도보 3분</p>
          </div>
        </div>

        <div className="transport-item">
          <div className="transport-icon">🚌</div>
          <div className="transport-details">
            <div className="transport-title">버스</div>
            <p>간선 146, 740</p>
            <p>지선 4211</p>
          </div>
        </div>

        <div className="transport-item">
          <div className="transport-icon">🚗</div>
          <div className="transport-details">
            <div className="transport-title">주차안내</div>
            <p>주차 가능 (무료)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
