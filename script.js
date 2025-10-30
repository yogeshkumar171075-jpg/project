// Mock Battle History Data
const battleHistory = [
    {
        id: 1,
        date: '2024.10.28',
        team1: 'SHADOW SYNDICATE',
        team2: 'NEON REAPERS',
        score1: 13,
        score2: 8,
        result: 'victory',
        location: 'SECTOR-7',
        duration: '47:23',
        kills: 156,
        deaths: 98,
        assists: 234,
        accuracy: '67%',
        headshots: 45,
        mvp: 'SHADOW-7'
    },
    {
        id: 2,
        date: '2024.10.27',
        team1: 'CYBER WOLVES',
        team2: 'SHADOW SYNDICATE',
        score1: 16,
        score2: 14,
        result: 'defeat',
        location: 'SECTOR-3',
        duration: '52:11',
        kills: 142,
        deaths: 151,
        assists: 198,
        accuracy: '61%',
        headshots: 38,
        mvp: 'CYBER-3'
    },
    {
        id: 3,
        date: '2024.10.26',
        team1: 'SHADOW SYNDICATE',
        team2: 'VOID RUNNERS',
        score1: 13,
        score2: 5,
        result: 'victory',
        location: 'SECTOR-9',
        duration: '38:45',
        kills: 178,
        deaths: 76,
        assists: 267,
        accuracy: '72%',
        headshots: 52,
        mvp: 'SHADOW-2'
    },
    {
        id: 4,
        date: '2024.10.25',
        team1: 'GHOST PROTOCOL',
        team2: 'SHADOW SYNDICATE',
        score1: 10,
        score2: 13,
        result: 'victory',
        location: 'SECTOR-1',
        duration: '44:32',
        kills: 149,
        deaths: 112,
        assists: 221,
        accuracy: '65%',
        headshots: 41,
        mvp: 'SHADOW-5'
    },
    {
        id: 5,
        date: '2024.10.24',
        team1: 'SHADOW SYNDICATE',
        team2: 'DIGITAL PHANTOMS',
        score1: 8,
        score2: 13,
        result: 'defeat',
        location: 'SECTOR-5',
        duration: '41:18',
        kills: 121,
        deaths: 145,
        assists: 176,
        accuracy: '58%',
        headshots: 33,
        mvp: 'PHANTOM-1'
    }
];

// Mock Calendar Data
const upcomingMatches = [
    {
        date: 'OCT 30',
        time: '18:00 UTC',
        title: 'CHAMPIONSHIP FINALS',
        opponent: 'NEON REAPERS',
        reward: '₡ 100,000',
        tier: 'LEGENDARY'
    },
    {
        date: 'OCT 31',
        time: '20:00 UTC',
        title: 'ELIMINATION ROUND',
        opponent: 'CYBER WOLVES',
        reward: '₡ 50,000',
        tier: 'EPIC'
    },
    {
        date: 'NOV 01',
        time: '19:30 UTC',
        title: 'QUALIFIER MATCH',
        opponent: 'VOID RUNNERS',
        reward: '₡ 25,000',
        tier: 'RARE'
    },
    {
        date: 'NOV 02',
        time: '21:00 UTC',
        title: 'PRACTICE SCRIMMAGE',
        opponent: 'GHOST PROTOCOL',
        reward: '₡ 10,000',
        tier: 'COMMON'
    }
];

// Initialize Battle History
function initBattleHistory() {
    const container = document.getElementById('battleHistory');
    
    battleHistory.forEach(battle => {
        const card = document.createElement('div');
        card.className = `battle-card ${battle.result}`;
        card.dataset.battleId = battle.id;
        
        card.innerHTML = `
            <div class="battle-header">
                <span class="battle-date">${battle.date}</span>
                <span class="battle-result ${battle.result}">${battle.result.toUpperCase()}</span>
            </div>
            <div class="battle-teams">
                <div class="team">
                    <div class="team-name">${battle.team1}</div>
                    <div class="team-score">${battle.score1}</div>
                </div>
                <div class="vs-divider">VS</div>
                <div class="team">
                    <div class="team-name">${battle.team2}</div>
                    <div class="team-score">${battle.score2}</div>
                </div>
            </div>
            <div class="battle-location">
                <span>📍 ${battle.location}</span>
                <span>⏱ ${battle.duration}</span>
            </div>
        `;
        
        // Add click handler to open modal
        card.addEventListener('click', () => {
            openBattleModal(battle.id);
        });
        
        container.appendChild(card);
    });
}

