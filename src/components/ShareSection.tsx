import './ShareSection.css'

const ShareSection = () => {
  const handleKakaoShare = () => {
    alert('카카오톡 공유 기능\n(Kakao SDK 연동 필요)')
  }

  const handleCopyLink = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    alert('링크가 복사되었습니다!')
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '결혼식 초대장',
          text: '김지환 💍 김이현 결혼식에 초대합니다',
          url: window.location.href,
        })
      } catch (err) {
        console.log('공유 취소')
      }
    } else {
      handleCopyLink()
    }
  }

  return (
    <section className="share-section">
      <h2 className="section-title myeongjo">청첩장 공유하기</h2>
      
      <div className="share-buttons">
        <button className="share-btn kakao" onClick={handleKakaoShare}>
          <div className="share-icon">💬</div>
          <div className="share-text">카카오톡</div>
        </button>
        
        <button className="share-btn link" onClick={handleCopyLink}>
          <div className="share-icon">🔗</div>
          <div className="share-text">링크복사</div>
        </button>
        
        <button className="share-btn native" onClick={handleShare}>
          <div className="share-icon">📤</div>
          <div className="share-text">공유하기</div>
        </button>
      </div>

      <div className="thank-you">
        <p className="myeongjo">감사합니다</p>
        <div className="couple-names-footer">
          김지환 <span className="heart">💍</span> 김이현
        </div>
      </div>
    </section>
  )
}

export default ShareSection
