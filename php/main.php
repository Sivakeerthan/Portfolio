<?php
/**
 * Created by IntelliJ IDEA.
 * User: vmadmin
 * Date: 18.10.2018
 * Time: 07:59
 */

    $host = "127.0.0.1";
    $username = "root";
    $pw = "";
    $dbname = "svrnmdb";
    $db = new mysqli($host,$username,$pw,$dbname);
    $query = "SELECT `key` FROM user WHERE uid = 1";
    $statement = $db->prepare($query);
    $statement->execute();
    $result = $statement->get_result();
    if (!$result) {
        throw new Exception($statement->error);
    }
    $row = $result->fetch_row();
    $key = $row[0];
    $action = sha1(htmlspecialchars($_POST['action']));
    $result->close();
    echo "<script>console.log('Key='+$key)</script>";
    echo "<script>console.log('Input='+$action)</script>";
    if($key == $action){
        return true;
    }
    else{
        return false;
    }

?>