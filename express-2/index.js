const express = require('express')
const app = express()

app.get('/', function(request, response) {
  response.status(200).send([
    {
      'id': 1,
      'name': 'Dan'
    },
    {
      'id': 2,
      'name': 'Juanito'
    }
  ])
})
app.listen(3001, function() {
  console.log("App is running on server port 3001")
})