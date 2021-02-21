module.exports=(sequelize,Datatypes) => {
    const customer = sequelize.define(
        "customer",{
            CUSTOMERID:{
                type:Datatypes.INTEGER,
                primaryKey:true,
                allowNull:false
            },
            customername:Datatypes.STRING
        }
    );
    customer.associates = function(models){};
    return customer;
}