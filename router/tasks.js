const router = require("express").Router();

const taskContr = require('../controller/tasks')



router.post('/new', taskContr.newTask);

router.get('/all', taskContr.getAll);

// router.delete('/delete:itemID', taskContr.deleteTask);

router.delete("/delete/:itemID", taskContr.deleteTask);

router.post('/update', taskContr.updateTask);



module.exports = router;