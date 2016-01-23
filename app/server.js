import { Server } from 'ws';
import initializeGame from './functions/initializeGame';

const wss = new Server({ port: 3000 });

const websocketRoutes = {
	initialize_game: initializeGame
};

wss.on('connection', function connection(ws) {
	ws.on('message', function(data) {
		try {
			data = JSON.parse(data);

			if(data.hasOwnProperty('type') && websocketRoutes.hasOwnProperty(data.type)) {
				websocketRoutes[data.type](ws, data);
			} else {
				throw new Error();
			}
		} catch(ex) {
			ws.send(JSON.stringify({ error: 'Improper websocket sent.' }));
		}
	});
});

console.log('WebsocketServer running on port 3000.');
