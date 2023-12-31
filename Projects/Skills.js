document.addEventListener("DOMContentLoaded", function () {
    const skills = [
        {
            title: "Web Development",
            date: "Jan 2020",
            description: "Proficient in HTML, CSS, JavaScript, and modern web frameworks."
        },
        {
            title: "Graphic Design",
            date: "Jun 2020",
            description: "Experienced in creating visually appealing graphics and interfaces."
        },
        {
            title: "Project Management",
            date: "Sep 2021",
            description: "Skilled in coordinating projects and leading teams to success."
        },
        {
            title: "Machine Learning",
            date: "Jan 2022",
            description: "Knowledgeable in building and deploying machine learning models."
        },
        {title: "Communication", date: "May 2022", description: "Excellent written and verbal communication skills."},
        {title: "Yolo Monkey", date: "Feb 2022", description: "Excellent written and verbal communication skills."}
        // ... add more skills as needed
    ];

    skills.sort((a, b) => new Date(a.date) - new Date(b.date));

    const skillsContainer = document.querySelector('.timeline');
    const groupedSkills = skills.reduce((acc, skill) => {
        const year = skill.date.split(' ')[1];
        acc[year] = acc[year] || [];
        acc[year].push(skill);
        return acc;
    }, {});

    Object.entries(groupedSkills).forEach(([year, skills]) => {
        const yearDiv = document.createElement('div');
        yearDiv.classList.add('year-group');

        skills.forEach(skill => {
            const skillElement = document.createElement('li');
            skillElement.innerHTML = `<h3>${skill.title} - ${skill.date}</h3><p>${skill.description}</p>`;
            yearDiv.appendChild(skillElement);
        });

        skillsContainer.appendChild(yearDiv);
    });
});


