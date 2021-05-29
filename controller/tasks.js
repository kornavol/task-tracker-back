const chalk = require('chalk')

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

exports.deleteTask = async (req, res) => {
    const id = req.params.itemID

    await tasksModel.findByIdAndDelete(id, (err, doc) => {
        if (err) {
            console.log(chalk(err));
            res.status(500).send({ status: "failed", message: err })
        } else {
            res.send({ status: "success", message: `Task with ${doc._id} was deleted`})
        }
    })
    
}

exports.updateTask =  async (req, res) => {
    
    const task = { ...req.body }

    console.log(req.body );
    
    await tasksModel.findByIdAndUpdate(task._id, task,  (err, doc) => {
        if (err) {
            console.log(chalk(err));
            res.status(500).send({ status: "failed", message: err })
        } else if (!doc)  {
            console.log(chalk(doc));
            res.status(500).send({ status: "failed", message: `Task with ${doc._id} not exist` })
        }
        
        else {
            console.log(chalk(doc));
            res.send({ status: "success", message: `Task with ${doc._id} was updated`})
        }
    })
    }

// exports.updateContact = async (req, res) => {
//     console.log(req.body);
//     const contact = { ...req.body }
  
//     contacts.findByIdAndUpdate(contact._id, contact, { upsert: true, runValidators: true }, (err, doc) => {
//       if (err) {
//         console.log(err);
//         res.send({ status: 'failed', message: err });
//       } else {
//         console.log(doc);
//         logModel.findByIdAndUpdate(req.logId, { preData: JSON.stringify(doc), postData: JSON.stringify(contact) }, (err) => { });
//         res.send(({ status: 'success', message: 'Contact updated successfully' }));
//       }
//     });
//   }