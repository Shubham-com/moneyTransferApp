require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const customer = require('./server/service/customerService');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3000);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})
app.get('/view', (req, res) => {
    res.sendFile(__dirname + '/public/view.html');
});
app.get(`/tranferToList/:custId`, (req, res) => {
    res.sendFile(__dirname + '/public/money.html');
});
app.get('/getAllCustomers', (req, res) => {
    customer.getAllCustomers(req, res);
})
app.get('/getTransferToList/:custId', (req, res) => {
    customer.getTransferToList(req, res);
})




