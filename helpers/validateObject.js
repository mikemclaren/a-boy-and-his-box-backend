/**
 * validateObject - Validates object based on a defined object with regex
 * validations
 *
 * @param  Object obj           The object to be validated
 * @param  Object validationObj The object doing the validation, with prop being
 * the tested property, and the value of prop being regex to be tested.
 * @return boolean              True if valid, throws an error otherwise.
 */
export default function validateObject(obj, validationObj) {
	for(let prop in validationObj) {
		if(validationObj.hasOwnProperty(prop)) {
			if(!obj.hasOwnProperty(prop)) {
				throw new Error('Object does not contain property: ', prop);
			}

			if(!validationObj[prop].test(obj[prop])) {
				throw new Error(`Object[${prop}] (${obj[prop]}) does not match validation: ${validationObj[prop]}`);
			}
		}
	}

	return true;
}
