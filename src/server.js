import http from 'node:http'

const server = http.createServer((req, res) => {
  return res.end('hi mother fucker')
})


server.listen(3333)