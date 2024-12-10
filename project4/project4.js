// PART 1: SETUP VARIABLES
const introText = document.getElementById('introText');
const editIntroButton = document.getElementById('editIntroButton');
const projectsContainer = document.getElementById('projectsContainer');
const skillsContainer = document.getElementById('skillsContainer');
const themeToggleButton = document.getElementById('themeToggleButton');
const contactForm = document.getElementById('contactForm');
const body = document.body;

// PART 2: IMPLEMENT DYNAMIC PROJECTS AND SKILLS
const projects = [
    { title: 'Project 1', description: 'Description of Project 1', link: '#' },
    { title: 'Project 2', description: 'Description of Project 2', link: '#' }
];

const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 75 }
];

function displayProjects() {
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectsContainer.appendChild(projectDiv);
    });
}

function displaySkills() {
    skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.innerHTML = `
            <p>${skill.name}</p>
            <div class="progress">
                <div class="progress-bar" style="width: ${skill.level}%"></div>
            </div>
        `;
        skillsContainer.appendChild(skillDiv);
    });
}

displayProjects();
displaySkills();

// PART 3: IMPLEMENT INTRO TEXT EDITING
editIntroButton.addEventListener('click', () => {
    const newText = prompt('Edit your intro:', introText.textContent);
    if (newText) {
        introText.textContent = newText;
        localStorage.setItem('introText', newText);
    }
});

if (localStorage.getItem('introText')) {
    introText.textContent = localStorage.getItem('introText');
}

// PART 4: IMPLEMENT CONTACT FORM FUNCTIONALITY
contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            alert('Failed to send message.');
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
});

// PART 5: IMPLEMENT THEME TOGGLE
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

(function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
})();
