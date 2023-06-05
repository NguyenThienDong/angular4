const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Origin, X-Requested-With');
    next();
})

app.use(bodyParser.json())

app.get("/", (req, res) => res.send("Angular v4"));
app.post('/sign-in', (req, res) => res.send(req.body));

app.listen(3000, () => console.log('Server running at http://localhost:' + 3000));
