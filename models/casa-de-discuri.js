module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "case-de-discuri",
    {
      denumire: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "caseDeDiscuri",
    }
  );
};
