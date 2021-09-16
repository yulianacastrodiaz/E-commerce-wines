const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('grape', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: "La uva no debe estar vacía"
        },
        isAlpha: {
          msg: "La uva debe ser exclusivamente de caracteres alfabéticos",
        }
      }
    }
  })
} 