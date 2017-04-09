var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'work';

	// Load work info
	view.query('projects', keystone.list('Project').model.find().sort('sortOrder'));

	// Render the view
	view.render('work');

};
