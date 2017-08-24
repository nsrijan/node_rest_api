const express = require('express');

const router = express.Router();
const request = require('request');
const _ = require('lodash');

router.get('/json', function(req, res, next) {

  /*var accountMock = {
        "username": "nraboy",
        "password": "1234",
        "twitter": "@nraboy"
    }*/
    console.log('get requested');

    //var url = 'https://api.myjson.com/bins/12enqp';
    //var url = 'https://api.myjson.com/bins/tgiip';
    var url = 'http://hamropatro-android.appspot.com/news';

    request({
        url: url,
        json: true
    }, function (error, response, body) {

      if (!error && response.statusCode === 200) {
        res.send(body);
          console.log(body) // Print the json response
      }
  });

});

router.get('/', function(req, res, next) {

	/*var accountMock = {
        "username": "nraboy",
        "password": "1234",
        "twitter": "@nraboy"
    }*/
    console.log('get requested');

    //var url = 'https://api.myjson.com/bins/12enqp';
    //var url = 'https://api.myjson.com/bins/tgiip';
    var url = 'http://hamropatro-android.appspot.com/news';

    request({
    		url: url,
    		json: true
		}, function (error, response, body) {

   		if (!error && response.statusCode === 200) {
   			res.render('list', {body:body});
    	    console.log(body) // Print the json response
   		}
	});

});

router.get('/:id', function(req, res, next) {
  console.log(req.params.id);

   var url = 'http://hamropatro-android.appspot.com/news';

    request({
        url: url,
        json: true
    }, function (error, response, body) {

      if (!error && response.statusCode === 200) {
      
        console.log("body:===>>>" + body.items[req.params.id]);
        var details = body.items[req.params.id];
       // var details = JSON.parse(body.items);
        console.log("title: --->>> " + details.title);
       // console.log(details.title);
        res.render('details', {body:details});
         // Print the json response
      }
  });

});

module.exports = router;