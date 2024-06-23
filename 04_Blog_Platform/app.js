const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const sequelize = require('./config/connection');

const app = express();
const PORT = 8083;

app.use(bodyParser.json());
app.use('/api', postRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
