//import depedencies
const express = require('express');
const path = require('path');
const pages = require('./pages.js')
//starting express
const server = express();
server
.use(express.urlencoded({extended: true}))
//using static files
.use(express.static('public'))
//configure template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')
//create route
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage);

//start server
server.listen(5500);