// Initialize Calendar
function initCalendar() {
    const container = document.getElementById('calendarGrid');
    
    upcomingMatches.forEach(match => {
        const item = document.createElement('div');
        item.className = 'calendar-item';
        
        item.innerHTML = `
            <div class="calendar-header">
                <span class="calendar-date">${match.date}</span>
                <span class="calendar-time">${match.time}</span>
            </div>
            <div class="calendar-title">${match.title}</div>
            <div class="calendar-details">
                <div class="detail-row">
                    <span class="detail-label">Opponent:</span>
                    <span class="detail-value">${match.opponent}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Reward:</span>
                    <span class="reward-badge">${match.reward}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Tier:</span>
                    <span class="detail-value">${match.tier}</span>
                </div>
            </div>
        `;
        
        container.appendChild(item);
    });
}

// Initialize Notoriety Meter
function initNotorietyMeter() {
    let notoriety = 0;
    const targetNotoriety = 73; // Target percentage
    const circle = document.getElementById('notorietyCircle');
    const valueDisplay = document.getElementById('notorietyValue');
    const authorityStatus = document.getElementById('authorityStatus');
    const heatLevel = document.getElementById('heatLevel');
    const bountyAmount = document.getElementById('bountyAmount');
    const detectionBar = document.getElementById('detectionBar');
    const detectionValue = document.getElementById('detectionValue');
    
    const circumference = 2 * Math.PI * 85;
    circle.style.strokeDasharray = circumference;
    
    // Animate notoriety increase
    const interval = setInterval(() => {
        if (notoriety < targetNotoriety) {
            notoriety++;
            const offset = circumference - (notoriety / 100) * circumference;
            circle.style.strokeDashoffset = offset;
            valueDisplay.textContent = notoriety;
            
            // Update detection bar
            detectionBar.style.width = notoriety + '%';
            detectionValue.textContent = notoriety + '%';
            
            // Update status based on notoriety level
            if (notoriety < 30) {
                authorityStatus.textContent = 'MONITORING';
                authorityStatus.style.color = 'var(--success-color)';
                heatLevel.textContent = 'LOW';
                heatLevel.style.color = 'var(--success-color)';
            } else if (notoriety < 60) {
                authorityStatus.textContent = 'INVESTIGATING';
                authorityStatus.style.color = 'var(--warning-color)';
                heatLevel.textContent = 'MODERATE';
                heatLevel.style.color = 'var(--warning-color)';
            } else {
                authorityStatus.textContent = 'ACTIVE PURSUIT';
                authorityStatus.style.color = 'var(--danger-color)';
                heatLevel.textContent = 'CRITICAL';
                heatLevel.style.color = 'var(--danger-color)';
            }
            
            // Update bounty
            const bounty = Math.floor((notoriety / 100) * 150000);
            bountyAmount.textContent = `₡ ${bounty.toLocaleString()}`;
        } else {
            clearInterval(interval);
        }
    }, 30);
}

// Active Feeds Counter Animation
function animateActiveFeeds() {
    const feedsElement = document.getElementById('activeFeeds');
    let count = 247;
    
    setInterval(() => {
        const change = Math.floor(Math.random() * 10) - 5;
        count = Math.max(200, Math.min(300, count + change));
        feedsElement.textContent = count;
    }, 3000);
}

// System Uptime Counter
function updateUptime() {
    const uptimeElement = document.getElementById('uptime');
    let seconds = 0;
    
    setInterval(() => {
        seconds++;
        const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        uptimeElement.textContent = `${hours}:${minutes}:${secs}`;
    }, 1000);
}

// Sound Toggle Functionality
function initSoundToggle() {
    const soundToggle = document.getElementById('soundToggle');
    let isMuted = true;
    
    soundToggle.addEventListener('click', () => {
        isMuted = !isMuted;
        soundToggle.classList.toggle('muted', isMuted);
        
        // In a real implementation, this would control ambient sound
        console.log('Sound ' + (isMuted ? 'muted' : 'unmuted'));
    });
}

// Replay Item Click Handlers
function initReplayItems() {
    const replayItems = document.querySelectorAll('.replay-item');
    
    replayItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            replayItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            item.classList.add('active');
            
            // Add glitch effect
            item.style.animation = 'glitch-card 0.2s ease';
            setTimeout(() => {
                item.style.animation = '';
            }, 200);
        });
    });
}

// Video Controls
function initVideoControls() {
    const playBtn = document.querySelector('.play-btn');
    const timeline = document.querySelector('.timeline');
    const timelineProgress = document.querySelector('.timeline-progress');
    const timelineMarker = document.querySelector('.timeline-marker');
    let isPlaying = false;
    let progress = 35;
    
    playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
            playBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
            `;
            // Simulate playback
            const playInterval = setInterval(() => {
                if (progress < 100 && isPlaying) {
                    progress += 0.5;
                    timelineProgress.style.width = progress + '%';
                    timelineMarker.style.left = progress + '%';
                } else {
                    clearInterval(playInterval);
                    isPlaying = false;
                    playBtn.innerHTML = `
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                    `;
                }
            }, 100);
        } else {
            playBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
            `;
        }
    });
    
    // Timeline click to seek
    timeline.addEventListener('click', (e) => {
        const rect = timeline.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        progress = (clickX / rect.width) * 100;
        timelineProgress.style.width = progress + '%';
        timelineMarker.style.left = progress + '%';
    });
}

