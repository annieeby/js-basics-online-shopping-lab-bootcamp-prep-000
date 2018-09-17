















/*
var cart = [];

function getCart() {
return cart; 
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var fullItem = {
    itemName:item,
    itemPrice: Math.floor(Math.random() * 100)
  }
cart.push(fullItem)
 return `${fullItem.itemName} has been added to your cart.`
}

function viewCart() {
<<<<<<< HEAD
=======
  getCart()
>>>>>>> 8c29dd90d8804bcbfeb3913c55c9b9105284858b
var cartContents = []
  if (cart.length===0) {
    return "Your shopping cart is empty."
  }
  if (cart.length===1) {
    cartContents.push(`${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`)
  }
  else {
     for (var i = 0; i < cart.length; i++) { 
       if (i<cart.length-1) {
<<<<<<< HEAD
        cartContents.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)
       }
        else {
          cartContents.push(`and ${getCart()[cart.length-1].itemName} at $${getCart()[cart.length-1].itemPrice}.`)
        }
     }
  }
return `In your cart, you have ${cartContents.join(', ')}`
=======
        cartContents.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice} `)
       }
        else {
          cartContents.push(` and ${getCart()[cart.length-1].itemName} at $${getCart()[cart.length-1].itemPrice}.`)
        }
     }
  }
return `In your cart, you have ${cartContents}`
>>>>>>> 8c29dd90d8804bcbfeb3913c55c9b9105284858b
}

function total() {
 var sum = 0
 for (var i = 0; i < cart.length; i++) {
   sum += getCart()[i].itemPrice
 }
 return sum
}

function removeFromCart(item) {
let cart = getCart()
  for (let i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i,1)
        return cart
    }
  }
return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else { 
    var sum = total() //Note: do not name the variable "total"; variables and function names must be different
    cart = []
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
}
*/