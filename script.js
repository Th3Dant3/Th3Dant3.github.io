document.addEventListener('DOMContentLoaded', function () {
    const dateTimeElement = document.getElementById('date-time');

    setInterval(() => {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        const formattedDateTime = now.toLocaleDateString('en-US', options);

        dateTimeElement.textContent = formattedDateTime;
    }, 1000);
});
