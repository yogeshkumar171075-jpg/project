// ===== ARENA LOGS DATA STRUCTURE =====

// Sample Replay Videos
const replayVideos = [
    {
        id: 1,
        title: 'FINAL SHOWDOWN',
        thumbnail: 'https://via.placeholder.com/640x360/1a1a2e/00ffff?text=SECTOR-7+REPLAY',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        sector: 'SECTOR-7',
        timestamp: 'REC 23:47:12',
        duration: '07:52',
        battleId: 1
    },
    {
        id: 2,
        title: 'AMBUSH PROTOCOL',
        thumbnail: 'https://via.placeholder.com/640x360/1a1a2e/ff00ff?text=SECTOR-3+REPLAY',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        sector: 'SECTOR-3',
        timestamp: 'REC 18:23:45',
        duration: '05:34',
        battleId: 2
    },
    {
        id: 3,
        title: 'BREACH OPERATION',
        thumbnail: 'https://via.placeholder.com/640x360/1a1a2e/9d00ff?text=SECTOR-9+REPLAY',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        sector: 'SECTOR-9',
        timestamp: 'REC 14:56:33',
        duration: '04:21',
        battleId: 3
    },
    {
        id: 4,
        title: 'STEALTH INFILTRATION',
        thumbnail: 'https://via.placeholder.com/640x360/1a1a2e/00ff88?text=SECTOR-1+REPLAY',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        sector: 'SECTOR-1',
        timestamp: 'REC 09:12:18',
        duration: '06:15',
        battleId: 4
    },
    {
        id: 5,
        title: 'EXTRACTION MISSION',
        thumbnail: 'https://via.placeholder.com/640x360/1a1a2e/ff0055?text=SECTOR-5+REPLAY',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        sector: 'SECTOR-5',
        timestamp: 'REC 21:34:09',
        duration: '03:47',
        battleId: 5
    }
];

// Teams Data
const teamsData = [
    {
        id: 1,
        name: 'SHADOW SYNDICATE',
        logo: 'https://via.placeholder.com/100/1a1a2e/00ffff?text=SS',
        rank: 1,
        winRate: 75,
        wins: 45,
        losses: 15,
        totalMatches: 60,
        region: 'NORTH SECTOR',
        captain: 'SHADOW-7',
        founded: '2023.08.15',
        members: ['SHADOW-1', 'SHADOW-2', 'SHADOW-3', 'SHADOW-7', 'SHADOW-9']
    },
    {
        id: 2,
        name: 'NEON REAPERS',
        logo: 'https://via.placeholder.com/100/1a1a2e/ff00ff?text=NR',
        rank: 2,
        winRate: 68,
        wins: 41,
        losses: 19,
        totalMatches: 60,
        region: 'EAST SECTOR',
        captain: 'REAPER-X',
        founded: '2023.09.22',
        members: ['REAPER-1', 'REAPER-5', 'REAPER-X', 'REAPER-9', 'REAPER-12']
    },
    {
        id: 3,
        name: 'CYBER WOLVES',
        logo: 'https://via.placeholder.com/100/1a1a2e/9d00ff?text=CW',
        rank: 3,
        winRate: 65,
        wins: 39,
        losses: 21,
        totalMatches: 60,
        region: 'WEST SECTOR',
        captain: 'CYBER-3',
        founded: '2023.07.10',
        members: ['CYBER-1', 'CYBER-3', 'CYBER-6', 'CYBER-8', 'CYBER-11']
    },
    {
        id: 4,
        name: 'VOID RUNNERS',
        logo: 'https://via.placeholder.com/100/1a1a2e/00ff88?text=VR',
        rank: 4,
        winRate: 58,
        wins: 35,
        losses: 25,
        totalMatches: 60,
        region: 'SOUTH SECTOR',
        captain: 'VOID-4',
        founded: '2023.10.05',
        members: ['VOID-2', 'VOID-4', 'VOID-7', 'VOID-10', 'VOID-13']
    },
    {
        id: 5,
        name: 'GHOST PROTOCOL',
        logo: 'https://via.placeholder.com/100/1a1a2e/ffaa00?text=GP',
        rank: 5,
        winRate: 55,
        wins: 33,
        losses: 27,
        totalMatches: 60,
        region: 'CENTRAL SECTOR',
        captain: 'GHOST-1',
        founded: '2023.11.12',
        members: ['GHOST-1', 'GHOST-3', 'GHOST-5', 'GHOST-8', 'GHOST-14']
    },
    {
        id: 6,
        name: 'DIGITAL PHANTOMS',
        logo: 'https://via.placeholder.com/100/1a1a2e/ff0055?text=DP',
        rank: 6,
        winRate: 52,
        wins: 31,
        losses: 29,
        totalMatches: 60,
        region: 'NORTH SECTOR',
        captain: 'PHANTOM-1',
        founded: '2024.01.20',
        members: ['PHANTOM-1', 'PHANTOM-4', 'PHANTOM-6', 'PHANTOM-9', 'PHANTOM-15']
    }
];

