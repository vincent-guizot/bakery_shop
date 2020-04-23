'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class User extends Model {}

  User.init({
    username: {
      type: Sequelize.STRING,
      allowNul: false,
      validate: {
        notNull: {
          msg: 'Email tidak boleh kosong'
        }
      }
    },
    password: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Password tidak boleh kosong'
      }
    }
  }, {sequelize});

  User.beforeCreate((instance, option) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(intance.password, salt);
    instance.password = hash
  })

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
