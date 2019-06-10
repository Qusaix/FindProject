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
module.exports = NewCoach

// module.exports = function(sequelize , DataType){
//     const NewUser = sequelize.define("CoachInfo",{
//         Name:{
//             type: DataType.STRING
//         },
//         Email:{
//             type:DataType.STRING
//         },
//         Password:{
//             type:DataType.STRING
//         },
//         Bio:{
//             type:DataType.STRING
//         },
//         Experence:{
//             type:DataType.STRING
//         }
//         },
//         {
//             tableName: 'CoachInfo'
//           }
//         )

//         return NewUser
// }