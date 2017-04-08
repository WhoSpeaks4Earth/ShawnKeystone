var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'cv';

	// Load the cv info
	view.query('achievements', keystone.list('Achievement').model.find().sort('-startDate'));
	view.query('certifications', keystone.list('Certification').model.find().sort('-completedOn'));

	// Render the view
	view.render('cv');

};
