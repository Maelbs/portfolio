<?php
// /public/contact.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "error" => "Invalid request method."]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$name = isset($data["name"]) ? trim($data["name"]) : "";
$email = isset($data["email"]) ? trim($data["email"]) : "";
$message = isset($data["message"]) ? trim($data["message"]) : "";

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(["success" => false, "error" => "Veuillez remplir tous les champs."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "error" => "Adresse email invalide."]);
    exit;
}

$to = "maelbouviersobrino@hotmail.com";
$subject = "Nouveau contact depuis le Portfolio - " . $name;

$body = "Nom: $name\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message\n";

$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => "Erreur lors de l'envoi de l'email."]);
}
?>
