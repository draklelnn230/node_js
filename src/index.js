const express = require('express');
const handlebars  = require('express-handlebars');
const path = require('path');
const morgan = require('morgan')
const hbs = handlebars.create({ extname: '.hbs' })
const app = express();
const port = 3000

// Static file & SCSS
app.use(express.static(path.join(__dirname, 'public')))


// Template engine(handlebars)
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources', 'views'));

// HTTP logger
app.use(morgan('combined'))
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})