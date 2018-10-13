<?php
/**
 * Created by IntelliJ IDEA.
 * User: vmadmin
 * Date: 12.10.2018
 * Time: 17:48
 */
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

$mail = new PHPMailer(true);
$fname = $_POST['first_name'];
$lname = $_POST['last_name'];
$email = $_POST['email'];
$subj =$_POST['subj'];
$msg =$_POST['msg'];
try{
    //Server settings
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp-mail.outlook.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'keerthan_1@hotmail.com';                 // SMTP username
    $mail->Password = 'Sivakeerthan1';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('keerthan_1@hotmail.com', 'Mailer');
    $mail->addAddress('keerthanvamanarajasekaran@gmail.com');               // Name is optional
    $mail->addReplyTo($email, 'Information');


    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $subj;
    $mail->Body    = 'Nachricht auf der Webseite von <b>'.$fname.' '.$lname.'</b>
                        <br>
                        E-Mail:'.$email.'
                        <br>'.$msg;
    $mail->AltBody = 'Nachricht auf der Webseite von '.$fname.' '.$lname.'
                        E-Mail:'.$email.'
                        '.$msg;

    if($mail->send()) {
        echo '<script>
                    window.location.href="/index.html?result=success";</script>';
    }
} catch (Exception $e) {
    echo '<script>
        window.location.href="/index.html?result=fail";</script>';

}
?>