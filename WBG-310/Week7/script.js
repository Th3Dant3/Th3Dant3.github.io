$(document).ready(function() {
    // Set the first tab as active by default
    $('.tab-list li:first-child a').addClass('active');
    $('.tab-content:first-child').addClass('active');

    // Switch tabs
    $('.tab-list li a').click(function(e) {
        e.preventDefault();
        var tabId = $(this).attr('href');

        // Remove active class from all tabs and tab contents
        $('.tab-list li a').removeClass('active');
        $('.tab-content').removeClass('active');

        // Add active class to the clicked tab and corresponding tab content
        $(this).addClass('active');
        $(tabId).addClass('active');
    });
});
