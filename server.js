const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const data = require('./db.json');

app.get(["/", "/:name"], (req, res) => {
    res.send(data);
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));
