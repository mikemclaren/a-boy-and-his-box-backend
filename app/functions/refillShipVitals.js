export default function refillShipVitals(ship) {
	ship.vitals.hull = ship.equipment.hull.integrity;
	return ship;
}
