<?php
// $_POST = json_decode(file_get_contents("php://input"), true);

$nombre = Trim(stripslashes($_POST['nombre'])); 
$email = Trim(stripslashes($_POST['email']));
$servicios = $_POST['service'];
// foreach ($servicios as $servicio){
//     $servicio;
// }
$telefono = Trim(stripslashes($_POST['telefono'])); 
$comentarios = Trim(stripslashes($_POST['comentarios'])); 

$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$para = "info@zambranotrujillo.com";
$asunto = "Mensaje desde zambranotrujillo.com/home";

// prepare email body text
$mensaje = "";
$mensaje .= "Este mensaje fue enviado por: " .$nombre . ",\r\n";
$mensaje .= "Su Email es: " .$email .",\r\n";
$mensaje .= "Telefono: " .$telefono .",\r\n";
$mensaje .= "Servicio de interes: " .$servicios .",\r\n";
$mensaje .= "Mensaje: " .$comentarios .",\r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());


if($nombre === '' || $email === ''){
  echo json_encode('error');
}else{
  echo json_encode('Correcto:');
  // send email 
  $success = mail($para, $asunto, $mensaje,$header );
}
?>