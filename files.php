<?php
/**
 * Created by IntelliJ IDEA.
 * User: vmadmin
 * Date: 18.10.2018
 * Time: 10:22
 */
if(isset($_GET['type'])) {
    header('Content-Type: application/pdf');
    readfile('files/' . $_GET["type"] . '.pdf');
}
else{
    exit();
}
?>