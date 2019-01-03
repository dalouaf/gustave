const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("nodejs_login", "root", "",{
host : 'localhost',
dialect: 'mysql',
operatorsAliases: false,

pool:{
max : 5,
min: 0,
acquire: 30000,
idle: 10000
}})

db.sequelize = sequelize
db.Sequelize = Sequelize

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to database successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
module.exports = db