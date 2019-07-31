const {sequelize , TheData } = require('../database')






const NewTraineeModule = TheData.define('TraineeInfos',{
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
    URL:{
        type:sequelize.STRING
    },
    Protein:{
        type:sequelize.STRING
    },
    Carb:{
        type:sequelize.STRING
    },
    Fat:{
        type:sequelize.STRING
    },
    ProteinC:{
        type:sequelize.STRING
    },
    CarbC:{
        type:sequelize.STRING
    },
    FatC:{
        type:sequelize.STRING
    }
  })
  
  
  
  const NewCoach = TheData.define("CoachInfo",{
  Name:{
      type: sequelize.STRING
  },
  Email:{
      type:sequelize.STRING
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
  URL:{
      type:sequelize.STRING
  }
  })
  
  
  const Blogs = TheData.define("Blogs",{
    TheCreater:{
        type:sequelize.STRING
    },
    Email:{
        type:sequelize.STRING
    },
    Title:{
        type: sequelize.STRING
    },
    content:{
        type:sequelize.STRING
    },
    })



  NewTraineeModule.belongsTo(NewCoach)
  NewCoach.hasMany(NewTraineeModule)
  NewCoach.hasMany(Blogs)
  

module.exports.NewCoach = NewCoach;

module.exports.NewTraineeModule = NewTraineeModule;

module.exports.Blogs = Blogs;

// TheData.sync().done(function() {
// console.log("DONE!")  })


/// New Things 
// const Sequelize = require('sequelize')
// const sequelizeDB = require('../database')
// const NewTraineeModule = require('./TraineeModule');
// // var orm = new Sequelize("Qusai","root","12345678A",{
// //     host:"localhost",
// //     dialect:"mysql",
// //     pool: {
// //         max: 5,
// //         min: 0,
// //         acquire: 30000,
// //         idle: 10000
// //       },
// //       define:{
// //         timestamps: false
// //       }
// // })
// orm.sync({force:true,logging:false})
// .then(()=>console.log("DataBaseWasCreated"))
// .catch((err)=>console.log("This is the Err ",err))
// const TheMiddel = sequelizeDB.define('CoachInfos_has_TraineeInfos',{
//     CoachInfos_id:{
//         type:Sequelize.INTEGER,
//         primaryKey: true
//     },
//     TraineeInfos_id:{
//         type:Sequelize.INTEGER,
//         primaryKey: true
//     }
// })



// const NewCoach = orm.define("CoachInfo",{
// Name:{
//     type: Sequelize.STRING
// },
// Email:{
//     type:Sequelize.STRING
// },
// Password:{
//     type:Sequelize.STRING
// },
// Bio:{
//     type:Sequelize.STRING
// },
// Experence:{
//     type:Sequelize.STRING
// },
// })
// NewCoach.sync()
// NewTraineeModule.sync()





// //{ foreignKey: 'id',sourceKey: 'id' }
// //{ foreignKey: 'id', targetKey: 'id' }
// // NewCoach.hasMany(NewTraineeModule)
// // NewTraineeModule.belongsTo(NewCoach)

// module.exports = NewCoach;











// // CreatedAt:{
//     //     allowNull:false,
//     //     type:Sequelize.DATE,
//     //     defaultValue:Sequelize.NOW
//     // },
//     // UpdatedAt:{
//     //     allowNull:false,
//     //     type:Sequelize.DATE,
//     //     defaultValue:Sequelize.NOW
//     // }
//     /*
    
//     CoachInfoId:{
//     autoIncremt:true,
//     type:Sequelize.INTEGER,
// }
    
//     */


/*
select * from tranee join coch on coch.id = coachInfoId Where tranee.id = id
*/