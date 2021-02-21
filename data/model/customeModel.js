module.exports = (sequelize, Datatypes) => {
    const customer = sequelize.define(
        "customer", {
        customerid: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Datatypes.INTEGER
        },
        custName: {
            type: Datatypes.STRING,
            allowNull: false
        },
        email: Datatypes.STRING,
        currBalance: Datatypes.INTEGER,
        active: Datatypes.BOOLEAN
    }, {
        timestamps: false,
        freezeTableName: true
    }
    );
    customer.associates = function (models) { };
    return customer;
}