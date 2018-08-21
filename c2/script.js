$('document').ready(function() {
    $('#formulario').on('submit', function(e) {
        e.preventDefault();
        var tarea = $('#nueva-tarea').val();
        console.log(tarea);

        $('#mi-lista-de-tareas').append('<li>' + tarea + '</li>');
    });
});