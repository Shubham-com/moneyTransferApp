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
    }
}

module.exports = customerDao;