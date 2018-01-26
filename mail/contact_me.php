<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
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
$phone = "Teléfono no proporcionado.";
}
$message = strip_tags(htmlspecialchars($_POST['message']));
// Create the email and send the message
$to = 'contacto@eis-app.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$subject = strip_tags(htmlspecialchars($_POST['subject']));
$email_subject = "Website Contact Form:  $name. Tema: $subject";
$email_body = "Mensaje desde la forma de contacto del sitio web.\n\n"."Detalles:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers = "From: noreply@eis-app.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>