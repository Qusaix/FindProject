const Sequelize = require('sequelize')
const sequelizeDB = require('../database')

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
}
})
module.exports = NewCoach;