$(function () {
    
    var $orders = $('#orders');
    var $name = $('#name');
    var $drink = $('#drink');

    $.ajax({
        dataType: 'json',
        type: 'GET',
        url: '/api.php',
        success: function (orders) {
            console.log(orders);
            $.each(orders, function (i, order) {
                $orders.append('<li>name: ' + order.name + ', drink: ' + order.drink + '</li>');
            })
        },
        error: function () {
            alert('error loading order');
        }
    });

    $('#add-order').on('click', function () {
        var order = {
            name: $name.val(),
            drink: $drink.val(),
        };

        $.ajax({
            dataType: 'json',
            type: 'POST',
            url: '/apiPost.php',
            data: { data: order },
            success: function (orders) {
                console.log(orders);
                $orders.append('<li>name: ' + orders.name + ', drink: ' + orders.drink + '</li>');
            },
            error: function () {
                alert('error')
            }
        });
    });
});