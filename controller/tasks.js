const tasksModel = require('../model/tasks')

exports.newTask = async (req, res) => {

    const newTask = new tasksModel(req.body);

    await newTask.save((err, doc) => {
        if (err) {
            console.log(err);
        } else {
            // res.send({ status: 'success', messege: "New task was added" })
            res.send(doc);
        }
    })
}

exports.getAll = async (req, res) => {
    tasksModel.find({}, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            res.send(doc)
        }
    })
}