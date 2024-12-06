const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const accountRouter = require('./routes/accountRouter');
const tokensRouter = require('./routes/tokensRouter');
const sockRouter = require('./routes/sockRouter');
const cartRouter = require('./routes/cartRouter');
const likeRouter = require('./routes/likeRouter');
const generatorRouter = require('./routes/generatorRouter');

const app = express();

app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/account', accountRouter);
app.use('/api/tokens', tokensRouter);
app.use('/api/socks', sockRouter);
app.use('/api/carts', cartRouter);
app.use('/api/likes', likeRouter);
app.use('/api/lgenerators', generatorRouter);

module.exports = app;
