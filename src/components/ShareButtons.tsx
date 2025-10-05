import './ShareButtons.css'

const ShareButtons = () => {
  const handleKakaoShare = () => {
    alert('카카오톡 공유 기능은 Kakao SDK 설정 후 사용 가능합니다')
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
          text: '저희 결혼식에 초대합니다',
          url: window.location.href,
        })
      } catch (err) {
        console.log('Share cancelled')
      }
    } else {
      handleCopyLink()
    }
  }

  return (
    <section className="share-section">
      <div className="share-content">
        <h2 className="serif">청첩장 공유하기</h2>
        <p className="subtitle">소중한 분들께 전해주세요</p>

        <div className="share-buttons">
          <button className="share-btn kakao" onClick={handleKakaoShare}>
            <span className="icon">💬</span>
            <span className="text">카카오톡</span>
          </button>
          
          <button className="share-btn link" onClick={handleCopyLink}>
            <span className="icon">🔗</span>
            <span className="text">링크복사</span>
          </button>
          
          <button className="share-btn share" onClick={handleShare}>
            <span className="icon">📤</span>
            <span className="text">공유하기</span>
          </button>
        </div>

        <div className="qr-section">
          <div className="qr-placeholder">
            <span>QR</span>
          </div>
          <p className="qr-text">QR코드로 초대장을 공유해보세요</p>
        </div>
      </div>
    </section>
  )
}

export default ShareButtons
