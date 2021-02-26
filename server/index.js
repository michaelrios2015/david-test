// STARRTING ----DATABASE STUFF should be it's own file and then subdivided 
const { db, models: { Test, Data } } = require('./db');
const app = require('./api')
const fs = require("fs");
const fastcsv = require("fast-csv");


// can read in csv
let stream = fs.createReadStream('data.csv');
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    // console.log('here')
    csvData.push(data);
  })
  .on("end", async function() {
    for (let i = 0; i < csvData.length; i++ ){
      // console.log(csvData[i]);
      await Test.create({ columnA: csvData[i][0], columnB: csvData[i][1], columnC: csvData[i][2], columnD: csvData[i][3], columnE: csvData[i][4] })
    }
  });

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
  //   await Promise.all([
  //     Test.create({ columnA: 1, columnB: 2, columnC: 3, columnD: 4, columnE: 5 }),
  //     Test.create({ columnA: 6, columnB: 7, columnC: 8, columnD: 9, columnE: 10 }),
  //     Test.create({ columnA: 11, columnB: 12, columnC: 13, columnD: 14, columnE: 15 }),
  //  ]);
   stream.pipe(csvStream);
   streamTwo.pipe(csvStreamTwo);

  };

  
// console.log('-----------------------------');
// console.log(csvData);


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