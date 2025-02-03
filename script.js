const twitchClientID = "TU_CLIENT_ID"; // Reemplázalo con tu Client ID de Twitch
const streamerNames = ["streamer1", "streamer2"]; // Reemplázalo con los nombres de los streamers

document.addEventListener("DOMContentLoaded", () => {
    checkLiveStatus();
    loadClips();
});

// Función para verificar si los streamers están en vivo
async function checkLiveStatus() {
    const statusElement = document.getElementById("live-status");
    let liveStreams = [];

    for (let streamer of streamerNames) {
        const url = `https://api.twitch.tv/helix/streams?user_login=${streamer}`;
        const response = await fetch(url, {
            headers: {
                "Client-ID": twitchClientID,
                "Authorization": "Bearer TU_ACCESS_TOKEN" // Reemplázalo con un token de Twitch
            }
        });
        const data = await response.json();
        
        if (data.data.length > 0) {
            liveStreams.push(`${streamer} está en vivo: <a href="https://www.twitch.tv/${streamer}" target="_blank">Ver</a>`);
        }
    }

    statusElement.innerHTML = liveStreams.length > 0 ? liveStreams.join("<br>") : "Ningún streamer está en vivo.";
}

// Función para cargar los clips de Twitch
async function loadClips() {
    const clipContainer = document.getElementById("clip-container");
    clipContainer.innerHTML = "Cargando clips...";

    let clipsHTML = "";
    for (let streamer of streamerNames) {
        const url = `https://api.twitch.tv/helix/clips?broadcaster_id=ID_DEL_STREAMER_${streamer}`;
        const response = await fetch(url, {
            headers: {
                "Client-ID": twitchClientID,
                "Authorization": "Bearer TU_ACCESS_TOKEN"
            }
        });
        const data = await response.json();

        data.data.forEach(clip => {
            clipsHTML += `<div class="clip"><iframe src="${clip.embed_url}" width="320" height="180" allowfullscreen></iframe></div>`;
        });
    }

    clipContainer.innerHTML = clipsHTML || "No hay clips disponibles.";
}

// Funciones para mostrar/ocultar contenido interactivo
function showClips() {
    document.getElementById("clips").style.display = "block";
    document.getElementById("discord").style.display = "none";
}

function showDiscord() {
    document.getElementById("discord").style.display = "block";
    document.getElementById("clips").style.display = "none";
}

function showStreams() {
    window.open("https://www.twitch.tv/directory/following/live", "_blank");
}

// Función para ocultar/mostrar Spotify
function toggleSpotify() {
    const spotifyContainer = document.getElementById("spotify-container");
    spotifyContainer.style.transform = spotifyContainer.style.transform === "translateY(100px)" ? "translateY(0)" : "translateY(100px)";
}
