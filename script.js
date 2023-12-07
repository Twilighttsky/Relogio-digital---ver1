const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(() => {

    let dateToday = new Date();

    let hrDate = dateToday.getHours();
    horas.textContent = hrDate.toString().padStart(2,'0');

    let minDate = dateToday.getMinutes();
    minutos.textContent = minDate.toString().padStart(2,'0');

    let secDate = dateToday.getSeconds();
    segundos.textContent = secDate.toString().padStart(2,'0');
    
});