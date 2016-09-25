/*** Created by Jake on 9/15/2016.*/

/*
 Create a MySQL Database called Bamazon.

 Then create a Table inside of that database called Products.

 The products table should have each of the following columns:

 ItemID (unique id for each product)

 ProductName (Name of product)

 DepartmentName

 Price (cost to customer)

 StockQuantity (how much of the product is available in stores)

 Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

 Then create a Node application called BamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

 The app should then prompt users with two messages.

 The first should ask them the ID of the product they would like to buy.
 The second message should ask how many units of the product they would like to buy.
 Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

 If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
 However, if your store does have enough of the product, you should fulfill the customer's order.

 This means updating the SQL database to reflect the remaining quantity.
 Once the update goes through, show the customer the total cost of their purchase.
 */
var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "Nizmo350z", //Your password
    database: "bamazon"
})
/*
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
})
*/
connection.query('SELECT * FROM `products`', function(err, res) {
    if (err) {
        throw err;
    }

    for (var i = 0; i < res.length; i++) {
        console.log(res[i].ItemID + " | " + res[i].ProductName + " | $" + res[i].Price);
    }
    console.log("-----------------------------------");
});

