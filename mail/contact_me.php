<?php
// Check for empty fields
$name = input_filter(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$email =  input_filter(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$phone = input_filter(INPUT_POST, 'phone', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$message = input_filter(INPUT_POST, 'message', FILTER_SANITIZE_STRING)

	
// Create the email and send the message
$to = 'estebanquintana6@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	

if(mail($to,$email_subject,$email_body,$headers)){
    return true;
}else{
    return false;
}
?>
