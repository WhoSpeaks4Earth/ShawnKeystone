var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Project Model
 * =============
 */

var Project = new keystone.List('Project', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Project.add({
	name: { type: String, required: true },
    company: { type: String, required: true, initial: true },
    url: { type: String, required: true, initial: true },
    description: { type: Types.Html, wysiwyg: true },
    sortOrder: { type: Number }
});

Project.register();