// Upcoming Matches with Countdown
const upcomingMatchesData = [
    {
        id: 1,
        team1: 'SHADOW SYNDICATE',
        team2: 'NEON REAPERS',
        team1Logo: 'https://via.placeholder.com/50/1a1a2e/00ffff?text=SS',
        team2Logo: 'https://via.placeholder.com/50/1a1a2e/ff00ff?text=NR',
        date: '2024-10-30',
        time: '18:00:00',
        timezone: 'UTC',
        sector: 'SECTOR-7',
        matchType: 'CHAMPIONSHIP FINALS',
        reward: '₡ 100,000',
        tier: 'LEGENDARY',
        status: 'upcoming'
    },
    {
        id: 2,
        team1: 'CYBER WOLVES',
        team2: 'VOID RUNNERS',
        team1Logo: 'https://via.placeholder.com/50/1a1a2e/9d00ff?text=CW',
        team2Logo: 'https://via.placeholder.com/50/1a1a2e/00ff88?text=VR',
        date: '2024-10-31',
        time: '20:00:00',
        timezone: 'UTC',
        sector: 'SECTOR-3',
        matchType: 'ELIMINATION ROUND',
        reward: '₡ 50,000',
        tier: 'EPIC',
        status: 'upcoming'
    },
    {
        id: 3,
        team1: 'GHOST PROTOCOL',
        team2: 'DIGITAL PHANTOMS',
        team1Logo: 'https://via.placeholder.com/50/1a1a2e/ffaa00?text=GP',
        team2Logo: 'https://via.placeholder.com/50/1a1a2e/ff0055?text=DP',
        date: '2024-11-01',
        time: '19:30:00',
        timezone: 'UTC',
        sector: 'SECTOR-9',
        matchType: 'QUALIFIER MATCH',
        reward: '₡ 25,000',
        tier: 'RARE',
        status: 'upcoming'
    },
    {
        id: 4,
        team1: 'SHADOW SYNDICATE',
        team2: 'CYBER WOLVES',
        team1Logo: 'https://via.placeholder.com/50/1a1a2e/00ffff?text=SS',
        team2Logo: 'https://via.placeholder.com/50/1a1a2e/9d00ff?text=CW',
        date: '2024-11-02',
        time: '21:00:00',
        timezone: 'UTC',
        sector: 'SECTOR-1',
        matchType: 'PRACTICE SCRIMMAGE',
        reward: '₡ 10,000',
        tier: 'COMMON',
        status: 'upcoming'
    },
    {
        id: 5,
        team1: 'NEON REAPERS',
        team2: 'VOID RUNNERS',
        team1Logo: 'https://via.placeholder.com/50/1a1a2e/ff00ff?text=NR',
        team2Logo: 'https://via.placeholder.com/50/1a1a2e/00ff88?text=VR',
        date: '2024-11-03',
        time: '17:00:00',
        timezone: 'UTC',
        sector: 'SECTOR-5',
        matchType: 'LEAGUE MATCH',
        reward: '₡ 15,000',
        tier: 'UNCOMMON',
        status: 'upcoming'
    }
];

// Extended Battle History
const extendedBattleHistory = [
    {
        id: 1,
        date: '2024.10.28',
        team1: 'SHADOW SYNDICATE',
        team2: 'NEON REAPERS',
        team1Logo: 'https://via.placeholder.com/50/1a1a2e/00ffff?text=SS',
        team2Logo: 'https://via.placeholder.com/50/1a1a2e/ff00ff?text=NR',
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
        mvp: 'SHADOW-7',
        replayId: 1
    },
    {
        id: 2,
        date: '2024.10.27',
        team1: 'CYBER WOLVES',
        team2: 'SHADOW SYNDICATE',
        team1Logo: 'https://via.placeholder.com/50/1a1a2e/9d00ff?text=CW',
        team2Logo: 'https://via.placeholder.com/50/1a1a2e/00ffff?text=SS',
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
        mvp: 'CYBER-3',
        replayId: 2
    },
    {
        id: 3,
        date: '2024.10.26',
        team1: 'SHADOW SYNDICATE',
        team2: 'VOID RUNNERS',
        team1Logo: 'https://via.placeholder.com/50/1a1a2e/00ffff?text=SS',
        team2Logo: 'https://via.placeholder.com/50/1a1a2e/00ff88?text=VR',
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
        mvp: 'SHADOW-2',
        replayId: 3
    },
    {
        id: 4,
        date: '2024.10.25',
        team1: 'GHOST PROTOCOL',
        team2: 'SHADOW SYNDICATE',
        team1Logo: 'https://via.placeholder.com/50/1a1a2e/ffaa00?text=GP',
        team2Logo: 'https://via.placeholder.com/50/1a1a2e/00ffff?text=SS',
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
        mvp: 'SHADOW-5',
        replayId: 4
    },
    {
        id: 5,
        date: '2024.10.24',
        team1: 'SHADOW SYNDICATE',
        team2: 'DIGITAL PHANTOMS',
        team1Logo: 'https://via.placeholder.com/50/1a1a2e/00ffff?text=SS',
        team2Logo: 'https://via.placeholder.com/50/1a1a2e/ff0055?text=DP',
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
        mvp: 'PHANTOM-1',
        replayId: 5
    }
];

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        replayVideos,
        teamsData,
        upcomingMatchesData,
        extendedBattleHistory
    };
}
