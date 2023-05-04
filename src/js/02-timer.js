import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const date = selectedDates[0];
    const today = new Date();
    const buttonStart = document.querySelector('[data-start]');
    if (date < today) {
      window.alert('Please choose a date in the future');
    } else {
      buttonStart.disabled = false;
    }
  },
};

const picker = document.querySelector('#datetime-picker');
const flatpicker = flatpickr(picker, options);
