require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const expressLayout = require('express-ejs-layouts')


app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Router
app.use('/', require('./server/routes/main'))


// Listening Port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
