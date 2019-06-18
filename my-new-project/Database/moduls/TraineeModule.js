const sequelize = require('sequelize');
const sequelizeDb = require('../database')
const NewCoach = require("./CoachIModule")
const orm = require('./CoachIModule')

// const NewTraineeModule = sequelizeDb.define('TraineeInfos',{
//     Name:{
//         type:sequelize.STRING
//     },
//     Email:{
//         type:sequelize.STRING,
        
//     },
//     Password:{
//         type:sequelize.STRING
//     },
//     Bio:{
//         type:sequelize.STRING
//     },
//     Experence:{
//         type:sequelize.STRING
//     },
//     Goal:{
//         type:sequelize.STRING
//     },
//     Weight:{
//         type:sequelize.STRING
//     },
//     Height:{
//     type:sequelize.STRING
//     }
// })
// NewTraineeModule.belongsTo(NewCoach)
// NewCoach.hasMany(NewTraineeModule)
// NewCoach.hasMany(NewTraineeModule); // Will add userId to Task model
// NewTraineeModule.belongsTo(NewCoach);
// module.exports = NewTraineeModule;



// CoachInfoId:{
    //     type:sequelize.INTEGER
    // },
    // CreatedAt:{
    //     allowNull:false,
    //     type:sequelize.DATE,
    //     defaultValue:sequelize.NOW
    // },
    // UpdatedAt:{
    //     allowNull:false,
    //     type:sequelize.DATE,
    //     defaultValue:sequelize.NOW
    // }