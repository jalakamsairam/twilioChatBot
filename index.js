var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var PORT = process.env.PORT || 3001;
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });

app.get("/",function(req,res){
    res.json("welcome")
})
app.post("/hello",function(req,res){
    var username =  request.body.user_name;
    var botPayLoad = {
        text:'Hello'+username+', welcome to the channel'
    };
    if(username!=='slackbot'){
        return res.status(200).json(botPayLoad);
    }else{
        return res.status(200).end();
    }
})
  