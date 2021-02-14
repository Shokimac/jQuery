window.onload = function () {
    $('#send-form').submit(function () {
        
        var name = $('#name').val();
        var body = $('#body').val();

        if (name != "" && body != "") {
            var fd = new FormData();
            var fd = new FormData($('#send-form').get(0));

            fd.append('name', name);
            fd.append('body', body);

            $.ajax({
                url: 'upload.php',
                type: 'POST',
                data: fd,
                cache: false,
                contentType: false,
                processData: false,
                dataType: 'html'
            }).done(function (data) {
                alert("送信が完了しました");
                location.href = "./";
            });
        } else {
            alert("未入力の項目があります");
        }
        return false;
    });
}