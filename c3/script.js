$('document').ready(function() {
    $('#formulario').on('submit', function(e) {
        e.preventDefault();
        var li = $('<li/>');
        li.attr('id', 11);
        li.text($('#nueva-tarea').val());

        li.on('click', function() {
            $(this).remove();
        });
        li.on('mouseover', function() {
            console.log($(this).attr('id'));
        });

        $('#mi-lista-de-tareas').append(li);
    });
});