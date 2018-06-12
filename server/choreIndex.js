const express = require('express');
const cors = require('cors')
const {json} = require('body-parser')

const PORT = 3055;

const app = express()
app.use(cors())
app.use(json())




app.listen(PORT, console.log(`Now turned into ${PORT} FM`))