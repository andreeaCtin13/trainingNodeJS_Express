//punctul principal al proiectului nostru
const express = require("express");
const app = express();
const port = 8080; //putem folosi orice port, 8080 deobicei e liber la toata lumea
const router = require("./routes");

app.use(express.json());
app.use("/api", router);

app.use("/", (req, res) => {
  res.status(200).send({ message: "Aplicatia ruleaza" });
});

app.listen(port, () => {
  console.log(`Aplicatia ruleaza pe portul ${port}`);
});
