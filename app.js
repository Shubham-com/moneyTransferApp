//require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Sequelize = require('sequelize');
const customer = require('./service/customer')
const sequelize = new Sequelize('postgres://postgres:shubham123@127.0.0.1:5432/banking');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    }); 
app.listen(3000);
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
})
app.get('/view',(req,res)=>{
    res.sendFile(__dirname+'/public/view.html');
});
app.get('/getAllCustomers',(req,res)=>{
    customer.getAllCustomers();
})




