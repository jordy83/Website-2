// Demo storage helpers: projects, users, inschrijvingen

function getProjects() {
    return JSON.parse(localStorage.getItem("projects") || "[]");
}

function createProject(name, maxInsch, voorwaarden, coordinator) {
    const projects = getProjects();
    projects.push({ name, maxInsch, voorwaarden, coordinator });
    localStorage.setItem("projects", JSON.stringify(projects));
}

function getUsers(role) {
    // Demo: return users who logged in als een rol
    let users = JSON.parse(localStorage.getItem("usernames") || "{}");
    return Object.entries(users)
        .filter(([name, r]) => r === role)
        .map(([name]) => name);
}

// On every login, save username/role in usernames map
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('username') && localStorage.getItem('userRole')) {
        let users = JSON.parse(localStorage.getItem("usernames") || "{}");
        users[localStorage.getItem('username')] = localStorage.getItem('userRole');
        localStorage.setItem("usernames", JSON.stringify(users));
    }
});

// Inschrijvingen
function getInschrijvingen() {
    return JSON.parse(localStorage.getItem("inschrijvingen") || "[]");
}

function addInschrijving(leerling, project) {
    const inschrijvingen = getInschrijvingen();
    // Controle: max inschrijvingen
    const projects = getProjects();
    const p = projects.find(pr => pr.name === project);
    const count = inschrijvingen.filter(i => i.leerling === leerling && i.project === project).length;
    if (count >= p.maxInsch) {
        alert(`Je mag je maximaal ${p.maxInsch} keer inschrijven voor ${project}`);
        return;
    }
    inschrijvingen.push({ leerling, project });
    localStorage.setItem("inschrijvingen", JSON.stringify(inschrijvingen));
}
