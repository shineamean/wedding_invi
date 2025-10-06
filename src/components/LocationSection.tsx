import './LocationSection.css'

const LocationSection = () => {
  const copyAddress = () => {
    const address = '서울특별시 중구 남대문로 39'
    navigator.clipboard.writeText(address)
    alert('주소가 복사되었습니다')
  }

  return (
    <section className="location-section">
      <h2 className="section-title myeongjo">오시는 길</h2>

      <div className="venue-box">
        <h3 className="venue-name">한국은행</h3>
        <p className="venue-floor">2층 컨퍼런스홀</p>
        <p className="venue-address">서울특별시 중구 남대문로 39</p>
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
            <p>1, 2호선 시청역 7번출구 도보 8분</p>
            <p>2호선 을지로입구역 7번출구 도보 5분</p>
            <p>4호선 회현역 7번출구 도보 7분</p>
          </div>
        </div>

        <div className="transport-item">
          <div className="transport-icon">🚌</div>
          <div className="transport-details">
            <div className="transport-title">버스</div>
            <p>간선 143, 401, 406, 502, 504, 705</p>
            <p>지선 7017, 7021, 7022</p>
          </div>
        </div>

        <div className="transport-item">
          <div className="transport-icon">🚗</div>
          <div className="transport-details">
            <div className="transport-title">자가용</div>
            <p>네비게이션 '한국은행 통합별관' 검색</p>
            <p>주차공간이 협소하오니 가급적 대중교통 이용을 권장합니다.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
