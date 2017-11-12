
$('.btn-danger').click(function() {
    $.ajax({
        type: "POST",
        url: '/stop',
        data: {},
        success: function() {
            console.log('stop success');
        }
    });
});

$('.btn-success').click(function() {
    $.ajax({
        type: "POST",
        url: '/start',
        data: {},
        success: function() {
            console.log('start success');
        }
    });
});