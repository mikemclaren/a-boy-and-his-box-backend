import engines from '../mappedObjects/engines';

const should = require('chai').should();

describe('Engines', () => {
	it('should each have a name', () => {
		for(let engine in engines) {
			engines[engine].name.should.exist;
		}
	});

	it('should each have an id that matches the property name', () => {
		for(let engine in engines) {
			engines[engine].id.should.exist;
			engines[engine].id.should.equal(engine);
		}
	});

	it('should each have a thrust', () => {
		for(let engine in engines) {
			engines[engine].thrust.should.exist;
			engines[engine].thrust.should.be.a('number');
		}
	});

	it('should each have a weight', () => {
		for(let engine in engines) {
			engines[engine].weight.should.exist;
			engines[engine].weight.should.be.a('number');
		}
	});
});
