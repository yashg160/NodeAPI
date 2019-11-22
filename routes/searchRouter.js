const express = require('express');
const bodyParser = require('body-parser');

const searchRouter = express.Router();
searchRouter.use(bodyParser.json())

searchRouter.route('/')
    .get((req, res, next) => {
        console.log(req.query);
        //Get the query parameters
        const searchBy = req.query.searchBy;
        const value = req.query.value;

        if (searchBy == 'name') {
            db.query(`SELECT * FROM students WHERE name = '${value}'`, (error, result, fields) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log(result);
                    let response = [];

                    result.forEach(element => {
                        response.push({
                            roll_no: element.roll_no,
                            name: element.name,
                            age: element.age,
                            course_id: element.course_id
                        });
                    });

                    console.log(response);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.header('Access-Control-Allow-Headers', 'Content-Type');
                    res.header('Access-Control-Allow-Origin', '*');
                    res.send({response});
                }
                
            });
        }
        else {
            db.query(`SELECT * FROM students WHERE course_id = '${value}'`, (error, result, fields) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log(result);
                    let response = [];

                    result.forEach(element => {
                        response.push({
                            roll_no: element.roll_no,
                            name: element.name,
                            age: element.age,
                            course_id: element.course_id
                        });
                    });

                    console.log(response);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.header('Access-Control-Allow-Headers', 'Content-Type');
                    res.header('Access-Control-Allow-Origin', '*');
                    res.send({ response });
                }
            });
        }
    });

module.exports = searchRouter;    