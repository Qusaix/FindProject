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
},
CreatedAt:{
    allowNull:false,
    type:Sequelize.DATE,
    defaultValue:Sequelize.NOW
},
UpdatedAt:{
    allowNull:false,
    type:Sequelize.DATE,
    defaultValue:Sequelize.NOW
}
})
// NewCoach.hasMany(NewTraineeModule)
// NewTraineeModule.belongsTo(NewCoach)
module.exports = NewCoach;