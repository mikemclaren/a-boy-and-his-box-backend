import bunyan from 'bunyan';
import co from 'co';

import validateObject from '../helpers/validateObject';

import isUsernameUnique from './isUsernameUnique';
import createUser from './createUser';

const logger = bunyan.createLogger({ name: 'a-boy-and-his-box' });

const log = logger.child({ type: 'function', function: 'initializeGame' });

export default function initializeGame(ws, data) {
	// Data should be a JSON object with a few specific properties, so we just
	// validate this.
	try {
		validateObject(data, {
			username: /[\w\d]{5,32}/,
			shipType: /cargo|speeder|destroyer/
		});
	} catch(ex) {
		log.info(
			{ error: ex.stack },
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
