const express = require('express');

const logger = require('./src/middleware/logger')
const error404 = require('./src/middleware/err-404')
const userRouter = require('./src/routes/user')
const appRouter = require('./src/routes/app')

const app = express();
app.use(express.json);

app.use(logger);
app.use('/api/user', userRouter);
app.use('/api/app', appRouter);
app.use(error404);

const PORT = process.env.PORT || 3005;
app.listen(PORT);