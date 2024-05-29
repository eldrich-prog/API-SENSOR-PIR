document.getElementById('update-button').addEventListener('click', fetchTime);

function fetchTime() {
    fetch('http://192.168.50.97:4000/api/motion/ultimate')
        .then(response => response.json())
        .then(data => {
            const dateTime = new Date(data.createdAt);
            const formattedTime = dateTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            document.getElementById('time-box').textContent = formattedTime;
        })
        .catch(error => {
            console.error('Error fetching time:', error);
            document.getElementById('time-box').textContent = 'Error al cargar la hora';
        });
}

// Fetch time on page load
fetchTime();
