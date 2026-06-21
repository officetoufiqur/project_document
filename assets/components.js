async function loadComponent(id, file) {
    const response = await fetch(file);
    const html = await response.text();

    document.getElementById(id).innerHTML = html;
}

async function initComponents() {
    await loadComponent("sidebar", "./components/sidebar.html");

    if (typeof initSidebar === "function") {
        initSidebar();
    }

    await loadComponent("header", "./components/header.html");
    await loadComponent("footer", "./components/footer.html");
}

initComponents();