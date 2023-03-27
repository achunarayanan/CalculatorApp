const express = require("express");
const bodyParser =require("body-parser"); 
const app = express();
const port =3000;

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.use(bodyParser.urlencoded({extended:true}));

app.post("/",function(req,res){
    console.log(req.body);
    console.log(req.body.num1);
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const sum= num1+num2;
    res.send(`the sum is ${sum}`);
})

app.post("/bmiCalculator",function(req,res){
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const bmi = weight/(height * height);
    res.send(`<h1>Your bmi is ${bmi}</h1>`);
})

app.listen(port,()=>{
    console.log(`server started at ${port}`);
})