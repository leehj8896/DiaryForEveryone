'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nickname: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    user.hasMany(models.post);
    user.hasMany(models.reply);
};
  return user;
};