# JS Shopping Cart
Sample shopping list built in Vanilla JS. Use the Module Pattern for the public/private variables. Save the shopping list on Local Storage to preserve it between browser session. Each item contains the properties: *name, price, count, stock, total*.

### Usage
Methods | Description
:----------- | :------------
`add()` | Adds an item if the item name does not exist. Otherwise the quantity increases
`remove()` | Deletes a single item if the item name does not exist. Otherwise the quantity decrease
`removeAll()` | Removes all items from the shopping list
`clear()` | Clear the shopping list by deleting the items
`quantity()`| Returns the count of the shopping list
`cost()` | Returns the total cost of all items in the shopping list
`list()`| Returns an array containing all items in the shopping list
`save()` | Saves the shopping list
`load()` | Loads the shopping list

## Inspiration
**ShoppingCart (Ecommerce)** - [Vue-ShoppingCart](https://github.com/ikismail/Vue-ShoppingCart/blob/master/README.md)

## License
[ISC](https://github.com/adrienloup/js-shopping-cart/blob/master/LICENSE.md)