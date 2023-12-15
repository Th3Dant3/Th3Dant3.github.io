document.addEventListener('DOMContentLoaded', function () {
    setInterval(() => {
        const dateTimeElements = document.querySelectorAll('.date-time');
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        const formattedDateTime = now.toLocaleDateString('en-US', options);

        dateTimeElements.forEach(element => {
            element.textContent = formattedDateTime;
        });
    }, 1000);
});

// Add other JavaScript functionalities as needed
