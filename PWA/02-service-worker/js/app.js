

//confirmar si podemo usar el SW
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('/sw.js')
}