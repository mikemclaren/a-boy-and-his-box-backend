import { Server } from 'ws';
import initializeGame from './functions/initializeGame';

const wss = new Server({ port: 3333 });

wss.on('connection', function connection(ws) {
	ws.on('message', function(data) {

	});
	initializeGame(ws);
});
