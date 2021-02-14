<?php
// POSTデータの name と body をバリデーションにかける
if(!empty($_POST['name']) && !empty($_POST['body'])){
    // imageタイプを識別
    $imginfo = getimagesize($_FILES['file1']['tmp_name']);
    if($imginfo['mime'] == 'image/jpeg'){$extension = ".jpg";}
    if($imginfo['mime'] == 'image/png'){$extension = ".png";}
    if($imginfo['mime'] == 'image/gif'){$extension = ".gif";}

    // 拡張子が入っているなら
    if(!empty($extension)){
        // アップロードされたファイル名を取得する
        $file_tmp = $_FILES['file1']['tmp_name'];
        // ファイル名を決める
        $file_name = $_POST['name'] . $extension;
        // ファイルの保存場所を決める
        $file_save = "./images/" . $file_name;
        // $_FILES['file1']['tmp_name'] から $file_save の保存場所へ移動させる
        move_uploaded_file($file_tmp, $file_save);

        echo "success";
    }else{
        echo "fail";
    }
}