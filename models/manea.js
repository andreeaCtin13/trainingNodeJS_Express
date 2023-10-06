module.exports = (sequelize, DataTypes) => {
  // Define the "manele" model
  return sequelize.define(
    "manele",
    {
      denumire: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      artist: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "manele",
    }
  );
};
