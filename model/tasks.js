const mongoose = require('mongoose')

const tasks = new mongoose.Schema(
    {
        title: String,
        // id: String,
        status: String,
        period: Number
    }

)

module.exports = mongoose.model('tasks', tasks)