// Random Glitch Effects
function addRandomGlitches() {
    const panels = document.querySelectorAll('.panel');
    
    setInterval(() => {
        const randomPanel = panels[Math.floor(Math.random() * panels.length)];
        randomPanel.style.animation = 'glitch-panel 0.1s ease';
        
        setTimeout(() => {
            randomPanel.style.animation = '';
        }, 100);
    }, 8000);
}

// Add glitch animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes glitch-card {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-2px); }
        50% { transform: translateX(2px); }
        75% { transform: translateX(-2px); }
    }
    
    @keyframes glitch-panel {
        0%, 100% { transform: translate(0); opacity: 1; }
        25% { transform: translate(-2px, 2px); opacity: 0.8; }
        50% { transform: translate(2px, -2px); opacity: 0.9; }
        75% { transform: translate(-2px, -2px); opacity: 0.85; }
    }
    
    .scan-line {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--neon-cyan), transparent);
        animation: scan 3s linear infinite;
    }
    
    @keyframes scan {
        0% { transform: translateY(0); opacity: 0.5; }
        50% { opacity: 1; }
        100% { transform: translateY(400px); opacity: 0.5; }
    }
    
    .crosshair {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 30px;
        height: 30px;
        margin: -15px 0 0 -15px;
        border: 2px solid var(--neon-magenta);
        border-radius: 50%;
        animation: pulse 2s ease-in-out infinite;
    }
    
    .crosshair::before,
    .crosshair::after {
        content: '';
        position: absolute;
        background: var(--neon-magenta);
    }
    
    .crosshair::before {
        top: 50%;
        left: -10px;
        right: -10px;
        height: 2px;
        margin-top: -1px;
    }
    
    .crosshair::after {
        left: 50%;
        top: -10px;
        bottom: -10px;
        width: 2px;
        margin-left: -1px;
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.2); opacity: 0.7; }
    }
    
    .video-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
    }
    
    .tactical-hud {
        position: relative;
        width: 100%;
        height: 100%;
    }
    
    .video-info {
        position: absolute;
        top: 20px;
        left: 70px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 0.8rem;
        color: var(--neon-cyan);
        text-shadow: 0 0 5px var(--neon-cyan);
    }
    
    .static-effect {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255, 255, 255, 0.03) 2px,
            rgba(255, 255, 255, 0.03) 4px
        );
        animation: static 0.5s steps(10) infinite;
    }
    
    @keyframes static {
        0% { transform: translateY(0); }
        100% { transform: translateY(-10px); }
    }
    
    .replay-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        margin-top: 20px;
    }
    
    .replay-item {
        display: flex;
        gap: 10px;
        padding: 10px;
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid var(--border-color);
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .replay-item:hover {
        border-color: var(--neon-cyan);
        background: rgba(0, 255, 255, 0.1);
        box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
    }
    
    .replay-item.active {
        border-color: var(--neon-magenta);
        background: rgba(255, 0, 255, 0.1);
    }
    
    .replay-thumb {
        width: 60px;
        height: 40px;
        background: linear-gradient(135deg, #1a1a2e, #2a2a3e);
        border: 1px solid var(--neon-cyan);
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    
    .thumb-overlay {
        color: var(--neon-cyan);
        font-size: 1.2rem;
    }
    
    .replay-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .replay-title {
        font-size: 0.85rem;
        font-weight: bold;
        color: var(--text-primary);
        margin-bottom: 3px;
    }
    
    .replay-meta {
        font-size: 0.7rem;
        color: var(--text-secondary);
    }
    
    .notoriety-info {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    
    .info-row {
        display: flex;
        justify-content: space-between;
        padding: 10px 15px;
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid var(--border-color);
        border-radius: 4px;
        transition: all 0.3s ease;
    }
    
    .info-row:hover {
        border-color: var(--neon-cyan);
        background: rgba(0, 255, 255, 0.05);
    }
    
    .info-label {
        color: var(--text-secondary);
        font-size: 0.9rem;
    }
    
    .info-value {
        color: var(--neon-magenta);
        font-weight: bold;
        font-size: 0.9rem;
    }
    
    .horizontal-meter {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .h-meter-label {
        font-size: 0.8rem;
        color: var(--text-secondary);
        letter-spacing: 2px;
    }
    
    .h-meter-value {
        font-size: 0.9rem;
        color: var(--neon-cyan);
        font-weight: bold;
        text-align: right;
        margin-top: 5px;
    }
    
    .h-meter-segments {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 2px;
    }
    
    .h-meter-segments span {
        width: 2px;
        height: 100%;
        background: var(--dark-bg);
    }
    
    .meter-label {
        font-size: 0.9rem;
        color: var(--text-secondary);
        letter-spacing: 2px;
        margin-top: 5px;
    }
    
    .calendar-date {
        font-size: 0.9rem;
        color: var(--neon-cyan);
        font-weight: bold;
        letter-spacing: 1px;
    }
    
    .calendar-time {
        font-size: 0.8rem;
        color: var(--text-secondary);
    }
    
    .calendar-title {
        font-size: 1.1rem;
        font-weight: bold;
        color: var(--text-primary);
        margin-bottom: 10px;
    }
    
    .calendar-details {
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-size: 0.85rem;
    }
    
    .detail-row {
        display: flex;
        justify-content: space-between;
        color: var(--text-secondary);
    }
    
    .detail-label {
        color: var(--text-secondary);
    }
    
    .detail-value {
        color: var(--neon-magenta);
        font-weight: bold;
    }
    
    .reward-badge {
        display: inline-block;
        padding: 3px 10px;
        background: rgba(255, 170, 0, 0.2);
        border: 1px solid var(--warning-color);
        border-radius: 3px;
        color: var(--warning-color);
        font-size: 0.75rem;
        font-weight: bold;
    }
    
    .battle-date {
        font-size: 0.8rem;
        color: var(--text-secondary);
        letter-spacing: 1px;
    }
    
    .vs-divider {
        font-size: 1.2rem;
        color: var(--neon-magenta);
        font-weight: bold;
    }
    
    .team {
        flex: 1;
        text-align: center;
    }
    
    .team-score {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--text-primary);
    }
    
    .battle-location {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid var(--border-color);
        font-size: 0.8rem;
        color: var(--text-secondary);
        display: flex;
        justify-content: space-between;
    }
    
    .terminal-footer {
        text-align: center;
        padding: 20px;
        border-top: 1px solid var(--border-color);
        font-size: 0.8rem;
        color: var(--text-secondary);
    }
    
    .footer-line {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        flex-wrap: wrap;
    }
    
    .separator {
        color: var(--neon-cyan);
    }
`;
document.head.appendChild(style);

// ===== MODAL FUNCTIONALITY =====
let currentBattle = null;

function openBattleModal(battleId) {
    currentBattle = battleHistory.find(b => b.id === battleId);
    if (!currentBattle) return;
    
    const modal = document.getElementById('battleModal');
    const statsContainer = document.getElementById('modalStats');
    
    // Populate modal stats
    statsContainer.innerHTML = `
        <div class="stat-box">
            <div class="stat-box-label">KILLS</div>
            <div class="stat-box-value">${currentBattle.kills}</div>
        </div>
        <div class="stat-box">
            <div class="stat-box-label">DEATHS</div>
            <div class="stat-box-value">${currentBattle.deaths}</div>
        </div>
        <div class="stat-box">
            <div class="stat-box-label">ASSISTS</div>
            <div class="stat-box-value">${currentBattle.assists}</div>
        </div>
        <div class="stat-box">
            <div class="stat-box-label">ACCURACY</div>
            <div class="stat-box-value">${currentBattle.accuracy}</div>
        </div>
        <div class="stat-box">
            <div class="stat-box-label">HEADSHOTS</div>
            <div class="stat-box-value">${currentBattle.headshots}</div>
        </div>
        <div class="stat-box">
            <div class="stat-box-label">MVP</div>
            <div class="stat-box-value">${currentBattle.mvp}</div>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeBattleModal() {
    const modal = document.getElementById('battleModal');
    modal.classList.remove('active');
    currentBattle = null;
}

// ===== NAVIGATION TABS =====
function initNavigationTabs() {
    const tabs = document.querySelectorAll('.nav-tab');
    const contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(`${targetTab}-content`).classList.add('active');
            
            // Add glitch effect
            tab.style.animation = 'glitch-card 0.2s ease';
            setTimeout(() => {
                tab.style.animation = '';
            }, 200);
        });
    });
}

