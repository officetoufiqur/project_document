async function loadComponent(id, file) {
    const response = await fetch(file);
    const html = await response.text();

    document.getElementById(id).innerHTML = html;
}

async function initComponents() {
    await loadComponent("sidebar", "./components/sidebar.html");

    initMobileSidebar();

    if (typeof initSidebar === "function") {
        initSidebar();
    }

    await loadComponent("employee", "./components/employee.html");
    await loadComponent("teams", "./components/teams.html");
    await loadComponent("onboarding", "./components/onboarding.html");
    await loadComponent("attendance", "./components/attendance.html");
    await loadComponent("payrolls", "./components/payrolls.html");
    await loadComponent("financial", "./components/financial.html");
    await loadComponent("roles", "./components/roles.html");
    await loadComponent("ratting", "./components/ratting.html");
    await loadComponent("notifications", "./components/notifications.html");
    await loadComponent("settings", "./components/settings.html");
    await loadComponent("faqs", "./components/faqs.html");
    await loadComponent("dashboard", "./components/dashboard.html");
}

initComponents();