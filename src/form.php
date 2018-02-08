<?php
/**
 * Created by PhpStorm.
 * User: Anatoliy Tupkalo
 * Date: 2/5/2018
 * Time: 2:54 PM
 */
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$dt = date('Y-m-d H:i:s');

if($name == '' || $email == '' || $phone == ''){
    echo 'fields cannot be empty';
}
elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    echo 'email address is not correct';
}
else{
    file_put_contents('apps.txt', "$dt $email $phone $name \n", FILE_APPEND); echo '1';
}