const fs = require('fs');
const csvWriter = require('csv-write-stream');
const { v4 } = require('uuid');
const faker = require('faker');

const writer = csvWriter();

const categories = ['Food', 'Drink', 'Interior', 'Exterior', 'Atmosphere'];

const recentDate = () => {
  let month = 9 + Math.round(Math.random() * 2);
  let day = 1 + Math.round(Math.random() * 29);
  let year = 2020;

  return year + '-' + month + '-' + day;
};

const dataGen = async () => {
  const createRecords = async (batch) => {
    writer.pipe(fs.createWriteStream(`cassData${batch + 1}.csv`));
    for (let i = (batch * 1000000) + 1; i <= (batch + 1) * 1000000; i += 1) {
      let amount = 3 + Math.round(Math.random() * 14);
      for (let j = 0; j <= amount; j++) {
        writer.write({
          id: v4(),
          restaurant_id: i,
          date: recentDate(),
          avatar: faker.image.avatar(),
          category: categories[Math.round(Math.random() * 4)],
          description: faker.lorem.words(5),
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          photo: faker.image.food(),
          restaurant_name: faker.company.companyName(),
          user_id: Math.round(Math.random() * 250000),
          username: faker.internet.userName(),
        });
      }
      if (i % 100000 === 0) {
        console.log('Success, ' + i + ' records downloaded');
      }
    }
    // }
    writer.end();
    // console.log('done');
  };
  // for (let i = 0; i < 4; i++) {
  await createRecords(3);
  console.log('batch complete');
  // }
};

dataGen();
console.log('done');
