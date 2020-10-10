var express = require('express');
var router = express.Router();

/* GET users listing. */
const chartData = { 
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  data: [10,50,40,60,5, 90, 40, 30, 10, 20, 100, 200], 
  
}

router.get('/', function(req, res, next) {
  res.send(chartData);

});

module.exports = router;