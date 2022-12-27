const cors = require('cors');
const express = require("express");
const router = express.Router();
const app = express();
const port = process.env.PORT || 8080;
const data = require('./db.json');

app.get(["/", "/:id"], cors(), (req, res) => {
    res.send(data.data)
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));
