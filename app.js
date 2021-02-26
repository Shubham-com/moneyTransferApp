const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const customer = require('./server/service/customerService');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 3000))

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
//console.log(process.env.PORT)
//app.listen(process.env.PORT);

app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'))
})



