const express = require("express");
const app = express();
const bodyparser = require('body-parser')
const { TheData } = require('./Database/database')
var { NewCoach , NewTraineeModule } = require('./Database/moduls/CoachIModule');
//const NewTrainee = require('./Database/moduls/TraineeModule')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
const salt = 10; 
const PORT = 5000;

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

TheData.authenticate()
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
/* This is For The REalation Data Base 
NewCoach.hasMany( NewTrainee , {as:req.body.Email, foreignKey:req.body.id});
NewTrainee.belongsTo(NewCoach ,{as:req.body.Email,foreignKey:req.body.id});

*/
/*New Thing 
NewTrainee.belongsTo(NewCoach, { as: 'NewTrainee', foreignKey: 'id' });
        NewCoach.hasMany(NewTrainee, { as:'NewCoach',foreignKey: 'id' })
*/
//Item.setNewTrinee(NewCoach)
//NewCoach.hasMany(NewTrainee, { as:'NewCoach',foreignKey: 'id' })


app.post('/registerCoach',(req,res , next)=>{
    const Info = req.body.Email;
    const HashPassword = bcrypt.hashSync(req.body.Password,salt)
    NewCoach.findOne({where:{Email:Info}})
    .then((User)=>{    

    if(!User){
        console.log("Hello from if")
        const CoachData = {
            Name : req.body.Name,
            Email: req.body.Email,
            Password: HashPassword,
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
         .then((created)=>{console.log("The User Is Created",created.dataValues)
         res.send(created.dataValues)})
         .catch((err)=>{console.log(err)
     
         })
         // The Thing Is Not Working 
         NewTraineeModule.findAll({
           where: { id: 1 },
           include: [{
            model: NewCoach,
            as: 'CoachInfo',
           // where: { name: 'Al Green' } //
          }]
         })
         .then(Couch => console.log("This is the Couch Id From the rel database ",Couch))
         .catch(err=>console.log(err))
        //NewCoach.setNewCoach(NewTrainee)

         /// Send Email Area START


  
//   var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'tafran56@gmail.com',
//       pass: '12345678D!'
//     },tls: {
//       rejectUnauthorized: false
//   }
//   });
  
//   var mailOptions = {
//     from: 'tafran56@gmail.com',
//     to: `${req.body.Email}`,
//     subject: 'TAFRAN.inc Registerd in TAFRAN',
//     text: `Thank You For Registerd We Will Be in Toch With You Soon`,
//     html: `<h1 style="color:#000">App NAME</h1>
//     <h3 style="color:#000">Thank You For Registerd We Will Be in Toch With You Soon</h3>
   
//     `        
//   };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });


/// Send Email Area END






         console.log("This is the Info From the FrontEnd ",Info)

    }else{
       console.log("The Email Is Already Exist Plese Enter another Email ") 
       
    }
    
    })

    

})


//Login For Coach
app.post("/LoginCoch",(req,res)=>{
    console.log("Hello Login",req.body)
   const TheEmail = req.body.Email;
   NewCoach.findOne({where:{Email:TheEmail}})
    .then((User)=>{
        if(!User){
            console.log("The Email Is not in the database")
        var obj = {err:User}
        console.log(obj)
            res.send(obj)
        }
        else{
            console.log("Welcome To Your Account")
            res.send(User)
        }
    })


})

// Starting With The Update Info /* UPDATE AREA - START
app.post("/UpdateCoachInfo",(req,res,next)=>{
    console.log("This is the Data I Take ", req.body.UpdatedName)
    const TheEmail = req.body.Email
    console.log("This is the Email From PostMan ",req.body.Email)
    NewCoach.findOne({where:{Email:TheEmail}})
    .then((User)=>{
        if(!User){
            console.log("The Email Is not in the database")
        var obj = {err:User}
        console.log(obj)
            res.send(obj)
        }
        else{
            console.log("This is the User ",User)
            User.update({
                Name:req.body.UpdatedName,
                Email:req.body.Email,
                Bio:req.body.UpdatedBio,
                Experence:req.body.UpdatedExperence,
                UpdateAt:Date.now()
            })
            console.log("This is the Updated Email ",User.name)
            res.send(User)
        }
       // res.send("Finshed")

    })
})


app.post("/UpdateTraineeInfo",(req,res,next)=>{
    console.log("This is the Data I Take ", req.body.UpdatedName)
    const TheEmail = req.body.Email
    console.log("This is the Email From PostMan ",req.body.Email)
    NewTraineeModule.findOne({where:{Email:TheEmail}})
    .then((User)=>{
        if(!User){
            console.log("The Email Is not in the database")
        var obj = {err:User}
        console.log(obj)
            res.send(obj)
        }
        else{
            console.log("This is the User ",User)
            User.update({
                Name:req.body.UpdatedName,
                Email:req.body.Email,
                Bio:req.body.UpdatedBio,
                Experence:req.body.UpdatedExperence,
                Goal:req.body.UpdatedGoal,
                Weight:req.body.UpdatedWeight,
                Height:req.body.UpdatedHeight,
                UpdateAt:Date.now()
            })
            console.log("This is the Updated Email ",User.name)
            res.send(User)
        }
       // res.send("Finshed")

    })
})


app.post('/AddNewTrainee',(req,res) => {

    const TheUserId = req.body.id;

    console.log("This is the Id From the frontend ",TheUserId)



    NewTraineeModule.findOne({where:{CoachInfoId:TheUserId}})
    .then((User)=>{
        if(!User){
        console.log("The Id Is Not There")
        var obj = {err:User}
        console.log(obj)
        res.send(obj)
        }
        else{
           //console.log("This is the User ",User)
            User.update({
                CoachInfoId:1
            })
            console.log("The Couch Was Updated For This User ",User.Name)
            res.send(User)
        }
})

    .catch((err)=>console.log(err))

})





// Starting With The Update Info /* UPDATE AREA - END





app.post('/registerTrainee',(req,res)=>{
    const TheInfo = req.body.Email; 
    const HashPassword = bcrypt.hashSync(req.body.Password,salt)
    console.log(NewTraineeModule)
    NewTraineeModule.findOne({where:{Email:TheInfo},subQuery: false})
    .then((User)=>{

        if(!User){
            const TraineeData = {
                Name:req.body.Name,
                Email:req.body.Email,
                Password:HashPassword,
                Bio:req.body.Bio,
                Experence:req.body.Experence,
                Goal:req.body.Goal,
                Weight:req.body.Weight,
                Height:req.body.Height,
                CoachInfoId:1
        
            }
            const { Name , Email , Password , Bio , Experence , Goal , Weight , Height ,  CoachInfoId} = TraineeData
            NewTraineeModule.create({
                Name,
                Email,
                Password,
                Bio,
                Experence,
                Goal,
                Weight,
                Height,
                CoachInfoId
            })

            NewTraineeModule.findAll({
               where: { id: 1 },
               include: [
                {
                  model: NewCoach,
                }
              ]
              })
              .then(Couch => console.log("This is the Couch Id From the rel database ",Couch))
              .catch(err=>console.log(err))




            console.log("This is the Trainee Info ", TheInfo)

        }else{
            console.log("The Email Is already Exisis")
        }
    })
    
})
app.post('/LoginTrainee',(req,res,next)=>{
   const TheEmail = req.body.Email;
   console.log("The Email",TheEmail)
   NewTraineeModule.findOne({where:{Email:TheEmail}})
    .then((User)=>{

        if(!User){
            console.log("The Email Is not in the database")
        var obj = {err:User}
        console.log(obj)
            res.send(obj)
        }
        else{
            console.log("Welcome To Your Account")
            res.send(User)
        }
    })
})

// Send All The Coachs Inside the database to The frontEnd
app.post('/getAllCoachs',(req,res)=>{
    NewCoach.findAll()
    .then((Coach)=>{

        console.log(Coach)
        res.json(Coach)
    })
    .catch((err)=>console.log(err))
   
})

app.listen(PORT,()=> console.log("The Server Is On ",PORT)); 


/*
get(dfklsdkjfkl?id=${this.sta}&&dfk=,(req,res){
    cosh.findone({
        where:{
           id:id
        }
    }).then(data=>{
        var {id,name}=data.dataValues
        trine.fineAll({
            where:{
                cochid:id
            }
        }).then(df=>{
            res.send({trne:df,cosh:{id,name}})
        })
    })
})

*/