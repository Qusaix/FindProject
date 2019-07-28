const express = require("express");
const app = express();
const bodyparser = require('body-parser')
const { TheData } = require('./Database/database')
var { NewCoach , NewTraineeModule , Blogs} = require('./Database/moduls/CoachIModule');
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
const salt = 10; 
const PORT = 5000;

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

TheData.authenticate()
.then(()=>console.log("Database is on"))
.catch((err)=>console.log("There is and err ",err))

app.get('/',(req,res)=>{
    res.send("Hello")
})

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


  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tafran56@gmail.com',
      pass: '12345678D!'
    },tls: {
      rejectUnauthorized: false
  }
  });
  
  var mailOptions = {
    from: 'tafran56@gmail.com',
    to: `${req.body.Email}`,
    subject: 'TAFRAN.inc Registerd in TAFRAN',
    text: `Thank You For Registerd We Will Be in Toch With You Soon`,
    html: `<h1 style="color:#000">App NAME</h1>
    <h3 style="color:#000">Thank You For Registerd We Will Be in Toch With You Soon</h3>
   
    `        
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

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
   console.log("Email :", TheEmail)
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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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




// Adding New Coach For Trainees - Start

app.post('/AddingCouchForTrainee',(req,res)=>{
    var TheCouchId = 0;
    const TheTraineeEmail = req.body.TheLoginTraineeEmail;
    const TheCouchEmail = req.body.TheEmail;
    console.log("Trainee : ",TheTraineeEmail)
    console.log("Couch : ",TheCouchEmail)

    console.log("This is the USER",TheTraineeEmail);

    NewCoach.findOne({where:{Email:TheCouchEmail}})
    .then((User)=>{
        if(!User){
        var obj = {err:User}
        }
        else{
       TheCouchId = User.id
        console.log("The User : ",TheCouchId)

        }
        
})

NewTraineeModule.findOne({where:{Email:TheTraineeEmail}})
.then((User)=>{

    if(!User){

    var obj = {err:User}

    }
    else{

        User.update({
         CoachInfoId:TheCouchId
         })
       console.log("The Couch Was Updated For This User ",User.Name)
        res.send(User)
    }
    


})



})
/* DONE ADDING*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Adding New couch For Trinees - END

// START WITH Relation - START






    // Updateing the The coach for the Trainee API Is Done
app.post('/UpdateTraineeToNewCoach',(req,res) => {

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
                CoachInfoId:3
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
                CoachInfoId:null,
                URL:"https://www.free-and-safe.org/wp-content/uploads/2018/01/nobody_m.original.jpg",
                Protein:"0",
                Carb:"0",
                Fat:"0",
                ProteinC:"0",
                CarbC:"0",
                FatC:"0"
        
            }
            const { Name , Email , Password , Bio , Experence , Goal , Weight , Height ,  CoachInfoId , URL} = TraineeData
            NewTraineeModule.create({
                Name,
                Email,
                Password,
                Bio,
                Experence,
                Goal,
                Weight,
                Height,
                CoachInfoId,
                URL
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

app.post('/SeeAlTraineesYouHave',(req,res)=>{
    var TheCouchId = 0;
    const TraineEmail = req.body.TheEmail;

    console.log("Trainee Email :",TraineEmail)


    // const TheUserId = req.body.id

    //console.log("This is the User ID From The Front End ",TheUserId)

    NewTraineeModule.findOne({where:{Email:TraineEmail}})

    .then((User)=>{

        if(!User){
        console.log("The Id Is Not There")
        var obj = {err:User}
        console.log(obj)
        res.send(obj)
        }
        
        else{
           console.log("This is the Coach Info ID ",User.CoachInfoId)
           TheCouchId = User.CoachInfoId;
           
           // User.update({
            //     CoachInfoId:3
            // })
           // console.log("The Couch Was Updated For This User ",User.Name)
            //res.send(User)
        }


     NewCoach.findOne({where:{id:TheCouchId}})
    .then((User)=>{
        if(!User){
        console.log("The Id Is Not There")
        var obj = {err:User}
        console.log(obj)
        res.send(obj)
        }
        else{
        //    //console.log("This is the User ",User)
        //     User.update({
        //         CoachInfoId:3
        //     })

            console.log("This User Was Send ",User.Name)
            res.send(User)
        }
})

    .catch((err)=>console.log(err))

})

})

app.post('/getAllCoachs',(req,res)=>{
    var TheCouchId = 0;
    const TheCouchEmail = req.body.Email;
    console.log("Coach Email : ",req.body.Email);
    
    NewCoach.findOne({where:{Email:TheCouchEmail}})
    //var TheCouchId = 1
    .then((User)=>{
        
        if(!User){
        console.log("The Id Is Not There")
        var obj = {err:User}
        console.log(obj)
        res.send(obj)
        }
        else{
            TheCouchId = User.id
          console.log("Seeee ",TheCouchId)
            console.log("The Couch Was Updated For This User ",User.Name)
            //res.send(User)
        }
       // TheCouchId = User.id
})
    .catch((err)=>console.log(err))

//////////////////////// PART II ///////////////////////////////////////////////////
    console.log("This The Coach ID ",TheCouchId)
    // NewTraineeModule.findAll({ where: { CoachInfoId: TheCouchId } }).then(projects => {
    //     console.log(projects)
    //   })
    // .catch((err)=>console.log(err))
   
})


app.post('/SeeAllTheCustomers',(req,res)=>{
    console.log("Weclome Home")
    console.log("Couch Email : ",req.body.Email)
    let ThisIsMyId = null;
    const TheCouchEmail = req.body.Email;
    NewCoach.findOne({where:{Email:TheCouchEmail}})
    .then((User)=>{
        if(!User){
        console.log("The Id Is Not There")
        var obj = {err:User}
        console.log(obj)
        res.send(obj)
        }else{
            ThisIsMyId = User.id
           console.log("Coach ID ",ThisIsMyId)
        }

    })

    function Start(){
        NewTraineeModule.findAll({where:{CoachInfoId:ThisIsMyId}})
       .then((couch)=>{
           console.log("inside then : ",couch)
           res.json(couch);
       })
   }
    setTimeout(function(){ Start(); }, 5000); 
})

// START WITH Relation - END

app.post('/SeeAllUsers',(req,res)=>{
    NewCoach.findAll()
    .then((couch)=>{
        res.json(couch);
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

// BLOGS APIs START 

// ADD Done
app.post('/AddBlog',(req,res)=>{
    
    console.log("email : ",req.body.Email);
    console.log("Name :",req.body);

    const AllTheDataFromTheFrontEnd = {
        TheCouchEmail : req.body.Email,

        CouchName : req.body.Name,

        Title : req.body.Title,

        Content : req.body.Content

    }

   const { TheCouchEmail , CouchName , Title , Content } = AllTheDataFromTheFrontEnd;

    var ThisIsMyID = 0;
    // Search Area START
    NewCoach.findOne({where:{Email:TheCouchEmail}})
    .then((User)=>{
        if(!User){
        console.log("The Id Is Not There")
        var obj = {err:User}
        console.log(obj)
       // res.send(obj)
        }else{
            ThisIsMyID = User.id
           console.log("Coach ID ",ThisIsMyID)
        }

    })

    // Search Area END
   function Create (){
    Blogs.create({
        TheCreater:CouchName,
        Email:TheCouchEmail,
        Title:Title,
        content:Content,
        CoachInfoId: ThisIsMyID
    })
    .then((Blogs)=>{res.send(Blogs)})
    .done();
   }
    setTimeout(function(){ Create(); console.log("This is the Id I take To Search : ",ThisIsMyID) }, 100);

    // res.json(Blogs)
})

// See All Blogs Done
app.post('/SeeAllBlogs',(req,res)=>{
    Blogs.findAll()
    .then((Blog)=>{
        console.log("This is the Blogs ",Blog)
        res.json(Blog)
    })
   
})
// The Trainee Can See The Couch Blogs
app.post('/SeeTheBlogsCouchHave',(req,res)=>{

    console.log("See All Couchs :",req.body.TheEmail);

    var CouchEmail = req.body.TheEmail;
    var TheCouchId;
    var Blog;

    NewCoach.findOne({where:{Email:CouchEmail}})
    .then((CouchInfo)=>{
        TheCouchId = CouchInfo.id
    });

    setTimeout(function(){
        Blogs.findAll( { where: { CoachInfoId : TheCouchId } } )

        .then((Blogs)=>{
            Blog = Blogs
        })
        .catch((err)=>console.log("err: ",err))
    },200)

    setTimeout(function(){
    console.log("Blogs :",Blog)
    res.json(Blog)
    },300)
})
// Images Area Upload/SeeAllPhotos
app.post('/uploadImage',(req,res)=>{
    console.log("Email :",req.body.Email)
    NewTraineeModule.findOne({where:{Email:req.body.Email}})
    .then((Trainee)=>{
     //   console.log("URL :",Trainee.URL)
        Trainee.update({
            URL:req.body.URL
        })
       // console.log("After URL :",Trainee.URL)
    })
    // NewTraineeModule.create({ 
    //     URL : req.body.URL
    // })
    res.send("Done!")
})

// Blogs APIs END

// Dite APIs
app.post('/UpdateDite',(req,res)=>{
    console.log(req.body)
    NewTraineeModule.findOne({where:{Email:req.body.TheEmail}})
    .then((Trainee)=>{
        Trainee.update({
            Protein:req.body.Protein,
            Carb:req.body.Carb,
            Fat:req.body.Fat
        }) 
       // res.send(Trainee);
    })
    .catch((err)=>{console.log(err)})
  //  res.send("Done!")
})

app.post('/CouchUpdateDite',(req,res)=>{
    console.log("Email :",req.body.Email)
    NewTraineeModule.findOne({where:{Email:req.body.Email}})
    .then((Trainee)=>{
        Trainee.update({
            ProteinC:req.body.UpdatedProtein,
            CarbC:req.body.UpdatedCarb,
            FatC:req.body.UpdatedFat
        })
    })
    //res.send("The Dite Was Updated")
})

app.listen(PORT,()=> console.log("The Server Is On ",PORT)); 