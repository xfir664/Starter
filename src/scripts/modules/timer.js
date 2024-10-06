const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

export default function initTimer() {

  if (hoursElement !== null) {
    let timeLeft = 30 * 60;

    const intervalId = setInterval(() => {
      const hours = Math.floor(timeLeft / 3600);
      const minutes = Math.floor((timeLeft % 3600) / 60);
      const seconds = timeLeft % 60;

      const minutesTime = `${String(minutes).padStart(2, '0')}`;
      const secondsTime = `${String(seconds).padStart(2, '0')}`;
      const hoursTime = `${String(hours).padStart(2, '0')}`;

      minutesElement.innerText = minutesTime;
      secondsElement.innerText = secondsTime;
      hoursElement.innerText = hoursTime;

      if (timeLeft <= 0) {
        clearInterval(intervalId);
        console.log("Время истекло!");
      } else {
        timeLeft--;
      }
    }, 1000);
  }
  return;
}