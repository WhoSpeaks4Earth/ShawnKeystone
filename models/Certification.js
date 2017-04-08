var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Certification Model
 * =============
 */

var Certification = new keystone.List('Certification', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Certification.add({
	name: { type: String, required: true },
    provider: { type: String, required: true, initial: true },
    providerUrl: { type: String, required: true, initial: true },
    completedOn: { type: Types.Date, required: true, initial: true },
});

Certification.register();
