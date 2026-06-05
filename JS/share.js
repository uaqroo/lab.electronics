document.addEventListener('DOMContentLoaded', async function () {
    await renderSidebar();    
})

async function renderSidebar() {
    console.log("im workin");
    const isRoot = !window.location.pathname.includes('/HTML/');
    const fetchPath = isRoot ? "HTML/sidebar.html" : "sidebar.html";

    fetch(fetchPath)
        .then(res => res.text())
        .then(data => {
            if (isRoot) {
                data = data.replaceAll('../assets/', 'assets/');
                data = data.replace('href="books.html"', 'href="HTML/books.html"');
                data = data.replace('href="videos.html"', 'href="HTML/videos.html"');
                data = data.replace('href="manuals.html"', 'href="HTML/manuals.html"');
            }
            document.getElementById("sidebar-placeholder").innerHTML = data;
        });
}