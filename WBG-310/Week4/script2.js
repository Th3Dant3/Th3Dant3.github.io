$(document).ready(function() {
    // Initialize the opacity to 1.0 when the page loads
    $('#dashboard').css('opacity', '1.0');

    $('#dashboard').hover(
        function() {
            // Mouse Enter
            $(this).stop().animate(
                {
                    left: '0',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)'
                },
                500,
                'easeInSine'
            ); // end animate

            // Change the opacity of the images to 0.5
            $('#dashboard img').stop().animate({
                opacity: 0.5
            }, 500);
        },
        function() {
            // Mouse Leave
            $(this).stop().animate(
                {
                    left: '-92px',
                    backgroundColor: 'rgb(255, 211, 224)'
                },
                1500,
                'easeOutBounce'
            ); // end animate

            // Change the opacity of the images back to 1.0
            $('#dashboard img').stop().animate({
                opacity: 1.0
            }, 1500);
        }
    ); // end hover

    // Change the opacity of the images to 1.0 when moused over
    $('#dashboard img').hover(
        function() {
            $(this).stop().animate({
                opacity: 1.0
            }, 300);
        },
        function() {
            // Optional: You can add a function here if needed
        }
    ); // end img hover
});
