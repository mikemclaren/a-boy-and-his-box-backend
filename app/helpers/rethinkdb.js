import r from 'rethinkdb';
import Promise from 'bluebird';

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

export async function runFetchQuery(query) {
	let data = await query.run(connection);

	if(typeof data.toArray === 'function') {
		return await new Promise(function runQueryPromise(resolve, reject) {
			data.toArray(function arrayCallback(err, result) {
				if(err) reject(err);

				resolve(result);
			});
		});
	}

	return data;
}

export async function runInsertQuery(query) {
	return await query.run(connection);
}
