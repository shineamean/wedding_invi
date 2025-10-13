import { useEffect } from 'react'
import './LocationSection.css'

// 전역 타입 선언
declare global {
  interface Window {
    naver: any
  }
}

const LocationSection = () => {
  const copyAddress = () => {
    const address = '서울특별시 중구 남대문로 39'
    navigator.clipboard.writeText(address)
    alert('주소가 복사되었습니다')
  }

  const initNaverMap = () => {
    const clientId = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID
    
    if (!clientId || clientId === 'YOUR_ACTUAL_CLIENT_ID_HERE') {
      console.warn('네이버 지도 Client ID가 설정되지 않았습니다. .env 파일을 확인해주세요.')
      const mapElement = document.getElementById('naver-map')
      if (mapElement) {
        mapElement.innerHTML = '<div style="padding: 20px; text-align: center; color: #666;">지도를 불러올 수 없습니다.<br/>아래 버튼을 이용해 외부 지도 서비스를 이용해주세요.</div>'
      }
      return
    }

    // 네이버 지도 API 스크립트 로드
    if (!window.naver) {
      const script = document.createElement('script')
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`
      script.onload = () => {
        createMap()
      }
      script.onerror = (error) => {
        console.error('네이버 지도 API 로드 실패:', error)
        const mapElement = document.getElementById('naver-map')
        if (mapElement) {
          mapElement.innerHTML = '<div style="padding: 20px; text-align: center; color: #666;">지도를 불러올 수 없습니다.<br/>아래 버튼을 이용해 외부 지도 서비스를 이용해주세요.</div>'
        }
      }
      document.head.appendChild(script)
    } else {
      createMap()
    }
  }

  const createMap = () => {
    const mapElement = document.getElementById('naver-map')
    
    if (!mapElement) {
      console.warn('지도 컨테이너를 찾을 수 없습니다.')
      return
    }
    
    if (!window.naver || !window.naver.maps) {
      console.warn('네이버 지도 API가 로드되지 않았습니다.')
      return
    }

    try {
      const location = new window.naver.maps.LatLng(37.562068, 126.980357)
      
      const map = new window.naver.maps.Map(mapElement, {
        center: location,
        zoom: 16,
        minZoom: 12,
        maxZoom: 19,
        draggable: true,
        pinchZoom: true,
        scrollWheel: true,
        keyboardShortcuts: true,
        disableDoubleTapZoom: false,
        disableDoubleClickZoom: false,
        disableTwoFingerTapZoom: false,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.TOP_RIGHT
        }
      })

      // 마커 추가
      const marker = new window.naver.maps.Marker({
        position: location,
        map: map,
        title: '한국은행 2층 컨퍼런스홀',
        icon: {
          content: '<div style="background: #ff6b6b; color: white; padding: 10px; border-radius: 50%; font-size: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; width: 40px; height: 40px;">💒</div>',
          anchor: new window.naver.maps.Point(20, 20)
        }
      })

      // 정보창 추가
      const infoWindow = new window.naver.maps.InfoWindow({
        content: `
          <div style="padding: 15px; min-width: 200px;">
            <h4 style="margin: 0 0 8px 0; color: #333;">한국은행 2층 컨퍼런스홀</h4>
            <p style="margin: 0 0 5px 0; color: #666; font-size: 13px;">서울특별시 중구 남대문로 39</p>
            <p style="margin: 0; color: #666; font-size: 13px;">📅 2025년 12월 14일 오후 12시 30분</p>
          </div>
        `
      })

      // 마커 클릭시 정보창 표시
      window.naver.maps.Event.addListener(marker, 'click', () => {
        if (infoWindow.getMap()) {
          infoWindow.close()
        } else {
          infoWindow.open(map, marker)
        }
      })
      
      console.log('네이버 지도가 성공적으로 로드되었습니다.')
    } catch (error) {
      console.error('네이버 지도 생성 중 오류 발생:', error)
      if (mapElement) {
        mapElement.innerHTML = '<div style="padding: 20px; text-align: center; color: #666;">지도를 불러올 수 없습니다.<br/>아래 버튼을 이용해 외부 지도 서비스를 이용해주세요.</div>'
      }
    }
  }

  useEffect(() => {
    initNaverMap()
  }, [])

  return (
    <section className="location-section">
      <h2 className="section-title myeongjo">오시는 길</h2>

      <div className="venue-box">
        <h3 className="venue-name">한국은행</h3>
        <p className="venue-floor">2층 컨퍼런스홀</p>
        <p className="venue-address">서울특별시 중구 남대문로 39</p>
      </div>

      <div className="map-container">
        <div id="naver-map" className="naver-map"></div>
      </div>

      <div className="map-buttons">
        <button 
          className="map-btn kakao" 
          onClick={() => window.open('https://map.kakao.com/link/search/서울특별시%20중구%20남대문로%2039', '_blank')}
        >
          카카오맵
        </button>
        <button 
          className="map-btn naver" 
          onClick={() => window.open('https://map.naver.com/p/search/서울특별시%20중구%20남대문로%2039', '_blank')}
        >
          네이버지도
        </button>
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
