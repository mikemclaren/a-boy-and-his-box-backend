import hulls from '../mappedObjects/hulls';

const should = require('chai').should();

describe('Hulls', () => {
	it('should each have a name', () => {
		for(let hull in hulls) {
			hulls[hull].name.should.exist;
		}
	});

	it('should each have an id that matches the property name', () => {
		for(let hull in hulls) {
			hulls[hull].id.should.exist;
			hulls[hull].id.should.equal(hull);
		}
	});

	it('should each have an integrity', () => {
		for(let hull in hulls) {
			hulls[hull].integrity.should.exist;
			hulls[hull].integrity.should.be.a('number');
		}
	});

	it('should each have a weight', () => {
		for(let hull in hulls) {
			hulls[hull].weight.should.exist;
			hulls[hull].weight.should.be.a('number');
		}
	});
});
