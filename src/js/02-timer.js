import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let interval = null;
const daySpan = document.querySelector('[data-days]');
const hourSpan = document.querySelector('[data-hours]');
const minuteSpan = document.querySelector('[data-minutes]');
const secondSpan = document.querySelector('[data-seconds]');
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const buttonReset = document.querySelector('[data-reset]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const date = selectedDates[0];
    const today = new Date();
    if (date < today) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      buttonStart.disabled = false;
      buttonStart.addEventListener('click', () => {
        buttonStart.disabled = true;
        buttonStop.disabled = false;
        interval = setInterval(() => {
          let ms = date.getTime() - new Date().getTime();
          if (ms < 0) {
            clearInterval(interval);
            return;
          }
          console.log(ms);
          const second = 1000;
          const minute = second * 60;
          const hour = minute * 60;
          const day = hour * 24;

          const days = Math.floor(ms / day);
          const hours = Math.floor((ms % day) / hour);
          const minutes = Math.floor(((ms % day) % hour) / minute);
          const seconds = Math.floor((((ms % day) % hour) % minute) / second);

          daySpan.innerHTML = days.toString().padStart(2, '0');
          hourSpan.innerHTML = hours.toString().padStart(2, '0');
          minuteSpan.innerHTML = minutes.toString().padStart(2, '0');
          secondSpan.innerHTML = seconds.toString().padStart(2, '0');
        }, 1000);
      });
    }
  },
};

const picker = document.querySelector('#datetime-picker');
const flatpicker = flatpickr(picker, options);

buttonStop.addEventListener('click', () => {
  clearInterval(interval);
  buttonReset.disabled = false;
  buttonStop.disabled = true;
});

buttonReset.addEventListener('click', () => {
  buttonReset.disabled = true;
  daySpan.innerHTML = '00';
  hourSpan.innerHTML = '00';
  minuteSpan.innerHTML = '00';
  secondSpan.innerHTML = '00';
});
