<?php
if(isset($_POST['client_email'])) {
     
    $email_to = "empoole114@gmail.com";
     
    $email_subject = "Message from ericmpoole.com";
     
    $client_name = $_POST['client_name'];
    $email_from = $_POST['client_email'];
    $comments = $_POST['client_message'];
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "Name: ".clean_string($client_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Message: ".clean_string($comments)."\n";   

// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers); 
//http_redirect("../#contact", array(), false, HTTP_REDIRECT_PERM);
?>

<p>Thank you for contacting me. Click below if you have not been redirected.</p>
<a href="../">Go Back.</a>
 
<?php
}
die();
?>