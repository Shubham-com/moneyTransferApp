"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert({
        tableName: "customer",
        schema: 'public'
      },
      [{
          custName: "Srish",
          email: "srish@gmail.com",
          currBalance:20000,
          active: true
        },
        {
          custName: "Shubham",
          email: "shubham@gmail.com",
          currBalance:20000,
          active: true
        },
        {
          custName: "Shubham C",
          email: "shubhamc@gmail.com",
          currBalance:20000,
          active: true
        },
        {
          custName: "Swati C",
          email: "swatic@gmail.com",
          currBalance:20000,
          active: true
        },
        {
          custName: "Swati",
          email: "swati@gmail.com",
          currBalance:2300,
          active: true
        },
        {
          custName: "Srishti",
          email: "srishti@gmail.com",
          currBalance:10000,
          active: true
        },
        {
          custName: "Aakriti",
          email: "aakriti@gmail.com",
          currBalance:20000,
          active: true
        },
        {
          custName: "John",
          email: "john@gmail.com",
          currBalance:20000,
          active: true
        },
        {
          custName: "James",
          email: "james@gmail.com",
          currBalance:20000,
          active: true
        },
        {
          custName: "Harshit",
          email: "harshit@gmail.com",
          currBalance:20000,
          active: true
        }
      ], {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("customer", null, {});
  }
};