const express = require('express');
const bodyParser = require('body-parser');

const searchRouter = express.Router();
searchRouter.use(bodyParser.json())

searchRouter.route('/')
    .get((req, res, next) => {
        console.log(req.query);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end('\nHello World\n');
    });

module.exports = searchRouter;    