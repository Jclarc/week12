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

 If not, the app should log a phrase like Insufficient quant!, and then prevent the order from going through.
 However, if your store does have enough of the product, you should fulfill the customer's order.

 This means updating the SQL database to reflect the remaining quant.
 Once the update goes through, show the customer the total cost of their purchase.
 */

var mysql = require('mysql');
var prompt = require('prompt');
var ID;
var quant;

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'toor',
    database : 'bamazon'
});

connection.connect(function (err)
{
    if (err) {
        console.log(err);
    }

    console.log("Welcome to Bamazon!");
});

connection.query('SELECT * FROM products', function(err, rows){

    if (err) {
        return callback(err);
    }
    console.log("Item ID\tItem Name\t\tPrice");
    for(var i = 0; i < rows.length; i++) {
        console.log(rows[i].ItemID + '\t' + rows[i].ProductName + '\t\t$' + rows[i].Price + '\t');
    }

    console.log("\nWhat would you like to order? \nEnter the item ID number and a quantity.");

    prompt.start();

    prompt.get(['ItemID', 'quantity'], function(err, order){
        ID = order.ItemID;
        quant = order.quantity;
        prompt.stop();
        connection.query('SELECT * FROM products WHERE ItemID = "' + ID + '"', function(err, product)   {

            if(product[0].StockQuantity >= quant) {
                var secondQuant = product[0].StockQuantity - quant;
                connection.query('UPDATE products SET StockQuantity = "' + secondQuant + '" WHERE ItemID = "' + ID + '"', function(err, result) {
                    if(err) {
                        throw err;
                    }
                });

                console.log("You ordered " + quant + " of this item: " + product[0].ProductName);
                console.log("Your total is: $" + product[0].Price * quant);
            } else {
                console.log("Insufficient Quantity.  Transaction could not be completed.");
            }
        });
    });
});