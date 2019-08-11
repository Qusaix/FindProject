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
