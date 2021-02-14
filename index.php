<?php 
?>
<!-- index.php -->

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ajax処理基礎</title>
</head>
<body>
    
    <h1>jQueryでAjax処理を行うpart1</h1>

    <h2>注文表</h2>
    <ul id="orders">
    </ul>

    <h4>注文フォーム</h4>
    <p>name: <input type="text" id="name" name="name"></p>
    <p>drink: <input type="text" id="drink" name="drink"></p>
    <button id="add-order">注文を追加する</button>

    <script type="text/javascript" src="jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="ajax.js"></script>
</body>
</html>