document.addEventListener("DOMContentLoaded", function() {
    includeHTML();
    updateTime();
    setInterval(updateTime, 60000); // Update time every minute
});

function includeHTML() {
    var elements = document.querySelectorAll("[id]");
    elements.forEach(function(el) {
        var id = el.getAttribute("id");
        fetch(`components/${id}.html`)
            .then(response => response.text())
            .then(data => {
                el.innerHTML = data;
                if (id === "header") {
                    loadHeaderStyles();
                }
            })
            .catch(error => {
                console.error('Error loading component:', error);
            });
    });
}

function updateTime() {
    var now = new Date();
    var options = { timeZone: 'Asia/Ho_Chi_Minh', hour: '2-digit', minute: '2-digit' };
    var timeString = now.toLocaleTimeString([], options);
    document.getElementById('ict-time').textContent = timeString + " ICT";
}

function loadHeaderStyles() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/header.css';
    document.head.appendChild(link);
}
