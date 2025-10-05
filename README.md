# 💒 모바일 청첩장 (Wedding Invitation)

한국 스타일의 모던한 모바일 청첩장 웹사이트입니다.

## ✨ 주요 기능

- 📱 **모바일 최적화** - 모바일 우선 반응형 디자인
- 🎨 **깔끔한 디자인** - 한국 청첩장 스타일의 우아한 레이아웃
- 🖼️ **갤러리** - 라이트박스 기능이 포함된 사진 갤러리
- 📍 **오시는 길** - 지도 및 교통 정보 제공
- 💰 **계좌 안내** - 마음 전하실 곳 (신랑/신부측 계좌)
- 💬 **방명록** - 축하 메시지 남기기 기능
- 🔗 **공유하기** - 카카오톡, 링크 복사, SNS 공유
- ⏰ **D-Day 카운터** - 결혼식까지 실시간 카운트다운

## 🚀 시작하기

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 📂 프로젝트 구조

```
wedding_invi/
├── src/
│   ├── components/
│   │   ├── MainSection.tsx          # 메인 사진 및 커플 이름
│   │   ├── GreetingSection.tsx      # 인사말 및 가족 소개
│   │   ├── DateSection.tsx          # 날짜, 장소, D-Day 카운터
│   │   ├── GallerySection.tsx       # 사진 갤러리
│   │   ├── LocationSection.tsx      # 오시는 길 (지도, 교통편)
│   │   ├── AccountSection.tsx       # 마음 전하실 곳 (계좌번호)
│   │   ├── GuestbookSection.tsx     # 방명록 (축하 메시지)
│   │   └── ShareSection.tsx         # 공유하기 및 마무리
│   ├── App.tsx                      # 메인 앱 컴포넌트
│   ├── main.tsx                     # 엔트리 포인트
│   └── index.css                    # 글로벌 스타일
├── index.html
├── package.json
└── vite.config.ts
```

## 🎨 커스터마이징

### 1. 신랑신부 정보 수정

**src/components/MainSection.tsx**
```tsx
<h1 className="couple-names myeongjo">
  김태형 <span className="heart">♥</span> 이지은
</h1>
```

**src/components/GreetingSection.tsx**
```tsx
<div className="family-row">
  <span className="parent-name">김철수 · 박영희</span>
  <span className="relation">의 장남</span>
  <span className="person-name">태형</span>
</div>
```

### 2. 날짜 및 장소 수정

**src/components/DateSection.tsx**
```tsx
const weddingDate = new Date('2025-03-15T14:00:00')
```

**src/components/LocationSection.tsx**
```tsx
<h3 className="venue-name">○○웨딩홀</h3>
<p className="venue-address">서울특별시 강남구 테헤란로 123</p>
```

### 3. 사진 추가

**src/components/GallerySection.tsx**에서 placeholder를 실제 이미지로 교체:
```tsx
const images = [
  { id: 1, src: '/photos/photo1.jpg', alt: 'Photo 1' },
  { id: 2, src: '/photos/photo2.jpg', alt: 'Photo 2' },
  // ...
]
```

### 4. 계좌번호 수정

**src/components/AccountSection.tsx**에서 실제 계좌정보로 변경

### 5. 색상 테마 변경

주요 색상:
- 기본 배경: `#ffffff`
- 보조 배경: `#fdfbf9`, `#f5f0eb`
- 포인트 색상: `#d5a6a6` (핑크/로즈)
- 텍스트: `#333`, `#666`, `#999`

## 📄 섹션 설명

1. **메인 섹션** - 커플 사진, 이름, 날짜
2. **인사말** - 인사 메시지 및 혼주 소개, 연락처
3. **날짜/장소** - 결혼식 일시, 장소, D-Day 카운터, 캘린더 추가
4. **갤러리** - 사진 갤러리 (라이트박스)
5. **오시는 길** - 지도, 주소, 교통편 안내
6. **마음 전하실 곳** - 신랑/신부측 계좌번호 (아코디언 형식)
7. **방명록** - 축하 메시지 작성 및 목록
8. **공유하기** - 카카오톡, 링크복사, 공유하기 버튼

## 🔧 사용 기술

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빌드 도구
- **CSS3** - 스타일링

## 🌐 배포

추천 배포 플랫폼:
- **Vercel** - 추천 (무료, 간단)
- **Netlify** - 추천 (무료)
- **GitHub Pages** - 무료
- **Firebase Hosting** - 무료 티어 제공

### Vercel 배포 예시

```bash
# Vercel CLI 설치
npm install -g vercel

# 배포
vercel
```

## 📱 카카오톡 공유 연동

1. [Kakao Developers](https://developers.kakao.com)에서 앱 등록
2. `index.html`에 Kakao SDK 추가:
```html
<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
```
3. `ShareSection.tsx`에서 Kakao SDK 초기화 및 공유 기능 구현

## ✅ 커스터마이징 체크리스트

- [ ] 신랑/신부 이름 변경
- [ ] 부모님 성함 변경
- [ ] 결혼식 날짜 및 시간 변경
- [ ] 식장 이름 및 주소 변경
- [ ] 전화번호 연결 (href="tel:010-xxxx-xxxx")
- [ ] 실제 사진으로 교체
- [ ] 계좌번호 입력
- [ ] 지도 API 연동 (선택)
- [ ] 카카오톡 공유 기능 연동 (선택)
- [ ] 도메인 연결 및 배포

## 📝 참고사항

- 모든 개인정보는 플레이스홀더로 설정되어 있습니다
- 실제 사용 전 반드시 정보를 수정해주세요
- 이미지는 `public/` 폴더에 추가하고 경로를 수정하세요
- 지도 API는 선택사항이며, 플레이스홀더로 표시됩니다

## 💖 라이센스

MIT License - 자유롭게 사용 및 수정 가능합니다.

---

**행복한 결혼을 축하드립니다! 💑**