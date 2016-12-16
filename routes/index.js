var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/special', function(req, res, next) {
 const token = req.query.token;
 const payLoad=jwt.verify(token,process.env.TOKEN_SECRET);
 res.json({
   special: true,
   email: payLoad.email
 });
});

router.get('/special-header', function(req, res, next) {
 const token = req.header('Authorisation');
 const token = Authorisation.split(' ')[1];
 //const token = Authorisation.match('')[];
 const payLoad=jwt.verify(token,process.env.TOKEN_SECRET);
 res.json({
   special: true,
   email: payLoad.email
 });
});

module.exports = router;
