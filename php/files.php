<?php
/**
 * Created by IntelliJ IDEA.
 * User: vmadmin
 * Date: 18.10.2018
 * Time: 10:22
 */
if($_GET["type"]="lebenslauf"){
header('Content-Type: file/pdf');
readfile('/files/Lebenslauf.pdf');
}
if($_GET["type"]="zeugnisse"){
    header('Content-Type: file/pdf');
    readfile('/files/Zeugnisse.pdf');
}
if($_GET["type"]="zertifikate"){
    header('Content-Type: file/pdf');
    readfile('/files/Zertifikate.pdf');
}
if($_GET["type"]="uk"){
    header('Content-Type: file/pdf');
    readfile('/files/UK.pdf');
}
?>