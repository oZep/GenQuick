function updateCountdown() {
    fetch('/get_remaining_time')
        .then(response => response.json())
        .then(data => {
            const countdownElement = document.getElementById('countdown');
            countdownElement.innerText = formatTime(data.remaining_time);
        })
        .catch(error => console.error('Error fetching remaining time:', error));
}

function formatTime(remainingTime) {
    const days = Math.floor(remainingTime / (60 * 60 * 24));
    const hours = Math.floor((remainingTime % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
    const seconds = Math.floor(remainingTime % 60);

    return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

setInterval(updateCountdown, 1000); // Update every second
