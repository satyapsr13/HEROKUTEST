const express = require('express')
const app = express()
const port = process.env.PORT || 1000
const data = require("./data.json")
app.get('/', (req, res) => {
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'json'
    });

    res.json(data);
    console.log(data);


});
app.get('/letsPlay', (req, res) => {
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'json'
    });
    res.json({
        "lets": "play",
        "lesdfdts": "play",
        "lesdts": "play",
        "lesdfdts": "play",
        "lesddts": "play",
        "ledts": "play"
    });
    console.log(data);

});
app.use(express.json());

console.log("------------------------------");
console.log(process.env.PORT);
console.log("------------------------------");
// console.log(process.env.PORT);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))