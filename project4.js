// PART 1: DOM ELEMENT REFERENCES
const introText = document.getElementById('introText');
const editIntroButton = document.getElementById('editIntroButton');
const projectsContainer = document.getElementById('projectsContainer');
const skillsContainer = document.getElementById('skillsContainer');
const addSkillButton = document.getElementById('addSkillButton');
const newSkillInput = document.getElementById('newSkillInput');
const skillLevelInput = document.getElementById('skillLevelInput');
const themeToggleButton = document.getElementById('themeToggleButton');
const contactForm = document.getElementById('contactForm');
const body = document.body;

// PART 2: DATA FOR PROJECTS AND SKILLS
const projects = [
    { title: 'Project 1', description: 'Description of Project 1', link: '#' },
    { title: 'Project 2', description: 'Description of Project 2', link: '#' }
];

const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 75 }
];

// PART 3: HELPER FUNCTIONS
function createProjectElement(project) {
    const projectDiv = document.createElement('div');
    projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;
    return projectDiv;
}

function createSkillElement(skill) {
    const skillDiv = document.createElement('div');
    skillDiv.innerHTML = `
        <p>${skill.name}</p>
        <div class="progress">
            <div class="progress-bar" style="width: ${skill.level}%"></div>
        </div>
    `;
    return skillDiv;
}

function loadProjects() {
    projects.forEach(project => {
        projectsContainer.appendChild(createProjectElement(project));
    });
}

function loadSkills() {
    skills.forEach(skill => {
        skillsContainer.appendChild(createSkillElement(skill));
    });
}

function updateIntroText(newText) {
    introText.textContent = newText;
    localStorage.setItem('introText', newText);
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
}

// PART 4: EVENT LISTENERS
editIntroButton.addEventListener('click', () => {
    const newText = prompt('Edit your intro:', introText.textContent);
    if (newText) {
        updateIntroText(newText);
    }
});

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

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// PART 5: INITIALIZATION
(function initializePage() {
    if (localStorage.getItem('introText')) {
        introText.textContent = localStorage.getItem('introText');
    }
    applySavedTheme();
    loadProjects();
    loadSkills();
})();
