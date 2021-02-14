window.onload = function () {
    $('#send-form').submit(function () {
        
        // 各フォームの値を取得する
        var name = $('#name').val();
        var body = $('#body').val();

        // それぞれが空でなければ
        if (name != "" && body != "") {
            // 画像取得のために、formDataオブジェクトを作成する
            var fd = new FormData();
            // 以下の文でフォームデータを取得する
            var fd = new FormData($('#send-form').get(0));

            // formDataオブジェクトにパラメータを追加する。'name'パラメータに変数nameを追加する
            fd.append('name', name);
            fd.append('body', body);

            // Ajax経由で画像登録する
            $.ajax({
                url: 'upload.php', // 画像登録を行うphpファイルを指定する
                type: 'POST',
                data: fd,
                cache: false,
                contentType: false,
                processData: false,
                dataType: 'html'
            }).done(function (data) {
                alert("送信が完了しました");
                location.href = "./"; // ページをリロードする
            });
        } else {
            alert("未入力の項目があります");
        }
        return false; // submit をキャンセルする
    });
}