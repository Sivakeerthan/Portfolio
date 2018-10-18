<?php
/**
 * Created by IntelliJ IDEA.
 * User: vmadmin
 * Date: 18.10.2018
 * Time: 07:59
 */
public function getKey(){
    $host = "127.0.0.1";
    $username = "root";
    $pw = "";
    $dbname = "svrnmdb";
    $db = new mysqli($host,$username,$pw,$dbname);
    $query = "SELECT `key` FROM user";
    $statement = $db->prepare($query);
    $statement->execute();
    $result = $statement->get_result();
    if (!$result) {
        throw new Exception($statement->error);
    }
    $key = $result->fetch_object();
    $result->close();
    return $key;
}