const express = require('express')
const app = express();
const sequelize = require('sequelize');
// srZOKwU0xw srZOKwU0xw yLSvhquMaf  www.remotemysql.com  // qusai1 root 1111  localhost
const TheData = new sequelize('srZOKwU0xw',"srZOKwU0xw","yLSvhquMaf",{
    host:"www.remotemysql.com",
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


module.exports.TheData = TheData;
module.exports.sequelize = sequelize;
//module.exports = NewCoach;





