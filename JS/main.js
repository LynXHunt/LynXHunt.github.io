function startTimer(display) {
    setInterval(function () {
        let now = new Date();
        let j = new Date("2021-08-05 12:00:00");
        let diff = (Math.abs(j - now) / 1000) + 1;
        let days = parseInt(diff / 86400, 10);
        let rdays = parseInt(diff % 86400, 10);
        let hours = parseInt(rdays / 3600, 10);
        let rhours = parseInt(rdays % 3600, 10);
        let minutes = parseInt(rhours / 60, 10);
        let seconds = parseInt(rhours % 60, 10);

        display.textContent = days + " jours " + hours + " heures " + minutes + " min " + seconds + " sec ";
    }, 100);
}

window.onload = function () {
    let display = document.querySelector('#time');
    startTimer(display);    
};