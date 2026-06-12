# Interactive Notes Web App
A clean, responsive, and dynamic Notes application built using vanilla HTML, CSS, and JavaScript. This web app lets you quickly create, edit, and delete text notes with real-time saving.
## Features
1. Instant Note Generation: Create custom notes dynamically with a single button click.
2. Inline Rich-Editing: Every note uses the `contenteditable` attribute, allowing users to type and edit text directly inside the web page.
3. Persistent Local Storage: Your notes are automatically saved to your browser's local cache. Even if you close or refresh the tab, your data will still be there.
4. Easy Deletion: Quick-remove individual note boxes instantly by clicking the custom trash bin icon.
5. Smart Line Breaks: Intercepts the default browser "Enter" key action inside editable items to create standard, predictable line breaks.
## Tech Stack
1. Frontend Structure: HTML5
2. Styling & Layout: CSS3 (featuring a clean Poppins font and a modern dual-tone linear gradient backdrop)
3. Application Logic: Vanilla JavaScript (ES6+)
4. Data Persistence: Web Storage API (`localStorage`)
## Getting Started
Follow these instructions to get the application running smoothly on your local machine.

### Project Directory Structure
Make sure your files match the exact naming and structural setup expected by the codebase:
```text
├── index.html              # The application markup
├── style.css               # Modern card layout and styling definitions
├── file.js                 # Local storage and dynamic DOM handling
└── assets/                 # Folder containing your icon assets
    ├── logo.jpg            # Main header logo
    ├── create.webp         # Icon inside the "Create" button
    └── delete.png          # Trash can icon placed inside notes