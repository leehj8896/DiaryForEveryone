'use strict';
module.exports = (sequelize, DataTypes) => {
  const reply = sequelize.define('reply', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {});
  reply.associate = function(models) {

    reply.belongsTo(models.user, {
      foreignKey: 'userId'
    });

    reply.belongsTo(models.post, {
      foreignKey: 'postId'
    });

  };
  return reply;
};