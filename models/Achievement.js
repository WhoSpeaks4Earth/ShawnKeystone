var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Achievement Model
 * =============
 */

var Achievement = new keystone.List('Achievement', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Achievement.add({
	name: { type: String, required: true },
    company: { type: String, required: true, initial: true },
    startDate: { type: Types.Date, required: true, initial: true },
    endDate: { type: String, required: true, initial: true },
    details: { type: Types.Html, wysiwyg: true, height: 400 },
    url: { type: String },
});

Achievement.register();
