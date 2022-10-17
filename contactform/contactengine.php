<?php

$Name = Trim(stripslashes($_POST['nombre'])); 
$Tel = Trim(stripslashes($_POST['telefono'])); 
$Email = Trim(stripslashes($_POST['email'])); 
$Message = Trim(stripslashes($_POST['mensaje'])); 

$header = 'From: ' . $Email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$EmailTo = "info@zambranotrujillo.com";
$Subject = "Mensaje desde zambranotrujillo.com/firma-de-abogados-contactanos";

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$mensaje = "";
$mensaje .= "Este mensaje fue enviado por: " .$Name . ",\r\n";
$mensaje .= "Telefono: " .$Tel .",\r\n";
$mensaje .= "Su Email es: " .$Email .",\r\n";
$mensaje .= "Mensaje: " .$Message .",\r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

// send email 
$success = mail($EmailTo, $Subject, $mensaje,$header );

if($Name === '' || $Email === ''){
  echo json_encode('error');
}else{
  echo json_encode('Correcto:');
}
?>