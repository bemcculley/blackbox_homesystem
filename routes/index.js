/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', {
  	'title': 'Blackbox',
  	'test': 'asas',
  	'port': ''
  })
};
