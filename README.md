# 💒 Wedding Invitation (모바일 청첩장)

Modern and elegant wedding invitation website inspired by Korean wedding invitation designs.

## ✨ Features

- 🎨 **Clean & Modern Design** - Elegant layout with soft color palette
- 📱 **Fully Responsive** - Optimized for mobile and desktop viewing
- 🖼️ **Photo Gallery** - Showcase your beautiful moments with lightbox view
- 📍 **Location & Map** - Integrated map with directions
- 🔗 **Easy Sharing** - Share via KakaoTalk, copy link, or native share
- 💝 **Contact Information** - Direct contact buttons for bride and groom
- 🗺️ **Transportation Guide** - Subway, bus, and parking information

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
wedding_invi/
├── src/
│   ├── components/
│   │   ├── Hero.tsx          # Main hero section with names and date
│   │   ├── Invitation.tsx    # Invitation message and parents info
│   │   ├── Gallery.tsx       # Photo gallery with lightbox
│   │   ├── Location.tsx      # Venue location and map
│   │   ├── ShareButtons.tsx  # Share and QR code section
│   │   └── Footer.tsx        # Footer with thank you message
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── package.json              # Dependencies
└── vite.config.ts            # Vite configuration
```

## 🎨 Customization

### Update Wedding Information

Edit the component files to customize:

1. **Names & Date** - `src/components/Hero.tsx`
2. **Parents Information** - `src/components/Invitation.tsx`
3. **Venue Details** - `src/components/Location.tsx`
4. **Transportation** - `src/components/Location.tsx`

### Add Photos

Replace placeholder images in `src/components/Gallery.tsx`:

```tsx
const images = [
  { id: 1, src: '/photos/photo1.jpg', alt: 'Photo 1' },
  { id: 2, src: '/photos/photo2.jpg', alt: 'Photo 2' },
  // Add more photos...
]
```

### Color Scheme

Update colors in CSS files:
- Primary: `#8b6a5d` (brown)
- Background: `#f8f5f2` (cream)
- Accent: `#d4a5a5` (rose)

## 📝 Sections

1. **Hero** - Main banner with couple names and wedding date
2. **Invitation** - Formal invitation message and family information
3. **Gallery** - Photo gallery with 8 placeholder images
4. **Location** - Venue information with map and directions
5. **Share** - Share buttons and QR code
6. **Footer** - Closing message

## 🔧 Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **CSS3** - Styling with modern features

## 🌐 Deployment

This project can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📱 KakaoTalk Integration

To enable KakaoTalk sharing:

1. Register your app at [Kakao Developers](https://developers.kakao.com)
2. Add Kakao SDK to `index.html`
3. Update `ShareButtons.tsx` with your app key

## 🎯 TODO

- [ ] Add real wedding photos
- [ ] Update personal information (names, dates, venue)
- [ ] Integrate real map API (Kakao Map or Naver Map)
- [ ] Add Kakao SDK for KakaoTalk sharing
- [ ] Generate QR code for invitation
- [ ] Add guest book feature (optional)
- [ ] Add account information for gift (optional)
- [ ] Add calendar/reminder feature (optional)

## 📄 License

This project is open source and available under the MIT License.

## 💖 Credits

Design inspired by modern Korean wedding invitation websites.

---

**Made with ❤️ for your special day**