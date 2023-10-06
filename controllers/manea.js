const CaseDeDiscuriDb = require("../models").CaseDeDiscuri;
const ManeleDb = require("../models").Manele;

const controller = {
  getManeaById: (req, res) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send({ message: "Trebuie specificat un id" }); // 400 bad request
    }
    //odata ce s a intamplat send ul, se iese din functie
    ManeleDb.findByPK(id)
      .then((manea) => {
        if (manea) {
          res.status(200).send(manea);
        } else {
          res.status(404).send({ message: "Maneaua nu a fost gasita" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "Server error" });
      });
  },
  getAllManele: (req, res) => {
    ManeleDb.findAll()
      .then((manele) => {
        res.status(200).send(manele);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "server error" });
      });
  },
  addManea: (req, res) => {
    const { caseDeDiscuriId, denumire, artist } = req.body;
    CaseDeDiscuriDb.findByPK(caseDeDiscuriId) // o sa caute casa de discuri al carei id l am dat
      .then((casaDeDiscuri) => {
        if (casaDeDiscuri) {
          //daca am intrat pe then nu inseamna neaparat ca am si primit ce ne asteptam sa primim
          casaDeDiscuri
            .createManele({ denumire, artist })
            .then((manea) => {
              res.status(201).send(manea);
            })
            .catch((err) => {
              console.log(err);
              res.status(500).send({ message: "SERVER ERROR BRO" });
            });
        } else {
          res
            .status(404)
            .send({ message: "Nu exista casa de discuri cautata" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Server error");
      });
  },
};

module.exports = controller;
