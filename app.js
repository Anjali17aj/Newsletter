//jshint esversion6

const express = require("express");
const bodyParser = require("body-parser");
//const request = require("request");
const https = require("https");
const config = require("./config")

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){    //set up requests and responses to get request to root folder "/"
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){    //set up requests and responses to post the request to root folder "/"
    
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

   const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                }
            }
        ]
    }
    const jsonData = JSON.stringify(data);
    const regionid=config["regionid"]
    const listid=config["listid"]
const url = "https://"+regionid+".api.mailchimp.com/3.0/lists/"+listid;
const options = {
    method: "POST",
    auth: config["auth"]
}

const request = https.request(url, options, function(response) {
 
    if(response.statusCode === 200) {
        res.sendFile(__dirname + "/success.html");
    } else {
        res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function(data){
    console.log(JSON.parse(data));

 });
});

request.write(jsonData);
request.end();
});
    



app.post("/failure", function(req, res){
    res.redirect("/");
})

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});


