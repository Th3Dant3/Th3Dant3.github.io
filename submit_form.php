<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // You can add more validation and processing here

    // Send email or save to a database, for example
    // For now, let's just print the data
    echo "Name: $name<br>";
    echo "Email: $email<br>";
    echo "Message: $message<br>";
} else {
    // Redirect to an error page or handle as needed
    echo "Error: Form submission method not allowed.";
}
?>
