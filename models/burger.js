module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      
    });
    return Burger;
  };
  
  module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN,
      
    });
    return Burger;
  };
  