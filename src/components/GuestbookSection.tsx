import React, { useState, useEffect } from 'react';
import { addGuestbookEntry, getGuestbookEntries, GuestbookEntry } from '../services/firebase';
import './GuestbookSection.css';

const GuestbookSection: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [displayedEntries, setDisplayedEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAll, setShowAll] = useState(false);
  
  const INITIAL_DISPLAY_COUNT = 5;

  // 방명록 항목 로드
  const loadEntries = async () => {
    setIsLoading(true);
    try {
      const guestbookEntries = await getGuestbookEntries();
      setEntries(guestbookEntries);
      setDisplayedEntries(guestbookEntries.slice(0, INITIAL_DISPLAY_COUNT));
    } catch (error) {
      console.error('방명록 로딩 오류:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // 표시할 항목 업데이트
  useEffect(() => {
    if (showAll) {
      setDisplayedEntries(entries);
    } else {
      setDisplayedEntries(entries.slice(0, INITIAL_DISPLAY_COUNT));
    }
  }, [entries, showAll, INITIAL_DISPLAY_COUNT]);

  // 컴포넌트 마운트 시 방명록 로드
  useEffect(() => {
    loadEntries();
  }, []);

  // 폼 제출 처리
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      alert('성함과 메시지를 모두 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const success = await addGuestbookEntry(name, message);
      
      if (success) {
        setName('');
        setMessage('');
        await loadEntries(); // 목록 새로고침
        alert('소중한 메시지가 등록되었습니다.');
      } else {
        alert('메시지 등록에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('방명록 등록 오류:', error);
      alert('메시지 등록 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 날짜 포맷팅
  const formatDate = (timestamp: any) => {
    if (!timestamp) return '';
    
    let date: Date;
    if (timestamp.toDate) {
      date = timestamp.toDate();
    } else if (timestamp instanceof Date) {
      date = timestamp;
    } else {
      date = new Date(timestamp);
    }
    
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="guestbook-section">
      <div className="guestbook-container">
        <h2 className="guestbook-title">방명록</h2>
        <p className="guestbook-subtitle">
          소중한 마음을 담은 메시지를 남겨주세요<br />
          축하의 말씀 감사히 받겠습니다
        </p>

        {/* 방명록 작성 폼 */}
        <form className="guestbook-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="성함을 입력해주세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={20}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="축하 메시지를 입력해주세요"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={200}
              rows={4}
              required
              disabled={isSubmitting}
            />
          </div>
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? '전송 중...' : '💌 메시지 남기기'}
          </button>
        </form>

        {/* 방명록 목록 */}
        <div className="guestbook-entries">
          {isLoading ? (
            <div className="loading-message">방명록을 불러오는 중...</div>
          ) : entries.length === 0 ? (
            <div className="no-entries">
              아직 방명록이 비어있습니다.<br />
              첫 번째 메시지를 남겨주세요!
            </div>
          ) : (
            <>
              {displayedEntries.map((entry) => (
                <div key={entry.id} className="guestbook-entry">
                  <div className="entry-header">
                    <span className="entry-name">{entry.name}</span>
                    <span className="entry-date">{formatDate(entry.timestamp)}</span>
                  </div>
                  <div className="entry-message">
                    {entry.message.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < entry.message.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* 더보기/접기 버튼 */}
        {entries.length > INITIAL_DISPLAY_COUNT && (
          <div className="show-more-container">
            <button 
              className="show-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll 
                ? `접기 (${entries.length}개 중 ${INITIAL_DISPLAY_COUNT}개만 보기)` 
                : `더보기 (${entries.length}개 중 ${INITIAL_DISPLAY_COUNT}개 표시)`
              }
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuestbookSection;
