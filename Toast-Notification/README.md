# Toast Notifications
A crisp, interactive notification toast system that slides cleanly onto the screen to display feedback status messages. Built using semantic HTML5, localized transition animations via CSS, and dynamic DOM manipulation using Vanilla JavaScript.
## Live Demo
You can view and test the live project running directly in your browser here:
[https://noor1449.github.io/projectname/index.html]
## Features
- **Dynamic Element Creation:** Uses JavaScript to generate new alert pop-ups dynamically on click events without hardcoding individual message containers inside the HTML body.
- **Context-Specific Color Coding:** Evaluates message contents to conditionally append operational utility classes (`.error`, `.Invalid`) that shift badge highlights matching the event status.
- **Auto-Dismiss Lifecycle Timing:** Implements a localized timeout mechanism that cleanly updates the interface by destroying notification objects after 6 seconds of exposure.
## 📂 Project Structure
```text
├── index.html       # Visual click triggers, target toast grid box, and core runtime scripts
└── style.css        # Layout layout properties (Note: Make sure your styles align toasts in a fixed stack)