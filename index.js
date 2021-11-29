const express = require('express')
const app = express()
const port = process.env.PORT||1000
const data = require("./data.json")
app.get('/', (req, res) => {
    res.json(JSON.stringify(data));
    console.log(data);

})
app.use(express.json());

console.log("------------------------------");
console.log(process.env.PORT);
console.log("------------------------------");
// console.log(process.env.PORT);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))