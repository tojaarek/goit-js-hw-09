import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

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
        interval = setInterval(() => {
          const ms = date.getTime() - new Date().getTime();
          console.log(ms);
          function convertMs(ms) {
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const days = Math.floor(ms / day);
            const hours = Math.floor((ms % day) / hour);
            const minutes = Math.floor(((ms % day) % hour) / minute);
            const seconds = Math.floor((((ms % day) % hour) % minute) / second);

            return { days, hours, minutes, seconds };
          }
        }, 1000);
      });
    }
  },
};

const picker = document.querySelector('#datetime-picker');
const flatpicker = flatpickr(picker, options);
const daySpan = document.querySelector('[data-days]');
const hourSpan = document.querySelector('[data-hours]');
const minuteSpan = document.querySelector('[data-minutes]');
const secondSpan = document.querySelector('[data-seconds]');
const buttonStart = document.querySelector('[data-start]');
let interval;
