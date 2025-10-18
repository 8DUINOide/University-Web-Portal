# University Web Portal
A modern, responsive single-page application (SPA) for university students, providing seamless access to academic schedules, grades, financial statements, calendars, and profile management. Built with vanilla JavaScript for lightweight performance, this portal emphasizes accessibility (ARIA-compliant), security (form validation), and user experience (smooth animations, search, and pagination). Ideal for educational institutions seeking a customizable, deployment-ready frontend.

## Overview
This portal simulates a full student dashboard, drawing from real-world university systems. Users can log in, view personalized data (e.g., courses, grades, payments), and interact with features like PDF exports and modals. Mock data drives the demo, but it's easily extensible to integrate with APIs (e.g., via fetch). Developed with a focus on mobile-first design and WCAG guidelines, it's performant on low-bandwidth connections and scales across devices.
## Features

### Secure Login: 
Form validation with real-time feedback and demo authentication.
### Dashboard Navigation: 
Sidebar menu with sections for Home, Offerings, Advisement (Schedule), Grades, Credited Subjects, My Subjects, Accounts (SOA), Profile, and Messages.
### Academic Tools:

Paginated schedules and subject offerings with search and modal details.
Grades viewer with QPI calculations, school year navigation, and semester breakdowns.
Credited subjects table with unit tracking.
Interactive calendar with events and tooltips.


### Financial Management:
Statement of Account (SOA) with balance, due dates, payment history, and PDF download via jsPDF.
### User Profile: 
Editable fields (name, email) with validation and confirmation modals.
### Notifications & Messages: 
Dynamic alerts and threaded messaging.
### Responsive UI: 
Mobile sidebar, hover tooltips, and animations (fade-in, slide-in).
### Accessibility: 
ARIA labels, focus management, and semantic HTML.

## Tech Stack

### Frontend: 
HTML5, CSS3 (Tailwind CSS via CDN for utilities), Vanilla JavaScript (ES6+).
### Libraries: 
jsPDF (PDF generation), Font Awesome (icons), Google Fonts (Poppins).
### Tools: 
Responsive design (media queries), Debounced search, Pagination, Animations (CSS keyframes).
### Compliance: 
WCAG 2.1 AA (ARIA, keyboard nav), Cross-browser (Chrome, Firefox, Safari).

No backend required for demo; extend with REST APIs for production.

## Running Locally

Open https://8duinoide.github.io/University-Web-Portal/public/index.html in a modern browser (e.g., Chrome).
Demo login: Student ID 123456, Password password.
Navigate via sidebar or top menu; data loads dynamically.

Test on mobile: Resize browser or use dev tools. No server needed—runs offline after asset load.
## Live Demo
Test the portal instantly via GitHub Pages: https://8duinoide.github.io/University-Web-Portal/public/index.html
Use demo credentials: Student ID 123456, Password password. 

## Usage

### Login: 
Enter credentials; dashboard defaults to Calendar.
### Navigation:
Click sidebar items (e.g., "Grades" for QPI view).
### Interactions:

Search schedules/offerings with debounce (300ms delay).
Download SOA as PDF or toggle sections (e.g., expand/collapse lists).
Edit profile: Save triggers validation and confirmation.


### Demo Data: 
Mocked in script.js; replace studentData with API fetches (e.g., fetch('/api/student')).

For production, integrate with a backend (e.g., Node.js/Express) for auth and data.

## Deployment

### Static Hosting: 
Upload to GitHub Pages, Netlify, or Vercel (drag-and-drop index.html, script.js, styles.css, /images).
### Customization:
Update mock data in script.js.
Replace CDNs with local files for offline/privacy compliance.
Add HTTPS for secure forms.



