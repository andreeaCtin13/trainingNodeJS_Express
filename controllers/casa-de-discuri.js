const CaseDeDiscuriDb = require("../models").CaseDeDiscuri;
const ManeleDb = require("../models").Manele;

const controller = {
  getAllCaseDeDiscuri: (req, res) => {
    CaseDeDiscuriDb.findAll({
      include: [{ model: ManeleDb, as: "Manele" }],
    })
      .then((x) => {
        res.status(200).send(x);
        //x resprezinta o casa de discuri
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "SERVER ERROR" });
      }); //cauta toate instantele din db pt un anumit model
  },

  addCasaDeDiscuri: (req, res) => {
    const { denumire } = req.body;
    //daca nu sunt in re.body sunt in req.param
    //info vine sub forma de json

    CaseDeDiscuriDb.create({ denumire })
      .then((casaDeDiscuri) => {
        res.status(201).send(casaDeDiscuri);
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .send({ message: "EROARE LA ADAUGAREA CASEI DE DISCURI" });
      });
  },
};

module.exports = controller;
