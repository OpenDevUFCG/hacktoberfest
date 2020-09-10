
const eventDate = new Date("October 7, 2020 00:00:00").getTime();

const timer = setInterval(function() {
    const currentDate = new Date().getTime();
    const distance = eventDate - currentDate;

    const { days, hours, minutes, seconds } = convertDistance(distance);

    document.getElementById("days").textContent = days
    document.getElementById("hours").textContent = hours
    document.getElementById("minutes").textContent = minutes
    document.getElementById("seconds").textContent = seconds

    if (distance < 0) {
        clearInterval(timerFormat);
        document.getElementById("countdown-timer").textContent = "É hoje!"
    }

}, 1000);

function convertDistance(distance) {
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const timeNumbers = { days, hours, minutes, seconds };
    console.log(timeNumbers)

    for (key in timeNumbers) {
        const timeNumber = timeNumbers[key];
        if (timeNumber < 10) {
            timeNumbers[key] = `0${timeNumber}`
        }
        console.log()
    }
        

    return timeNumbers;
}
