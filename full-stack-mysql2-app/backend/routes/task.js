const express = require('express');
const controller = require('../controller/taskController');
const router = express.Router();

router.get('/tasks', controller.getTasks);
router.post('/task', controller.postTask);
router.patch('/task/:id', controller.patchTask);
router.delete('/task/:id', controller.deleteTask);

module.exports = router;
