<?php
header("content-type:text/html;charset=utf-8");

define('JS_PACH', '/static/js/');
define('CSS_PACH', '/static/css/');
define('IMG_PACH', '/static/img/');
define('FONT_PACH', '/static/font/');
define('MUSIC_PACH', '/static/music/');
define('BOOT_PACH', '/static/bootstrap-3.3.5-dist/');

define('VIEW','view/');
define('MODEL','Model/');
define('CONTROLLER','Controller/');
//V
require 'Core/Fromwork.php';
require 'Core/dbpdo.php';
require 'Core/common.php';

\Core\Fromwork::stite();