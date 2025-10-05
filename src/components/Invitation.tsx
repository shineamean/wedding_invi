import './Invitation.css'

const Invitation = () => {
  return (
    <section className="invitation">
      <div className="invitation-content">
        <div className="divider"></div>
        
        <h2 className="serif">초대합니다</h2>
        
        <div className="message">
          <p>
            소중한 분들을 초대합니다<br />
            저희 두 사람이 사랑과 믿음으로<br />
            한 가정을 이루게 되었습니다
          </p>
          <p>
            오셔서 축복해 주시면<br />
            더없는 기쁨으로 간직하겠습니다
          </p>
        </div>

        <div className="parents">
          <div className="parent-group">
            <p className="parent-role">신랑측 부모</p>
            <p className="parent-names">
              <span>김○○</span> · <span>박○○</span>의 아들 <strong>김신랑</strong>
            </p>
          </div>
          
          <div className="parent-group">
            <p className="parent-role">신부측 부모</p>
            <p className="parent-names">
              <span>이○○</span> · <span>정○○</span>의 딸 <strong>이신부</strong>
            </p>
          </div>
        </div>

        <div className="contact-buttons">
          <div className="contact-row">
            <button className="contact-btn groom">
              <span className="label">신랑에게 연락하기</span>
              <span className="icons">
                <span>📞</span>
                <span>💬</span>
              </span>
            </button>
          </div>
          <div className="contact-row">
            <button className="contact-btn bride">
              <span className="label">신부에게 연락하기</span>
              <span className="icons">
                <span>📞</span>
                <span>💬</span>
              </span>
            </button>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </section>
  )
}

export default Invitation
