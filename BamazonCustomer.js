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

/*
var start = function() {
    inquirer.prompt({
        name: "postOrBid",
        type: "list",
        message: "Would you like to [POST] an auction or [BID] on an auction?",
        choices: ["POST", "BID"]
    }).then(function(answer) {
        if (answer.postOrBid.toUpperCase() == "POST") {
            postAuction();
        } else {
            bidAuction();
        }
    })
}

var postAuction = function() {
    inquirer.prompt([{
        name: "item",
        type: "input",
        message: "What is the item you would like to submit?"
    }, {
        name: "category",
        type: "input",
        message: "What category would you like to place your auction in?"
    }, {
        name: "startingBid",
        type: "input",
        message: "What would you like your starting bid to be?",
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
    }]).then(function(answer) {
        connection.query("INSERT INTO auctions SET ?", {
            itemname: answer.item,
            category: answer.category,
            startingbid: answer.startingBid,
            highestbid: answer.startingBid
        }, function(err, res) {
            console.log("Your auction was created successfully!");
            start();
        });
    })
}
var searchAuction=function(){
    connection.query('SELECT * FROM auctions' ,function(err,res){
        inquirer.prompt({
            name:'catagory search',
            type: 'list',
        }
    })
}
var bidAuction = function() {
    connection.query('SELECT * FROM auctions', function(err, res) {
        console.log(res);
        inquirer.prompt({
            name: "choice",
            type: "rawlist",
            choices: function(value) {
                var choiceArray = [];
                for (var i = 0; i < res.length; i++) {
                    choiceArray.push(res[i].itemname);
                }
                return choiceArray;
            },
            message: "What auction would you like to place a bid in?"
        }).then(function(answer) {
            for (var i = 0; i < res.length; i++) {
                if (res[i].itemname == answer.choice) {
                    var chosenItem = res[i];
                    inquirer.prompt({
                        name: "bid",
                        type: "input",
                        message: "How much would you like to bid?"
                    }).then(function(answer) {
                        if (chosenItem.highestbid < parseInt(answer.bid)) {
                            connection.query("UPDATE auctions SET ? WHERE ?", [{
                                highestbid: answer.bid
                            }, {
                                id: chosenItem.id
                            }], function(err, res) {
                                console.log("Bid placed successfully!");
                                start();
                            });
                        } else {
                            console.log("Your bid was too low. Try again...");
                            start();
                        }
                    })
                }
            }
        })
    })
}
*/