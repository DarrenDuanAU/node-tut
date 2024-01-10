const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('home page')
    return
  }
  if(req.url === '/about') {
    res.end('about page')
    return
  }
  res.end(`
  <h1>Opps!</h1>
  `)
})

server.listen(5500)