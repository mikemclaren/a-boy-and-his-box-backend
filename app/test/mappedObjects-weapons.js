import weapons from '../mappedObjects/weapons';

const should = require('chai').should();

describe('Weapons', () => {
	it('should each have a name', () => {
		for(let weapon in weapons) {
			weapons[weapon].name.should.exist;
		}
	});

	it('should each have an id that matches the property name', () => {
		for(let weapon in weapons) {
			weapons[weapon].id.should.exist;
			weapons[weapon].id.should.equal(weapon);
		}
	});

	it('should each have a type', () => {
		for(let weapon in weapons) {
			weapons[weapon].type.should.exist;
			weapons[weapon].type.should.match(/ballistic|laser|melee/);
		}
	});

	it('should each have a weight', () => {
		for(let weapon in weapons) {
			weapons[weapon].weight.should.exist;
			weapons[weapon].weight.should.be.a('number');
		}
	});

	it('should each have a strength', () => {
		for(let weapon in weapons) {
			weapons[weapon].strength.should.exist;
			weapons[weapon].strength.should.be.a('number');
		}
	});
});
