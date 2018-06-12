# | Bamazon |

### In this app I created an Amazon-like storefront with the MySQL and Node.js. The app will take in orders from customers and deplete stock from the store's inventory.
### npm packages: 
#### -mySQL
#### -Inquirer

### The following images will show step by step how the app work with the "customer" 


# Initial Landing Screen
![image showing the initial landing screen when the app is opened](/images/image1redo.png)
![sequal image](/images/image5.png)
***
When you first open the app in node, this is the first screen that will come up. It will show you the original table that is in MySQL. It will also show you the first prompt that asks you which item you would like to purchase. 

# Second Screen
![second screen](/images/image2redo.png)

The second screen is going to ask you how much of the item you would like to purhase. 

# Third Screen
![third image](/images/image3redo.png)

This third screen is going to show you your receipt. it will show you the product you chose from the database and restate the amount you would like to purchase from the store. Lastly it will take the unit price from the database and multipy it by the amount you chose and give you a total for your transaction. 

# Fourth Screen
![fourth image](/images/image4redo.png)
![sequal image](/images/image7.png)

Lastly it will let you start again from the beginning and purchase more items. If you look closely you will see that the actual amount take from the stock is subtracted and shown in the updated table as well as updating in the actual database. 

# Extra
![extra image ](/images/image4.png)

For a little extra, here is the "customer" asking for an amount that exceeds the stock amount! it lets the customer know that we do not have enough in stock! 