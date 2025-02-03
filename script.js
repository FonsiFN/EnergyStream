document.addEventListener("DOMContentLoaded", () => {
    checkLiveStatus();
    loadClips();
});

// Simulación de estado en vivo
function checkLiveStatus() {
    const streamInfo = document.getElementById("stream-info");
    setTimeout(() => {
        streamInfo.innerHTML = `
            🔴 <b>FonsiFN_ está en vivo</b> → <a href='https://www.twitch.tv/FonsiFN_' target='_blank'>Ver ahora</a><br>
            🟡 <b>Streamer2 está en vivo</b> → <a href='https://www.twitch.tv/Streamer2' target='_blank'>Ver ahora</a>
        `;
    }, 2000);
}

// Simulación de clips
function loadClips() {
    const clipContainer = document.getElementById("clip-container");
    setTimeout(() => {
        clipContainer.innerHTML = `
            <iframe src="https://clips.twitch.tv/embed?clip=ClipEjemplo1&parent=tuweb.com" width="320" height="180" allowfullscreen></iframe>
            <iframe src="https://clips.twitch.tv/embed?clip=ClipEjemplo2&parent=tuweb.com" width="320" height="180" allowfullscreen></iframe>
        `;
    }, 2000);
}

// Función para mostrar secciones
function showSection(sectionID) {
    document.querySelectorAll(".card").forEach(section => {
        section.classList.add("hidden");
    });
    document.getElementById(sectionID).classList.remove("hidden");
}

