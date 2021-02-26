const Sequelize = require('sequelize');
const { INTEGER, STRING, FLOAT } = Sequelize;
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:JerryPine@localhost/acme_db');

const Test = db.define('test', {
  columnA: { 
    type: INTEGER, 
  },
  columnB: { 
    type: INTEGER, 
  },
  columnC: { 
    type: INTEGER, 
  },
  columnD: { 
    type: INTEGER, 
  },
  columnE: { 
    type: INTEGER, 
  } 
});

const Data = db.define('data', {
  Cusip: { 
    type: STRING, 
  },
  PoolName: { 
    type: STRING, 
  },
  Type: { 
    type: STRING, 
  },
  Month: { 
    type: STRING, 
  },
  CF: { 
    type: FLOAT, 
  }, 
  Coupon: { 
    type: FLOAT, 
  },
  GWAC: { 
    type: FLOAT, 
  },
  WALA: { 
    type: INTEGER, 
  },
  WAM: { 
    type: INTEGER, 
  }   
},{ timestamps: false });

module.exports = {
    // Include your models in this exports object as well!
    db,
    models: {
      Test,
      Data
    }
  }
