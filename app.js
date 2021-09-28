// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners
// Lesson 30 - Handling POST Requests
//-----------
// WHAT THIS APP DOES------

/* https://youtu.be/xxxxxxxxx

xxxxxxxxxxxxxxxxxxxxxx

xxxxxxxxxxxxxxxxxxxxx */

// REQUIRE the installed express pkg
const express = require('express');
// REQUIRE the installed Node.js body parsing middleware pkg
const bodyParser = require('body-parser')

// CREATE AN EXPRESS APP called app
const app = express();

// CREATE BODYPARSER to parse client's submitted <form> data
// ERROR: 'bodyParser' is deprecated. It is now a dependency of express & installed automatically.
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// SET THE TEMPLATE-VIEW ENGINE
// express app's set() mthd will set EJS as the template-view engine
app.set('view engine', 'ejs');

// ACCESS STATIC FILES
//express's app.use() mthd will access express's built-in middleware for static files such as style.css
app.use('/assets', express.static('stuff'));

// EXPRESS HTTP GET REQUEST HANDLER 
// responds to a client GET req for the home pg route
app.get('/', function (req, res) {
    res.render('index.ejs');
});

// EXPRESS HTTP GET REQUEST HANDLER 
// responds to a client GET req for the contact pg route
app.get('/contact', function (req, res) {
    console.log(req.query);
    res.render('contact.ejs', { qs: req.query });
});

// EXPRESS HTTP POST REQUEST HANDLER 
// responds to a client POST req 
app.post('/contact', urlencodedParser, function (req, res) {
    console.log('\n')
    console.log(req.body);
    console.log('\n')
    res.render('contact-success.ejs', { data: req.body });
});

// EXPRESS HTTP GET REQUEST HANDLER 
// responds to a client GET req for the profile pg route
// this is a DYNAMIC client req for the contact pg and a dynamic name chosen by th client
app.get('/profile/:name', function (req, res) {
    // create some data for demo purposes
    var data = { age: 33, job: 'Secret_Service', hobbies: ['eating', 'sleeping'] };
    res.render('profile.ejs', { person: req.params.name, data: data });
});

// LISTEN FOR POST 3000 
// via express app's listen() mthd 
app.listen(3000);

// con.log a test mssg
global.console.log('\n"Hey, simmer down!! The server is trying to listening for Port 3000!"\n');