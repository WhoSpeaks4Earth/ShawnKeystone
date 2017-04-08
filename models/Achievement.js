var keystone = require('keystone');
//var Types = keystone.Field.Types;

/**
 * Achievement Model
 * =============
 */

var Achievement = new keystone.List('Achievement', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Achievement.add({
	name: { type: String, required: true },
});

Achievement.register();
