var express = require('express')
var bodyParser = require('body-parser');
var db = require('./db').mongoose;
var Exercise = require('./db').exerciseModel;
var User = require('./db').userModel;
var path = require('path');

var session = require('express-session');

//import database info

//handle all the data gathering methods
// querying the database
// routing

var app = express();
app.listen(3000);
app.use('/public', express.static('client/public'));
app.use('/react', express.static('node_modules/react/dist'));
app.use('/react-dom', express.static('node_modules/react-dom/dist'));
app.use('/jquery', express.static('node_modules/jquery/dist'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'key',
  resave: true,
  saveUninitialized: true
}));

var checkUser = function(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    req.session.error = 'Access denied!';
    res.sendFile('login.html', { root: 'client/public'});
  }
};

console.log('server is running');


// define api routes here

function getWorkouts(req,res){
  var returnObj = []


  Exercise.find({type: 'warmup'}, function(err,data){
    if(err) {
      console.log('err happened with cooldown retrieval: ' + err);
    } else{

      returnObj.push(data[Math.floor(Math.random()*data.length)]);
      returnObj.push(data[Math.floor(Math.random()*data.length)]);
      returnObj.push(data[Math.floor(Math.random()*data.length)]);


      Exercise.find({type: 'workout'}, function(err,data){
        if(err) {
          console.log('err happened with cooldown retrieval: ' + err);
        } else{

          returnObj.push(data[Math.floor(Math.random()*data.length)]);
          returnObj.push(data[Math.floor(Math.random()*data.length)]);
          returnObj.push(data[Math.floor(Math.random()*data.length)]);
          returnObj.push(data[Math.floor(Math.random()*data.length)]);
          returnObj.push(data[Math.floor(Math.random()*data.length)]);
          returnObj.push(data[Math.floor(Math.random()*data.length)]);
          returnObj.push(data[Math.floor(Math.random()*data.length)]);
          returnObj.push(data[Math.floor(Math.random()*data.length)]);
          returnObj.push(data[Math.floor(Math.random()*data.length)]);

          Exercise.find({type: 'cooldown'}, function(err,data){
            if(err) {
              console.log('err happened with cooldown retrieval: ' + err);
            } else{
              returnObj.push(data[Math.floor(Math.random()*data.length)]);
              returnObj.push(data[Math.floor(Math.random()*data.length)]);
              returnObj.push(data[Math.floor(Math.random()*data.length)]);

              console.log('exercise data sent succesfully');
              res.status('200').send(returnObj);
            }
          })
        }
      })
    }
  })

}


app.get('/', (req,res)=>{
  res.sendFile('index.html', { root: 'client/public'});
});

app.get('/workout', getWorkouts);

app.get('/history',(req,res)=>{
  var name = 'harshsikka' // add req.body.username
  User.findOne({username: name}, function(err, data){
    if(err) {
      console.log('err happened with cooldown retrieval: ' + err);
    } else{
      console.log(data.workoutHistory);
      res.send(data.workoutHistory);
    }
  })
})


// STEVE OR BELLA OR CANDICE, once users are setup, this request should get the username so we can find the
// user in the db and add to their workout history. Otherwise its good to go.

// Also make sure that the fetch function on your end to render the history on the website is using the
//right keys in the object.

function addWorkout(req,res){
  console.log('receiving data:', req.body);

  var name = 'harshsikka' // change to req.body.username
  var workoutObj = {}
  workoutObj.currentWorkout = req.body.currentWorkout;
  workoutObj.date = req.body.date;
  workoutObj.lengthOfWorkout = req.body.lengthOfWorkout;

  User.findOne({username: name}, function(err, user){
    console.log(user);
    if(err) {
      console.log('err happened with cooldown retrieval: ' + err);
    } else{
      user.workoutHistory.unshift(workoutObj);
      console.log(user.workoutHistory)

      user.save(function(err){
        if(err) {
          console.log(err + ' error happened!');
        } else {
          console.log('user workouts updated');
          res.status(202).send('user workout history updated');
        }
      })

    }
  })
}

// need to add user creation
// need to add user verification

app.post('/addWorkout', addWorkout);

app.post('/login', function(req, res) {
    // query the database for a username
    // get the password
    console.log('username:',req.body.username);
    console.log('password:',req.body.password);
    var currentUser = req.body.username;
    if (req.body.username === 'harshsikka') { //check if user & pw is in database
      req.session.regenerate(function() {
        req.session.user = req.body.username;
        res.status(200).send('logged in');
      });
    } else {
      res.status(400).send('not logged in');
    }
});



