const Sequelize = require('sequelize')
const sequelizeDB = require('../database')
const NewTraineeModule = require('./TraineeModule');

const NewCoach = sequelizeDB.define("CoachInfo",{
    Name:{
    type: Sequelize.STRING
},
Email:{
    type:Sequelize.STRING
},
Password:{
    type:Sequelize.STRING
},
Bio:{
    type:Sequelize.STRING
},
Experence:{
    type:Sequelize.STRING
},
CoachInfoId:{
    autoIncremt:true,
    type:Sequelize.INTEGER
}
})
NewCoach.hasMany(NewTraineeModule)
NewTraineeModule.belongsTo(NewCoach)
module.exports = NewCoach;