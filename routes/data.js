var express = require('express');
var router = express.Router();

/* GET users listing. */
const data = {
    'January':30,
    'February':100,
    'March':20,
    'April':34,
    'May':20,
    'June':33,
    'July':10,
    'August':10,
    'September':30,
    'October':20,
    'November':50,
    'December':90,
}
router.get('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;