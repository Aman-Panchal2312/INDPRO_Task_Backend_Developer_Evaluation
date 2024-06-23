const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');
const sequelize = require('./config/connection');

const app = express();
const PORT = 8082;

app.use(bodyParser.json());
app.use('/api', orderRoutes);

sequelize.sync({force:true}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
