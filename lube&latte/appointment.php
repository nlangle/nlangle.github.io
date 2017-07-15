<?php
if($_POST){
  //construct variables
  $reciever = "nicklangle25@gmail.com"; //set this to the email for receiving newsletter sign up notifications
  $subject = "Online Service Request"; //email subject line
  $firstName = $_POST['firstName'];
  $lastName = $_POST['lastName'];
  $email = $_POST['email']; //email from form
  $sanitizedEmail = filter_var($email, FILTER_SANITIZE_EMAIL); //sanitize email to prevent fraudulant activity
  $phone = $_POST['primaryPhone'];
  $altPhone = $_POST['altPhone'];
  $apptDate = $_POST['date'];
  $apptTime = $_POST['apptTime'];
  $altTime = $_POST['altTime'];
  $year = $_POST['year'];
  $make = $_POST['make'];
  $model = $_POST['model'];
  $service = $_POST['service'];
  //construct the message
  $message = "Online service appointment request from: ".$firstName." ".$lastName."\r\r"."Contact Info"."\r"."phone: ".$phone."\r"."alternate phone: ".$altPhone."\r"."email: ".$sanitizedEmail."\r\r"."Appointment Request"."\r"."appointment date: ".$apptDate."\r"."appointment time: ".$apptTime."\r"."alternate time: ".$altTime."\r\r"."Vehicle Info"."\r"."year: ".$year."\r"."make: ".$make."\r"."model: ".$model."\r"."service request: ".$service;
  //set from and reply to
  $headers = "From:".$sanitizedEmail."\r\n"."Reply-To:".$sanitizedEmail."\r\n";
  //send the message!
  mail($reciever, $subject, $message, $headers);
}
?>