// ===== START REPLAY BUTTON =====
function initStartReplayButton() {
    const startReplayBtn = document.getElementById('startReplay');
    
    startReplayBtn.addEventListener('click', () => {
        const playOverlay = document.querySelector('.play-overlay');
        const videoPlaceholder = document.querySelector('.modal-video-placeholder');
        
        // Hide play button
        playOverlay.style.display = 'none';
        
        // Simulate video playing
        videoPlaceholder.innerHTML = `
            <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 20px;">
                <div style="font-size: 2rem; color: var(--neon-cyan); animation: pulse 1s infinite;">▶ REPLAY IN PROGRESS</div>
                <div style="font-size: 1rem; color: var(--text-secondary);">Analyzing tactical data...</div>
                <div style="width: 80%; height: 4px; background: rgba(0,0,0,0.5); border-radius: 2px; overflow: hidden;">
                    <div style="width: 0%; height: 100%; background: linear-gradient(90deg, var(--neon-cyan), var(--neon-magenta)); animation: loadingBar 3s ease-in-out forwards;"></div>
                </div>
            </div>
        `;
        
        // Reset after 3 seconds
        setTimeout(() => {
            videoPlaceholder.innerHTML = `
                <div class="play-overlay" id="startReplay">
                    <div class="play-icon-large">▶</div>
                    <div class="play-text">START REPLAY</div>
                </div>
            `;
            initStartReplayButton();
        }, 3000);
    });
}

