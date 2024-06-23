const express = require('express');
const sequelize = require('./config/connection');
const productRoutes = require('./routes/productRoutes');
const bodyParser = require('body-parser');

const app = express();
const PORT =8080;

app.use(bodyParser.json());

app.use('/api', productRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
  });
});



