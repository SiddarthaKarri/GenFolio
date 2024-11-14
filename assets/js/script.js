function generatePortfolio() {
    const name = document.getElementById("name").value;
    const jobTitle = document.getElementById("jobTitle").value;
    const bio = document.getElementById("bio").value;
    const skills = document.getElementById("skills").value.split(',');

    const projectTitle = document.getElementById("projectTitle").value;
    const projectDesc = document.getElementById("projectDesc").value;
    const githubLink = document.getElementById("githubLink").value;
    const liveDemoLink = document.getElementById("liveDemoLink").value;
    
    const linkedin = document.getElementById("linkedin").value;
    const githubProfile = document.getElementById("githubProfile").value;
    const twitter = document.getElementById("twitter").value;

    // Generate HTML for portfolio preview
    let portfolioContent = `
    <h1>${name}</h1>
    <h2>${jobTitle}</h2>
    <p>${bio}</p>
    <h3>Skills</h3>
    <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
    <h3>Projects</h3>
    <div>
        <h4>${projectTitle}</h4>
        <p>${projectDesc}</p>
        <a href="${githubLink}" target="_blank">GitHub</a> |
        <a href="${liveDemoLink}" target="_blank">Live Demo</a>
    </div>
    <h3>Social Links</h3>
    <a href="${linkedin}">LinkedIn</a> |
    <a href="${githubProfile}">GitHub</a> |
    <a href="${twitter}">Twitter</a>
    `;

    // Preview the portfolio
    localStorage.setItem('portfolioContent', portfolioContent);
    window.open('preview.html', '_blank');
}
function downloadPortfolio() {
    const element = document.createElement('a');
    const file = new Blob([localStorage.getItem('portfolioContent')], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = 'portfolio.html';
    document.body.appendChild(element);
    element.click();
}
