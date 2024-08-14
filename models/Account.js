const { DataTypes } = require('sequelize');
const db = require('../utils/db');

const Account = db.define('Account', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },  
});
module.exports = Account;