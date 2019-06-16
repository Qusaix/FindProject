const sequelize = require('sequelize');
const sequelizeDb = require('../database')

const NewTraineeModule = sequelizeDb.define('TraineeInfos',{
    id:{
        unique:true,
        primaryKey:true,
        type:sequelize.INTEGER
    },
    Name:{
        type:sequelize.STRING
    },
    Email:{
        type:sequelize.STRING,
        
    },
    Password:{
        type:sequelize.STRING
    },
    Bio:{
        type:sequelize.STRING
    },
    Experence:{
        type:sequelize.STRING
    },
    Goal:{
        type:sequelize.STRING
    },
    Weight:{
        type:sequelize.STRING
    },
    Height:{
    type:sequelize.STRING
    },
    CoachInfoId:{
        type:sequelize.INTEGER
    },
    CreatedAt:{
        allowNull:false,
        type:sequelize.DATE,
        defaultValue:sequelize.NOW
    },
    UpdatedAt:{
        allowNull:false,
        type:sequelize.DATE,
        defaultValue:sequelize.NOW
    }

})
module.exports = NewTraineeModule;
