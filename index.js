const today = new Date();
const hour = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

document.getElementById("timetext").innerHTML = `${hour}:${String(minutes).padStart(2, '0')}`;

document.addEventListener('dragstart', (event) => {
    event.preventDefault();
});

setInterval(() => {
    const divElement = document.querySelector('div');
    const today = new Date();

    const hour = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    if (divElement.matches(':hover')){
        document.getElementById("timetext").innerHTML = `${hour}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        divElement.style.width = '450px';
    }
    
    else {
        document.getElementById("timetext").innerHTML = `${hour}:${String(minutes).padStart(2, '0')}`;
        divElement.style.width = '';
    }

}, 150);