const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const { sequelize } = require('../shared-orm-library');

const app = express();
app.use(cors());

app.use('/users', userRoutes);

sequelize.sync().then(() => {
  app.listen(3001, () => console.log('Backend running on port 3001'));
});
