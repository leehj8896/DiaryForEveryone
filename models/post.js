'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  post.associate = function(models) {
    post.belongsTo(models.user, {
      foreignKey: 'userId'
    });
    post.hasMany(models.reply);
  };
  return post;
};