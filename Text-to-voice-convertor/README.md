# Text to Voice Converter
A clean, modern, and interactive web application that converts typed text into spoken audio using the native Web Speech API. Built with semantic HTML5, stylized CSS layout structures, and Vanilla JavaScript.
## Live Demo
You can view and test the live project running directly in your browser here:
https://noor1449.github.io/web-development-mini-projects/Text-to-voice-convertor/index.html
## Features
- **Native Speech Synthesis:** Utilizes the browser's built-in `SpeechSynthesis` interface to generate voice audio directly without external API keys.
- **Dynamic Voice Selection:** Automatically populates a dropdown menu with all available system voice fonts installed on the user's local operating system or browser environment.
- **Real-Time Configuration:** Instantly switches the active voice profile as soon as the user selects a different accent or option from the menu.
## Project Structure
```text
├── index.html       # Structural design, markup, and text input components
├── style.css        # Visual styling interface for the control board
└── assets/          # Internal media folder housing design graphics (e.g., `play.jpg`)
