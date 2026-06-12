# Age Calculator
A smooth, interactive web application that calculates a user's exact age in years, months, and days based on their birthdate. Built natively with HTML5, CSS3 linear gradients, and vanilla JavaScript, this utility handles calendar date-math complexities (such as varying days in a month and leap years) on the client side without external packages.
To use it just click the following link:
https://noor1449.github.io/web-development-mini-projects/age-calculator-app/index.html
## Features
1. Exact Breakdown: Computes and displays age down to the precise number of years, months, and days.
2. Future-Date Prevention: Automatically restricts the calendar input picker to the current date, blocking users from selecting dates in the future.
3. Smart Calendar Math: Uses a dynamic day-calculation fallback mechanism (`new Date(year, month, 0)`) to correctly adjust for months with 28, 29, 30, or 31 days.
4. Clean Gradient Aesthetic: Features a modern dark-smoke gradient layout, custom styled text entry frames, and high-contrast accents.

## Project Structure

To ensure semantic links and selector stylesheets compile smoothly, organize your workspace as follows:
├── index.html       # UI Layout framework and calendar-math engine
└── style.css        # Visual styling, layouts, and responsiveness rules
