"use strict"
module.exports = {
    up:( queryInterface,Sequelize) =>{
        return queryInterface.createTable(
            "customer",{
                customerid:{
                    allowNull:false,
                    autoIncrement:true,
                    primaryKey:true,
                    type:Sequelize.INTEGER
                },
                custName:{
                    type:Sequelize.STRING,
                    allowNull:false
                },
                email:Sequelize.STRING,
                currBalance:Sequelize.INTEGER,
                active:Sequelize.BOOLEAN
            },{
                timestamps:false,
                schema:'public',
                freezeTableName:true
            }
        )
            },
            down:(queryInterface,Sequelize) =>{
                return queryInterface.dropTable("customer")
            }
    };