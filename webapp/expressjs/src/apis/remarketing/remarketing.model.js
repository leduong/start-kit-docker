module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'Remarketing',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      event: DataTypes.TEXT,
    },
    {
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      tableName: 'remarketings',
    },
  );
