const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;
const db = require('./models');
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Deployment path
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

const indexRouter = require('./routes/task');
app.use(indexRouter);

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
