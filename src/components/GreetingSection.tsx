import './GreetingSection.css'

const GreetingSection = () => {
  return (
    <section className="greeting-section">
      <div className="greeting-message">
        <p>
          함께 걸어온 시간 동안<br />
          서로에게 따뜻한 위로가 되어주었습니다.
        </p>
        <p>
          이제 평생을 함께할 반려자로서<br />
          새로운 출발을 하려 합니다.<br />
          귀한 발걸음으로 축복해 주시면 감사하겠습니다.
        </p>
      </div>

      <div className="family-info">
        <div className="family-row">
          <span className="parent-name">김봉수 · 정영주</span>
          <span className="relation">의 아들</span>
          <span className="person-name">지환</span>
        </div>
        <div className="family-row">
          <span className="parent-name">김진호 · 이숙희</span>
          <span className="relation">의 딸</span>
          <span className="person-name">이현</span>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-group">
          <div className="contact-person">신랑측 혼주</div>
          <div className="contact-buttons">
            <button className="contact-btn" aria-label="신랑 아버지 전화">
              <span className="contact-role">아버지</span>
              <span className="icon">📞</span>
            </button>
            <button className="contact-btn" aria-label="신랑 어머니 전화">
              <span className="contact-role">어머니</span>
              <span className="icon">📞</span>
            </button>
          </div>
        </div>

        <div className="contact-group">
          <div className="contact-person">신랑에게 연락하기</div>
          <div className="contact-buttons">
            <button className="contact-btn primary" aria-label="신랑 전화">
              <span className="icon">📞</span>
            </button>
            <button className="contact-btn primary" aria-label="신랑 문자">
              <span className="icon">💬</span>
            </button>
          </div>
        </div>

        <div className="divider"></div>

        <div className="contact-group">
          <div className="contact-person">신부측 혼주</div>
          <div className="contact-buttons">
            <button className="contact-btn" aria-label="신부 아버지 전화">
              <span className="contact-role">아버지</span>
              <span className="icon">📞</span>
            </button>
            <button className="contact-btn" aria-label="신부 어머니 전화">
              <span className="contact-role">어머니</span>
              <span className="icon">📞</span>
            </button>
          </div>
        </div>

        <div className="contact-group">
          <div className="contact-person">신부에게 연락하기</div>
          <div className="contact-buttons">
            <button className="contact-btn primary" aria-label="신부 전화">
              <span className="icon">📞</span>
            </button>
            <button className="contact-btn primary" aria-label="신부 문자">
              <span className="icon">💬</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GreetingSection
