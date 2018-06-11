var mysql = require("mysql");
var inquirer = require("inquirer");

//creating a connection with the mySQL database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_DB",

});

connection.connect(function (err) {
    if (err) throw err;
    start();
})

function start() {

    connection.query("SELECT * FROM snacks", function (err, res) {
        console.log("-----------------------------------")
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + "$" + res[i].price + "|" + res[i].stock_quantity);
        }
        console.log("-----------------------------------");

        inquirer
            .prompt([{
                name: "idProduct",
                type: "input",
                message: "What is the ID of the product you would like to purchase?"
            },

            {
                name: "amount",
                type: "input",
                message: "How much of this product would you like?"
            }])

            .then(function (answer) {
                var chosenID = answer.idProduct - 1;
                var chosenQuantity = answer.amount;
                var chosenProduct = res[chosenID].product_name;
                var updateStock = "";
                var newTotal = res[chosenID].price * chosenQuantity;

                if (chosenQuantity > res[chosenID].stock_quantity) {
                    console.log("NOT ENOUGH IN STOCK! :o ");
                    start();
                }
                else {
                    console.log("Product Chosen: " + chosenProduct);
                    console.log("Amount Chosen: " + chosenQuantity);
                    console.log("Total: $" + newTotal);

                    connection.query("UPDATE snacks SET ? WHERE ?",
                        [{
                            stock_quantity: res[chosenID].stock_quantity - chosenQuantity
                        },

                        {
                            item_id: res[chosenID].item_id
                        }]);

                    start();
                }
            });
    });
};
