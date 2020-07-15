const express = require('express'); //imported express
const app = express(); //initialised express
const cors = require('cors'); //imported cors
const mongoose = require('mongoose'); //imported mongoose
const dotenv = require('dotenv'); //imported env for security
const bodyParser = require('body-parser');
const studentUrls = require('./api/student');
const assignmentUrls = require('./api/assignment');

//initialised dotenv
dotenv.config(); 

mongoose.connect(process.env.DATABASE_CONNECT, {useUnifiedTopology: true}, () =>
console.log('Database is connected already....'))

app.use(express.json());
app.use(cors())
app.use('/assignment', assignmentUrls);
app.use('/student', studentUrls);

app.listen(5000, () => {console.log('The server is running....')});