<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['subject'])     ||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
if(!empty($_POST['phone'])){
$phone = strip_tags(htmlspecialchars($_POST['phone']));
} else {
$phone = "Teléfono no proporcionado."
}
$message = strip_tags(htmlspecialchars($_POST['message']));
// Create the email and send the message
$to = 'contacto@eis-app.com'; //This is where the form will send a message to.
$subject = strip_tags(htmlspecialchars($_POST['subject']));
$email_subject = "Website Contact Form:  $name, $subject";
$email_body = "Mensaje desde la forma de contacto del sitio web.\n\n"."Detalles:\n\nNombre: $name\n\nEmail: $email_address\n\nTeléfono: $phone\n\nMensaje:\n$message";
$headers = "From: noreply@eis-app.com\n"; // This is the email address the generated message will be from.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>