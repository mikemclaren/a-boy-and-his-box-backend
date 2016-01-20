import { r, runFetchQuery } from '../helpers/rethinkdb';
import co from 'co';

export default function isUsernameUnique(username) {
	return co(function* () {
		try {
			let data = yield runFetchQuery(r.table('users').filter({ username }));

			if(typeof data === 'undefined' || data === null) {
				return true;
			}

			return false;
		} catch(ex) {
			return true;
		}
	});
}
