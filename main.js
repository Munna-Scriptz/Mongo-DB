const express = require('express')
const app = express()
app.use(express.json())
// -------------------- Db Config require --------------------
const dbConnect = require('./dbConfig')
dbConnect()

// -------------------- Routers require --------------------
const route = require('./routes')
app.use(route)




// -------------------- Server Listening --------------------
app.listen(8000, () => {
  console.log(`Server Is Running`)
})
