<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $pseudo = htmlspecialchars($_POST['pseudo']);
    $message = htmlspecialchars($_POST['message']);

    $to = "roi7patate@gmail.com";
    $subject = "Nouvelle suggestion de $pseudo";
    $body = "Pseudo: $pseudo\n\nMessage:\n$message";
    $headers = "From: noreply@votresite.com";

    if (mail($to, $subject, $body, $headers)) {
        echo "Merci pour votre suggestion !";
    } else {
        echo "Une erreur s'est produite. Veuillez réessayer.";
    }
} else {
    echo "Méthode non autorisée.";
}
?>
