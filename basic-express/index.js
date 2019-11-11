const express = require('express') // Express Module
const app = express() // Initialize Express App


app.get('/', function(req, res) { // Request and Response at root (localhost:XXXX/)
  res.send({
    status: 'OK'
  })
})

app.listen(5500, function() { // Port and callback function
  console.log("App started listenting at port 5500")
})