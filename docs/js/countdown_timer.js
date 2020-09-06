
const eventDate = new Date("October 7, 2020 00:00:00").getTime();

const timer = setInterval(function() {
    const currentDate = new Date().getTime();

    const distance = eventDate - currentDate;

    const [days, hours, minutes, seconds] = convertDistance(distance);

    document.getElementById("countdown-timer").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown-timer").textContent = "e vaamos de"
    }

}, 1000);

function convertDistance(distance) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
}