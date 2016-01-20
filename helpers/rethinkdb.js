import r from 'rethinkdb';
import Promise from 'bluebird';
import co from 'co';

let connection = null;
r.connect({
	host: 'localhost',
	port: 28015,
	db: 'aboyandhisbox',
}).then(function con(conn) {
	connection = conn;
});

export default r;
export { connection };

export function runFetchQuery(query) {
	return co(function* runQueryCoroutine() {
		let data = yield query.run(connection);

		if(typeof data.toArray === 'function') {
			return yield new Promise(function runQueryPromise(resolve, reject) {
				promise.toArray(function arrayCallback(err, result) {
					if(err) reject(err);

					resolve(result);
				});
			});
		}

		return promise;
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
