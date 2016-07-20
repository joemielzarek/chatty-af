$(document).ready(function() {

    var socket = io();
    $('form').submit(function() {
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        updateScroll();
        return false;
    });
    socket.on('chat message', function(msg) {
        $('#messages').append($('<li>').text(msg));
        updateScroll();
    });

    function updateScroll() {
        var element = document.getElementById("chat");
        element.scrollTop = element.scrollHeight;
    }

});
