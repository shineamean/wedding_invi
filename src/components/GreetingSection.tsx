import { useEffect } from 'react'
import './GreetingSection.css'

const GreetingSection = () => {
  useEffect(() => {
    const toggleBtns = document.querySelectorAll('.toggle-btn')
    const groomContacts = document.getElementById('groom-contacts')
    const brideContacts = document.getElementById('bride-contacts')

    const handleToggle = (e: Event) => {
      const target = e.target as HTMLButtonElement
      const side = target.getAttribute('data-side')
      
      // 모든 토글 버튼에서 active 클래스 제거
      toggleBtns.forEach(btn => btn.classList.remove('active'))
      // 클릭된 버튼에 active 클래스 추가
      target.classList.add('active')
      
      // 연락처 그리드 표시/숨김
      if (side === 'groom') {
        if (groomContacts) groomContacts.classList.remove('hidden')
        if (brideContacts) brideContacts.classList.add('hidden')
      } else {
        if (groomContacts) groomContacts.classList.add('hidden')
        if (brideContacts) brideContacts.classList.remove('hidden')
      }
    }

    toggleBtns.forEach(btn => {
      btn.addEventListener('click', handleToggle)
    })

    // 클린업 함수
    return () => {
      toggleBtns.forEach(btn => {
        btn.removeEventListener('click', handleToggle)
      })
    }
  }, [])
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
        <h3 className="contact-title">연락처</h3>
        
        <div className="contact-toggle">
          <button className="toggle-btn active" data-side="groom">신랑측</button>
          <button className="toggle-btn" data-side="bride">신부측</button>
        </div>

        <div className="contact-content">
          <div className="contact-grid" id="groom-contacts">
            <div className="contact-item main-contact">
              <div className="contact-info">
                <p className="contact-name">신랑</p>
                <p className="contact-relation">김지환</p>
              </div>
              <div className="contact-actions">
                <a href="sms:010-9297-9769" className="contact-action-btn sms-btn">
                  <span>문자</span>
                </a>
                <a href="tel:010-9297-9769" className="contact-action-btn call-btn">
                  <span>전화</span>
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-info">
                <p className="contact-name">신랑 아버지</p>
                <p className="contact-relation">김봉수</p>
              </div>
              <div className="contact-actions">
                <a href="sms:010-8628-9769" className="contact-action-btn sms-btn">
                  <span>문자</span>
                </a>
                <a href="tel:010-8628-9769" className="contact-action-btn call-btn">
                  <span>전화</span>
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-info">
                <p className="contact-name">신랑 어머니</p>
                <p className="contact-relation">정영주</p>
              </div>
              <div className="contact-actions">
                <a href="sms:010-5603-9769" className="contact-action-btn sms-btn">
                  <span>문자</span>
                </a>
                <a href="tel:010-5603-9769" className="contact-action-btn call-btn">
                  <span>전화</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-grid hidden" id="bride-contacts">
            <div className="contact-item main-contact">
              <div className="contact-info">
                <p className="contact-name">신부</p>
                <p className="contact-relation">김이현</p>
              </div>
              <div className="contact-actions">
                <a href="sms:010-9119-0317" className="contact-action-btn sms-btn">
                  <span>문자</span>
                </a>
                <a href="tel:010-9119-0317" className="contact-action-btn call-btn">
                  <span>전화</span>
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-info">
                <p className="contact-name">신부 아버지</p>
                <p className="contact-relation">김진호</p>
              </div>
              <div className="contact-actions">
                <a href="sms:010-4155-4772" className="contact-action-btn sms-btn">
                  <span>문자</span>
                </a>
                <a href="tel:010-4155-4772" className="contact-action-btn call-btn">
                  <span>전화</span>
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-info">
                <p className="contact-name">신부 어머니</p>
                <p className="contact-relation">이숙희</p>
              </div>
              <div className="contact-actions">
                <a href="sms:010-9477-0317" className="contact-action-btn sms-btn">
                  <span>문자</span>
                </a>
                <a href="tel:010-9477-0317" className="contact-action-btn call-btn">
                  <span>전화</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GreetingSection
