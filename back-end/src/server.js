const express = require("express");
const cors = require("cors");

const routes = require("./routes");

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(cors());

app.use(routes);

//inicia servidor
app.listen(PORT, (req, res) => {
  console.log("👩‍🚒 on fire 👩‍🚒");
});
