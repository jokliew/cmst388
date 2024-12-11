document.addEventListener('DOMContentLoaded', () => {
    /* PART 1: SETUP VARIABLES
    --------------------------------------------------
    */
    
    // TODO: Get the elements from the DOM and store them in variables. Include the following elements:
    // - introduction
    // - editIntroButton
    // - projectList
    // - skillList
    // - addSkillButton
    // - newSkillInput
    // - skillLevelInput
    // - contactForm
    // - themeToggleButton
    // - body
    const introText = document.getElementById('introduction');
    const editIntroButton = document.getElementById('edit-intro');
    // const projectsContainer = document.getElementById('projectsContainer');
    const projectList = document.getElementById('project-list');
    // const skillsContainer = document.getElementById('skillsContainer');
    const skillList = document.getElementById('skill-list');
    const addSkillButton = document.getElementById('add-skill');
    const newSkillInput = document.getElementById('new-skill');
    const skillLevelInput = document.getElementById('skill-level');
    const themeToggleButton = document.getElementById('theme-toggle');
    const contactForm = document.getElementById('contact-form');
    const body = document.body;

    /* PART 2: IMPLEMENT DYNAMIC PROJECTS AND SKILLS
    --------------------------------------------------
    */

    const projects = [
        // TODO: Add projects here by defining objects with title, description, and link properties
        // Example: { title: 'Project 1', description: 'Description of project 1', link: '#'}

        { title: 'PROJECT 1: JAVASCRIPT SELECTORS', description: 'An exercise that applies knowledge of basic JavaScript selectors by manipulating HTML via the use of classes.', link: 'https://cmst388-jocampo9.azurewebsites.net/project1/' },
        { title: 'PROJECT 2: REGISTRATION FORM', description: 'Registration form that includes form fields that validate contact information, email confirmation, and alerts for responsive feedback.', link: 'https://cmst388-jocampo9.azurewebsites.net/project2/' },
        { title: 'PROJECT 3: TICKET PURCHASING', description: 'Event registration system that includes a session countdown timer, ticket validation, contact information form, and responsive feedback.', link: 'https://cmst388-jocampo9.azurewebsites.net/project3/event_registration.html' }
    
    ];

    const skills = [
        // TODO: Add skills here by defining objects with name and level properties
        { name: 'HTML', level: 20 },
        { name: 'CSS', level: 20 },
        { name: 'JavaScript', level: 15 }
    ];

    function createProjectElement(project) {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        return projectCard;
    }

    function displayProjects() {
        projectList.innerHTML = '';
        projects.forEach(project => {
            // TODO: Create a new div element assigned to a new variable called projectCard and assign a className of 'project-card'. Set innerHTML to display the project title, description, and link
            // Example: projectCard.innerHTML = `<h3>${project.title}</h3> ...`
            const projectCard = createProjectElement(project); 
            projectList.appendChild(projectCard);
        });
    }
    

    function displaySkills() {
        skillList.innerHTML = '';
        skills.forEach(skill => {
            // TODO: Create a new li element assigned to a new variable called skillItem. Set innerHTML to display the skill name and level
            const skillItem = document.createElement('li'); // Create a new list item
            skillItem.innerHTML = `
                <span>${skill.name}</span>
                <span>Level: ${skill.level}%</span>
            `; 
            skillList.appendChild(skillItem);
        });
    }

    /* PART 3: IMPLEMENT INTRO TEXT EDITING
    --------------------------------------------------
    */
    function updateIntroText(newText) {
        introText.textContent = newText;
        localStorage.setItem('introText', newText);
    }

    editIntroButton.addEventListener('click', () => {
        // TODO: Prompt the user to enter a new introduction and update the introduction element with the new text
        console.log('Edit button clicked');
        const newText = prompt('Edit your intro:', introText.textContent);
    if (newText) {
        updateIntroText(newText);
        console.log('Introduction updated');
    }
    });

    /* PART 4: IMPLEMENT SKILLS DISPLAY AND CONTACT FORM FUNCTIONALITY
    --------------------------------------------------
    */

    addSkillButton.addEventListener('click', () => {
        const newSkill = newSkillInput.value.trim();
        const skillLevel = parseInt(skillLevelInput.value, 10);
        if (newSkill && skillLevel >= 0 && skillLevel <= 100) {
            // TODO: 
            //   1. Add the new skill to the skills array and display the updated list of skills. 
            //   2. Clear the input fields after adding the skill
            skills.push({ name: newSkill, level: skillLevel });
            displaySkills();
            newSkillInput.value = '';
            skillLevelInput.value = '';

        } else {
            // TODO: Display an alert if the skill name is empty or the skill level is not between 0 and 100
            alert('Please enter a valid skill name and a level between 0 and 100.');
        }
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // TODO: 
        //   1. Get the values from the form fields name, email, and message and store them in variables.
        //   2. Display an alert if any of the fields are empty. Otherwise, display a success message
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (!name || !email || !message) {
            alert('Please fill out all fields before submitting.');
        } else {
            alert('Thank you for reaching out! Your message has been sent.');
            contactForm.reset();
        }

    });

    /* PART 5: IMPLEMENT THEME TOGGLE
    --------------------------------------------------
    */

    themeToggleButton.addEventListener('click', () => {
        // TODO: Toggle the dark-mode class on the body and save the theme preference to local storage
        body.classList.toggle('dark-mode');
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Do not edit any code below this line
    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        }
    }

    applySavedTheme();
    displayProjects();
    displaySkills();
});
