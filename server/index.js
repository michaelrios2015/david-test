// STARRTING ----DATABASE STUFF should be it's own file and then subdivided 
const { db, models: { Test, Data } } = require('./db');
const app = require('./api')
const fs = require("fs");
const fastcsv = require("fast-csv");


  let streamTwo = fs.createReadStream('15YP.csv');
  let csvDataTwo = [];
  let csvStreamTwo = fastcsv
  .parse()
  .on("data", function(data) {
    // console.log('here')
    csvDataTwo.push(data);
  })
  .on("end", async function() {
    for (let i = 0; i < csvDataTwo.length; i++ ){
      // console.log(csvDataTwo[i][0]);
      await Data.create({ Cusip: csvDataTwo[i][0], PoolName: csvDataTwo[i][1], Type: csvDataTwo[i][2], Month: csvDataTwo[i][3], CF: csvDataTwo[i][4], 
        Coupon: csvDataTwo[i][5], GWAC: csvDataTwo[i][6], WALA: csvDataTwo[i][7], WAM: csvDataTwo[i][8] })
    }
  });

  const syncAndSeed = async()=> {
    await db.sync({ force: true });

  //  stream.pipe(csvStream);
   streamTwo.pipe(csvStreamTwo);

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