document.addEventListener('DOMContentLoaded', function () {
    const menuDiv = document.getElementById('menu');
    if (!menuDiv) return;

    const role = localStorage.getItem('userRole');
    let menuItems = [
        { name: "Home", url: "index.html" },
        { name: "Login", url: "login.html" }
    ];

    if (role === "admin") {
        menuItems = [
            { name: "Home", url: "index.html" },
            { name: "Admin Dashboard", url: "admin-dashboard.html" },
            { name: "Projecten", url: "projecten.html" },
            { name: "Logout", url: "login.html", onclick: "localStorage.clear()" }
        ];
    } else if (role === "coordinator") {
        menuItems = [
            { name: "Home", url: "index.html" },
            { name: "Coördinator Dashboard", url: "coordinator-dashboard.html" },
            { name: "Projecten", url: "projecten.html" },
            { name: "Logout", url: "login.html", onclick: "localStorage.clear()" }
        ];
    } else if (role === "leerling") {
        menuItems = [
            { name: "Home", url: "index.html" },
            { name: "Leerling Dashboard", url: "leerling-dashboard.html" },
            { name: "Projecten", url: "projecten.html" },
            { name: "Logout", url: "login.html", onclick: "localStorage.clear()" }
        ];
    } else if (role === "medewerker") {
        menuItems = [
            { name: "Home", url: "index.html" },
            { name: "Medewerker Dashboard", url: "medewerker-dashboard.html" },
            { name: "Projecten", url: "projecten.html" },
            { name: "Logout", url: "login.html", onclick: "localStorage.clear()" }
        ];
    }

    menuDiv.innerHTML = menuItems.map(item =>
        `<a href="${item.url}"${item.onclick ? ' onclick="' + item.onclick + '"' : ''}>${item.name}</a>`
    ).join(" | ");
});