<?php
session_start();
$production = '/';
$development = '/LEGAL/Publico/Sitio_publico/';
$ver = '?'.rand(1000,9999);
$register = false;
$universalPath = $_SERVER['DOCUMENT_ROOT'] . $development;
define( 'VER', $ver );
define( 'URL_FILES', './' );
define( 'URLS_FOR_MENUS', './' );
?>