// ===== ENHANCED NOTORIETY METER =====
function initNotorietyMeter() {
    let notoriety = 0;
    const targetNotoriety = Math.floor(Math.random() * 40) + 50; // Random 50-90%
    const circle = document.getElementById('notorietyCircle');
    const valueDisplay = document.getElementById('notorietyValue');
    const authorityStatus = document.getElementById('authorityStatus');
    const heatLevel = document.getElementById('heatLevel');
    const bountyAmount = document.getElementById('bountyAmount');
    const detectionBar = document.getElementById('detectionBar');
    const detectionValue = document.getElementById('detectionValue');
    
    const circumference = 2 * Math.PI * 85;
    circle.style.strokeDasharray = circumference;
    
    // Animate notoriety increase
    const interval = setInterval(() => {
        if (notoriety < targetNotoriety) {
            notoriety++;
            const offset = circumference - (notoriety / 100) * circumference;
            circle.style.strokeDashoffset = offset;
            valueDisplay.textContent = notoriety;
            
            // Update detection bar
            detectionBar.style.width = notoriety + '%';
            detectionValue.textContent = notoriety + '%';
            
            // Update status based on notoriety level
            if (notoriety < 30) {
                authorityStatus.textContent = 'MONITORING';
                authorityStatus.style.color = 'var(--success-color)';
                heatLevel.textContent = 'LOW';
                heatLevel.style.color = 'var(--success-color)';
            } else if (notoriety < 60) {
                authorityStatus.textContent = 'INVESTIGATING';
                authorityStatus.style.color = 'var(--warning-color)';
                heatLevel.textContent = 'MODERATE';
                heatLevel.style.color = 'var(--warning-color)';
            } else {
                authorityStatus.textContent = 'ACTIVE PURSUIT';
                authorityStatus.style.color = 'var(--danger-color)';
                heatLevel.textContent = 'CRITICAL';
                heatLevel.style.color = 'var(--danger-color)';
            }
            
            // Update bounty
            const bounty = Math.floor((notoriety / 100) * 150000);
            bountyAmount.textContent = `₡ ${bounty.toLocaleString()}`;
        } else {
            clearInterval(interval);
        }
    }, 30);
}

// ===== POPULATE STATS TAB =====
function initStatsTab() {
    const statsOverview = document.getElementById('statsOverview');
    const winRateChart = document.getElementById('winRateChart');
    
    // Calculate stats
    const totalBattles = battleHistory.length;
    const victories = battleHistory.filter(b => b.result === 'victory').length;
    const defeats = battleHistory.filter(b => b.result === 'defeat').length;
    const winRate = Math.round((victories / totalBattles) * 100);
    const totalKills = battleHistory.reduce((sum, b) => sum + b.kills, 0);
    const totalDeaths = battleHistory.reduce((sum, b) => sum + b.deaths, 0);
    const kd = (totalKills / totalDeaths).toFixed(2);
    
    // Populate overview
    statsOverview.innerHTML = `
        <div class="stat-card">
            <div class="stat-card-value">${totalBattles}</div>
            <div class="stat-card-label">TOTAL BATTLES</div>
        </div>
        <div class="stat-card">
            <div class="stat-card-value">${victories}</div>
            <div class="stat-card-label">VICTORIES</div>
        </div>
        <div class="stat-card">
            <div class="stat-card-value">${defeats}</div>
            <div class="stat-card-label">DEFEATS</div>
        </div>
        <div class="stat-card">
            <div class="stat-card-value">${winRate}%</div>
            <div class="stat-card-label">WIN RATE</div>
        </div>
        <div class="stat-card">
            <div class="stat-card-value">${totalKills}</div>
            <div class="stat-card-label">TOTAL KILLS</div>
        </div>
        <div class="stat-card">
            <div class="stat-card-value">${kd}</div>
            <div class="stat-card-label">K/D RATIO</div>
        </div>
    `;
    
    // Populate win rate chart
    winRateChart.innerHTML = `
        <div class="chart-bar">
            <div class="chart-bar-label">
                <span>VICTORIES</span>
                <span>${victories} (${winRate}%)</span>
            </div>
            <div class="chart-bar-container">
                <div class="chart-bar-fill" style="width: ${winRate}%"></div>
            </div>
        </div>
        <div class="chart-bar">
            <div class="chart-bar-label">
                <span>DEFEATS</span>
                <span>${defeats} (${100 - winRate}%)</span>
            </div>
            <div class="chart-bar-container">
                <div class="chart-bar-fill" style="width: ${100 - winRate}%; background: linear-gradient(90deg, var(--danger-color), var(--warning-color));"></div>
            </div>
        </div>
        <div class="chart-bar">
            <div class="chart-bar-label">
                <span>AVERAGE ACCURACY</span>
                <span>65%</span>
            </div>
            <div class="chart-bar-container">
                <div class="chart-bar-fill" style="width: 65%"></div>
            </div>
        </div>
    `;
}

