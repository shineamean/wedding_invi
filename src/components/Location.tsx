import './Location.css'

const Location = () => {
  const copyAddress = () => {
    const address = '서울특별시 강남구 테헤란로 123'
    navigator.clipboard.writeText(address)
    alert('주소가 복사되었습니다')
  }

  return (
    <section className="location">
      <div className="location-content">
        <h2 className="serif">오시는 길</h2>
        <p className="subtitle">Location</p>

        <div className="venue-info">
          <h3>○○웨딩홀</h3>
          <p className="address">서울특별시 강남구 테헤란로 123</p>
          <p className="hall">3층 그랜드홀</p>
          <p className="tel">📞 02-1234-5678</p>
        </div>

        <div className="map-placeholder">
          <div className="map-content">
            <span>🗺️</span>
            <p>지도</p>
          </div>
        </div>

        <div className="map-buttons">
          <button className="map-btn kakao">
            카카오맵
          </button>
          <button className="map-btn naver">
            네이버지도
          </button>
          <button className="map-btn google">
            구글맵
          </button>
        </div>

        <button className="copy-address-btn" onClick={copyAddress}>
          📋 주소 복사하기
        </button>

        <div className="transportation">
          <div className="transport-section">
            <h4>🚇 지하철</h4>
            <p>2호선 강남역 3번 출구 도보 5분</p>
            <p>신분당선 강남역 5번 출구 도보 7분</p>
          </div>
          
          <div className="transport-section">
            <h4>🚌 버스</h4>
            <p>강남역 하차: 146, 301, 740, 4319</p>
            <p>도보 5분 거리</p>
          </div>
          
          <div className="transport-section">
            <h4>🚗 자가용</h4>
            <p>건물 지하 1~3층 주차장 이용 가능</p>
            <p>3시간 무료 주차 지원</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
