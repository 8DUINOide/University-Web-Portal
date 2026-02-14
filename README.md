# University Web Portal

> A modern, responsive, and accessible student portal simulation designed for university environments. Built with vanilla JavaScript and Tailwind CSS for a lightweight, dependency-free experience.

[**Live Demo**](https://8DUINOide.github.io/University-Web-Portal/)

---

## 📖 Overview

The **University Web Portal** is a Single-Page Application (SPA) that simulates a comprehensive student dashboard. It provides a seamless interface for students to manage their academic life, from viewing schedules and grades to checking financial statements and updating profiles.

Designed with **accessibility (WCAG 2.1)** and **performance** in mind, this project demonstrates how to build complex, interactive UI/UX without the overhead of heavy frameworks. The entire application logic is contained within `script.js`, making it easy to understand and modify.

## ✨ Key Features

*   **🔐 Secure & Validated Login**: Mock authentication (ID: `123456`, Pass: `password`) with real-time form validation.
*   **📊 Comprehensive Dashboard**: Access to Schedule, Grades, Offerings, and Profile.
*   **📅 Interactive Tools**: Dynamic calendar, paginated class schedules, and searchable subject offerings.
*   **💰 Financial Management**: View Statement of Account (SOA) and download as PDF.
*   **📱 Fully Responsive**: Mobile-first design with a collapsible sidebar and touch-friendly controls.
*   **⚡ Lightweight**: Zero-dependency frontend logic using vanilla ES6+ JavaScript.

## 🛠️ Tech Stack

*   **Frontend**: HTML5, Vanilla JavaScript (ES6+)
*   **Styling**: Tailwind CSS (via CDN) + Custom CSS (`styles.css`)
*   **Libraries**: 
    *   `jsPDF` - Client-side PDF generation for SOA.
    *   `Font Awesome` - Scalable vector icons.
    *   `Google Fonts` - Poppins typography.

---

## 📂 Project Architecture

The project follows a simple, flat structure optimized for GitHub Pages deployment.

```text
/ (root)
├── index.html       # The main entry point containing all views (screens)
├── script.js        # Contains ALL application logic and mock data
├── styles.css       # Custom styles for animations and specific overrides
├── server.js        # Simple Node.js server for local development
└── assets/          # Directory for static images (logos, backgrounds)
```

### How the SPA Works
This application uses a "hide/show" mechanism to simulate navigation without page reloads.
1.  **Views**: All screens (Home, Schedule, Grades, etc.) exist in `index.html` but are hidden by default using the `.hidden` class.
2.  **Navigation**: The `showScreen(screenId)` function hides all sections and reveals only the target section.
3.  **State**: Current state (pagination, selected year, etc.) is managed via global variables in `script.js`.

---

## 🧠 Core Logic & Functions

The `script.js` file is the brain of the application. Here are the key components:

### 1. Mock Data (`studentData`)
Instead of a backend, the app uses a massive JSON-like object `studentData` to store all information.
*   **Structure**: Contains `name`, `id`, `schedule` (array), `gradesByYear` (nested object), `soa` (object), etc.
*   **Customization**: You can edit this object directly in `script.js` to change the student's information, grades, or schedule.

### 2. Rendering Functions
These functions dynamically generate HTML based on the `studentData`.
*   `renderNotifications()`: Populates the notification panel.
*   `renderPaginatedCourses(section, items, page)`: Handles pagination for Schedule and Offerings.
*   `renderGrades()`: Builds the grades table and calculates QPI (Quality Point Index) on the fly.
*   `renderCalendar()`: Generates the interactive calendar events.

### 3. Utility Functions
*   `validateLogin()`: Checks input fields in real-time.
*   `calculateQPI(grades)`: Computes the GPA/QPI based on units and letter grades.
*   `toggleSection(id)`: Collapses/Expands UI elements like the Sidebar or specific cards.

---

## 🚀 Getting Started

### Prerequisites
*   A modern web browser (Chrome, Edge, Firefox, Safari)
*   **Optional**: Node.js (for the local server script)

### Installation & Run

1.  **Clone the repository**
    ```bash
    git clone https://github.com/8DUINOide/University-Web-Portal.git
    cd University-Web-Portal
    ```

2.  **Run Locally (Node.js)**
    ```bash
    npm install express # Install the simple server dependency
    node server.js
    # Open http://localhost:3000 in your browser
    ```

3.  **Run Locally (Python)**
    ```bash
    python -m http.server 3000
    # Open http://localhost:3000 in your browser
    ```

---

## 🎨 Customization Guide

### Changing the Color Scheme
The project uses **Tailwind CSS**. To change the theme:
1.  Open `index.html`.
2.  Find classes like `bg-blue-900` (primary color) or `text-blue-600`.
3.  Replace them with your desired Tailwind color (e.g., `bg-red-800`, `text-green-500`).

### Replacing the Logo
1.  Place your new logo file in the `assets/` folder.
2.  Open `index.html`.
3.  Search for `assets/logo.jpg` and replace it with your filename.

### Connecting to a Real Backend
To make this a real app:
1.  Remove the `studentData` object in `script.js`.
2.  Replace the `render...` calls with `fetch()` requests to your API.
    ```javascript
    // Example
    fetch('/api/student/grades')
      .then(response => response.json())
      .then(data => renderGrades(data));
    ```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
