const Squelize = require("sequelize");
const db = require("../database/db");

const User = db.sequelize.define(
  "user",
  {
    id: {
      type: Squelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    first_name: {
      type: Squelize.STRING
    },
    last_name: {
      type: Squelize.STRING
    },
    adresse: {
      type: Squelize.STRING
    },
    tel: {
      type: Squelize.INTEGER
    },
    date: {
      type: Squelize.DATE
    },
    horaire_livraison: {
      type: Squelize.TIME
    },
    email:{
        type: Squelize.STRING
    },
    password: {
      type: Squelize.STRING
    },
    created: {
      type: Squelize.DATE,
      defaultValue: Squelize.NOW
    }
  },
  {
    timestamps: false
  }
);

User.sync({ force: false }).then(() => {
    
})

module.exports = User