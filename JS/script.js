
  function updateClock(){

    const now = new Date();
    const hours = now. getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    document.getElementById("hours").textContent = String(hours).padStart(2,"0");

    document.getElementById("minutes").textContent = String(minutes).padStart(2,"0");

    document.getElementById("seconds").textContent = String(seconds).padStart(2,"0");

  }
setInterval(updateClock,1000);
updateClock();
