<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

$name    = trim(filter_input(INPUT_POST, 'name', FILTER_UNSAFE_RAW) ?? '');
$email   = trim(filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL) ?? '');
$message = trim(filter_input(INPUT_POST, 'message', FILTER_UNSAFE_RAW) ?? '');

$name    = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Todos los campos son requeridos']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'El correo electrónico no es válido']);
    exit;
}

$to = 'edisbel.ramirez95@gmail.com';
$subject = 'Nuevo mensaje desde tu portafolio';

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "From: Portafolio <no-reply@edisbelramirezdev.github.io>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$email_content  = "Has recibido un nuevo mensaje desde tu portafolio.\n\n";
$email_content .= "Nombre: {$name}\n";
$email_content .= "Email: {$email}\n\n";
$email_content .= "Mensaje:\n{$message}\n";

if (mail($to, $subject, $email_content, $headers)) {
    echo json_encode(['success' => true, 'message' => '¡Mensaje enviado con éxito!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Error al enviar el mensaje. Inténtalo más tarde.']);
}