const express = require('express')
const app = express()
const ejs = require('ejs')
const morgan = require('morgan')
const db = require('monk')('localhost/mydb')

// mongodb://haruka:kodoma7@ds255715.mlab.com:55715/mymovies
// haruka - kodoma7


app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'))
app.use(express.static(__dirname + '/views'))


   // Routig:
app.get('/', function(req, res){
  res.render('pages/00-index.ejs')
})
app.get('/01', function(req, res){
  res.render('pages/01-all.ejs')
})
app.get('/02', function(req, res){
  res.render('pages/02-add.ejs')
})
app.get('/03', function(req, res){
  res.render('pages/03-update.ejs')
})
app.get('/04', function(req, res){
  res.render('pages/04-delete.ejs')
})
app.get('/05', function(req, res){
  res.render('pages/05-findOne.ejs')
})




//--- SERVER

app.listen(5000, function(err){
    if(err){throw err;}
    console.log('server running on 5000');
})
