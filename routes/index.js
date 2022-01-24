var express = require('express');
var router = express.Router();
const sql = require("../dboperation");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Test connection
router.get('/testconnect', function(req, res, next) {
  sql.getdata();
  res.render('index', { title: 'Express' });
});

router.get('/getdata_withQuery/:year/:month', function(req, res, next) {
  // console.log(req.params.year);
  sql.getdata_withQuery(req.params.year,req.params.month).then((result) => {
    res.json(result[0]);
  });
});


module.exports = router;
