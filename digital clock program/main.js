// DIGITAL CLOCK PROGRAM
// 24 hour clock

// function updateClock(){

//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2,0);
//     const minutes = now.getMinutes().toString().padStart(2,0);
//     const seconds = now.getSeconds().toString().padStart(2,0);
//     const timeString = `${hours}:${minutes}:${seconds}`;
//     document.getElementById("clock").textContent = timeString;
// }

// updateClock();
// setInterval(updateClock,1000);

// 12 hour clock
function updateClock(){

    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >=12 ? "PM" : "AM";
    hours = hours.toString().padStart(2,0)
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock,1000);