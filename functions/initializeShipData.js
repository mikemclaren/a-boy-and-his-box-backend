import refillShipVitals from './refillShipVitals';

export function initializeCargoShip(ship) {
	ship.carryingCapacity = 10;
	ship.integrity = 6;
	ship.speed = 2;
	ship.reactor = 2;

	return ship;
}

export function initializeSpeederShip(ship) {
	ship.speed = 10;
	ship.integrity = 6;
	ship.carryingCapacity = 2;
	ship.reactor = 2;

	return ship;
}

export function initializeDestroyerShip(ship) {
	ship.integrity = 10;
	ship.carryingCapacity = 6;
	ship.speed = 2;
	ship.reactor = 2;

	return ship;
}

export default function initializeShipData(shipType) {
	let ship = {
		type: shipType,
		vitals: {
			hull: 0,
			reactor: 0,
			ammo: 0
		},

		speed: 0,
		integrity: 0,
		carryingCapacity: 0,
		reactor: 0,

		equipment: {
			hull: [],
			guidance: [],
			weapons: []
		}
	};

	const shipInits = {
		cargo: initializeCargoShip,
		speeder: initializeSpeederShip,
		destroyer: initializeDestroyerShip
	};

	if(shipInits.hasOwnProperty(shipType)) {
		ship = refillShipVitals(shipInits[shipType](ship));
	}

	return ship;
}
