# Website Coming Soon (Launch Countdown)
A sleek, responsive, and animated "Coming Soon" splash page featuring a real-time dynamic countdown timer. Built using structural HTML5, stylized CSS layout formatting, and Vanilla JavaScript to track a precise future launch target.
## Live Demo
You can view and test the live project running directly in your browser here:
https://noor1449.github.io/web-development-mini-projects/websitecomingsoon/index.html
## Features
- **Live Countdown Timer:** Uses active JavaScript interval counters to mathematically calculate and display remaining days, hours, minutes, and seconds relative to the user's current system time.
- **Automated Expiration Safety:** Implements conditional checking loops that gracefully clear running intervals and lock values to `00` as soon as the targeted milestone deadline arrives.
- **Clean Structural Grouping:** Time slots are broken down into descriptive child divisions for flexible, fluid grid formatting.
## Project Structure
```text
├── index.html       # Visual layout structure, media hooks, and core countdown calculation logic
├── style.css        # Visual aesthetic properties (background palettes and fonts)
└── assets/          # Internal branding assets (e.g., `logo.png`, `triangle.png`, `rocket.png`)
