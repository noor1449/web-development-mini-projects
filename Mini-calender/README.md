# Mini Calendar
A sleek, vibrant, and dynamic mini calendar widget. Built using semantic HTML5, stylized CSS, and native Vanilla JavaScript to automatically fetch and render the current date, day, month, and year instantly based on the user's real-time local system settings.
## Live Demo
You can view and test the live project running directly in your browser here:
https://noor1449.github.io/web-development-mini-projects/Mini-calender/index.html
## Features
- Automated Real-Time Date Mapping: Leverages native JavaScript date constructors to pinpoint your current location timezone details automatically.
- Zero-Padding Correction: Dynamically checks single-digit dates and appends a leading zero string prefix wrapper (e.g., displaying `04` instead of `4`) to keep your layout presentation symmetric.
- String Mapping Arrays: Converts zero-indexed calendar attributes gracefully into descriptive plain text strings (e.g., changing `0` to `"Sunday"` or `"Jan"`).
## Project Structure
```text
├── index.html       # The skeletal markup, styling, and core JavaScript execution logic
└── style.css        # Layout layout properties (Note: Ensure this file contains your component classes)
