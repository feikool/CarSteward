<?php
function c($var){
//    如果是布尔值
    if(is_bool($var)){
        var_dump($var);
    }else{
<<<<<<< HEAD
        echo "<pre>";
        print_r($var);
        echo "</pre>";
=======
        echo "<br>";
        print_r($var);
        echo "</br>";
>>>>>>> b8fc7dd3fd91895b934896feff4c86c6167db383
    }
}