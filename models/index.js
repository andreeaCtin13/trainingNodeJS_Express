const Sequelize = require("sequelize");
const db = require("../config/db");

const CaseDeDiscuriModel = require("./casa-de-discuri");
const ManeleModel = require("./manea");

const CaseDeDiscuri = CaseDeDiscuriModel(db, Sequelize);
const Manele = ManeleModel(db, Sequelize);

CaseDeDiscuri.hasMany(Manele, {
  foreignKey: "caseDeDiscuriId",
  as: "Manele",
  onDelete: "CASCADE",
});

Manele.belongsTo(CaseDeDiscuri); //apartine unei singure case de discuri

module.exports = {
  CaseDeDiscuri,
  Manele,
  connection: db, //de akm inainte cand ne referim la db, ne referim la conexiune
};
