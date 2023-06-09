// Verificar si el contenedor existe y si el acceso se realiza desde un dispositivo móvil
if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    || (window.innerWidth / window.innerHeight) < 0.7)) {
    // Redirigir a una página alternativa para dispositivos no móviles
    window.location.href = 'index-desktop.html';
}

// Actualizacion de imagenes
const slides = Array.from(document.querySelectorAll('.hero-slide'));
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function changeSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(changeSlide, 5000);



// Obtener los elementos HTML de los números del contador
var daysElement = document.getElementById('days');
var hoursElement = document.getElementById('hours');
var minutesElement = document.getElementById('minutes');
var secondsElement = document.getElementById('seconds');

// Función para actualizar el contador
function updateCountdown() {
    // Obtener la fecha actual y la fecha de la boda
    var currentDate = new Date();
    var weddingDate = new Date('2023-11-04T23:59:00');

    // Calcular la diferencia en días, horas, minutos y segundos
    var timeDifference = weddingDate.getTime() - currentDate.getTime();
    var totalSecondsDifference = Math.floor(timeDifference / 1000);

    var daysDifference = Math.floor(totalSecondsDifference / (60 * 60 * 24));
    var hoursDifference = Math.floor((totalSecondsDifference % (60 * 60 * 24)) / (60 * 60));
    var minutesDifference = Math.floor((totalSecondsDifference % (60 * 60)) / 60);
    var secondsDifference = totalSecondsDifference % 60;

    // Actualizar los números del contador con los valores calculados
    daysElement.textContent = formatNumber(daysDifference);
    hoursElement.textContent = formatNumber(hoursDifference);
    minutesElement.textContent = formatNumber(minutesDifference);
    secondsElement.textContent = formatNumber(secondsDifference);
}

// Función para agregar un cero al principio si el número es menor a 10
function formatNumber(number) {
    return number < 10 ? '0' + number : number;
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();