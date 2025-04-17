<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");  // For CORS
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$response = ['success' => false, 'message' => ''];

try {
    $mail = new PHPMailer(true);
    
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'iotlabs0@gmail.com';
    $mail->Password = 'rdvt xkoa okul dhau'; // Regenerate after testing!
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    // Email Content
    $mail->setFrom($_POST['email'], $_POST['name']);
    $mail->addAddress('iotlabs0@gmail.com');
    $mail->Subject = $_POST['subject'];
    $mail->Body = "
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> {$_POST['name']}</p>
        <p><strong>Email:</strong> {$_POST['email']}</p>
        <p><strong>Message:</strong></p>
        <p>{$_POST['message']}</p>
    ";

    $mail->send();
    $response = ['success' => true, 'message' => 'Message sent successfully!'];
} catch (Exception $e) {
    $response['message'] = "Error: {$mail->ErrorInfo}";
}

echo json_encode($response);
?>