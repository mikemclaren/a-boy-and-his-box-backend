import r from 'rethinkdb';
import Promise from 'bluebird';
import co from 'co';

let connection = null;
r.connect({
	host: 'db',
	db: 'aboyandhisbox',
}).then(function con(conn) {
	console.log('Connection established.');
	connection = conn;
}).catch(function errorCaught(err) {
	console.log(err);
});

export { r, connection };

export function runFetchQuery(query) {
	return co(function* runQueryCoroutine() {
		let data = yield query.run(connection);

		if(typeof data.toArray === 'function') {
			return yield new Promise(function runQueryPromise(resolve, reject) {
				data.toArray(function arrayCallback(err, result) {
					if(err) reject(err);

					resolve(result);
				});
			});
		}

		return data;
	}, function errorCatch(err) {
		throw err;
	});
}

export function runInsertQuery(query) {
	return co(function* runQueryCoroutine() {
		return yield query.run(connection);
	}, function errorCatch(err) {
		throw err;
	});
}
