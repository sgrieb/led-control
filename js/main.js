
$('.btn-danger').click(function() {
    $.ajax({
        type: "POST",
        url: 'http://localhost:3000/stop',
        data: {},
        success: function() {
            console.log('stop success');
        }
    });
});

$('.btn-success').click(function() {
    $.ajax({
        type: "POST",
        url: 'http://localhost:3000/start',
        data: {},
        success: function() {
            console.log('start success');
        }
    });
});