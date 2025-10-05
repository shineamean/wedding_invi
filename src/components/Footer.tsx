import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-message">
          <p className="serif">감사합니다</p>
          <p className="message">
            참석이 어려우신 분들도<br />
            마음만으로도 감사드립니다
          </p>
        </div>

        <div className="divider"></div>

        <div className="couple-names">
          <span>김신랑</span>
          <span className="heart">♥</span>
          <span>이신부</span>
        </div>

        <div className="wedding-date-simple">
          2025. 03. 15
        </div>

        <div className="copyright">
          <p>© 2025 Wedding Invitation</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
