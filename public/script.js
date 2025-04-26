// Waits for the DOM to fully load before executing the enclosed code
document.addEventListener("DOMContentLoaded", () => {
    // Logs a welcome message to the console for debugging; remove in production for cleaner logs
    console.log("Welcome to MyUniversity Portal!");

    // Lazy-loads background images for elements with the 'lazy-bg' class
    const lazyBgElements = document.querySelectorAll('.lazy-bg');
    // Iterates over elements with lazy-bg class to set their background image
    lazyBgElements.forEach(element => {
        // Retrieves the background image URL from the data-bg attribute
        const bgUrl = element.getAttribute('data-bg');
        // Checks if a valid URL exists to avoid errors
        if (bgUrl) {
            // Sets the background image using the URL; add error handling for invalid URLs if needed
            element.style.backgroundImage = `url(${bgUrl})`;
        }
    });

    // Mock student data object simulating backend data; replace with API calls for real-world use
    const studentData = {
        // Student name displayed in the dashboard; update dynamically via authentication
        name: "Al Francis B. Paz",
        // Student ID for login verification; should be unique per user
        id: "123456",
        // Student email for profile; validate format in production
        email: "alfrancispaz@myuniversity.edu",
        // Array of course schedule objects; expand with additional fields (e.g., credits) if needed
        schedule: [
            // Example course entry; modify or add more courses as required
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
        // Grades organized by school year and semester; add more years or semesters as needed
        gradesByYear: {
            "2024-2025": {
                "1st Semester": [
                    // Example grade entry; nGrade is numerical, lGrade is letter grade
                    { code: "CS101", title: "Introduction to Programming", units: 3, nGrade: 96, lGrade: "B+" },
                    { code: "MATH201", title: "Calculus I", units: 3, nGrade: 99, lGrade: "A" },
                    { code: "ENG201", title: "Technical Writing", units: 3, nGrade: 93, lGrade: "B" },
                    { code: "PHYS201", title: "Physics for Engineers", units: 4, nGrade: 94, lGrade: "B+" },
                    { code: "HIST201", title: "Modern History", units: 3, nGrade: 94, lGrade: "B+" },
                ],
                // Empty 2nd semester; populate with grades when available
                "2nd Semester": [],
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
        // Subjects organized by year and semester; used for enrolled courses
        subjectsByYearAndSemester: {
            "2024-2025": {
                "1st Semester": [
                    // Example subject entry with detailed fields
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
            // Previous years' subjects; structure mirrors 2024-2025
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
        // Statement of Account data; expand with payment history or due dates
        soa: {
            balance: 1500.00,
            dueDate: "2025-05-15",
            paymentHistory: [
                { date: "2025-02-01", amount: 500.00, method: "Credit Card" },
                { date: "2025-03-01", amount: 400.00, method: "Online Banking" },
                { date: "2025-04-01", amount: 300.00, method: "Cash Payment" }
            ],
            lastPaymentDate: "2025-04-01",
            nextDueAmount: 1500.00,
            status: "Pending"
        },
        // Course offerings available for enrollment; similar to schedule but broader
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
        // Academic calendar events; add more events or categories (e.g., holidays, exams)
        calendar: [
            // January
            { date: "2025-01-06", event: "Start of Spring Semester" },
            { date: "2025-01-20", event: "Martin Luther King Jr. Day - No Classes" },
        
            // February
            { date: "2025-02-14", event: "Valentine's Day - Special Campus Event" },
            { date: "2025-02-17", event: "Presidents' Day - No Classes" },
            { date: "2025-02-24", event: "Midterm Advising Begins" },
        
            // March
            { date: "2025-03-10", event: "Midterm Exams Start" },
            { date: "2025-03-14", event: "Midterm Exams End" },
            { date: "2025-03-17", event: "Spring Break Begins" },
            { date: "2025-03-21", event: "Spring Break Ends" },
            { date: "2025-03-31", event: "Academic Advising for Summer Classes" },
        
            // April
            { date: "2025-04-01", event: "Spring Advising Begins" },
            { date: "2025-04-03", event: "Midterm Exams (2nd Half)" },
            { date: "2025-04-07", event: "Spring Advising Continues" },
            { date: "2025-04-09", event: "University Holiday - Araw ng Kagitingan" },
            { date: "2025-04-11", event: "Last Day to Drop Classes Without Penalty" },
            { date: "2025-04-14", event: "Spring Break - No Classes" },
            { date: "2025-04-15", event: "Faculty Development Meeting" },
            { date: "2025-04-21", event: "Registration for Summer Term Opens" },
            { date: "2025-04-25", event: "Graduation Application Deadline" },
        
            // May
            { date: "2025-05-01", event: "Labor Day (Holiday) - No Classes" },
            { date: "2025-05-10", event: "Final Exams Begin" },
            { date: "2025-05-16", event: "Final Exams End" },
            { date: "2025-05-20", event: "Final Grades Due" },
            { date: "2025-05-25", event: "Commencement Ceremony" },
        
            // June
            { date: "2025-06-02", event: "Start of Summer Term" },
            { date: "2025-06-12", event: "Independence Day (PH) - Holiday" },
            { date: "2025-06-20", event: "Midterm Exams - Summer Term" },
        
            // July
            { date: "2025-07-04", event: "US Independence Day - No Classes" },
            { date: "2025-07-18", event: "Final Exams - Summer Term" },
            { date: "2025-07-22", event: "Summer Term Grades Due" },
        
            // August
            { date: "2025-08-05", event: "Freshmen Orientation" },
            { date: "2025-08-12", event: "Start of Fall Semester" },
            { date: "2025-08-21", event: "Ninoy Aquino Day (Holiday)" },
            { date: "2025-08-26", event: "National Heroes Day (Holiday)" },
        
            // September
            { date: "2025-09-01", event: "Labor Day - No Classes" },
            { date: "2025-09-15", event: "Midterm Exams - Fall Term" },
            { date: "2025-09-30", event: "Midterm Grades Released" },
        
            // October
            { date: "2025-10-01", event: "Advising for Spring 2026 Begins" },
            { date: "2025-10-31", event: "Halloween - Campus Trick or Treat" },
        
            // November
            { date: "2025-11-01", event: "All Saints' Day - Holiday" },
            { date: "2025-11-28", event: "Thanksgiving Break" },
        
            // December
            { date: "2025-12-10", event: "Final Exams Begin - Fall Term" },
            { date: "2025-12-16", event: "Final Exams End" },
            { date: "2025-12-20", event: "Winter Break Begins" },
            { date: "2025-12-24", event: "Christmas Eve - No Classes" },
            { date: "2025-12-25", event: "Christmas Day - Holiday" },
            { date: "2025-12-31", event: "New Year's Eve - No Classes" }
        ],
        // Notifications for the student; differentiate types (e.g., deficiency, info)
        notifications: [
            { id: 1, message: "Tuition payment due. Please settle $500 by April 10, 2025.", type: "deficiency" },
            { id: 2, message: "Advising for Summer 2025 is now open.", type: "info" },
            { id: 3, message: "Library book 'Introduction to Algorithms' is overdue. Please return by April 5, 2025.", type: "deficiency" },
            { id: 4, message: "New scholarship opportunities available. Apply before May 1, 2025.", type: "info" },
            { id: 5, message: "Reminder: Midterm exams start on April 3, 2025.", type: "reminder" },
            { id: 6, message: "Graduation application deadline is April 25, 2025.", type: "reminder" },
            { id: 7, message: "Congratulations! You made it to the Dean's List for Fall 2024.", type: "info" },
            { id: 8, message: "Parking permit expired. Please renew to avoid penalties.", type: "deficiency" },
            { id: 9, message: "Student portal maintenance scheduled on April 15, 2025, from 12:00 AM to 6:00 AM.", type: "info" },
            { id: 10, message: "Submit your health clearance form before the start of Summer Term.", type: "reminder" }
        ],
        // Messages from faculty or staff; add reply functionality or categories
        messages: [
            { 
                sender: "Advisor", 
                subject: "Advising Schedule", 
                message: "Please schedule your advising for Summer 2025.", 
                date: "2025-03-10", 
                category: "advising", 
                replies: [] 
            },
            { 
                sender: "Registrar", 
                subject: "Enrollment Reminder", 
                message: "Enrollment for Summer 2025 starts on April 1.", 
                date: "2025-03-15", 
                category: "enrollment", 
                replies: [] 
            },
            { 
                sender: "Financial Office", 
                subject: "Outstanding Balance Notice", 
                message: "You have an outstanding balance of $300. Please settle it by April 10, 2025.", 
                date: "2025-03-20", 
                category: "finance", 
                replies: [] 
            },
            { 
                sender: "Dean's Office", 
                subject: "Dean's List Recognition", 
                message: "Congratulations! You have been placed on the Dean's List for Fall 2024.", 
                date: "2025-03-25", 
                category: "announcement", 
                replies: [] 
            },
            { 
                sender: "IT Services", 
                subject: "Portal Maintenance", 
                message: "Student portal will undergo maintenance on April 15, 2025.", 
                date: "2025-03-27", 
                category: "technical", 
                replies: [] 
            },
            { 
                sender: "Library", 
                subject: "Overdue Book Notice", 
                message: "Reminder: 'Data Structures and Algorithms' is overdue. Please return it by April 5, 2025.", 
                date: "2025-03-30", 
                category: "library", 
                replies: [] 
            }
        ],
        // Credited subjects completed by the student; used for degree audit
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
                    { code: "PE101", title: "Physical Education I", units: 2, lecUnits: 2, labUnits: 0, credits: 2 },
                ],
            },
            {
                semester: "Summer Term",
                subjects: [
                    { code: "CS103", title: "Object-Oriented Programming", units: 3, lecUnits: 2, labUnits: 1, credits: 3 },
                    { code: "MATH103", title: "Statistics and Probability", units: 3, lecUnits: 3, labUnits: 0, credits: 3 },
                ],
            },
            {
                semester: "3rd Semester",
                subjects: [
                    { code: "CS201", title: "Computer Organization", units: 3, lecUnits: 2, labUnits: 1, credits: 3 },
                    { code: "MATH201", title: "Calculus II", units: 3, lecUnits: 3, labUnits: 0, credits: 3 },
                    { code: "ENG201", title: "Advanced Composition", units: 3, lecUnits: 3, labUnits: 0, credits: 3 },
                    { code: "SOCSCI101", title: "Introduction to Sociology", units: 3, lecUnits: 3, labUnits: 0, credits: 3 },
                    { code: "PE102", title: "Physical Education II", units: 2, lecUnits: 2, labUnits: 0, credits: 2 },
                ],
            },
            {
                semester: "4th Semester",
                subjects: [
                    { code: "CS202", title: "Algorithms and Complexity", units: 3, lecUnits: 3, labUnits: 0, credits: 3 },
                    { code: "MATH202", title: "Discrete Mathematics", units: 3, lecUnits: 3, labUnits: 0, credits: 3 },
                    { code: "PHYS201", title: "Electricity and Magnetism", units: 4, lecUnits: 3, labUnits: 1, credits: 4 },
                    { code: "HUM101", title: "Art Appreciation", units: 3, lecUnits: 3, labUnits: 0, credits: 3 },
                    { code: "PE103", title: "Physical Education III", units: 2, lecUnits: 2, labUnits: 0, credits: 2 },
                ],
            }
        ],
    };

    // Tracks active notifications; persists until dismissed; consider localStorage for persistence
    let activeNotifications = [...studentData.notifications];
    // Tracks current page for schedule pagination; reset when filtering
    let currentSchedulePage = 0;
    // Tracks current page for offerings pagination
    let currentOfferingsPage = 0;
    // Number of items per page for pagination; adjust (e.g., 5) for more/fewer items
    const itemsPerPage = 3;
    // Tracks current month for calendar; initialized to April 2025 (0-based month)
    let currentMonth = new Date(2025, 3); // April 2025
    // Tracks current school year index for grades navigation
    let currentSchoolYearIndex = 0;
    // Lists school years in descending order; ensures newest year is first
    const schoolYears = Object.keys(studentData.gradesByYear).sort().reverse(); // e.g., ["2024-2025", "2023-2024"]
    // Tracks current semester index for subjects navigation
    let currentSemesterIndex = 0;
    // Constructs a list of semesters across years for navigation
    const semesterList = Object.keys(studentData.subjectsByYearAndSemester[schoolYears[currentSchoolYearIndex]]).map(semester => ({
        year: schoolYears[currentSchoolYearIndex],
        semester
    }));
    // Adds semesters from 2023-2024
    semesterList.push(...Object.keys(studentData.subjectsByYearAndSemester["2023-2024"]).map(semester => ({
        year: "2023-2024",
        semester
    })));
    // Adds semesters from 2022-2023
    semesterList.push(...Object.keys(studentData.subjectsByYearAndSemester["2022-2023"]).map(semester => ({
        year: "2022-2023",
        semester
    })));

    // Navigates between dashboard sections
    window.showScreen = function (screenId) {
        // Hides all main sections and removes fade-in animation
        document.querySelectorAll('main section').forEach(section => {
            section.classList.add('hidden');
            section.classList.remove('fade-in');
        });
        // Shows the target section
        const targetSection = document.getElementById(screenId);
        targetSection.classList.remove('hidden');
        // Adds fade-in animation after a slight delay for smooth transition
        setTimeout(() => targetSection.classList.add('fade-in'), 10);
        // Modify delay (e.g., 50) or animation in styles.css for different effects
    };

    // Toggles visibility of a specific section (e.g., schedule list)
    window.toggleSection = function (sectionId) {
        const section = document.getElementById(sectionId);
        const button = document.querySelector(`button[onclick="toggleSection('${sectionId}')"]`);
        section.classList.toggle('hidden');
        button.setAttribute('aria-expanded', !section.classList.contains('hidden'));
        button.textContent = section.classList.contains('hidden') ? 'Expand' : 'Collapse';
    };

    // Validates login form inputs in real-time
    window.validateLogin = function () {
        // Retrieves student ID input value
        const studentId = document.getElementById("studentId").value;
        // Retrieves password input value
        const password = document.getElementById("password").value;
        // Gets the error message element for student ID
        const studentIdError = document.getElementById("studentIdError");
        // Gets the error message element for password
        const passwordError = document.getElementById("passwordError");
        // Gets the sign-in button
        const signInButton = document.querySelector("#loginSection button");

        // Shows/hides student ID error based on whether input is empty
        studentIdError.classList.toggle('hidden', studentId.trim() !== '');
        // Shows/hides password error based on whether input is empty
        passwordError.classList.toggle('hidden', password.trim() !== '');
        // Enables sign-in button only if both fields are non-empty
        signInButton.disabled = !studentId.trim() || !password.trim();
        // Add more validation (e.g., regex for ID format) if needed
    };

    // Validates email format in the profile section
    window.validateEmail = function () {
        // Retrieves email input value
        const email = document.getElementById("profile-email").value;
        // Gets the email error message element
        const emailError = document.getElementById("emailError");
        // Basic regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Shows/hides email error based on regex test
        emailError.classList.toggle('hidden', emailRegex.test(email));
        // Enhance regex to restrict to specific domains (e.g., university email)
    };

    // Handles login form submission
    window.login = function () {
        // Retrieves student ID input value
        const studentId = document.getElementById("studentId").value;
        // Retrieves password input value
        const password = document.getElementById("password").value;

        // Hardcoded credentials for demo; replace with secure backend authentication
        if (studentId === "123456" && password === "password") {
            // Hides login section
            document.getElementById("loginSection").classList.add("hidden");
            // Shows dashboard
            document.getElementById("dashboard").classList.remove("hidden");
            // Sets default screen to calendar
            showScreen("calendar"); // Default to calendar

            // Populates dashboard with student data
            // Sets welcome message with student name
            document.getElementById("studentName").textContent = studentData.name;
            // Sets profile name input
            document.getElementById("profile-name").value = studentData.name;
            // Sets profile ID display
            document.getElementById("profile-id").textContent = studentData.id;
            // Sets profile email input
            document.getElementById("profile-email").value = studentData.email;

            // Renders notifications
            renderNotifications();
            // Renders schedule with pagination
            renderPaginatedCourses('schedule', studentData.schedule, currentSchedulePage);
            // Renders grades
            renderGrades();
            // Renders credited subjects
            renderCreditedSubjects();
            // Renders enrolled subjects
            renderSubjects();
            // Displays SOA balance
            document.getElementById("soa-balance").textContent = studentData.soa.balance.toFixed(2);
            // Renders course offerings
            renderPaginatedCourses('offerings', studentData.offerings, currentOfferingsPage);
            // Renders calendar
            renderCalendar();
            // Renders messages
            renderMessages();
        } else {
            // Displays error for invalid credentials; replace with custom modal for better UX
            alert("Invalid Student ID or Password");
        }
    };

    // Renders notifications in the dashboard
    function renderNotifications() {
        // Gets the notifications container
        const notificationsDiv = document.getElementById("notifications");
        // Gets the notification count badge
        const notificationCount = document.getElementById("notificationCount");
        // Initializes container with header
        notificationsDiv.innerHTML = `<h3 class="font-semibold mb-2 text-blue-900">Notifications</h3>`;
        // Checks if there are active notifications
        if (activeNotifications.length > 0) {
            // Iterates over notifications to create individual entries
            activeNotifications.forEach(notification => {
                // Creates a div for each notification
                const div = document.createElement("div");
                // Applies styling based on notification type (deficiency = red, info = blue)
                div.className = `p-2 rounded ${notification.type === 'deficiency' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'} flex justify-between items-center`;
                // Adds notification message and dismiss button
                div.innerHTML = `
                    <p>${notification.message}</p>
                    <button onclick="dismissNotification(${notification.id})" class="text-sm underline" aria-label="Dismiss Notification">Dismiss</button>
                `;
                // Appends notification to container
                notificationsDiv.appendChild(div);
            });
            // Updates notification count badge
            notificationCount.textContent = activeNotifications.length;
            // Shows the count badge
            notificationCount.classList.remove('hidden');
        } else {
            // Displays message if no notifications exist
            notificationsDiv.innerHTML += `<p>No new notifications.</p>`;
            // Hides the count badge
            notificationCount.classList.add('hidden');
        }
        // Customize styling or add sorting/filtering for notifications
    }

    // Dismisses a notification by ID
    window.dismissNotification = function (id) {
        // Filters out the dismissed notification
        activeNotifications = activeNotifications.filter(n => n.id !== id);
        // Re-renders notifications
        renderNotifications();
        // Consider persisting dismissals in localStorage or backend
    };

    // Renders paginated courses (schedule or offerings)
    function renderPaginatedCourses(section, items, page) {
        // Gets the container for the course list
        const list = document.getElementById(`${section}-list`);
        // Clears existing content
        list.innerHTML = '';
        // Calculates start and end indices for pagination
        const start = page * itemsPerPage;
        const end = start + itemsPerPage;
        // Slices items for the current page
        const paginatedItems = items.slice(start, end);

        // Iterates over paginated items to create course cards
        paginatedItems.forEach(item => {
            // Creates a div for each course
            const div = document.createElement("div");
            // Applies card styling
            div.className = "bg-white p-4 rounded-lg shadow card";
            // Adds course details and modal trigger button
            div.innerHTML = `
                <h3 class="font-semibold text-blue-900">${item.course}: ${item.title}</h3>
                <p>${item.time} | ${item.room} | ${item.instructor}</p>
                <button onclick="showCourseModal('${item.course}', 'Title: ${item.title}\\nTime: ${item.time}\\nRoom: ${item.room}\\nInstructor: ${item.instructor}')" class="mt-2 text-blue-600 hover:underline">View Details</button>
            `;
            // Appends course card to container
            list.appendChild(div);
        });

        // Gets pagination buttons
        const prevBtn = document.getElementById(`${section}Prev`);
        const nextBtn = document.getElementById(`${section}Next`);
        // Disables previous button if on first page
        prevBtn.disabled = page === 0;
        // Disables next button if no more items
        nextBtn.disabled = end >= items.length;
        // Adjust itemsPerPage or add more course details (e.g., credits)
    }

    // Calculates Quality Point Index (QPI) for a set of grades
    function calculateQPI(grades) {
        // Returns placeholder if no grades are available
        if (grades.length === 0) return "NOT YET AVAILABLE";

        // Maps letter grades to grade points
        const gradePoints = {
            "A": 4.0, "A-": 3.7, "B+": 3.3, "B": 3.0, "B-": 2.7,
            "C+": 2.3, "C": 2.0, "C-": 1.7, "D": 1.0, "F": 0.0
        };

        // Initializes variables for calculation
        let totalPoints = 0;
        let totalUnits = 0;

        // Iterates over grades to calculate total points and units
        grades.forEach(grade => {
            // Gets grade points or defaults to 0 for invalid grades
            const points = gradePoints[grade.lGrade] || 0;
            // Adds weighted points (points * units)
            totalPoints += points * grade.units;
            // Adds units
            totalUnits += grade.units;
        });

        // Calculates QPI or returns placeholder if no units
        return totalUnits > 0 ? (totalPoints / totalUnits).toFixed(3) : "NOT YET AVAILABLE";
        // Modify grading scale or precision (e.g., .toFixed(2)) as needed
    }

    // Calculates overall QPI across all years
    function calculateGeneralQPI() {
        // Collects all grades from all years and semesters
        let allGrades = [];
        Object.values(studentData.gradesByYear).forEach(year => {
            Object.values(year).forEach(semester => {
                allGrades = allGrades.concat(semester);
            });
        });
        // Calculates QPI for all grades
        return calculateQPI(allGrades);
    }

    // Renders grades table
    function renderGrades() {
        // Gets the grades container
        const gradesDiv = document.getElementById("grades-list");
        // Gets the school year display element
        const schoolYearSpan = document.getElementById("schoolYear");
        // Gets the general QPI display element
        const generalQPISpan = document.getElementById("generalQPI");
        // Clears existing content
        gradesDiv.innerHTML = '';

        // Gets the current school year
        const currentSchoolYear = schoolYears[currentSchoolYearIndex];
        // Updates school year display
        schoolYearSpan.textContent = `School Year ${currentSchoolYear}`;
        // Updates general QPI display
        generalQPISpan.textContent = calculateGeneralQPI();

        // Gets semesters for the current school year
        const semesters = studentData.gradesByYear[currentSchoolYear];
        // Iterates over semesters to render grades
        Object.keys(semesters).forEach(semester => {
            // Gets grades for the semester
            const semesterGrades = semesters[semester];
            // Creates semester header
            const semesterHeader = document.createElement("h3");
            semesterHeader.className = "text-lg font-bold text-blue-900 mb-2";
            semesterHeader.textContent = semester;
            gradesDiv.appendChild(semesterHeader);

            // Displays semester QPI
            const semesterQPI = document.createElement("p");
            semesterQPI.className = "text-sm font-semibold text-green-600 mb-4";
            semesterQPI.textContent = `Semester QPI: ${calculateQPI(semesterGrades)}`;
            gradesDiv.appendChild(semesterQPI);

            // Creates grades table
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

            // Gets table body
            const tbody = table.querySelector("tbody");
            // Checks if semester has grades
            if (semesterGrades.length === 0) {
                // Displays message if no grades
                const row = document.createElement("tr");
                row.innerHTML = `<td colspan="5" class="px-4 py-2 text-center text-gray-500">No grades available for this semester.</td>`;
                tbody.appendChild(row);
            } else {
                // Iterates over grades to create table rows
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

            // Appends table to container
            gradesDiv.appendChild(table);
        });

        // Disables navigation buttons if at the start/end
        document.querySelector('button[onclick="prevSchoolYear()"]').disabled = currentSchoolYearIndex === schoolYears.length - 1;
        document.querySelector('button[onclick="nextSchoolYear()"]').disabled = currentSchoolYearIndex === 0;
        // Add sorting or filtering options for grades
    }

    // Navigates to previous school year for grades
    window.prevSchoolYear = function () {
        // Checks if not at the oldest year
        if (currentSchoolYearIndex < schoolYears.length - 1) {
            // Increments index to move to older year
            currentSchoolYearIndex++;
            // Re-renders grades
            renderGrades();
        }
    };

    // Navigates to next school year for grades
    window.nextSchoolYear = function () {
        // Checks if not at the newest year
        if (currentSchoolYearIndex > 0) {
            // Decrements index to move to newer year
            currentSchoolYearIndex--;
            // Re-renders grades
            renderGrades();
        }
    };

    // Renders enrolled subjects for the selected semester
    function renderSubjects() {
        // Gets the subjects container
        const subjectsDiv = document.getElementById("subjects-list");
        // Gets the semester/year display element
        const semesterYearSpan = document.getElementById("semesterYear");
        // Clears existing content
        subjectsDiv.innerHTML = '';

        // Gets the current semester and year
        const current = semesterList[currentSemesterIndex];
        // Updates semester/year display
        semesterYearSpan.textContent = `${current.semester} School Year ${current.year}`;

        // Gets subjects for the current semester and year
        const subjects = studentData.subjectsByYearAndSemester[current.year][current.semester];
        // Checks if subjects exist
        if (subjects.length === 0) {
            // Displays message if no subjects
            const div = document.createElement("div");
            div.className = "col-span-3 text-center text-gray-500";
            div.textContent = "No subjects available for this semester.";
            subjectsDiv.appendChild(div);
        } else {
            // Iterates over subjects to create cards
            subjects.forEach(subject => {
                // Creates a div for each subject
                const div = document.createElement("div");
                // Applies card styling
                div.className = "subject-card bg-white rounded-lg shadow";
                // Adds subject details and modal trigger button
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
                // Appends subject card to container
                subjectsDiv.appendChild(div);
            });
        }

        // Disables navigation buttons if at the start/end
        document.querySelector('button[onclick="prevSemester()"]').disabled = currentSemesterIndex === semesterList.length - 1;
        document.querySelector('button[onclick="nextSemester()"]').disabled = currentSemesterIndex === 0;
        // Add filtering or sorting for subjects
    }

    // Navigates to previous semester for subjects
    window.prevSemester = function () {
        // Checks if not at the oldest semester
        if (currentSemesterIndex < semesterList.length - 1) {
            // Increments index to move to older semester
            currentSemesterIndex++;
            // Re-renders subjects
            renderSubjects();
        }
    };

    // Navigates to next semester for subjects
    window.nextSemester = function () {
        // Checks if not at the newest semester
        if (currentSemesterIndex > 0) {
            // Decrements index to move to newer semester
            currentSemesterIndex--;
            // Re-renders subjects
            renderSubjects();
        }
    };

    // Renders credited subjects table
    function renderCreditedSubjects() {
        // Gets the credited subjects container
        const creditedSubjectsDiv = document.getElementById("credited-subjects-list");
        // Clears existing content
        creditedSubjectsDiv.innerHTML = '';

        // Iterates over semesters in credited subjects
        studentData.creditedSubjects.forEach(semesterData => {
            // Creates semester header
            const semesterHeader = document.createElement("h3");
            semesterHeader.className = "text-lg font-bold text-blue-900 mb-2";
            semesterHeader.textContent = semesterData.semester;
            creditedSubjectsDiv.appendChild(semesterHeader);

            // Creates table for subjects
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

            // Gets table body
            const tbody = table.querySelector("tbody");
            // Iterates over subjects to create table rows
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

            // Appends table to container
            creditedSubjectsDiv.appendChild(table);
        });
        // Add export functionality (e.g., CSV) for credited subjects
    }

    // Filters courses based on search input
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    window.filterCourses = debounce(function (section) {
        const searchInput = document.getElementById(`${section}Search`);
        const loading = document.getElementById(`${section}Loading`);
        loading.classList.remove('hidden');
        const items = section === 'schedule' ? studentData.schedule : studentData.offerings;
        const filteredItems = searchInput.value
            ? items.filter(c => c.course.toLowerCase().includes(searchInput.value.toLowerCase()) || c.title.toLowerCase().includes(searchInput.value.toLowerCase()))
            : items;
        if (section === 'schedule') currentSchedulePage = 0;
        else if (section === 'offerings') currentOfferingsPage = 0;
        renderPaginatedCourses(section, filteredItems, section === 'schedule' ? currentSchedulePage : currentOfferingsPage);
        loading.classList.add('hidden');
    }, 300);

    // Pagination controls for schedule
    document.getElementById('schedulePrev').addEventListener('click', () => {
        // Checks if not on the first page
        if (currentSchedulePage > 0) {
            // Moves to previous page
            currentSchedulePage--;
            // Re-renders schedule
            renderPaginatedCourses('schedule', studentData.schedule, currentSchedulePage);
        }
    });
    document.getElementById('scheduleNext').addEventListener('click', () => {
        // Checks if more items are available
        if ((currentSchedulePage + 1) * itemsPerPage < studentData.schedule.length) {
            // Moves to next page
            currentSchedulePage++;
            // Re-renders schedule
            renderPaginatedCourses('schedule', studentData.schedule, currentSchedulePage);
        }
    });

    // Pagination controls for offerings
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

    // Renders academic calendar
    function renderCalendar() {
        // Gets the calendar days container
        const daysDiv = document.getElementById("calendarDays");
        // Gets the month display element
        const monthDisplay = document.getElementById("calendarMonth");
        // Clears existing content
        daysDiv.innerHTML = '';

        // Gets current year and month
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        // Calculates first day of the month (0 = Sunday)
        const firstDay = new Date(year, month, 1).getDay();
        // Calculates number of days in the month
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        // Updates month display
        monthDisplay.textContent = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

        // Adds empty slots for days before the first day
        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement("div");
            emptyDiv.className = "p-2";
            daysDiv.appendChild(emptyDiv);
        }

        // Adds days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            // Formats date as YYYY-MM-DD
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            // Filters events for the current date
            const events = studentData.calendar.filter(e => e.date === dateStr);
            // Creates a div for the day
            const dayDiv = document.createElement("div");
            // Applies styling based on events
            dayDiv.className = `p-2 h-24 border ${events.length > 0 ? 'bg-blue-100' : 'bg-white'} hover:bg-blue-200 transition relative group`;
            // Adds day number
            dayDiv.innerHTML = `<span class="text-sm font-semibold">${day}</span>`;
            // Adds event details if present
            if (events.length > 0) {
                // Creates tooltip for events
                const tooltip = document.createElement("div");
                tooltip.className = "absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 z-10 -top-10 left-1/2 transform -translate-x-1/2";
                tooltip.textContent = events.map(e => e.event).join(", ");
                dayDiv.appendChild(tooltip);
                // Displays first event in the cell
                dayDiv.innerHTML += `<p class="text-xs truncate">${events[0].event}</p>`;
            }
            // Appends day to container
            daysDiv.appendChild(dayDiv);
        }
        // Enhance with multi-month view or event modals
    }

    // Navigates to previous month in calendar
    window.prevMonth = function () {
        // Moves to previous month
        currentMonth.setMonth(currentMonth.getMonth() - 1);
        // Re-renders calendar
        renderCalendar();
    };

    // Navigates to next month in calendar
    window.nextMonth = function () {
        // Moves to next month
        currentMonth.setMonth(currentMonth.getMonth() + 1);
        // Re-renders calendar
        renderCalendar();
    };

    // Renders messages list
    function renderMessages() {
        // Gets the messages container
        const messagesList = document.getElementById("messages-list");
        // Clears existing content
        messagesList.innerHTML = '';
        // Iterates over messages to create entries
        studentData.messages.forEach(message => {
            // Creates a div for each message
            const div = document.createElement("div");
            // Applies border styling
            div.className = "border-b py-2";
            // Adds message details
            div.innerHTML = `
                <p class="font-semibold text-blue-900">${message.subject}</p>
                <p class="text-sm text-gray-700">From: ${message.sender} | ${message.date}</p>
                <p class="text-sm">${message.message}</p>
            `;
            // Appends message to container
            messagesList.appendChild(div);
        });
        // Add reply functionality or message categories
    }

    // Shows course details in a modal
    window.showCourseModal = function (title, details) {
        // Gets the course modal element
        const modal = document.getElementById("courseModal");
        // Sets modal title
        document.getElementById("modalTitle").textContent = title;
        // Sets modal details, replacing escaped newlines
        document.getElementById("modalDetails").textContent = details.replace(/\\n/g, '\n');
        // Shows the modal
        modal.classList.remove('hidden');
        // Add more modal features (e.g., enroll button)
    };

    // Closes modals
    window.closeModal = function () {
        // Hides course modal
        document.getElementById("courseModal").classList.add('hidden');
        // Hides confirmation modal
        document.getElementById("confirmModal").classList.add('hidden');
    };

    // Handles profile save confirmation
    window.confirmSaveProfile = function () {
        // Retrieves profile name input
        const name = document.getElementById("profile-name").value;
        // Retrieves profile email input
        const email = document.getElementById("profile-email").value;
        // Gets error message elements
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Shows/hides name error if empty
        nameError.classList.toggle('hidden', name.trim() !== '');
        // Shows/hides email error if invalid
        emailError.classList.toggle('hidden', emailRegex.test(email));

        // Exits if validation fails
        if (!name.trim() || !emailRegex.test(email)) return;

        // Gets confirmation modal
        const confirmModal = document.getElementById("confirmModal");
        // Sets modal title
        document.getElementById("confirmTitle").textContent = "Save Profile";
        // Sets modal message
        document.getElementById("confirmMessage").textContent = "Are you sure you want to save your profile changes?";
        // Sets confirm button action
        document.getElementById("confirmAction").onclick = () => {
            // Updates student data
            studentData.name = name;
            studentData.email = email;
            // Updates welcome message
            document.getElementById("studentName").textContent = name;
            // Updates profile inputs
            document.getElementById("profile-name").value = name;
            document.getElementById("profile-email").value = email;
            // Notifies user of success; replace with custom modal
            alert("Profile updated successfully!");
            // Closes modal
            closeModal();
        };
        // Sets cancel button action
        document.getElementById("confirmCancel").onclick = closeModal;
        // Shows confirmation modal
        confirmModal.classList.remove('hidden');
        // Persist changes to backend or localStorage
    };

    // Logs out the user
    window.logout = function () {
        // Hides dashboard
        document.getElementById("dashboard").classList.add("hidden");
        // Shows login section
        document.getElementById("loginSection").classList.remove("hidden");
        // Clears login inputs
        document.getElementById("studentId").value = "";
        document.getElementById("password").value = "";
        // Disables sign-in button
        document.querySelector("#loginSection button").disabled = true;
        // Resets notifications
        activeNotifications = [...studentData.notifications];
        // Clear session data or tokens in production
    };

    // Generates and downloads Statement of Account PDF
    window.printSOA = function () {
        // Accesses jsPDF library
        const { jsPDF } = window.jspdf;
        // Creates a new PDF document
        const doc = new jsPDF();
        // Adds title
        doc.text("Statement of Account", 10, 10);
        // Adds balance
        doc.text(`Total Balance: $${studentData.soa.balance.toFixed(2)}`, 10, 20);
        // Adds student name
        doc.text(`Student: ${studentData.name}`, 10, 30);
        // Adds student ID
        doc.text(`ID: ${studentData.id}`, 10, 40);
        // Saves PDF with filename
        doc.save("soa.pdf");
        // Add more details (e.g., payment history) or customize layout
    };

    // Placeholder for downloading schedule
    window.downloadSchedule = function () {
        // Displays placeholder message; implement actual PDF or CSV export
        alert("Downloading Schedule...");
    };

    // Toggles mobile sidebar visibility
    window.toggleMobileSidebar = function () {
        // Gets mobile sidebar element
        const mobileSidebar = document.getElementById("mobileSidebar");
        // Toggles hidden class
        mobileSidebar.classList.toggle("hidden");
    };

    // Adds event listener for mobile menu toggle
    document.getElementById("menuToggle").addEventListener("click", toggleMobileSidebar);
});