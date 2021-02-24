// STARRTING ----DATABASE STUFF should be it's own file and then subdivided 
const { db, models: { Test } } = require('./db');
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
    // remove the first line: header
  // csvData.shift();

    // console.log('-----------------------------');
    // console.log(csvData);
    for (let i = 0; i < csvData.length; i++ ){
      // console.log(csvData[i]);
      await Test.create({ columnA: csvData[i][0], columnB: csvData[i][1], columnC: csvData[i][2], columnD: csvData[i][3], columnE: csvData[i][4] })
    }
    // connect to the MySQL database
    // save csvData
  });

  const syncAndSeed = async()=> {
    await db.sync({ force: true });
    await Promise.all([
      Test.create({ columnA: 1, columnB: 2, columnC: 3, columnD: 4, columnE: 5 }),
      Test.create({ columnA: 6, columnB: 7, columnC: 8, columnD: 9, columnE: 10 }),
      Test.create({ columnA: 11, columnB: 12, columnC: 13, columnD: 14, columnE: 15 }),
   ]);
   stream.pipe(csvStream);

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