const express = require('express');
const usersRouter = require('./routes/usersRouter');
const { errorHandler } = require('./middleware/errorHandle');
require('./utils/dbConnect')(); //require is a function

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.NODE_PORT || 5100;
require('dotenv').config();

//----Routes-----
app.use('/api/v1/users', usersRouter);

//==error handler
app.use(errorHandler);

//start the server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
