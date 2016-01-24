import { r, runInsertQuery } from '../helpers/rethinkdb';

import initializeShipData from './initializeShipData';

import engines from '../mappedObjects/engines';
import hulls from '../mappedObjects/hulls';
import weapons from '../mappedObjects/weapons';

export default function createUser(username) {
	let shipData = initializeShipData();

	return runInsertQuery(
		r.table('users').insert({
			username,
			ship: shipData,
			ownedHulls: [ hulls.cardboard ],
			ownedWeapons: [ weapons.laserBlaster ],
			ownedEngines: [ engines.firecracker ]
		})
	);
}
