


$(function() {
    // setup handlers
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

    // get images
    $.ajax({
        type: "GET",
        url: '/img',
        success: function(result) {
            console.log('get img success');
            if (result) {
                result.forEach(function(img) {
                    $('tbody').append('<tr><td>'+ img +'</td><td><button type="button" class="btn btn-success btn-set" data-img="'+ img +'">Set</button></td></tr>');
                });

                $('.btn-set').click(function() {
                    var name = $(this).data('img');

                    $.ajax({
                        type: "POST",
                        url: '/img',
                        contentType: 'application/json', 
                        data: JSON.stringify({name: name}),
                        success: function() {
                            console.log('set success');
                        }
                    });
                });
            }
        }
    });
});

