const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      uniqe: {
        args: true,
        message: "Sorry This Username is Used",
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
  });

  return User;
};
