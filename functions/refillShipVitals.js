export default function refillShipVitals(ship) {
	ship.vitals.hull = ship.integrity * 2;
	ship.vitals.reactor = ship.reactor * 10;
}
