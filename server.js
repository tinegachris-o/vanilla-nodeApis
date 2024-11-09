const http = require('http');
require('dotenv').config();
const getReq= require('./methods/get-request')
const putReq= require('./methods/put-request')
const deleteReq=require('./methods/delete-request')
const postReq=require('./methods/post-request')

let movies=require('./data/movies.json')


let port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
req.movies=movies
    switch(req.method) {
        case "GET":
            getReq(req, res);
            break;
        case "POST":
            postReq(req, res);
            break;
        case "PUT":
            putReq(req, res);
            break;
        case "DELETE":
            deleteReq(req, res);
            break;
        default:
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify({ title: "Not Found",message:"Route nt found" }));
            res.end();
            break;
    }
});


/*function getReq(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({ message: "GET request received" }));
    res.end();
}

function postReq(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({ message: "POST request received" }));
    res.end();
}

function putReq(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({ message: "PUT request received" }));
    res.end();
}

function deleteReq(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({ message: "DELETE request received" }));
    res.end();
}*/


server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
