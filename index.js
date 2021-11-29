const express = require('express')
const app = express()
const port = process.env.PORT  

app.get('/', (req, res) => res.send('Hello Wodsfdfgsgrld!'))

console.log("------------------------------");
console.log(process.env.PORT);
console.log("------------------------------");
// console.log(process.env.PORT);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))