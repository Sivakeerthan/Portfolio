<?php
/**
 * Created by IntelliJ IDEA.
 * User: vmadmin
 * Date: 18.10.2018
 * Time: 10:22
 */
session_start();


    if ( isset($_SESSION['verified']) && $_SESSION['verified'] = "yes" && isset($_GET['type'])) {
        header('Content-Type: application/pdf');
        readfile('files/' . $_GET["type"] . '.pdf');
    } else {
        header("Location: /");
        exit();
    }


//session time limit: https://stackoverflow.com/questions/520237/how-do-i-expire-a-php-session-after-30-minutes
if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY'] > 900)) {
    session_unset();
    session_destroy();
}

?>