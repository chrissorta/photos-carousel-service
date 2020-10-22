const fs = require('fs');
const csvWriter = require('csv-write-stream');
// const { v4 } = require('uuid');
const faker = require('faker');

const writer = csvWriter();

// const categories = ['Food', 'Drink', 'Interior', 'Exterior', 'Atmosphere'];

// const recentDate = () => {
//   let month = 9 + Math.round(Math.random() * 2);
//   let day = 1 + Math.round(Math.random() * 29);
//   let year = 2020;

//   return year + '-' + month + '-' + day;
// };

const dataGen = async () => {
  // let batch = 0;
  // for (batch; batch <= 4; batch++) {
  const createRecords = async () => {
    writer.pipe(fs.createWriteStream(`SQLDataUsers.csv`));
    for (let i = 1; i <= 250000; i += 1) {
      // let amount = 3 + Math.round(Math.random() * 14);

      writer.write({
        // id: v4(),
        id: i,
        username: faker.internet.userName(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        avatar: faker.image.avatar(),
        // name: faker.company.companyName(),
        // date: recentDate(),
        // city: faker.address.city(),
        // state: faker.address.stateAbbr(),
        // rating: 1 + Math.round(Math.random() * 4),
        // category: categories[Math.round(Math.random() * 4)],
        // description: faker.lorem.words(5),
        // photo: faker.image.food(),
        // user_id: Math.round(Math.random() * 500000),
      });

      if (i % 100000 === 0) {
        console.log('Success, ' + i + ' records downloaded');
      }
    }
    // }
    writer.end();
    console.log('done');
  };
  await createRecords();
};

dataGen();
