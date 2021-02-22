const Sequelize = require('sequelize');
const { INTEGER } = Sequelize;
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


module.exports = {
    // Include your models in this exports object as well!
    db,
    models: {
      Test,
    }
  }
