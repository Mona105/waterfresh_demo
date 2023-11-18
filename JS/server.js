var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mysql = require('mysql');

app.use( express.static( "public" ) );
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


var connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"pickup"
});


//some more code to get different routes

connection.connect(function(error){
    if(error){
        console.log("Error while connecting to database")
    }
    else{

        // console.log("connected");
 connection.query("SELECT * FROM user_details", function (err, result, fields) {
    if (err) throw err;
        for (var i = 0; i < result.length; i++) {
       var row = result[i];
       console.log(row.ProductName, "costs", row.Price, "and its from category", row.Category  );
}   
    // console.log(result);
    })
}});


app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.post("/", function(req, res) {
    // get data from forms and add to the table called user..

    var name = req.body.name;
    var email = req.body.email;
    var contact = req.body.contact;

    console.log(name, email,contact);

    connection.query("INSERT INTO user (name, email, contact) VALUES", (name , email, contact), function (err, result) {
    if (err) throw err;
    console.log("Registered Sucessfully");
  });
    res.redirect("/index.html");
});