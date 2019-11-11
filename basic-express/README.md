Create a directory `dirname`

Initialize NPM project

```sh
npm init
```



Install express JS

```sh
npm install express
```



Create file called `index.js`



index.js

```js
const express = require('express') // Express Module
const app = express() // Initialize Express App


app.get('/', function(req, res) { // Request and Response at root (localhost:XXXX/)
  res.send("Hello World")
})

app.listen(5500, function() { // Port and callback function
  console.log("App started listenting at port 5500")
})
```

