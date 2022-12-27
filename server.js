const cors = require('cors');
const express = require("express");
const router = express.Router();
const app = express();
const port = process.env.PORT || 8080;
const data = require('./db.json');

// let corsOptions = {
//     origin: 'https://real-trip-advisor-homepage.fly.dev/',
//     credentials: true
// }
// app.use(cors(corsOptions));

app.get(["/", "/:id"], cors({origin: 'https://real-trip-advisor-homepage.fly.dev'}), (req, res) => {
    res.send(data.data)
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));
