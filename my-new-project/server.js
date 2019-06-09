const express = require("express");
const app = express();
const bodyparser = require('body-parser')
const PORT = 5000;

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/',(req,res)=>{
    res.send("Hello")
})
app.post('/register',(req,res)=>{
    const Info = req.body;
    console.log("This is the Info From the FrontEnd ",Info)
})
app.listen(PORT,()=> console.log("The Server Is On ",PORT)); 