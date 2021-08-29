const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 5050;

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/meamenu'
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 5000,
  })
  .catch((error) => console.log(error))

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection enstablished')
})

mongoose.connection.on('error', (err) => {
  console.log(err)
})


app.get('/', (req, res) => {
	res.json({result : 'Express server is running'});
})



app.listen(port, () => console.log(`Running on port ${port}`));