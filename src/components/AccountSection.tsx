import { useState } from 'react'
import './AccountSection.css'

const AccountSection = () => {
  const [isGroomOpen, setIsGroomOpen] = useState(false)
  const [isBrideOpen, setIsBrideOpen] = useState(false)

  const copyAccount = (bank: string, account: string, name: string) => {
    const text = `${bank} ${account} ${name}`
    navigator.clipboard.writeText(account)
    alert(`계좌번호가 복사되었습니다\n${text}`)
  }

  return (
    <section className="account-section">
      <h2 className="section-title myeongjo">마음 전하실 곳</h2>
      <p className="account-subtitle">참석이 어려우신 분들께서는<br />축하의 마음을 전달해주세요</p>

      <div className="account-container">
        <div className="account-group">
          <button
            className="account-header"
            onClick={() => setIsGroomOpen(!isGroomOpen)}
          >
            <span>신랑측 계좌번호</span>
            <span className="arrow">{isGroomOpen ? '▲' : '▼'}</span>
          </button>
          
          {isGroomOpen && (
            <div className="account-content">
              <div className="account-item">
                <div className="account-info">
                  <div className="account-owner">신랑 김지환</div>
                  <div className="account-number">하나은행 123-456789-00000</div>
                </div>
                <button
                  className="copy-account-btn"
                  onClick={() => copyAccount('하나은행', '123-456789-00000', '김지환')}
                >
                  복사
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="account-group">
          <button
            className="account-header"
            onClick={() => setIsBrideOpen(!isBrideOpen)}
          >
            <span>신부측 계좌번호</span>
            <span className="arrow">{isBrideOpen ? '▲' : '▼'}</span>
          </button>
          
          {isBrideOpen && (
            <div className="account-content">
              <div className="account-item">
                <div className="account-info">
                  <div className="account-owner">신부 김이현</div>
                  <div className="account-number">신한은행 987-654321-00000</div>
                </div>
                <button
                  className="copy-account-btn"
                  onClick={() => copyAccount('신한은행', '987-654321-00000', '김이현')}
                >
                  복사
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default AccountSection
