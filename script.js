window.onload = () => {
    document.querySelector("#calculate").onclick = calculate;
    document.querySelector("#reset").onclick = reset;

    // Get the modal
    const modal = document.getElementById("countdownModal");
    const closeModal = document.getElementById("closeModal");

    // When the user clicks on <span> (x), close the modal
    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

function calculate(){
    const date = document.querySelector("#date").value;
    const times = document.querySelector("#times").value;
    const stop = document.querySelector("#stop");

    const endTime = new Date(date + " " + times);
    const interval = setInterval(() => calculateTime(endTime), 1000);

    // Show the modal
    const modal = document.getElementById("countdownModal");
    modal.style.display = "block";

    stop.addEventListener('click', () => {
        clearInterval(interval);
    });
}

function calculateTime(endTime){
    const currentTime = new Date();
    const day = document.querySelector('#countdown-day');
    const hours = document.querySelector('#countdown-hours');
    const min = document.querySelector('#countdown-min');
    const sec = document.querySelector('#countdown-sec');
    if(endTime > currentTime){
        const timeLeft = (endTime - currentTime) / 1000;
        day.innerText = Math.floor(timeLeft / (24 * 60 * 60));
        hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
        min.innerText = Math.floor((timeLeft / 60) % 60);
        sec.innerText = Math.floor(timeLeft % 60);
    } else {
        clearInterval(interval); // Clear interval if time is up
        day.innerText = 0;
        hours.innerText = 0;
        min.innerText = 0;
        sec.innerText = 0;
    }
}

function reset(){
    document.querySelector('#countdown-day').innerText = 0;
    document.querySelector('#countdown-hours').innerText = 0;
    document.querySelector('#countdown-min').innerText = 0;
    document.querySelector('#countdown-sec').innerText = 0;
    const modal = document.getElementById("countdownModal");
    modal.style.display = "none"; // Hide modal when reset
}
