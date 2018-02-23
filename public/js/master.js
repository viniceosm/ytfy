var socket;
socket = io.connect();

$(document).ready(function(){
	$('#formAdicionarVideo').submit(function (e) {
		var link = $('#formAdicionarVideo [name="linkYt"]').val();

		if (link.trim()!=='') {
			socket.emit('adicionarVideo', { link });
		}
		e.preventDefault();
	});
});

socket.on('retornoAdicionarVideo', function (data) {
	$('#spnNomeVideo').html(data.title);
	$('#imgThumb').atrr('src', data.imgThumb);
});