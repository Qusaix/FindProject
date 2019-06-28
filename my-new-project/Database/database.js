const express = require('express')
const app = express();
const sequelize = require('sequelize');

const TheData = new sequelize('qusai1',"root","1111",{
    host:"localhost",
    dialect:"mysql",
    // pool: {
    //     max: 5,
    //     min: 0,
    //     acquire: 30000,
    //     idle: 10000
    //   },
    //   define:{
    //     timestamps: false
    //   }
})

TheData.sync({force:false,logging:false})
.then(()=>console.log("DataBaseWasCreated"))
.catch((err)=>console.log("This is the Err ",err))


// const NewTraineeModule = TheData.define('TraineeInfos',{
//   Name:{
//       type:sequelize.STRING
//   },
//   Email:{
//       type:sequelize.STRING,
      
//   },
//   Password:{
//       type:sequelize.STRING
//   },
//   Bio:{
//       type:sequelize.STRING
//   },
//   Experence:{
//       type:sequelize.STRING
//   },
//   Goal:{
//       type:sequelize.STRING
//   },
//   Weight:{
//       type:sequelize.STRING
//   },
//   Height:{
//   type:sequelize.STRING
//   }
// })



// const NewCoach = TheData.define("CoachInfo",{
// Name:{
//     type: sequelize.STRING
// },
// Email:{
//     type:sequelize.STRING
// },
// Password:{
//     type:sequelize.STRING
// },
// Bio:{
//     type:sequelize.STRING
// },
// Experence:{
//     type:sequelize.STRING
// },
// })


// // NewCoach.sync()
// // NewTraineeModule.sync()
// NewTraineeModule.belongsTo(NewCoach)
// NewCoach.hasMany(NewTraineeModule)




module.exports.TheData = TheData;
module.exports.sequelize = sequelize;
//module.exports = NewCoach;





