module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'Product',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      name: DataTypes.STRING(128),
      branch: DataTypes.STRING(128),
      color: DataTypes.ENUM('random', 'red', 'green', 'blue', 'gray', 'black'),
      price: DataTypes.DECIMAL,
    },
    {
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      tableName: 'products',
    },
  );
