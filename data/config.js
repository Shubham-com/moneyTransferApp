console.log(`Using local env file`);  
require('dotenv').config();
module.exports = {
    development: {
      use_env_variable: "DATABASE_URL",
      schema: 'public',
      dialect: "postgres",
     // ssl: process.env.ENV == "local" ? false : true,
       dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // <<<<<<< YOU NEED THIS
    }
  },
      logging: true,
      seederStorage: "sequelize"
    }
};
