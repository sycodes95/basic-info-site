const express = require('express')
const app = express()


app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
  res.render('index')
})
app.get('/about', (req, res) =>{
  res.render('about')
})
app.get('/contact-me', (req, res) =>{
  res.render('contact-me')
})
app.get('/404', (req, res) =>{
  res.render('404')
})


app.listen(3000)

/*
const http = require('http');
const fs = require('fs');
const port = 8080;

const requestHandler = (req, res) => {
  if (req.url === '/') {
    fs.readFile(__dirname + '/index.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  } else if (req.url === '/about') {
    fs.readFile(__dirname + '/about.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  } else if (req.url === '/contact-me') {
    fs.readFile(__dirname + '/contact-me.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  } else {
    fs.readFile(__dirname + '/404.html', (err, data) => {
      if (err) throw err;
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('error', err);
  }
  console.log(`server is listening on ${port}`);
});
*/