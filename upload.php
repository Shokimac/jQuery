<?php
if(!empty($_POST['name']) && !empty($_POST['body'])){
    $imginfo = getimagesize($_FILES['file1']['tmp_name']);
    if($imginfo['mime'] == 'image/jpeg'){$extension = ".jpg";}
    if($imginfo['mime'] == 'image/png'){$extension = ".png";}
    if($imginfo['mime'] == 'image/gif'){$extension = ".gif";}

    if(!empty($extension)){

        $file_tmp = $_FILES['file1']['tmp_name'];
        $file_name = $_POST['name'] . $extension;
        $file_save = "./images/" . $file_name;
        move_uploaded_file($file_tmp, $file_save);

        echo "success";
    }else{
        echo "fail";
    }
}