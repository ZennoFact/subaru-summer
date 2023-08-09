<?php
if(empty($_SESSION)) {
    header('Location: login.php');
}

require_once "./view/index.php";