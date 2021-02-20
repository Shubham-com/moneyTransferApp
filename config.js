const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://root:shubham2359:5432/dbname')

sequelize

.authenticate()

.then(() => {

console.log('Connection has been established successfully.');

})

.catch(err => {

console.error('Unable to connect to the database:', err);

});