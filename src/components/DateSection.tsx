import { useState, useEffect } from 'react'
import './DateSection.css'

const DateSection = () => {
  const weddingDate = new Date('2025-12-14T12:30:00')
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="date-section">
      <div className="date-content">
        <div className="calendar-icon">📅</div>
        <h2 className="myeongjo">2025년 12월 14일 일요일</h2>
        <p className="time">오후 12시 30분</p>
        <p className="venue">한국은행 컨퍼런스홀</p>
      </div>

      <div className="countdown">
        <div className="countdown-title">결혼식까지</div>
        <div className="countdown-timer">
          <div className="time-unit">
            <div className="time-value">{timeLeft.days}</div>
            <div className="time-label">일</div>
          </div>
          <div className="time-unit">
            <div className="time-value">{timeLeft.hours}</div>
            <div className="time-label">시간</div>
          </div>
          <div className="time-unit">
            <div className="time-value">{timeLeft.minutes}</div>
            <div className="time-label">분</div>
          </div>
          <div className="time-unit">
            <div className="time-value">{timeLeft.seconds}</div>
            <div className="time-label">초</div>
          </div>
        </div>
      </div>

      <button className="calendar-btn">
        📆 캘린더에 추가하기
      </button>
    </section>
  )
}

export default DateSection
