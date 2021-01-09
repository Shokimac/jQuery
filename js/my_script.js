
$(function(){

    // タブパネル処理
    // セレクター $() で、要素を指定して、attr() で属性の値を取得する
    var select_panel = $('ul.tab li a.selected').attr('href');
    // 選択されたタブに紐づくパネル li のみを表示させる為
    // li:not で、select_paenl ではない li に対して非表示 hide() を行う
    $('ul.panel li:not(' + select_panel + ')').hide();

    // タブがクリックされた時の処理
    $('ul.tab li a').click(function () {
        // まず、selectedを今付いている aタグから外す
        $('ul.tab li a.selected').removeClass('selected');
        // クリックされたaタグを thisで指定し、selectedクラスを付与する
        $(this).addClass('selected');
        // 一旦、パネルの liを全て非表示にする
        $('ul.panel li').hide();
        // クリックされたaタグのhrefを取得して、パネル表示
        $($(this).attr('href')).show();
        // 本来のaタグの動きであるリンクへ飛ばす動きをさせず
        // jQueryのクリックイベントだけ実行させる為、return falseを返す
        return false;
    });

});

