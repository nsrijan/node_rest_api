const express = require('express');
const myapi = require('./routes/api');

//set up express app
const app = express();

//set up view engine
app.set('view engine', 'ejs');

// initialize routes
app.use('/api', myapi);

//listen for requests
app.listen(process.env.port || 3000, function(){
	console.log('now listening for request');
});