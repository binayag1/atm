<?php
// Allow CORS (optional, adjust for production)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Read the JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Validate the input
$required_fields = ['name', 'email', 'pickup', 'dropoff'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        echo json_encode(['success' => false, 'message' => "Missing field: $field"]);
        exit;
    }
}

// Sanitize inputs
$name = htmlspecialchars($data['name']);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($data['phone']);
$pickup = htmlspecialchars($data['pickup']);
$dropoff = htmlspecialchars($data['dropoff']);
$furniture_count = (int)$data['furniture_count'];
$cost = (float)$data['cost'];

// Email recipient
$to = "info@anytimemovers.com.au"; // Replace with your actual email address
$subject = "New Booking Request from Anytime Movers";
$headers = "From: noreply@anytimemovers.com.au\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

// Email body
$message = <<<EOD
You have received a new booking request:

Name: $name
Email: $email
Phone: $phone
Pickup Address: $pickup
Dropoff Address: $dropoff
Furniture Count: $furniture_count
Estimated Quote: $$cost

Please follow up with the customer as soon as possible.
EOD;

// Send the email
$success = mail($to, $subject, $message, $headers);

echo json_encode(['success' => $success]);
