var interval = 0

calculateInterval = () => {
    var startDate = new Date()
    var endDate = new Date("October 01, 2020 00:00:00")
    interval = endDate - startDate
}

calculateTime = () => {
    var days = Math.floor(interval / (1000*3600*24))
    var hours = Math.floor(interval % (1000*3600*24) / (1000 * 3600))
    var minutes = Math.floor(interval % (1000*3600*24) % (1000 * 3600) / (1000 * 60))
    var seconds = Math.floor(interval % (1000*3600*24) % (1000 * 3600) % (1000 * 60) / 1000)

    return {days, hours, minutes, seconds}
} 

refreshTimer = () => {
    interval -= 1000
    if(interval <= 0){
        interval = 0
    }

    displayTimer();
}

startTimer = () => {
    calculateInterval()
    displayTimer()
    
    setInterval(refreshTimer, 1000);
}

displayTimer = () => {
    const { days, hours, minutes, seconds } = calculateTime()

    document.getElementById('days').innerHTML = fillZeroes(days)
    document.getElementById('hours').innerHTML = fillZeroes(hours)
    document.getElementById('minutes').innerHTML = fillZeroes(minutes)
    document.getElementById('seconds').innerHTML = fillZeroes(seconds)
}


fillZeroes = (value) => {
    value += ""

    if(value.length==1)
        return "0" + value
    else
        return value
}

startTimer()