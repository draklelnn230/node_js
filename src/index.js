const express = require('express');
const morgan = require('morgan')
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello, world!');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})