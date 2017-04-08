var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * WorkHistory Model
 * =============
 */

var WorkHistory = new keystone.List('WorkHistory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

WorkHistory.add({
	name: { type: String, required: true },
    company: { type: String, required: true, initial: true },
    companyLogo: { type: Types.CloudinaryImage },
    companyLocation: { type: String, required: true, initial: true },
    companyUrl: { type: String, required: true, initial: true },
    startDate: { type: Types.Date, required: true, initial: true },
    endDate: { type: String, required: true, initial: true },
});

WorkHistory.register();
