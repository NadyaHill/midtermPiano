// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var Melody = require('./models/model')

// Create Express App Object \\
var app = express();



// I'm confused as to where I need to connect this (localhost:???)
mongoose.connect('mongodb://localhost/pianodb', function (err){
	if(!err){		
	console.log("you did the thing!")
	}
})




// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

app.get('/', function(req, res){
  res.sendFile('piano.html', {root: './public'})
});



//GET\\


// ALGORITHM FILE
app.get('/algo', function(req, res) {
	res.sendFile('algo.html', {root: './public/algo'})
});



//overview gets

app.get('/overview', function (req, res) {
	res.sendFile('overview.html', {root: './public/overview'})
});

app.get('/c4', function (req, res) {
	res.sendFile('c4.html', {root: './public/overview'})
});

app.get('/cSharp', function (req, res) {
	res.sendFile('cSharp.html', {root: './public/overview'})
});

app.get('/d', function (req, res) {
	res.sendFile('d.html', {root: './public/overview'})
});

app.get('/dSharp', function (req, res) {
	res.sendFile('dSharp.html', {root: './public/overview'})
});

app.get('/e', function (req, res) {
	res.sendFile('e.html', {root: './public/overview'})
});

app.get('/f', function (req, res) {
	res.sendFile('f.html', {root: './public/overview'})
});

app.get('/fSharp', function (req, res) {
	res.sendFile('fSharp.html', {root: './public/overview'})
});

app.get('/g', function (req, res) {
	res.sendFile('g.html', {root: './public/overview'})
});

app.get('/gSharp', function (req, res) {
	res.sendFile('gSharp.html', {root: './public/overview'})
});

app.get('/a', function (req, res) {
	res.sendFile('a.html', {root: './public/overview'})
});

app.get('/aSharp', function (req, res) {
	res.sendFile('aSharp.html', {root: './public/overview'})
});

app.get('/b', function (req, res) {
	res.sendFile('b.html', {root: './public/overview'})
});

app.get('/c5', function (req, res) {
	res.sendFile('c5.html', {root: './public/overview'})
});



//get for the reference page
app.get('/reference', function (req, res) {
	res.sendFile('reference.html', {root: './public/reference'})
});



//gets for the game page
app.get('/game', function (req, res) {
	res.sendFile('game.html', {root: './public/game'})
});

app.get('/gameOne', function (req, res) {
	res.sendFile('gameOne.html', {root: './public/game'})
});

app.get('/gameTwo', function (req, res) {
	res.sendFile('gameTwo.html', {root: './public/game'})
});

app.get('/gameThree', function (req, res) {
	res.sendFile('gameThree.html', {root: './public/game'})
});

app.get('/gameFour', function (req, res) {
	res.sendFile('gameFour.html', {root: './public/game'})
});

app.get('/gameFive', function (req, res) {
	res.sendFile('gameFive.html', {root: './public/game'})
});

app.get('/congratsPage', function (req, res) {
	res.sendFile('congratsPage.html', {root: './public/game'})
});




// MELODY POST ROUTES

app.post('/melody', function (req, res){
	var melody = new Melody(req.body)
	melody.save(function(err, melody){
		res.json(melody)
	})
})

// melody get request

app.get('/melody', function (req, res) {
	Melody.find({}, function (err, melodies){
		res.json(melodies)
	})
})

// grab ONE melody
app.get('/melody/:id', function (req, res) {
	Melody.findOne({_id: req.params.id}, function (err, melody){
		res.json(melody)
	})
})




// Creating Server and Listening for Connections \\
var port = 4000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})