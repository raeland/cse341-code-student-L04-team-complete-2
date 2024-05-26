const express = require('express')
//const cors = require('cors');
const app = express()
const MongoClient = require('mongodb').MongoClient
const mongodb = require('./db/connect')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const PORT = process.env.PORT || 8080
app
   .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
//   .use(cors())
//   .use(express.json())
//   .use(express.urlencoded({ extended: true }))
  .use('/', require('./routes'))
  //.use(bodyParser.json())
  //.use((req, res, next) => {
//    res.setHeader('Access-Control-Allow-Origin', '*')
  //next()
    //})
app
  .get('/', (req, res) => {
    res.send('howdy')})

//const db = require('./models');
                                                                                                                                                                                                                                                                                                                                                  
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err)
  } else {
    app.listen(PORT)
    console.log(`Server is running on port ${PORT}.`)
}})
