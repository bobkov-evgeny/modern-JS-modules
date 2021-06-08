'use strict';
//Importing module

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;
//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping cost is $${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import { cart, addToCart } from './shoppingCart.js';

addToCart('Pizza', 3);
addToCart('Coca-Cola', 10);
addToCart('IceCream', 1);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas');

console.log('jonas' ?? null);

console.log(cart.filter(el => el.quantity >= 2));

//import 'core-js/stable';
import 'core-js/stable/array/find';

// polifilling async functions
import 'regenerator-runtime/runtime';
