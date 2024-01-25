<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);
    $message = test_input($_POST["message"]);

    // Validate input
    $errors = array();

    if (empty($name)) {
        $errors[] = "Name is required.";
    }

    if (empty($email)) {
        $errors[] = "Email is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email address.";
    }

    if (empty($message)) {
        $errors[] = "Message is required.";
    }

    if (!empty($errors)) {
        // Display errors
        foreach ($errors as $error) {
            echo "Error: $error<br>";
        }
    } else {
        // Process the data (you can modify this part)
        // For now, let's just print the data
        echo "Name: $name<br>";
        echo "Email: $email<br>";
        echo "Message: $message<br>";

        // You can add more processing, such as sending an email or saving to a database
        // Example: mail($email, 'Subject', $message);
        // Example: Save to database (uncomment and customize)
        /*
        $pdo = new PDO("mysql:host=localhost;dbname=your_database", "username", "password");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $stmt = $pdo->prepare("INSERT INTO your_table (name, email, message) VALUES (?, ?, ?)");
        $stmt->execute([$name, $email, $message]);
        */

        // Provide a success message
        echo "Form submitted successfully!";
    }
} else {
    // Redirect to an error page or handle as needed
    echo "Error: Form submission method not allowed.";
}

// Function to sanitize and validate input
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
