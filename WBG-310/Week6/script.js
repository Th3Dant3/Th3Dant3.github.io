$(document).ready(function() {
    // Place cursor in the Full Name field when the page loads
    $('#fullName').focus();

    // Hide shipping information by default
    $('#shippingDetails').hide();

    // Show/hide shipping information based on "Same as Billing" checkbox
    $('#sameAsBilling').click(function() {
        if ($(this).prop('checked')) {
            $('#shippingDetails').slideUp('fast');
        } else {
            $('#shippingDetails').slideDown('fast');
        }
    });

    // Additional JavaScript functionalities can be added here
});
