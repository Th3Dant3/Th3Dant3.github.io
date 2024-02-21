$(document).ready(function () {
    // Home Page Interactive Elements
    $('.interactive-element').hover(function () {
        $(this).fadeOut(200).fadeIn(200);
    });

    $('#element2').click(function () {
        $(this).slideUp(500).slideDown(500);
    });

    $('#element3').dblclick(function () {
        $(this).toggleClass('highlight');
    });

    // Contact Page Form Submission
    $('#submitForm').click(function () {
        submitForm();
    });

    function submitForm() {
        var name = $('#name').val();
        var email = $('#email').val();
        var platform = $('input[name="platform"]:checked');

        // Validate if all fields are filled
        if (name && email && platform.length > 0) {
            var platformValue = platform.val();

            // Display success message
            $('#statusMessage').html(`
                <p>Form submitted successfully!</p>
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Platform: ${platformValue}</p>
            `);

            // Add animations for the form
            $('#contactForm').css('transform', 'scale(0.9)').delay(500).css('transform', 'scale(1)');
        } else {
            // Display error message
            $('#statusMessage').html('<p>Please fill in all fields.</p>');
        }
    }

    // Gallery Page Elements
    $('.gallery-container').click(function () {
        // Toggle slide effect
        $(this).find('.gallery-image').slideToggle(500);
        
        // Reset other elements to slide down
        $('.gallery-container').not(this).find('.gallery-image').slideDown(500);
    });

    // Additional Event Handling for Gallery Elements
    $('.gallery-container').hover(
        function () {
            $(this).find('.gallery-overlay').stop().fadeIn(300, 'easeInOutSine');
        },
        function () {
            $(this).find('.gallery-overlay').stop().fadeOut(300, 'easeInOutSine');
        }
    );
});
