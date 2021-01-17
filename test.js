$(function () {
    $(".open").click(function () {
        $(".modal").fadeIn();
    });
    $(".close").click(function () {
        $(".modal").fadeOut();
    });
    $(".modal_bg").click(function () {
        $(".modal").fadeOut();
    })
});