// ===== POPULATE FULL HISTORY TAB =====
function initFullHistoryTab() {
    const container = document.getElementById('battleHistoryFull');
    
    battleHistory.forEach(battle => {
        const card = document.createElement('div');
        card.className = `battle-card ${battle.result}`;
        card.dataset.battleId = battle.id;
        
        card.innerHTML = `
            <div class="battle-header">
                <span class="battle-date">${battle.date}</span>
                <span class="battle-result ${battle.result}">${battle.result.toUpperCase()}</span>
            </div>
            <div class="battle-teams">
                <div class="team">
                    <div class="team-name">${battle.team1}</div>
                    <div class="team-score">${battle.score1}</div>
                </div>
                <div class="vs-divider">VS</div>
                <div class="team">
                    <div class="team-name">${battle.team2}</div>
                    <div class="team-score">${battle.score2}</div>
                </div>
            </div>
            <div class="battle-location">
                <span>📍 ${battle.location}</span>
                <span>⏱ ${battle.duration}</span>
            </div>
        `;
        
        // Add click handler
        card.addEventListener('click', () => {
            openBattleModal(battle.id);
        });
        
        container.appendChild(card);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initBattleHistory();
    initCalendar();
    initNotorietyMeter();
    animateActiveFeeds();
    updateUptime();
    initSoundToggle();
    initReplayItems();
    initVideoControls();
    addRandomGlitches();
    initNavigationTabs();
    initStatsTab();
    initFullHistoryTab();
    
    // Modal event listeners
    document.getElementById('closeModal').addEventListener('click', closeBattleModal);
    document.getElementById('battleModal').addEventListener('click', (e) => {
        if (e.target.id === 'battleModal') {
            closeBattleModal();
        }
    });
    
    // Initialize start replay button
    initStartReplayButton();
    
    // Add click handlers to battle cards in main view
    document.querySelectorAll('.battle-card').forEach(card => {
        card.addEventListener('click', () => {
            const battleId = parseInt(card.dataset.battleId);
            if (battleId) openBattleModal(battleId);
        });
    });
    
    // Add loading bar animation to style
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        @keyframes loadingBar {
            0% { width: 0%; }
            100% { width: 100%; }
        }
    `;
    document.head.appendChild(loadingStyle);
    
    // Initialize new features
    initVideoReplaySystem();
    initUpcomingMatchesWithCountdown();
    initTeamsSection();
    initAmbientSound();
    initAuthorityWarning();
    
    console.log('%c╔═══════════════════════════════════════╗', 'color: #00ffff; font-weight: bold;');
    console.log('%c║   ARENA LOGS - FULLY OPERATIONAL     ║', 'color: #00ffff; font-weight: bold;');
    console.log('%c╚═══════════════════════════════════════╝', 'color: #00ffff; font-weight: bold;');
    console.log('%c[VIDEO] Replay system active', 'color: #00ffff;');
    console.log('%c[COUNTDOWN] Next match timer running', 'color: #ff00ff;');
    console.log('%c[TEAMS] Database loaded', 'color: #00ffff;');
    console.log('%c[AUDIO] Ambient sound ready', 'color: #ff00ff;');
});

// ===== VIDEO REPLAY SYSTEM =====
let currentReplayIndex = 0;

function initVideoReplaySystem() {
    const video = document.getElementById('replayVideo');
    if (!video) return;
    
    const playPauseBtn = document.getElementById('playPauseBtn');
    const prevBtn = document.getElementById('prevReplay');
    const nextBtn = document.getElementById('nextReplay');
    const timeline = document.getElementById('videoTimeline');
    const timelineProgress = document.getElementById('timelineProgress');
    const timelineMarker = document.getElementById('timelineMarker');
    const timeDisplay = document.getElementById('timeDisplay');
    const videoInfo = document.querySelector('.video-info');
    
    // Load first replay
    loadReplay(0);
    
    // Play/Pause
    playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>';
        } else {
            video.pause();
            playPauseBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
        }
    });
    
    // Previous/Next
    prevBtn.addEventListener('click', () => {
        currentReplayIndex = (currentReplayIndex - 1 + replayVideos.length) % replayVideos.length;
        loadReplay(currentReplayIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        currentReplayIndex = (currentReplayIndex + 1) % replayVideos.length;
        loadReplay(currentReplayIndex);
    });
    
    // Update timeline
    video.addEventListener('timeupdate', () => {
        const progress = (video.currentTime / video.duration) * 100;
        timelineProgress.style.width = progress + '%';
        timelineMarker.style.left = progress + '%';
        
        const currentMin = Math.floor(video.currentTime / 60);
        const currentSec = Math.floor(video.currentTime % 60);
        const durationMin = Math.floor(video.duration / 60);
        const durationSec = Math.floor(video.duration % 60);
        
        timeDisplay.textContent = `${String(currentMin).padStart(2, '0')}:${String(currentSec).padStart(2, '0')} / ${String(durationMin).padStart(2, '0')}:${String(durationSec).padStart(2, '0')}`;
    });
    
    // Timeline click
    timeline.addEventListener('click', (e) => {
        const rect = timeline.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percentage = clickX / rect.width;
        video.currentTime = percentage * video.duration;
    });
    
    function loadReplay(index) {
        const replay = replayVideos[index];
        video.src = replay.videoUrl;
        video.load();
        video.play();
        
        videoInfo.querySelector('.timestamp').textContent = replay.timestamp;
        videoInfo.querySelector('.location').textContent = replay.sector + ' // ARENA-ALPHA';
        
        document.querySelectorAll('.replay-item').forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        
        playPauseBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>';
    }
    
    // Generate replay list
    const replayList = document.getElementById('replayList');
    replayList.innerHTML = '';
    
    replayVideos.forEach((replay, index) => {
        const item = document.createElement('div');
        item.className = `replay-item ${index === 0 ? 'active' : ''}`;
        item.innerHTML = `
            <div class="replay-thumb">
                <div class="thumb-overlay">▶</div>
            </div>
            <div class="replay-info">
                <div class="replay-title">${replay.title}</div>
                <div class="replay-meta">${replay.sector} • ${replay.duration}</div>
            </div>
        `;
        
        item.addEventListener('click', () => {
            currentReplayIndex = index;
            loadReplay(index);
        });
        
        replayList.appendChild(item);
    });
}

// ===== UPCOMING MATCHES WITH COUNTDOWN =====
function initUpcomingMatchesWithCountdown() {
    const container = document.getElementById('calendarGrid');
    container.innerHTML = '';
    
    upcomingMatchesData.forEach((match, index) => {
        const item = document.createElement('div');
        item.className = 'calendar-item';
        
        item.innerHTML = `
            <div class="calendar-header">
                <span class="calendar-date">${match.date}</span>
                <span class="calendar-time">${match.time} ${match.timezone}</span>
            </div>
            <div class="calendar-title">${match.matchType}</div>
            <div class="match-teams">
                <div class="match-team">
                    <img src="${match.team1Logo}" alt="${match.team1}" class="match-team-logo">
                    <span class="match-team-name">${match.team1}</span>
                </div>
                <span class="match-vs">VS</span>
                <div class="match-team">
                    <img src="${match.team2Logo}" alt="${match.team2}" class="match-team-logo">
                    <span class="match-team-name">${match.team2}</span>
                </div>
            </div>
            ${index === 0 ? '<div class="countdown-timer" id="nextMatchCountdown"></div>' : ''}
            <div class="calendar-details">
                <div class="detail-row">
                    <span class="detail-label">Sector:</span>
                    <span class="detail-value">${match.sector}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Reward:</span>
                    <span class="reward-badge">${match.reward}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Tier:</span>
                    <span class="detail-value">${match.tier}</span>
                </div>
            </div>
        `;
        
        container.appendChild(item);
    });
    
    startCountdown();
}

function startCountdown() {
    const countdownElement = document.getElementById('nextMatchCountdown');
    if (!countdownElement) return;
    
    const nextMatch = upcomingMatchesData[0];
    const matchDate = new Date(`${nextMatch.date}T${nextMatch.time}Z`);
    
    function updateCountdown() {
        const now = new Date();
        const diff = matchDate - now;
        
        if (diff <= 0) {
            countdownElement.innerHTML = '<span style="color: var(--danger-color); font-weight: bold;">MATCH STARTING NOW!</span>';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        countdownElement.innerHTML = `
            <div class="countdown-item">
                <span class="countdown-value">${String(days).padStart(2, '0')}</span>
                <span class="countdown-label">DAYS</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-value">${String(hours).padStart(2, '0')}</span>
                <span class="countdown-label">HOURS</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-value">${String(minutes).padStart(2, '0')}</span>
                <span class="countdown-label">MINS</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-value">${String(seconds).padStart(2, '0')}</span>
                <span class="countdown-label">SECS</span>
            </div>
        `;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ===== TEAMS SECTION =====
function initTeamsSection() {
    const container = document.getElementById('teamsGrid');
    if (!container) return;
    
    container.innerHTML = '';
    
    teamsData.forEach(team => {
        const card = document.createElement('div');
        card.className = 'team-card';
        
        card.innerHTML = `
            <img src="${team.logo}" alt="${team.name}" class="team-logo">
            <div class="team-details">
                <div class="team-name-card">${team.name}</div>
                <div class="team-rank">Rank #${team.rank} • ${team.region}</div>
                <div class="team-winrate">Win Rate: ${team.winRate}%</div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            openTeamModal(team.id);
        });
        
        container.appendChild(card);
    });
}

