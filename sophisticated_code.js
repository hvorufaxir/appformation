/* filename: sophisticated_code.js */

// This code is a complex implementation of a shopping cart application.
// It includes features for adding and removing items, calculating total price,
// applying discounts, and managing inventory.

class ShoppingCart {
  constructor() {
    this.items = [];
    this.totalPrice = 0;
  }

  // Add an item to the shopping cart
  addItem(item) {
    this.items.push(item);
    this.totalPrice += item.price;
  }

  // Remove an item from the shopping cart
  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.totalPrice -= item.price;
    }
  }

  // Calculate the total price of the shopping cart
  calculateTotalPrice() {
    return this.totalPrice;
  }
}

class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // Calculate the total price of the item
  calculateTotalPrice() {
    return this.price * this.quantity;
  }
}

class Discount {
  constructor(percent) {
    this.percent = percent;
  }

  // Apply the discount to the given price
  applyDiscount(price) {
    return price * (1 - this.percent / 100);
  }
}

class Inventory {
  constructor() {
    this.items = [];
  }

  // Add an item to the inventory
  addItem(item) {
    this.items.push(item);
  }

  // Remove an item from the inventory
  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

// Create instances of shopping cart, items, discounts, and inventory
const cart = new ShoppingCart();
const item1 = new Item("iPhone", 1000, 1);
const item2 = new Item("Macbook", 2000, 1);
const discount = new Discount(10);
const inventory = new Inventory();

// Add items to the inventory
inventory.addItem(item1);
inventory.addItem(item2);

// Add items to the shopping cart
cart.addItem(item1);
cart.addItem(item2);

// Apply discount to the total price
const discountedPrice = discount.applyDiscount(cart.calculateTotalPrice());

// Remove item from the shopping cart
cart.removeItem(item2);

// Output the final results
console.log("Shopping Cart Items:");
console.log(cart.items);
console.log("Total Price: $" + discountedPrice.toFixed(2));

// Remove item from the inventory
inventory.removeItem(item1);