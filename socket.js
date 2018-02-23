let io;
let fs = require('fs');
let youtubedl = require('youtube-dl');

module.exports = function (_io) {
	io = _io;

	io.sockets.on('connection', function (socket) {
		// const cUsuarios = require('./controller/usuarios');
		// const cPosts = require('./controller/posts');

		//Video
		socket.on('adicionarVideo', (obj) => {
			// https://www.youtube.com/watch?v=2cYSB8LR9JU
			var video = youtubedl(obj.link,
				['--format=18'],
				{ cwd: __dirname });

			video.on('info', function (info) {
				console.log('retornou:', info);
				video.pipe(fs.createWriteStream(info._filename));
				io.sockets.emit('retornoAdicionarVideo', { title: info.title, thumb: info.thumbnails[0].url });
			});

		});
	});
};