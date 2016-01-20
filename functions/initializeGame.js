import bunyan from 'bunyan';
import co from 'co';

import validateObject from '../helpers/validateObject';

import isUsernameUnique from './isUsernameUnique';
import createUser from './createUser';

function intialize(data, ws) {
	// Data should be a JSON object with a few specific properties, so we just
	// validate this.
	try {
		data = JSON.parse(data);
		validateObject(data, {
			username: /[\w\d]{5,32}/,
			shipType: /cargo|speeder|destroyer/
		});
	} catch(ex) {
		bunyan.info(
			{ error: ex },
			'Validating initialize object failed.'
		);

		return ws.send(JSON.stringify({
			error: ex.message
		}));
	}

	// We need to ensure the username is unique.
	co(function* () {
		const isUnique = yield isUsernameUnique(data.username);

		if(!isUnique) {
			return ws.send(JSON.stringify({
				error: 'Username is not unique. Why not try another?'
			}));
		}

		// Since our username is unique, and all the properties align, we need to
		// create the user.
		let user = yield createUser(data.username, data.shipType);
	});
}

export default function initializeGame(ws) {
	ws.on('initialize_game', function(data) {
		initialize(data, ws);
	});
}
