module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'Order',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      product_id: DataTypes.UUID,
      data: DataTypes.TEXT,
    },
    {
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      tableName: 'orders',
    },
  );
