// STARRTING ----DATABASE STUFF should be it's own file and then subdivided 
const { db, models: { Test } } = require('./db');
const app = require('./api')

const syncAndSeed = async()=> {
  await db.sync({ force: true });
  await Promise.all([
    Test.create({ columnA: 1, columnB: 2, columnC: 3, columnD: 4, columnE: 5 }),
    Test.create({ columnA: 6, columnB: 7, columnC: 8, columnD: 9, columnE: 10 }),
    Test.create({ columnA: 11, columnB: 12, columnC: 13, columnD: 14, columnE: 15 }),
 ]);

};

const init = async()=> {
    try {
      await syncAndSeed();
      const port = process.env.PORT || 3000;
      app.listen(port, ()=> console.log(`listening on port ${port}`));
    }
    catch(ex){
      console.log(ex);
    }
  };


init();