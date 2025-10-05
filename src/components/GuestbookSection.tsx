import { useState } from 'react'
import './GuestbookSection.css'

interface Message {
  id: number
  name: string
  content: string
  date: string
}

const GuestbookSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: '홍길동',
      content: '결혼을 진심으로 축하합니다! 항상 행복하세요 💕',
      date: '2025.03.01',
    },
    {
      id: 2,
      name: '김영희',
      content: '축하해요~ 예쁘게 오래오래 행복하게 사세요!',
      date: '2025.03.02',
    },
  ])
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name.trim() || !content.trim()) {
      alert('이름과 메시지를 입력해주세요')
      return
    }

    const newMessage: Message = {
      id: messages.length + 1,
      name: name.trim(),
      content: content.trim(),
      date: new Date().toISOString().split('T')[0].replace(/-/g, '.'),
    }

    setMessages([newMessage, ...messages])
    setName('')
    setContent('')
    setPassword('')
    alert('축하 메시지가 등록되었습니다 💕')
  }

  return (
    <section className="guestbook-section">
      <h2 className="section-title myeongjo">축하 메시지</h2>
      <p className="guestbook-subtitle">따뜻한 축하의 말씀을 남겨주세요</p>

      <form className="message-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            maxLength={10}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            maxLength={4}
          />
        </div>
        <textarea
          placeholder="축하 메시지를 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="form-textarea"
          rows={3}
          maxLength={200}
        />
        <button type="submit" className="submit-btn">
          축하 메시지 등록
        </button>
      </form>

      <div className="messages-list">
        <div className="messages-count">총 {messages.length}개의 축하 메시지</div>
        {messages.map((message) => (
          <div key={message.id} className="message-item">
            <div className="message-header">
              <span className="message-name">{message.name}</span>
              <span className="message-date">{message.date}</span>
            </div>
            <div className="message-content">{message.content}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GuestbookSection
