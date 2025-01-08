<?php
$to = "sourayawach@gmail.com";
$subject = "Participation au concours";
$txt = $_POST["nom"];
$headers = 'From:' . $_POST["email"];


mail($to, $subject, $txt, $headers);

// header("location: https://souraya.techniques-graphiques.be/Arp");
?>
<?php
?>