# ARENA LOGS - Cyberpunk Tournament Dashboard

A fully functional, multi-page cyberpunk esports tournament dashboard featuring real-time match tracking, video replay system, team statistics, and comprehensive analytics.

## 🎮 Features

- **Splash Screen** with team credits and localStorage preference
- **Multi-Page Routing** with client-side navigation
- **Video Replay System** with play/pause, previous/next controls
- **Live Countdown Timers** for upcoming matches
- **Team Directory** with detailed statistics and rosters
- **Match History** with searchable and filterable results
- **Admin Panel** for adding matches (localStorage-based)
- **Ambient Sound System** with toggle control
- **Authority Warning** system at high notoriety levels
- **Responsive Design** for desktop and mobile
- **Neon Cyberpunk Theme** with animations and effects

## 👥 Development Team

- **Yogesh Kumar** - 2427030798
- **Hemant Mahala** - 2427030803
- **Yash Singh** - 2427030760
- **Priyanshu Patro** - 2427030735

## 🚀 Quick Start

### Local Development

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd arena-logs
   ```

2. **Option A: Open directly in browser**
   - Simply open `splash.html` in your web browser
   - Or use the Live Server extension in VS Code

3. **Option B: Use a local server (recommended)**
   ```bash
   # Using Python
   python -m http.server 8080
   
   # Using Node.js
   npx serve
   
   # Using PHP
   php -S localhost:8080
   ```

4. **Access the application:**
   - Navigate to `http://localhost:8080/splash.html`
   - Or `http://localhost:8080` (will redirect to splash)

## 📁 Project Structure

```
arena-logs/
├── index.html              # Main router entry point
├── splash.html             # Splash screen with credits
├── home.html              # Main dashboard page
├── styles.css             # Complete styling (1370+ lines)
├── script.js              # Main functionality (1400+ lines)
├── router.js              # Client-side routing system
├── data.js                # Legacy data (being replaced by JSON)
├── data/
│   ├── sample-matches.json    # Match data (6 matches)
│   ├── teams.json            # Team data (6 teams)
│   └── upcoming.json         # Upcoming matches (5 matches)
├── assets/
│   ├── README.md            # Asset documentation
│   ├── team-*.png          # Team logos (placeholders)
│   └── replay*.mp4         # Replay videos (placeholders)
├── pages/                  # Additional page templates
├── package.json           # Project metadata
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## 🎯 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Splash screen (auto-redirects to home) |
| `/home` | Main dashboard with replays, history, notoriety |
| `/replays` | Full replay library with filters |
| `/matches/:id` | Dynamic match detail page |
| `/teams` | Team directory and rankings |
| `/schedule` | Calendar view with countdown |
| `/about` | Project information and credits |
| `/admin` | Admin panel (mock password protected) |

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Advanced animations and responsive design
- **JavaScript (ES6+)** - Modern vanilla JS
- **Web Audio API** - Ambient sound system
- **LocalStorage API** - User preferences and admin data
- **JSON** - Data structure and storage
- **Client-Side Routing** - SPA-like navigation

## 📊 Data Management

### JSON Data Files

All match, team, and schedule data is stored in JSON files under `data/`:

- **sample-matches.json**: Contains 6 match records with scores, stats, and replay links
- **teams.json**: Contains 6 team profiles with rankings and rosters
- **upcoming.json**: Contains 5 upcoming matches with countdown data

### Admin Panel

Access the admin panel at `/admin` to:
- Add new matches to localStorage
- View and manage existing matches
- Changes persist across sessions
- Data merges with JSON files

### Data Flow

1. Application loads JSON files on startup
2. Checks localStorage for admin-added matches
3. Merges data and displays in UI
4. Admin changes saved to localStorage
5. Fallback to JSON if localStorage unavailable

## 🎨 Customization

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --neon-cyan: #00ffff;
    --neon-magenta: #ff00ff;
    --neon-purple: #9d00ff;
    --dark-bg: #0a0a0f;
    /* ... */
}
```

### Adding Assets

1. Place team logos in `assets/` (PNG, 100x100px)
2. Place replay videos in `assets/` (MP4, H.264)
3. Update paths in `data/teams.json` and `data/sample-matches.json`
4. See `assets/README.md` for specifications

### Adding New Routes

In your JavaScript file:

```javascript
router.addRoute('/your-page', async (params) => {
    document.getElementById('app').innerHTML = `
        <!-- Your page HTML -->
    `;
    // Initialize page functionality
});
```

## 🌐 Deployment

### GitHub Pages

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click Save

3. **Access your site:**
   - `https://<username>.github.io/<repository-name>/splash.html`

### Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow prompts** and your site will be live!

### Netlify

1. **Drag and drop** the project folder to Netlify
2. Or connect your GitHub repository
3. Build settings: None needed (static site)
4. Publish directory: `./`

## 🔒 Browser Compatibility

- **Chrome/Edge**: ✅ Full support
- **Firefox**: ✅ Full support
- **Safari**: ✅ Full support (iOS 12+)
- **Opera**: ✅ Full support

## 📝 Key Features Implementation

### Video Replay System
- Uses HTML5 `<video>` element
- Custom controls with play/pause, prev/next
- Timeline scrubbing
- Auto-updates time display
- Loads from JSON data

### Countdown Timer
- Real-time countdown to next match
- Updates every second
- Shows days, hours, minutes, seconds
- Auto-updates on page load

### Notoriety Meter
- Animates to random value (50-90%)
- Shows authority warning at 80%+
- Tooltip on hover
- Dynamic status updates

### Ambient Sound
- Web Audio API oscillator
- Low-frequency hum (60Hz)
- Toggle on/off
- Muted by default

## 🐛 Troubleshooting

### Videos not playing
- Check file paths in `data/sample-matches.json`
- Ensure MP4 files are H.264 encoded
- Try using remote URLs (Google sample videos)

### Routing not working
- Ensure you're using a local server (not `file://`)
- Check browser console for errors
- Verify `router.js` is loaded

### LocalStorage not persisting
- Check browser privacy settings
- Ensure cookies/storage are enabled
- Try clearing browser cache

## 📄 License

This project is created for educational purposes.

## 🤝 Contributing

This is a hackathon project. For improvements:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

For questions or support, contact any team member listed above.

---

**Built with ⚡ by the Arena Logs Team**
