import { r, runInsertQuery } from '../helpers/rethinkdb';

import initializeShipData from './initializeShipData';

export default function createUser(username, shipType) {
	let shipData = initializeShipData(shipType);

	runInsertQuery(
		r.table('users').insert({
			username,
			ship: shipData
		})
	);
}
