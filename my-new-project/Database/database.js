const express = require('express')
const app = express();
const Sequelize = require('sequelize');

module.exports = new Sequelize('FindFitness1',"root","12345678A",{
    host:"localhost",
    dialect:"mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      define:{
        timestamps: false
      }
})


