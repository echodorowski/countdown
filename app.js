const countdown = () => {
    const countDate = new Date('May 10, 2100 00:00:00');
    const now = new Date();    

    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;

    const textYear = Math.floor(countDate.getFullYear() - now.getFullYear());
    const textMonth = Math.floor(countDate.getMonth() - now.getMonth());
    const textWeek = Math.floor(gap / week);
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.year').innerHTML = textYear;
    document.querySelector('.month').innerHTML = textMonth;
    document.querySelector('.week').innerHTML = textWeek;    
    document.querySelector('.day').innerHTML = textDay;
    document.querySelector('.hour').innerHTML = textHour;
    document.querySelector('.minute').innerHTML = textMinute;
    document.querySelector('.second').innerHTML = textSecond;
}

setInterval(countdown, 1000);