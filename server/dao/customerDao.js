const models = require("../../data/model/index");
const { Op } = require("sequelize");

class customerDao {
    constructor() {
        this.readByOrder = (cb) => {
            models.customer.findAll({ order: [["customerid", "ASC"]] }).then(data => {
                cb(true, data);
            }).catch(err => {
                cb(false, ` error in customer Dao readByOrder${err}`)
            })
        },
            this.getById = (searchObj, cb) => {
                models.customer.findAll({
                    where: {
                        customerid: {
                            [Op.not]: searchObj
                        }
                    }
                }).then(data => {
                    cb(true, data);
                }).catch(err => {
                    cb(false, ` error in customer Dao readByOrder${err}`)
                })
            }
            this.transferMoney = (toCustId, amount, fromCustId, cb) => {
            models.customer.findAll({
                where: {
                    customerid: toCustId
                }
            }).then(data => {
                data[0].currBalance = parseInt(data[0].currBalance) + parseInt(amount);
                data[0].save().then(data => {
                    this.updatefromCust(amount, fromCustId, (result, msg) => {
                        if (result == true) {
                            cb(true, msg)
                        } else {
                            cb(false, msg)
                        }
                    })
                }).catch(err => {
                    console.log(err);
                    cb(false, err);
                })
            }).catch(err => {
                console.log(err);
                cb(false, err);
            })
        }

        this.updatefromCust = (amount, fromCustId, cb) => {
            models.customer.findAll({
                where: {
                    customerid: fromCustId
                }
            }).then(data => {
                data[0].currBalance =  parseInt(data[0].currBalance) - parseInt(amount);
                data[0].save().then(data => {
                    cb(true, data)
                }).catch(err => {
                    console.log(err);
                    cb(false, err);
                })
            }).catch(err => {
                console.log(err);
                cb(false, err);
            })
        }
    }
}

module.exports = customerDao;
