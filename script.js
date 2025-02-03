document.addEventListener("DOMContentLoaded", () => {
    checkLiveStatus();
    loadClips();
});

// Simulación de estado en vivo
function checkLiveStatus() {
    const statusElement = document.getElementById("live-status");
    setTimeout(() => {
        statusElement.innerHTML = "🔴 Streamer 1 está en vivo <a href='https://www.twitch.tv/streamer1' target='_blank'>Ver</a>";
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

// Mostrar clips o Discord
function showClips() {
    document.getElementById("clips").classList.remove("hidden");
    document.getElementById("discord").classList.add("hidden");
}

function showDiscord() {
    document.getElementById("discord").classList.remove("hidden");
    document.getElementById("clips").classList.add("hidden");
}

// Abrir streams
function showStreams() {
    window.open("https://www.twitch.tv/directory/following/live", "_blank");
}

// Ocultar/mostrar Spotify
function toggleSpotify() {
    const spotifyContainer = document.getElementById("spotify-container");
    spotifyContainer.style.transform = spotifyContainer.style.transform === "translateY(100px)" ? "translateY(0)" : "translateY(100px)";
}
