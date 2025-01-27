const express = require('express');

const logger = require('./src/middleware/logger')
const error404 = require('./src/middleware/err-404')
const userRouter = require('./src/routes/user')
const appRouter = require('./src/routes/app')
const indexRouter = require('./src/routes/main')

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

app.use(logger);
app.use('/', indexRouter);
app.use('/api/user', userRouter);
app.use('/api/app', appRouter);
app.use(error404);

const PORT = process.env.PORT || 3005;
app.listen(PORT);