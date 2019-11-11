const express = require('express') // Express Module
const router = express.Router()
const app = express() // Initialize Express App
const apiRouter = require('./api/routes')
const bodyParser = require('body-parser')




app.use('/api/', router)
apiRouter(router)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false  }))

app.get('/', function(req, res) { // Request and Response at root (localhost:XXXX/)
  res.send({
    'status': 'OK'
  })
})

app.listen(5500, function() {
  console.log("App started listenting at port 5500")
})