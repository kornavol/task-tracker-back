const express = require('express')
const chalk = require('chalk')

const app = express()

require('dotenv').config()

const tasks = require('./router/tasks')
const connectDB = require('./config/db')

const port = process.env.PORT || 8080

connectDB();

app.use(express.json());

let allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
};
app.use(allowCrossDomain);

app.use('/tasks', tasks)





app.listen(port, () => console.log(chalk.black.bgWhite.bold(`Server is starting to run on ${port}`)))