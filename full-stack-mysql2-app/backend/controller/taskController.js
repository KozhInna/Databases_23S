const { Task } = require('../models');

exports.getTasks = async (req, res) => {
  try {
    const result = await Task.findAll();
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.postTask = async (req, res) => {
  const { title, done } = req.body;

  try {
    const result = await Task.create({
      title,
      done,
    });
    res.send({ result, message: 'Task has been created.' });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.patchTask = async (req, res) => {
  const { id } = req.params;
  const { title, done } = req.body;
  try {
    const result = await Task.update(
      { title, done },
      {
        where: { id },
      }
    );
    if (title) return res.send({ result, message: 'Task has been updated' });
    if (done) return res.send({ result, message: 'You have completed your task' });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Task.destroy({
      where: { id },
    });
    res.send({ result, message: 'Task has been deleted.' });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
