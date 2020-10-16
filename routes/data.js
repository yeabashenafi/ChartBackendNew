var express = require('express');
var router = express.Router();
var Weather = require('../models/Weather');
var mongoose = require('mongoose');
/* GET users listing. */
const chartData = { 
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  data: [10,50,40,60,5, 90, 40, 30, 10, 20, 100, 200], 
  
}

router.get('/', function(req, res, next) {
  Weather.find()
    .exec()
    .then(doc => {
      res.status(200).json(doc)
    })
    .catch(err => {
      res.status(500).json({error: err})
    })
  // res.send(chartData);

});

router.post('/', (req,res,next) =>{
  const weather = new Weather({
    month:"February",
    data:20
  })
  weather.save().then(result => {
    console.log(result);
    res.send("Succesfully added")
  })
  .catch(err => console.log(err));
})

module.exports = router;