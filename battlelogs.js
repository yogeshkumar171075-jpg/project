/**
 * BATTLE LOGS PAGE - JavaScript
 * Handles battle cards, filtering, search, and notoriety meter
 */

// Load battle data from JSON
let battleData = [];

async function loadBattleData() {
    try {
        const response = await fetch('data/sample-matches.json');
        battleData = await response.json();
        renderBattleCards(battleData);
        initNotorietyMeter();
    } catch (error) {
        console.error('Error loading battle data:', error);
        // Fallback to empty array
        battleData = [];
    }
}

// Render battle cards
function renderBattleCards(battles) {
    const grid = document.getElementById('battleGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    battles.forEach(battle => {
        const card = document.createElement('div');
        card.className = 'battle-card';
        card.setAttribute('data-result', battle.result);
        
        const date = new Date(battle.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        
        card.innerHTML = `
            <div class="battle-header">
                <span class="battle-date">${date}</span>
                <span class="battle-result ${battle.result}">${battle.result.toUpperCase()}</span>
            </div>
            <div class="battle-teams">
                <div class="battle-team">
                    <span class="team-name">${battle.team1}</span>
                    <span class="team-score">${battle.score1}</span>
                </div>
                <div class="battle-team">
                    <span class="team-name">${battle.team2}</span>
                    <span class="team-score">${battle.score2}</span>
                </div>
            </div>
            <div class="battle-info">
                <div class="info-item">
                    <span>📍</span>
                    <span>${battle.map}</span>
                </div>
                <div class="info-item">
                    <span>⏱️</span>
                    <span>${battle.duration}</span>
                </div>
                <div class="info-item">
                    <span>⭐</span>
                    <span>${battle.mvp}</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => openBattleModal(battle));
        grid.appendChild(card);
    });
    
    // Add hover sound effect
    document.querySelectorAll('.battle-card').forEach(card => {
        card.addEventListener('mouseenter', playHoverSound);
    });
}

// Open battle detail modal
function openBattleModal(battle) {
    const modal = document.getElementById('battleModal');
    const content = document.getElementById('modalContent');
    
    if (!modal || !content) return;
    
    content.innerHTML = `
        <div style="margin-bottom: 20px;">
            <h3 style="color: var(--neon-cyan); font-size: 1.5rem; margin-bottom: 10px;">
                ${battle.team1} vs ${battle.team2}
            </h3>
            <p style="color: var(--text-secondary);">
                ${new Date(battle.date).toLocaleString()} • ${battle.map}
            </p>
        </div>
        
        <div class="stats-grid" style="margin-bottom: 20px;">
            <div class="stat-box">
                <div class="stat-box-label">DURATION</div>
                <div class="stat-box-value">${battle.duration}</div>
            </div>
            <div class="stat-box">
                <div class="stat-box-label">MVP</div>
                <div class="stat-box-value">${battle.mvp}</div>
            </div>
            <div class="stat-box">
                <div class="stat-box-label">KILLS</div>
                <div class="stat-box-value">${battle.kills}</div>
            </div>
            <div class="stat-box">
                <div class="stat-box-label">ACCURACY</div>
                <div class="stat-box-value">${battle.accuracy}</div>
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
            <button class="splash-button" onclick="window.location.href='index.html'">
                WATCH REPLAY
            </button>
        </div>
    `;
    
    modal.classList.add('active');
    playClickSound();
}

// Close modal
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('closeModal');
    const modal = document.getElementById('battleModal');
    
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
});

// Search functionality
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = battleData.filter(battle => 
            battle.team1.toLowerCase().includes(query) ||
            battle.team2.toLowerCase().includes(query) ||
            battle.map.toLowerCase().includes(query) ||
            battle.mvp.toLowerCase().includes(query)
        );
        renderBattleCards(filtered);
    });
}

// Filter functionality
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            if (filter === 'all') {
                renderBattleCards(battleData);
            } else {
                const filtered = battleData.filter(battle => battle.result === filter);
                renderBattleCards(filtered);
            }
            
            playClickSound();
        });
    });
}

// Notoriety Meter
function initNotorietyMeter() {
    const fill = document.getElementById('notorietyFill');
    const value = document.getElementById('notorietyValue');
    const warning = document.getElementById('notorietyWarning');
    
    if (!fill || !value) return;
    
    // Random notoriety between 40-95%
    const notoriety = Math.floor(Math.random() * 55) + 40;
    
    setTimeout(() => {
        fill.style.width = notoriety + '%';
        value.textContent = notoriety + '%';
        
        // Show warning if above 80%
        if (notoriety >= 80 && warning) {
            warning.classList.add('active');
        }
    }, 500);
}

// Sound effects
function playHoverSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        // Sound not supported
    }
}

function playClickSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 1200;
        oscillator.type = 'square';
        
        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.15);
    } catch (e) {
        // Sound not supported
    }
}

// Create particles
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadBattleData();
    initSearch();
    initFilters();
    createParticles();
    initMainNavigation();
    initAmbientSound();
});
