const fs = require('fs');
const csvWriter = require('csv-write-stream');
// const { v4 } = require('uuid');
const faker = require('faker');

const writer = csvWriter();

const categories = ['Food', 'Drink', 'Interior', 'Exterior', 'Atmosphere'];

const recentDate = () => {
  let month = 9 + Math.round(Math.random() * 2);
  let day;
  if (month === 2) {
    day = 1 + Math.round(Math.random() * 27);
  } else {
    day = 1 + Math.round(Math.random() * 29);
  }
  let year = 2020;

  return year + '-' + month + '-' + day;
};

const dataGen = async () => {
  // let batch = 0;
  // for (batch; batch <= 4; batch++) {
  const createRecords = async () => {
    writer.pipe(fs.createWriteStream(`SQLDataPhotos2.csv`));
    for (let i = 2000001; i <= 4000000; i += 1) {
      let amount = 3 + Math.round(Math.random() * 14);
      for (let j = 0; j <= amount; j++) {
        writer.write({
          // id: v4(),
          // id: i,
          user_id: 1 + Math.round(Math.random() * 249999),
          restaurant_id: i,
          // username: faker.internet.userName(),
          // first_name: faker.name.firstName(),
          // last_name: faker.name.lastName(),
          // avatar: faker.image.avatar(),
          photo: faker.image.food(),
          description: faker.lorem.words(5),
          category: categories[Math.round(Math.random() * 4)],
          date: recentDate(),
          // name: faker.company.companyName(),
          // city: faker.address.city(),
          // state: faker.address.stateAbbr(),
          // rating: 1 + Math.round(Math.random() * 4),
        });
      }
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
