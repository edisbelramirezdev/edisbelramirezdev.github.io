<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    
    if (!$name || !$email || !$message) {
        echo json_encode(['success' => false, 'message' => 'Todos los campos son requeridos']);
        exit;
    }
    
    $to = 'tuemail@example.com';
    $subject = 'Nuevo mensaje de contacto desde tu portafolio';
    $headers = "From: $email\r\nReply-To: $email\r\n";
    $email_content = "Nombre: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Mensaje:\n$message\n";
    
    if (mail($to, $subject, $email_content, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Mensaje enviado con éxito']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error al enviar el mensaje']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
}
