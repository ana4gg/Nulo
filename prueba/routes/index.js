var Nulo = require('Nulo');
var router = Nulo.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nulo' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Web' });
});
module.exports = router;
