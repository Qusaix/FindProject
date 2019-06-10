const express = require("express");
const app = express();
const bodyparser = require('body-parser')
const Sequelize = require('./Database/database')
const NewCoach = require('./Database/moduls/CoachIModule')
const NewTrainee = require('./Database/moduls/TraineeModule')
const PORT = 5000;

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

Sequelize.authenticate()
.then(()=>console.log("Database is on"))
.catch((err)=>console.log("There is and err ",err))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/',(req,res)=>{
    res.send("Hello")
})
app.post('/registerCoach',(req,res)=>{
    const Info = req.body;
    const CoachData = {
       Name : req.body.Name,
       Email: req.body.Email,
       Password: req.body.Password,
       Bio: req.body.Bio,
       Experence: req.body.Experence 
    }

    const {Name , Email , Password , Bio , Experence } = CoachData

    NewCoach.create({
        Name:Name,
        Email:Email,
        Password:Password,
        Bio:Bio,
        Experence:Experence
    })
    .then()
    .catch((err)=>console.log("There is an error in saving the Coach Data ",err))

    console.log("This is the Info From the FrontEnd ",Info)

})
app.post('/registerTrainee',(req,res)=>{
    const TheInfo = req.body; 
    const TraineeData = {
        Name:req.body.Name,
        Email:req.body.Email,
        Password:req.body.Password,
        Bio:req.body.Bio,
        Experence:req.body.Experence,
        Goal:req.body.Goal,
        Weight:req.body.Weight,
        Height:req.body.Height

    }
    const { Name , Email , Password , Bio , Experence , Goal , Weight , Height } = TraineeData
    NewTrainee.create({
        Name,
        Email,
        Password,
        Bio,
        Experence,
        Goal,
        Weight,
        Height
    })
    console.log("This is the Trainee Info ", TheInfo)
})
app.listen(PORT,()=> console.log("The Server Is On ",PORT)); 