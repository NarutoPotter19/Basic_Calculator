const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
    res.sendFile(__dirname + "/calculator.html");
});
app.post("/",function(req,res)
{
    var n1=Number(req.body.NUM1);
    var n2=Number(req.body.NUM2);
    var result= n1 + n2;
    res.send("<h1>the calculation is </h1>"+ result);
})
app.listen(3000,function(){
    console.log(" Server is Running");
});
