//clock function getting hours, munites and seconds.
function clock () {
    let date =  new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let period = "AM";
//hours conditions for AM and PM
    if (hours == 0) hours = 12
    if(hours > 12){
        hours = hours - 12;
        period = "PM";
    }
//Adding Zeros to numbers less than 10 to hours, munites and seconds
    hours = hours < 10 ? `0${hours}`: hours;
    minutes = minutes < 10 ? `0${minutes}`:minutes;
    seconds = seconds < 10 ? `0${seconds}`:seconds;
//Displaying time 
    let time = `${hours}:${minutes}:${seconds} ${period}`;
    console.log(time);   
    setTimeout(clock, 1000);
//displaying clock on the web using the DOM method
    document.getElementById("clock").innerText = time;
}
//calling function
clock();