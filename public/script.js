document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to MyUniversity Portal!");

    // Apply lazy-loaded background images
    const lazyBgElements = document.querySelectorAll('.lazy-bg');
    lazyBgElements.forEach(element => {
        const bgUrl = element.getAttribute('data-bg');
        if (bgUrl) {
            element.style.backgroundImage = `url(${bgUrl})`;
        }
    });

    // Mock student data
    const studentData = {
        name: "John Doe",
        id: "123456",
        email: "john.doe@myuniversity.edu",
        schedule: [
            { course: "CS101", title: "Intro to Programming", time: "MWF 9:00-10:30", room: "B101", instructor: "Prof. Smith" },
            { course: "MATH201", title: "Calculus I", time: "TTh 10:00-11:30", room: "A204", instructor: "Dr. Johnson" },
            { course: "ENG102", title: "Academic Writing", time: "MWF 11:00-12:00", room: "C301", instructor: "Prof. Lee" },
            { course: "PHY110", title: "General Physics", time: "TTh 1:00-2:30", room: "D110", instructor: "Dr. Gomez" },
            { course: "HIST210", title: "World History", time: "MWF 2:00-3:00", room: "E205", instructor: "Dr. Patel" },
            { course: "CS202", title: "Data Structures", time: "TTh 3:00-4:30", room: "B201", instructor: "Prof. Nguyen" },
            { course: "BIO105", title: "Biology Basics", time: "MW 8:00-9:30", room: "F101", instructor: "Dr. Martinez" },
            { course: "CHEM101", title: "Intro to Chemistry", time: "TTh 9:00-10:30", room: "G304", instructor: "Prof. Davis" },
            { course: "ART110", title: "Fundamentals of Art", time: "F 1:00-4:00", room: "H102", instructor: "Ms. Rivera" },
            { course: "PHIL101", title: "Intro to Philosophy", time: "MWF 10:30-11:30", room: "C108", instructor: "Dr. Thompson" },
        ],
        gradesByYear: {
            "2024-2025": {
                "1st Semester": [
                    { code: "CS101", title: "Introduction to Programming", units: 3, nGrade: 96, lGrade: "B+" },
                    { code: "MATH201", title: "Calculus I", units: 3, nGrade: 99, lGrade: "A" },
                    { code: "ENG201", title: "Technical Writing", units: 3, nGrade: 93, lGrade: "B" },
                    { code: "PHYS201", title: "Physics for Engineers", units: 4, nGrade: 94, lGrade: "B+" },
                    { code: "HIST201", title: "Modern History", units: 3, nGrade: 94, lGrade: "B+" },
                ],
                "2nd Semester": [], // No grades yet
            },
            "2023-2024": {
                "1st Semester": [
                    { code: "CS102", title: "Data Structures", units: 3, nGrade: 92, lGrade: "B" },
                    { code: "MATH202", title: "Calculus II", units: 3, nGrade: 95, lGrade: "B+" },
                    { code: "ENG202", title: "English Literature", units: 3, nGrade: 90, lGrade: "B" },
                ],
                "2nd Semester": [
                    { code: "CS103", title: "Algorithms", units: 3, nGrade: 88, lGrade: "C+" },
                    { code: "PHYS202", title: "Advanced Physics", units: 4, nGrade: 85, lGrade: "C" },
                ],
            },
        },
        subjectsByYearAndSemester: {
            "2024-2025": {
                "1st Semester": [
                    { code: "CS101-GE21Am", title: "Introduction to Programming", enrolled: 30, schedule: "MWF 09:00AM-10:30AM B101", instructor: "Prof. Smith", description: "Fundamentals of programming using Python." },
                    { code: "MATH201-GE31Am", title: "Calculus I", enrolled: 25, schedule: "TTh 10:00AM-11:30AM A204", instructor: "Dr. Johnson", description: "Introduction to differential and integral calculus." },
                    { code: "ENG201-GE41Am", title: "Technical Writing", enrolled: 28, schedule: "MWF 11:00AM-12:00PM C301", instructor: "Ms. Brown", description: "Skills for effective technical communication." },
                    { code: "PHYS201-GE51Am", title: "Physics for Engineers", enrolled: 32, schedule: "TTh 01:00PM-03:00PM D201", instructor: "Dr. Lee", description: "Basic principles of physics for engineering applications." },
                    { code: "HIST201-GE61Am", title: "Modern History", enrolled: 35, schedule: "MW 02:00PM-03:30PM A305", instructor: "Prof. Davis", description: "Study of modern historical events and their impact." },
                    { code: "CHEM101-GE71Am", title: "General Chemistry", enrolled: 30, schedule: "TTh 09:00AM-11:00AM B202", instructor: "Dr. Clark", description: "Fundamentals of chemistry for engineers." },
                    { code: "STAT101-GE81Am", title: "Statistics and Probability", enrolled: 27, schedule: "MWF 01:00PM-02:00PM D303", instructor: "Prof. Evans", description: "Introduction to statistical methods and probability." },
                    { code: "ENG102-GE91Am", title: "English Literature", enrolled: 29, schedule: "TTh 03:00PM-04:30PM C302", instructor: "Ms. Taylor", description: "Exploration of classic and modern literature." },
                    { code: "PE101-GE01Am", title: "Physical Education I", enrolled: 40, schedule: "FRI 08:00AM-10:00AM GYM1", instructor: "Coach Miller", description: "Basic physical fitness and sports activities." },
                    { code: "SOCS101-N11Am", title: "Introduction to Sociology", enrolled: 33, schedule: "MW 04:00PM-05:30PM A306", instructor: "Dr. Harris", description: "Overview of sociological theories and concepts." },
                ],
                "2nd Semester": [
                    { code: "TECH201-GE21Pm", title: "Introduction to Robotics", enrolled: 28, schedule: "TTh 02:00PM-03:30PM B205", instructor: "Dr. Samuel D. Aragon", description: "Basics of robotics and automated systems." },
                    { code: "BUSM301-GE31Pm", title: "Entrepreneurship for Engineers", enrolled: 32, schedule: "MWF 10:00AM-11:00AM C102", instructor: "Marianne Cruz", description: "Business startup principles tailored for engineers." },
                    { code: "PHIL210-N55m", title: "Critical Thinking and Logic", enrolled: 41, schedule: "TTh 04:00PM-05:30PM AL305", instructor: "Dr. Nathaniel Reyes", description: "Training in analytical reasoning and logical argumentation." },
                    { code: "SOFT110-GQ21Am", title: "Cross-Platform App Development", enrolled: 18, schedule: "MW 07:30AM-10:30AM D411/TECHLAB", instructor: "Christine Y. Delgado", description: "Developing mobile apps with cross-platform tools." },
                    { code: "SAFE101-GQ41Pm", title: "Industrial Safety and Standards", enrolled: 22, schedule: "FRI 01:00PM-04:00PM B318", instructor: "Engr. Victor T. Montero", description: "Safety regulations and procedures in industries." },
                    { code: "ELEC210-GQ31Am", title: "VHDL and FPGA Design", enrolled: 14, schedule: "TUE 08:00AM-11:00AM D310/COMMLAB", instructor: "Leonardo B. Valdez", description: "Fundamentals of hardware design using VHDL." },
                    { code: "SIGN350-GQ31Pm", title: "Signals and Systems", enrolled: 17, schedule: "MW 11:00AM-12:30PM D405/COMMLAB", instructor: "Dr. Rebecca M. Solis", description: "Study of signals, systems, and transforms." },
                    { code: "SIGN451-GQ41Pm", title: "Advanced Signals and Systems", enrolled: 12, schedule: "THU 05:00PM-08:00PM D405/COMMLAB", instructor: "Dr. Rebecca M. Solis", description: "Applications and advanced topics in signal processing." },
                    { code: "MICR300-GQ31Am", title: "Embedded Systems Design", enrolled: 15, schedule: "WED 03:00PM-06:00PM D412/ELECLAB", instructor: "Crisanto P. Ilagan", description: "Design and application of embedded computer systems." },
                    { code: "MICR301-GQ31Pm", title: "Embedded Systems Lab", enrolled: 15, schedule: "WED 06:00PM-07:30PM D412/ELECLAB", instructor: "Crisanto P. Ilagan", description: "Laboratory exercises for embedded systems development." },
                    { code: "SOCS210-N11Pm", title: "Global Cultures and Societies", enrolled: 39, schedule: "TTh 08:00AM-09:30AM C304", instructor: "Frances May L. Domingo", description: "Understanding cultures and societies across the globe." },
                ],
            },
            "2023-2024": {
                "1st Semester": [
                    { code: "CS102-GE22Am", title: "Data Structures", enrolled: 28, schedule: "MWF 11:00AM-12:30PM B102", instructor: "Prof. Lee", description: "Introduction to data structures and algorithms." },
                    { code: "ENG101-GE32Am", title: "English Composition", enrolled: 35, schedule: "TTh 01:00PM-02:30PM C301", instructor: "Ms. Brown", description: "Fundamentals of academic writing." },
                    { code: "MATH202-GE42Am", title: "Calculus II", enrolled: 30, schedule: "MWF 09:00AM-10:00AM A205", instructor: "Dr. Johnson", description: "Advanced calculus concepts and applications." },
                    { code: "PHYS202-GE52Am", title: "Advanced Physics", enrolled: 25, schedule: "TTh 10:00AM-12:00PM D202", instructor: "Dr. Lee", description: "Advanced topics in physics for engineers." },
                    { code: "CHEM102-GE62Am", title: "Organic Chemistry", enrolled: 28, schedule: "MW 01:00PM-03:00PM B203", instructor: "Dr. Clark", description: "Study of organic compounds and reactions." },
                    { code: "STAT102-GE72Am", title: "Applied Statistics", enrolled: 32, schedule: "TTh 03:00PM-04:30PM A306", instructor: "Prof. Evans", description: "Statistical methods for engineering applications." },
                    { code: "ENG202-GE82Am", title: "Creative Writing", enrolled: 27, schedule: "MWF 02:00PM-03:00PM C303", instructor: "Ms. Taylor", description: "Techniques for creative writing and storytelling." },
                    { code: "PE102-GE92Am", title: "Physical Education II", enrolled: 38, schedule: "FRI 10:00AM-12:00PM GYM1", instructor: "Coach Miller", description: "Intermediate physical fitness and sports." },
                    { code: "SOCS102-N12Am", title: "Cultural Anthropology", enrolled: 34, schedule: "MW 04:00PM-05:30PM A307", instructor: "Dr. Harris", description: "Study of human cultures and societies." },
                    { code: "ECON101-GE02Am", title: "Microeconomics", enrolled: 31, schedule: "TTh 08:00AM-09:30AM D304", instructor: "Prof. Adams", description: "Principles of microeconomic theory." },
                ],
                "2nd Semester": [
                    { code: "CS103-GE23Am", title: "Algorithms", enrolled: 20, schedule: "MWF 01:00PM-02:30PM B103", instructor: "Prof. Davis", description: "Study of algorithmic design and analysis." },
                    { code: "MATH203-GE33Am", title: "Linear Algebra", enrolled: 26, schedule: "TTh 09:00AM-10:30AM A206", instructor: "Dr. Wilson", description: "Introduction to linear algebra concepts." },
                    { code: "ENG103-GE43Am", title: "Public Speaking", enrolled: 30, schedule: "MW 11:00AM-12:30PM C304", instructor: "Ms. Brown", description: "Skills for effective public speaking." },
                    { code: "PHYS203-GE53Am", title: "Electromagnetism", enrolled: 22, schedule: "TTh 01:00PM-03:00PM D203", instructor: "Dr. Lee", description: "Study of electromagnetic fields and waves." },
                    { code: "CHEM103-GE63Am", title: "Analytical Chemistry", enrolled: 25, schedule: "MW 02:00PM-04:00PM B204", instructor: "Dr. Clark", description: "Techniques for chemical analysis." },
                    { code: "STAT103-GE73Am", title: "Probability Theory", enrolled: 28, schedule: "TTh 03:00PM-04:30PM A308", instructor: "Prof. Evans", description: "Fundamentals of probability theory." },
                    { code: "ENG203-GE83Am", title: "Literary Analysis", enrolled: 29, schedule: "MWF 10:00AM-11:00AM C305", instructor: "Ms. Taylor", description: "Critical analysis of literary texts." },
                    { code: "PE103-GE93Am", title: "Physical Education III", enrolled: 35, schedule: "FRI 01:00PM-03:00PM GYM2", instructor: "Coach Miller", description: "Advanced physical fitness and team sports." },
                    { code: "SOCS103-N13Am", title: "Globalization Studies", enrolled: 32, schedule: "MW 04:00PM-05:30PM A309", instructor: "Dr. Harris", description: "Impact of globalization on modern societies." },
                    { code: "ECON102-GE03Am", title: "Macroeconomics", enrolled: 30, schedule: "TTh 10:00AM-11:30AM D305", instructor: "Prof. Adams", description: "Principles of macroeconomic theory." },
                ],
            },
            "2022-2023": {
                "1st Semester": [
                    { code: "CS104-GE24Am", title: "Introduction to Databases", enrolled: 27, schedule: "MWF 09:00AM-10:30AM B104", instructor: "Prof. Carter", description: "Fundamentals of database systems and SQL." },
                    { code: "MATH204-GE34Am", title: "Differential Equations", enrolled: 24, schedule: "TTh 10:00AM-11:30AM A207", instructor: "Dr. Wilson", description: "Solving differential equations with applications." },
                    { code: "ENG104-GE44Am", title: "Academic Writing", enrolled: 31, schedule: "MW 11:00AM-12:30PM C306", instructor: "Ms. Brown", description: "Advanced skills for academic writing." },
                    { code: "PHYS204-GE54Am", title: "Mechanics", enrolled: 26, schedule: "TTh 01:00PM-03:00PM D204", instructor: "Dr. Lee", description: "Classical mechanics for engineering students." },
                    { code: "CHEM104-GE64Am", title: "Physical Chemistry", enrolled: 23, schedule: "MW 02:00PM-04:00PM B205", instructor: "Dr. Clark", description: "Principles of physical chemistry." },
                    { code: "STAT104-GE74Am", title: "Data Analysis", enrolled: 29, schedule: "TTh 03:00PM-04:30PM A310", instructor: "Prof. Evans", description: "Techniques for data analysis and interpretation." },
                    { code: "ENG204-GE84Am", title: "World Literature", enrolled: 28, schedule: "MWF 10:00AM-11:00AM C307", instructor: "Ms. Taylor", description: "Study of global literary traditions." },
                    { code: "PE104-GE94Am", title: "Physical Education IV", enrolled: 36, schedule: "FRI 08:00AM-10:00AM GYM3", instructor: "Coach Miller", description: "Specialized sports training and fitness." },
                    { code: "SOCS104-N14Am", title: "Political Science", enrolled: 33, schedule: "MW 04:00PM-05:30PM A311", instructor: "Dr. Harris", description: "Introduction to political theories and systems." },
                    { code: "ECON103-GE04Am", title: "Economic Development", enrolled: 30, schedule: "TTh 09:00AM-10:30AM D306", instructor: "Prof. Adams", description: "Strategies for economic growth and development." },
                ],
                "2nd Semester": [
                    { code: "CS105-GE25Am", title: "Operating Systems", enrolled: 25, schedule: "MWF 11:00AM-12:30PM B105", instructor: "Prof. Carter", description: "Concepts of operating systems and their design." },
                    { code: "MATH205-GE35Am", title: "Numerical Methods", enrolled: 22, schedule: "TTh 10:00AM-11:30AM A208", instructor: "Dr. Wilson", description: "Numerical techniques for engineering problems." },
                    { code: "ENG105-GE45Am", title: "Professional Communication", enrolled: 30, schedule: "MW 01:00PM-02:30PM C308", instructor: "Ms. Brown", description: "Communication skills for professional settings." },
                    { code: "PHYS205-GE55Am", title: "Thermodynamics", enrolled: 24, schedule: "TTh 01:00PM-03:00PM D205", instructor: "Dr. Lee", description: "Principles of thermodynamics for engineers." },
                    { code: "CHEM105-GE65Am", title: "Biochemistry", enrolled: 21, schedule: "MW 02:00PM-04:00PM B206", instructor: "Dr. Clark", description: "Introduction to biochemical processes." },
                    { code: "STAT105-GE75Am", title: "Statistical Modeling", enrolled: 27, schedule: "TTh 03:00PM-04:30PM A312", instructor: "Prof. Evans", description: "Building statistical models for data analysis." },
                    { code: "ENG205-GE85Am", title: "Modern Poetry", enrolled: 26, schedule: "MWF 09:00AM-10:00AM C309", instructor: "Ms. Taylor", description: "Analysis of modern poetic forms and styles." },
                    { code: "PE105-GE95Am", title: "Physical Education V", enrolled: 34, schedule: "FRI 10:00AM-12:00PM GYM4", instructor: "Coach Miller", description: "Advanced fitness training and wellness." },
                    { code: "SOCS105-N15Am", title: "International Relations", enrolled: 31, schedule: "MW 04:00PM-05:30PM A313", instructor: "Dr. Harris", description: "Study of global political interactions." },
                    { code: "ECON104-GE05Am", title: "International Economics", enrolled: 29, schedule: "TTh 11:00AM-12:30PM D307", instructor: "Prof. Adams", description: "Global economic systems and trade." },
                ],
            },
        },
        soa: { balance: 1500.00 },
        offerings: [
            { course: "CS102", title: "Data Structures", time: "MWF 11:00-12:30", room: "B102", instructor: "Prof. Lee" },
    { course: "ENG101", title: "English Composition", time: "TTh 1:00-2:30", room: "C301", instructor: "Ms. Brown" },
    { course: "MATH101", title: "College Algebra", time: "MWF 8:00-9:30", room: "A101", instructor: "Dr. Evans" },
    { course: "HIST100", title: "Foundations of History", time: "TTh 9:00-10:30", room: "D202", instructor: "Dr. Wilson" },
    { course: "PSY101", title: "Intro to Psychology", time: "MWF 10:00-11:30", room: "E303", instructor: "Prof. Carter" },
    { course: "BIO101", title: "General Biology", time: "TTh 2:00-3:30", room: "F105", instructor: "Dr. Morgan" },
    { course: "CS201", title: "Algorithms", time: "MW 3:00-4:30", room: "B203", instructor: "Prof. Kim" },
    { course: "CHEM102", title: "Organic Chemistry", time: "TTh 11:00-12:30", room: "G401", instructor: "Dr. Clark" },
    { course: "ART101", title: "Intro to Visual Arts", time: "MWF 1:00-2:00", room: "H201", instructor: "Ms. Martinez" },
    { course: "PHIL102", title: "Ethics", time: "TTh 3:00-4:30", room: "C202", instructor: "Dr. Reed" },
    { course: "ECON101", title: "Principles of Economics", time: "MW 9:00-10:30", room: "D110", instructor: "Dr. Young" },
    { course: "CS103", title: "Computer Systems", time: "TTh 10:00-11:30", room: "B104", instructor: "Prof. Adams" },
        ],
        calendar: [
            { date: "2025-04-01", event: "Spring Advising Begins" },
            { date: "2025-04-03", event: "Midterm Exams" },
            { date: "2025-04-07", event: "Spring Advising Continues" },
            { date: "2025-04-09", event: "University Holiday" },
            { date: "2025-04-11", event: "Last Day to Drop Classes" },
            { date: "2025-04-14", event: "Spring Break - No Classes" },
            { date: "2025-04-15", event: "Faculty Meeting" },
        ],
        notifications: [
            { id: 1, message: "Tuition payment due. Please settle $500 by April 10, 2025.", type: "deficiency" },
            { id: 2, message: "Advising for Summer 2025 is now open.", type: "info" },
        ],
        messages: [
            { sender: "Advisor", subject: "Advising Schedule", message: "Please schedule your advising for Summer 2025.", date: "2025-03-10" },
            { sender: "Registrar", subject: "Enrollment Reminder", message: "Enrollment for Summer 2025 starts on April 1.", date: "2025-03-15" },
        ],
        creditedSubjects: [
            {
                semester: "1st Semester",
                subjects: [
                    { code: "CS101", title: "Introduction to Programming", units: 3, lecUnits: 3, labUnits: 0, credits: 3 },
                    { code: "MATH101", title: "Algebra and Trigonometry", units: 3, lecUnits: 3, labUnits: 0, credits: 3 },
                    { code: "ENG101", title: "English Communication", units: 3, lecUnits: 3, labUnits: 0, credits: 3 },
                    { code: "PHYS101", title: "Fundamentals of Physics", units: 4, lecUnits: 3, labUnits: 1, credits: 4 },
                    { code: "HIST101", title: "World History", units: 3, lecUnits: 3, labUnits: 0, credits: 3 },
                ],
            },
            {
                semester: "2nd Semester",
                subjects: [
                    { code: "CS102", title: "Data Structures", units: 3, lecUnits: 3, labUnits: 0, credits: 3 },
                    { code: "MATH102", title: "Calculus I", units: 3, lecUnits: 3, labUnits: 0, credits: 3 },
                    { code: "CHEM101", title: "General Chemistry", units: 4, lecUnits: 3, labUnits: 1, credits: 4 },
                    { code: "ENG102", title: "Technical Writing", units: 3, lecUnits: 3, labUnits: 0, credits: 3 },
                    { code: "PE101", title: "Physical Education", units: 2, lecUnits: 2, labUnits: 0, credits: 2 },
                ],
            },
        ],
    };

    let activeNotifications = [...studentData.notifications];
    let currentSchedulePage = 0;
    let currentOfferingsPage = 0;
    const itemsPerPage = 3;
    let currentMonth = new Date(2025, 3); // April 2025 (0-based month)
    let currentSchoolYearIndex = 0;
    const schoolYears = Object.keys(studentData.gradesByYear).sort().reverse(); // e.g., ["2024-2025", "2023-2024"]
    let currentSemesterIndex = 0;
    const semesterList = Object.keys(studentData.subjectsByYearAndSemester[schoolYears[currentSchoolYearIndex]]).map(semester => ({
        year: schoolYears[currentSchoolYearIndex],
        semester
    }));
    semesterList.push(...Object.keys(studentData.subjectsByYearAndSemester["2023-2024"]).map(semester => ({
        year: "2023-2024",
        semester
    })));
    semesterList.push(...Object.keys(studentData.subjectsByYearAndSemester["2022-2023"]).map(semester => ({
        year: "2022-2023",
        semester
    })));

    // Screen navigation
    window.showScreen = function (screenId) {
        document.querySelectorAll('main section').forEach(section => {
            section.classList.add('hidden');
            section.classList.remove('fade-in');
        });
        const targetSection = document.getElementById(screenId);
        targetSection.classList.remove('hidden');
        setTimeout(() => targetSection.classList.add('fade-in'), 10);
    };

    // Toggle section visibility
    window.toggleSection = function (sectionId) {
        const section = document.getElementById(sectionId);
        section.classList.toggle('hidden');
        const button = document.querySelector(`button[onclick="toggleSection('${sectionId}')"]`);
        button.textContent = section.classList.contains('hidden') ? 'Expand' : 'Collapse';
    };

    // Validate login form
    window.validateLogin = function () {
        const studentId = document.getElementById("studentId").value;
        const password = document.getElementById("password").value;
        const studentIdError = document.getElementById("studentIdError");
        const passwordError = document.getElementById("passwordError");
        const signInButton = document.querySelector("#loginSection button");

        studentIdError.classList.toggle('hidden', studentId.trim() !== '');
        passwordError.classList.toggle('hidden', password.trim() !== '');
        signInButton.disabled = !studentId.trim() || !password.trim();
    };

    // Validate email
    window.validateEmail = function () {
        const email = document.getElementById("profile-email").value;
        const emailError = document.getElementById("emailError");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        emailError.classList.toggle('hidden', emailRegex.test(email));
    };

    // Login function
    window.login = function () {
        const studentId = document.getElementById("studentId").value;
        const password = document.getElementById("password").value;

        if (studentId === "123456" && password === "password") {
            document.getElementById("loginSection").classList.add("hidden");
            document.getElementById("dashboard").classList.remove("hidden");
            showScreen("calendar"); // Default to calendar

            // Populate dashboard
            document.getElementById("studentName").textContent = studentData.name;
            document.getElementById("profile-name").value = studentData.name;
            document.getElementById("profile-id").textContent = studentData.id;
            document.getElementById("profile-email").value = studentData.email;

            // Notifications
            renderNotifications();

            // Schedule
            renderPaginatedCourses('schedule', studentData.schedule, currentSchedulePage);

            // Grades
            renderGrades();

            // Credited Subjects
            renderCreditedSubjects();

            // Subjects
            renderSubjects();

            // SOA
            document.getElementById("soa-balance").textContent = studentData.soa.balance.toFixed(2);

            // Offerings
            renderPaginatedCourses('offerings', studentData.offerings, currentOfferingsPage);

            // Calendar
            renderCalendar();

            // Messages
            renderMessages();
        } else {
            alert("Invalid Student ID or Password");
        }
    };

    // Render notifications
    function renderNotifications() {
        const notificationsDiv = document.getElementById("notifications");
        const notificationCount = document.getElementById("notificationCount");
        notificationsDiv.innerHTML = `<h3 class="font-semibold mb-2 text-blue-900">Notifications</h3>`;
        if (activeNotifications.length > 0) {
            activeNotifications.forEach(notification => {
                const div = document.createElement("div");
                div.className = `p-2 rounded ${notification.type === 'deficiency' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'} flex justify-between items-center`;
                div.innerHTML = `
                    <p>${notification.message}</p>
                    <button onclick="dismissNotification(${notification.id})" class="text-sm underline" aria-label="Dismiss Notification">Dismiss</button>
                `;
                notificationsDiv.appendChild(div);
            });
            notificationCount.textContent = activeNotifications.length;
            notificationCount.classList.remove('hidden');
        } else {
            notificationsDiv.innerHTML += `<p>No new notifications.</p>`;
            notificationCount.classList.add('hidden');
        }
    }

    // Dismiss notification
    window.dismissNotification = function (id) {
        activeNotifications = activeNotifications.filter(n => n.id !== id);
        renderNotifications();
    };

    // Render paginated courses
    function renderPaginatedCourses(section, items, page) {
        const list = document.getElementById(`${section}-list`);
        list.innerHTML = '';
        const start = page * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = items.slice(start, end);

        paginatedItems.forEach(item => {
            const div = document.createElement("div");
            div.className = "bg-white p-4 rounded-lg shadow card";
            div.innerHTML = `
                <h3 class="font-semibold text-blue-900">${item.course}: ${item.title}</h3>
                <p>${item.time} | ${item.room} | ${item.instructor}</p>
                <button onclick="showCourseModal('${item.course}', 'Title: ${item.title}\\nTime: ${item.time}\\nRoom: ${item.room}\\nInstructor: ${item.instructor}')" class="mt-2 text-blue-600 hover:underline">View Details</button>
            `;
            list.appendChild(div);
        });

        const prevBtn = document.getElementById(`${section}Prev`);
        const nextBtn = document.getElementById(`${section}Next`);
        prevBtn.disabled = page === 0;
        nextBtn.disabled = end >= items.length;
    }

    // Calculate QPI
    function calculateQPI(grades) {
        if (grades.length === 0) return "NOT YET AVAILABLE";

        const gradePoints = {
            "A": 4.0, "A-": 3.7, "B+": 3.3, "B": 3.0, "B-": 2.7,
            "C+": 2.3, "C": 2.0, "C-": 1.7, "D": 1.0, "F": 0.0
        };

        let totalPoints = 0;
        let totalUnits = 0;

        grades.forEach(grade => {
            const points = gradePoints[grade.lGrade] || 0;
            totalPoints += points * grade.units;
            totalUnits += grade.units;
        });

        return totalUnits > 0 ? (totalPoints / totalUnits).toFixed(3) : "NOT YET AVAILABLE";
    }

    // Calculate General QPI across all years
    function calculateGeneralQPI() {
        let allGrades = [];
        Object.values(studentData.gradesByYear).forEach(year => {
            Object.values(year).forEach(semester => {
                allGrades = allGrades.concat(semester);
            });
        });
        return calculateQPI(allGrades);
    }

    // Render grades
    function renderGrades() {
        const gradesDiv = document.getElementById("grades-list");
        const schoolYearSpan = document.getElementById("schoolYear");
        const generalQPISpan = document.getElementById("generalQPI");
        gradesDiv.innerHTML = '';

        const currentSchoolYear = schoolYears[currentSchoolYearIndex];
        schoolYearSpan.textContent = `School Year ${currentSchoolYear}`;
        generalQPISpan.textContent = calculateGeneralQPI();

        const semesters = studentData.gradesByYear[currentSchoolYear];
        Object.keys(semesters).forEach(semester => {
            const semesterGrades = semesters[semester];
            // Semester header and QPI
            const semesterHeader = document.createElement("h3");
            semesterHeader.className = "text-lg font-bold text-blue-900 mb-2";
            semesterHeader.textContent = semester;
            gradesDiv.appendChild(semesterHeader);

            const semesterQPI = document.createElement("p");
            semesterQPI.className = "text-sm font-semibold text-green-600 mb-4";
            semesterQPI.textContent = `Semester QPI: ${calculateQPI(semesterGrades)}`;
            gradesDiv.appendChild(semesterQPI);

            // Table
            const table = document.createElement("table");
            table.className = "w-full text-sm text-left text-gray-700 grades-table";
            table.innerHTML = `
                <thead class="text-xs text-white uppercase bg-blue-900">
                    <tr>
                        <th class="px-4 py-2">Subject Code</th>
                        <th class="px-4 py-2">Subject Title</th>
                        <th class="px-4 py-2">Units</th>
                        <th class="px-4 py-2">NGrade</th>
                        <th class="px-4 py-2">LGrade</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            `;

            const tbody = table.querySelector("tbody");
            if (semesterGrades.length === 0) {
                const row = document.createElement("tr");
                row.innerHTML = `<td colspan="5" class="px-4 py-2 text-center text-gray-500">No grades available for this semester.</td>`;
                tbody.appendChild(row);
            } else {
                semesterGrades.forEach(grade => {
                    const row = document.createElement("tr");
                    row.className = "bg-white border-b hover:bg-gray-50";
                    row.innerHTML = `
                        <td class="px-4 py-2">${grade.code}</td>
                        <td class="px-4 py-2">${grade.title}</td>
                        <td class="px-4 py-2">${grade.units}</td>
                        <td class="px-4 py-2">${grade.nGrade}</td>
                        <td class="px-4 py-2">${grade.lGrade}</td>
                    `;
                    tbody.appendChild(row);
                });
            }

            gradesDiv.appendChild(table);
        });

        // Disable navigation buttons if at the start/end
        document.querySelector('button[onclick="prevSchoolYear()"]').disabled = currentSchoolYearIndex === schoolYears.length - 1;
        document.querySelector('button[onclick="nextSchoolYear()"]').disabled = currentSchoolYearIndex === 0;
    }

    // School year navigation for grades
    window.prevSchoolYear = function () {
        if (currentSchoolYearIndex < schoolYears.length - 1) {
            currentSchoolYearIndex++;
            renderGrades();
        }
    };

    window.nextSchoolYear = function () {
        if (currentSchoolYearIndex > 0) {
            currentSchoolYearIndex--;
            renderGrades();
        }
    };

    // Render subjects
    function renderSubjects() {
        const subjectsDiv = document.getElementById("subjects-list");
        const semesterYearSpan = document.getElementById("semesterYear");
        subjectsDiv.innerHTML = '';

        const current = semesterList[currentSemesterIndex];
        semesterYearSpan.textContent = `${current.semester} School Year ${current.year}`;

        const subjects = studentData.subjectsByYearAndSemester[current.year][current.semester];
        if (subjects.length === 0) {
            const div = document.createElement("div");
            div.className = "col-span-3 text-center text-gray-500";
            div.textContent = "No subjects available for this semester.";
            subjectsDiv.appendChild(div);
        } else {
            subjects.forEach(subject => {
                const div = document.createElement("div");
                div.className = "subject-card bg-white rounded-lg shadow";
                div.innerHTML = `
                    <div class="bg-blue-900 text-white p-4 rounded-t-lg">
                        <h3 class="font-semibold">${subject.code}</h3>
                        <p class="text-sm truncate">${subject.title}</p>
                    </div>
                    <div class="p-4">
                        <p class="text-sm text-gray-600">${subject.enrolled} enrolled</p>
                        <p class="text-sm"><strong>Schedule:</strong> ${subject.schedule}</p>
                        <p class="text-sm"><strong>Instructor:</strong> ${subject.instructor}</p>
                        <button onclick="showCourseModal('${subject.code}', 'Title: ${subject.title}\\nEnrolled: ${subject.enrolled}\\nSchedule: ${subject.schedule}\\nInstructor: ${subject.instructor}\\nDescription: ${subject.description}')" class="mt-2 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition">View</button>
                    </div>
                `;
                subjectsDiv.appendChild(div);
            });
        }

        // Disable navigation buttons if at the start/end
        document.querySelector('button[onclick="prevSemester()"]').disabled = currentSemesterIndex === semesterList.length - 1;
        document.querySelector('button[onclick="nextSemester()"]').disabled = currentSemesterIndex === 0;
    }

    // Semester navigation for subjects
    window.prevSemester = function () {
        if (currentSemesterIndex < semesterList.length - 1) {
            currentSemesterIndex++;
            renderSubjects();
        }
    };

    window.nextSemester = function () {
        if (currentSemesterIndex > 0) {
            currentSemesterIndex--;
            renderSubjects();
        }
    };

    // Render credited subjects
    function renderCreditedSubjects() {
        const creditedSubjectsDiv = document.getElementById("credited-subjects-list");
        creditedSubjectsDiv.innerHTML = '';

        studentData.creditedSubjects.forEach(semesterData => {
            // Semester header
            const semesterHeader = document.createElement("h3");
            semesterHeader.className = "text-lg font-bold text-blue-900 mb-2";
            semesterHeader.textContent = semesterData.semester;
            creditedSubjectsDiv.appendChild(semesterHeader);

            // Table
            const table = document.createElement("table");
            table.className = "w-full text-sm text-left text-gray-700 credited-subjects-table";
            table.innerHTML = `
                <thead class="text-xs text-white uppercase bg-blue-900">
                    <tr>
                        <th class="px-4 py-2">Subject Code</th>
                        <th class="px-4 py-2">Subject Title</th>
                        <th class="px-4 py-2">Units</th>
                        <th class="px-4 py-2">Lec Units</th>
                        <th class="px-4 py-2">Lab Units</th>
                        <th class="px-4 py-2">Credits</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            `;

            const tbody = table.querySelector("tbody");
            semesterData.subjects.forEach(subject => {
                const row = document.createElement("tr");
                row.className = "bg-white border-b hover:bg-gray-50";
                row.innerHTML = `
                    <td class="px-4 py-2">${subject.code}</td>
                    <td class="px-4 py-2">${subject.title}</td>
                    <td class="px-4 py-2">${subject.units}</td>
                    <td class="px-4 py-2">${subject.lecUnits}</td>
                    <td class="px-4 py-2">${subject.labUnits}</td>
                    <td class="px-4 py-2">${subject.credits}</td>
                `;
                tbody.appendChild(row);
            });

            creditedSubjectsDiv.appendChild(table);
        });
    }

    // Filter courses
    window.filterCourses = function (section) {
        const searchInput = document.getElementById(`${section}Search`);
        const loading = document.getElementById(`${section}Loading`);
        loading.classList.remove('hidden');
        setTimeout(() => {
            const items = section === 'schedule' ? studentData.schedule : studentData.offerings;
            const filteredItems = searchInput.value
                ? items.filter(c => c.course.toLowerCase().includes(searchInput.value.toLowerCase()) || c.title.toLowerCase().includes(searchInput.value.toLowerCase()))
                : items;
            if (section === 'schedule') currentSchedulePage = 0;
            else if (section === 'offerings') currentOfferingsPage = 0;
            renderPaginatedCourses(section, filteredItems, section === 'schedule' ? currentSchedulePage : currentOfferingsPage);
            loading.classList.add('hidden');
        }, 500);
    };

    // Pagination controls
    document.getElementById('schedulePrev').addEventListener('click', () => {
        if (currentSchedulePage > 0) {
            currentSchedulePage--;
            renderPaginatedCourses('schedule', studentData.schedule, currentSchedulePage);
        }
    });
    document.getElementById('scheduleNext').addEventListener('click', () => {
        if ((currentSchedulePage + 1) * itemsPerPage < studentData.schedule.length) {
            currentSchedulePage++;
            renderPaginatedCourses('schedule', studentData.schedule, currentSchedulePage);
        }
    });
    document.getElementById('offeringsPrev').addEventListener('click', () => {
        if (currentOfferingsPage > 0) {
            currentOfferingsPage--;
            renderPaginatedCourses('offerings', studentData.offerings, currentOfferingsPage);
        }
    });
    document.getElementById('offeringsNext').addEventListener('click', () => {
        if ((currentOfferingsPage + 1) * itemsPerPage < studentData.offerings.length) {
            currentOfferingsPage++;
            renderPaginatedCourses('offerings', studentData.offerings, currentOfferingsPage);
        }
    });

    // Render calendar
    function renderCalendar() {
        const daysDiv = document.getElementById("calendarDays");
        const monthDisplay = document.getElementById("calendarMonth");
        daysDiv.innerHTML = '';

        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        monthDisplay.textContent = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

        // Add empty slots for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement("div");
            emptyDiv.className = "p-2";
            daysDiv.appendChild(emptyDiv);
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const events = studentData.calendar.filter(e => e.date === dateStr);
            const dayDiv = document.createElement("div");
            dayDiv.className = `p-2 h-24 border ${events.length > 0 ? 'bg-blue-100' : 'bg-white'} hover:bg-blue-200 transition relative group`;
            dayDiv.innerHTML = `<span class="text-sm font-semibold">${day}</span>`;
            if (events.length > 0) {
                const tooltip = document.createElement("div");
                tooltip.className = "absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 z-10 -top-10 left-1/2 transform -translate-x-1/2";
                tooltip.textContent = events.map(e => e.event).join(", ");
                dayDiv.appendChild(tooltip);
                dayDiv.innerHTML += `<p class="text-xs truncate">${events[0].event}</p>`;
            }
            daysDiv.appendChild(dayDiv);
        }
    }

    // Calendar navigation
    window.prevMonth = function () {
        currentMonth.setMonth(currentMonth.getMonth() - 1);
        renderCalendar();
    };
    window.nextMonth = function () {
        currentMonth.setMonth(currentMonth.getMonth() + 1);
        renderCalendar();
    };

    // Render messages
    function renderMessages() {
        const messagesList = document.getElementById("messages-list");
        messagesList.innerHTML = '';
        studentData.messages.forEach(message => {
            const div = document.createElement("div");
            div.className = "border-b py-2";
            div.innerHTML = `
                <p class="font-semibold text-blue-900">${message.subject}</p>
                <p class="text-sm text-gray-700">From: ${message.sender} | ${message.date}</p>
                <p class="text-sm">${message.message}</p>
            `;
            messagesList.appendChild(div);
        });
    }

    // Show course modal
    window.showCourseModal = function (title, details) {
        const modal = document.getElementById("courseModal");
        document.getElementById("modalTitle").textContent = title;
        document.getElementById("modalDetails").textContent = details.replace(/\\n/g, '\n');
        modal.classList.remove('hidden');
    };

    // Close modal
    window.closeModal = function () {
        document.getElementById("courseModal").classList.add('hidden');
        document.getElementById("confirmModal").classList.add('hidden');
    };

    // Confirm save profile
    window.confirmSaveProfile = function () {
        const name = document.getElementById("profile-name").value;
        const email = document.getElementById("profile-email").value;
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        nameError.classList.toggle('hidden', name.trim() !== '');
        emailError.classList.toggle('hidden', emailRegex.test(email));

        if (!name.trim() || !emailRegex.test(email)) return;

        const confirmModal = document.getElementById("confirmModal");
        document.getElementById("confirmTitle").textContent = "Save Profile";
        document.getElementById("confirmMessage").textContent = "Are you sure you want to save your profile changes?";
        document.getElementById("confirmAction").onclick = () => {
            studentData.name = name;
            studentData.email = email;
            document.getElementById("studentName").textContent = name;
            document.getElementById("profile-name").value = name;
            document.getElementById("profile-email").value = email;
            alert("Profile updated successfully!");
            closeModal();
        };
        document.getElementById("confirmCancel").onclick = closeModal;
        confirmModal.classList.remove('hidden');
    };

    // Logout function
    window.logout = function () {
        document.getElementById("dashboard").classList.add("hidden");
        document.getElementById("loginSection").classList.remove("hidden");
        document.getElementById("studentId").value = "";
        document.getElementById("password").value = "";
        document.querySelector("#loginSection button").disabled = true;
        activeNotifications = [...studentData.notifications];
    };

    // Print SOA function
    window.printSOA = function () {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text("Statement of Account", 10, 10);
        doc.text(`Total Balance: $${studentData.soa.balance.toFixed(2)}`, 10, 20);
        doc.text(`Student: ${studentData.name}`, 10, 30);
        doc.text(`ID: ${studentData.id}`, 10, 40);
        doc.save("soa.pdf");
    };

    // Download Schedule function
    window.downloadSchedule = function () {
        alert("Downloading Schedule...");
    };

    // Toggle mobile sidebar
    window.toggleMobileSidebar = function () {
        const mobileSidebar = document.getElementById("mobileSidebar");
        mobileSidebar.classList.toggle("hidden");
    };

    // Menu toggle for mobile
    document.getElementById("menuToggle").addEventListener("click", toggleMobileSidebar);
});