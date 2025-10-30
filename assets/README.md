# Arena Logs Assets

## Required Assets

### Team Logos (PNG format, 100x100px recommended)
- `team-shadow.png` - Shadow Syndicate logo
- `team-neon.png` - Neon Reapers logo
- `team-cyber.png` - Cyber Wolves logo
- `team-void.png` - Void Runners logo
- `team-ghost.png` - Ghost Protocol logo
- `team-phantom.png` - Digital Phantoms logo

**Placeholder**: Currently using https://via.placeholder.com URLs. Replace with actual team logos.

### Replay Videos (MP4 format)
- `replay1.mp4` - Championship Finals replay
- `replay2.mp4` - Elimination Round replay
- `replay3.mp4` - Qualifier Match replay
- `replay4.mp4` - Practice Scrimmage replay
- `replay5.mp4` - League Match replay
- `replay6.mp4` - Additional match replay

**Placeholder**: Currently using Google's sample videos from:
- https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/

Replace with actual match replay videos.

### Background Assets
- `noise.png` - Tileable noise texture for background (optional)

## How to Add Assets

1. Place your image files in this `assets/` directory
2. Update the paths in `data/teams.json` and `data/sample-matches.json`
3. Ensure file names match exactly

## Recommended Specifications

- **Team Logos**: PNG, 100x100px, transparent background
- **Replay Videos**: MP4, H.264 codec, 1280x720 or 1920x1080
- **File Size**: Keep videos under 50MB for better loading performance
