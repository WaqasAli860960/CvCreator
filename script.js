document.getElementById('cvForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const skills = Array.from(document.getElementsByName('skills')).map(input => input.value);
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const language = document.getElementById('language').value;
    const profilePic = document.getElementById('profilePic').files[0];

    // Image element for profile picture
    const reader = new FileReader();
    reader.onload = function(e) {
        const profileImg = document.createElement('img');
        profileImg.src = e.target.result;

        // CV Preview
        const cvPreview = document.getElementById('cvPreview');
        cvPreview.innerHTML = `
            <div class="left-column">
                ${profileImg.outerHTML}
                <h2>${name}</h2>
                <p>${email} | ${phone} | ${address}</p>
                <div class="section-title"><h3>Skills</h3></div>
                <p>${skills.join(', ')}</p>
                <div class="section-title"><h3>Education</h3></div>
                <p>${education}</p>
                <div class="section-title"><h3>Languages</h3></div>
                <p>${language}</p>
            </div>
            <div class="right-column">
                <div class="section-title"><h3>About Me</h3></div>
                <p>${experience}</p>
            </div>
        `;

        // Show popup
        document.getElementById('cvPopup').style.display = 'flex';
    };
    reader.readAsDataURL(profilePic);
});

document.getElementById('addSkill').addEventListener('click', function() {
    const newSkillInput = document.createElement('input');
    newSkillInput.type = 'text';
    newSkillInput.name = 'skills';
    newSkillInput.placeholder = 'e.g., HTML, CSS, JavaScript';
    document.getElementById('skillsContainer').appendChild(newSkillInput);
});

function closePopup() {
    document.getElementById('cvPopup').style.display = 'none';
}
document.getElementById('addHeading').addEventListener('click', function() {
    const newHeadingInput = document.createElement('input');
    newHeadingInput.type = 'text';
    newHeadingInput.name = 'headings';
    newHeadingInput.placeholder = 'Enter a heading';
    
    const newExperienceInput = document.createElement('textarea');
    newExperienceInput.name = 'experienceDetails';
    newExperienceInput.placeholder = 'Describe your experience...';

    const experienceContainer = document.getElementById('experienceContainer');
    experienceContainer.appendChild(newHeadingInput);
    experienceContainer.appendChild(newExperienceInput);
});

// Update CV Preview generation to include headings
document.getElementById('cvForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Other form values
    const headings = Array.from(document.getElementsByName('headings')).map(input => input.value);
    const experienceDetails = Array.from(document.getElementsByName('experienceDetails')).map(textarea => textarea.value);

    const experienceContent = headings.map((heading, index) => `
        <div class="section-title"><h3>${heading}</h3></div>
        <p>${experienceDetails[index]}</p>
    `).join('');

    // CV Preview
    const cvPreview = document.getElementById('cvPreview');
    cvPreview.innerHTML = `
        <div class="left-column">
            ${profileImg.outerHTML}
            <h2>${name}</h2>
            <p>${email} | ${phone} | ${address}</p>
            <div class="section-title"><h3>Skills</h3></div>
            <p>${skills.join(', ')}</p>
            <div class="section-title"><h3>Education</h3></div>
            <p>${education}</p>
            <div class="section-title"><h3>Languages</h3></div>
            <p>${language}</p>
        </div>
        <div class="right-column">
            ${experienceContent}
        </div>
    `;
    document.getElementById('cvPopup').style.display = 'flex';
});
