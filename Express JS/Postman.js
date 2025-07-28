const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Hello World!')
}).post('/', (req, res) => {
  res.send('Hello World post!')
}).put('/', (req, res) => {
  res.send('Hello World put!')
})

app.get("/index", (req, res) => {
  res.send('Hello index!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
