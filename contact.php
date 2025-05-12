<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "tuemail@example.com"; // Cambia esto por tu email
    $subject = "Nuevo mensaje de contacto";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
    echo "Mensaje enviado correctamente.";
} else {
    echo "Error al enviar el mensaje.";
}
?>

