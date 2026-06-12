# QR Code Generator
A clean, responsive, and interactive web application that instantly converts text or website URLs into downloadable QR codes using a public API. Built with semantic HTML5, stylized CSS layout animations, and Vanilla JavaScript.
## Live Demo
You can view and test the live project running directly in your browser here:
https://noor1449.github.io/web-development-mini-projects/QR-code-generator/index.html
## Features
- **Instant QR Generation:** Uses the public QR Server API to generate high-quality 150x150 dynamic QR matrix codes immediately.
- **Input Error Validation:** Includes smart client-side error handling that triggers an error animation class if the user attempts to generate a code with an empty input field.
- **Smooth Transition Reveal:** The image box container smoothly opens and adjusts to reveal the generated QR asset once it successfully loads.
## Project Structure

```text
├── index.html       # The application layout and embedded QR rendering JavaScript logic
└── style.css        # The global stylesheet containing container positioning and animations
