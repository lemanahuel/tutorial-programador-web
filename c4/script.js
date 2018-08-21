$('document').ready(function() {
    $('#formulario').on('submit', function(e) {
        e.preventDefault();
        var li = $('<li/>');

        li.attr('id', $('#mi-lista-de-tareas li').length);

        li.text($('#nueva-tarea').val());

        li.on('click', function() {
            $(this).remove();
        });
        li.on('mouseover', function() {
            console.log('Hover sobre', $(this).attr('id'));
        });

        li.addClass('list-group-item');

        $('#mi-lista-de-tareas').append(li);
    });
});