function openTeamModal(teamId) {
    const team = teamsData.find(t => t.id === teamId);
    if (!team) return;
    
    const modal = document.getElementById('teamModal');
    const content = document.getElementById('teamModalContent');
    
    content.innerHTML = `
        <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 30px;">
            <img src="${team.logo}" alt="${team.name}" style="width: 100px; height: 100px; border-radius: 8px; border: 3px solid var(--neon-cyan);">
            <div>
                <h2 style="font-size: 2rem; color: var(--neon-cyan); margin-bottom: 10px;">${team.name}</h2>
                <p style="color: var(--text-secondary);">Rank #${team.rank} • ${team.region}</p>
                <p style="color: var(--neon-magenta); font-weight: bold; margin-top: 5px;">Captain: ${team.captain}</p>
            </div>
        </div>
        
        <div class="stats-grid">
            <div class="stat-box">
                <div class="stat-box-label">WIN RATE</div>
                <div class="stat-box-value">${team.winRate}%</div>
            </div>
            <div class="stat-box">
                <div class="stat-box-label">WINS</div>
                <div class="stat-box-value">${team.wins}</div>
            </div>
            <div class="stat-box">
                <div class="stat-box-label">LOSSES</div>
                <div class="stat-box-value">${team.losses}</div>
            </div>
            <div class="stat-box">
                <div class="stat-box-label">TOTAL MATCHES</div>
                <div class="stat-box-value">${team.totalMatches}</div>
            </div>
        </div>
        
        <div style="margin-top: 30px;">
            <h3 style="color: var(--neon-magenta); margin-bottom: 15px; font-size: 1.2rem;">ROSTER</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                ${team.members.map(member => `
                    <span style="padding: 8px 15px; background: rgba(0, 255, 255, 0.1); border: 1px solid var(--neon-cyan); border-radius: 4px; color: var(--neon-cyan); font-size: 0.9rem;">${member}</span>
                `).join('')}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeTeamModal() {
    document.getElementById('teamModal').classList.remove('active');
}

// ===== AMBIENT SOUND SYSTEM =====
function initAmbientSound() {
    const soundToggle = document.getElementById('soundToggle');
    let audioContext = null;
    let oscillator = null;
    let gainNode = null;
    let isEnabled = false;
    
    soundToggle.addEventListener('click', () => {
        isEnabled = !isEnabled;
        soundToggle.classList.toggle('muted', !isEnabled);
        
        if (isEnabled) {
            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (!audioContext) {
                    audioContext = new AudioContext();
                }
                
                if (audioContext.state === 'suspended') {
                    audioContext.resume();
                }
                
                oscillator = audioContext.createOscillator();
                gainNode = audioContext.createGain();
                
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(60, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                oscillator.start();
                
                console.log('%c[AUDIO] Ambient sound enabled', 'color: #00ffff;');
            } catch (e) {
                console.log('%c[AUDIO] Not supported', 'color: #ff0055;');
            }
        } else {
            if (oscillator) {
                oscillator.stop();
                oscillator = null;
            }
            console.log('%c[AUDIO] Ambient sound disabled', 'color: #ff00ff;');
        }
    });
}

// ===== AUTHORITY WARNING =====
function initAuthorityWarning() {
    // Warning will be triggered by notoriety meter when it reaches 80%
    const authorityWarning = document.getElementById('authorityWarning');
    
    // Close warning on click
    authorityWarning.addEventListener('click', () => {
        authorityWarning.classList.remove('active');
    });
}

// ===== MAIN NAVIGATION =====
function initMainNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });
    }
    
    // Smooth scroll to sections
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Check if it's an anchor link
            if (href.startsWith('#')) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const spans = navToggle.querySelectorAll('span');
                    spans[0].style.transform = '';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = '';
                }
                
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                link.classList.add('active');
                
                // Smooth scroll to section
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                } else if (targetId === 'home') {
                    // Scroll to top for home
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Highlight active section on scroll
    window.addEventListener('scroll', () => {
        let current = 'home';
        const sections = ['home', 'battle-logs', 'team', 'about', 'contact'];
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop && 
                    window.pageYOffset < sectionTop + sectionHeight) {
                    current = sectionId;
                }
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}
