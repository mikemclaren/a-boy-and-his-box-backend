import { r, runFetchQuery } from '../helpers/rethinkdb';

export default async function isUsernameUnique(username) {
	try {
		let data = await runFetchQuery(r.table('users').filter({ username }));
		if(typeof data === 'undefined' || data === null) {
			return true;
		}

		if(data.length === 0) {
			return true;
		}

		return false;
	} catch(ex) {
		console.log(ex.stack);
		return true;
	}
}
