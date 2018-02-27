<?php
if($_POST){
  //construct variables
  $reciever = "nicklangle25@gmail.com"; //set this to the email for receiving newsletter sign up notifications
  $subject = "Newsletter Signup"; //email subject line
  $firstName = $_POST['firstName'];//first name from form
  $lastName = $_POST['lastName']; //last name from form
  $email = $_POST['email']; //email from form
  $sanitizedEmail = filter_var($email, FILTER_SANITIZE_EMAIL); //sanitize email to prevent fraudulant activity
  $message = "Newsletter signup from: ".$firstName." ".$lastName."\r\r"."Email: ".$sanitizedEmail; //construct the email message
  $headers = "From:".$sanitizedEmail."\r\n"."Reply-To:".$sanitizedEmail."\r\n";  //set from and reply to
  //send the message!
  mail($reciever, $subject, $message, $headers);
}
?>
