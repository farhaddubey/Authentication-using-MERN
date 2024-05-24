const connectToMongo =require('./db');
const express = require('express')

connectToMongo();
const app = express()
const port = 3000


// // Available Routes
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/notes',require('./routes/api/notes'))

app.get('/', (req, res) =>
  res.send('Hello Farhad Dubey the Great! Whose Entire Brain, Pain, and all actions are under right diretion & only towards his goal.')
)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})