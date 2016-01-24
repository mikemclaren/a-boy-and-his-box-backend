import refillShipVitals from './refillShipVitals';

import engines from '../mappedObjects/engines';
import hulls from '../mappedObjects/hulls';
import weapons from '../mappedObjects/weapons';

export default function initializeShipData() {
	let ship = {
		vitals: {
			hull: 0
		},

		equipment: {
			hull: hulls.cardboard,
			weapons: [ weapons.laserBlaster ],
			engines: [ engines.firecracker ]
		}
	};

	ship = refillShipVitals(ship);

	return ship;
}
