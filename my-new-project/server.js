const express = require("express");
const app = express();
const bodyparser = require('body-parser')
const PORT = 5000;

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.get('/',(req,res)=>{
    res.send("Hello")
})
app.post('/register',(req,res)=>{
    const name = req.body.Name;
    console.log(name);
})
app.listen(PORT,()=> console.log("The Server Is On ",PORT));