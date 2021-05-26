const router = require("express").Router();

const taskContr = require('../controller/tasks')



router.post('/new', taskContr.newTask);

router.get('/all', taskContr.getAll);

module.exports = router;