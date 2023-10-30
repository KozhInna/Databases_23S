const Tasks = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    'Tasks',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: 'tasks_react23s',
      freezeTableName: true,
      timestamps: true,
      updatedAt: false,
    }
  );

  return model;
};

module.exports = Tasks;
