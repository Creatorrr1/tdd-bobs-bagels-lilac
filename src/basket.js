const inventory = require("./inventory.js");
const Price = require("./price.js");
// const Price = require("./price.js");
class Basket {
    constructor() {
        this.basket = [];
        this.basketSize = 5;
        this.receiptPrice = []
        this.price = new Price()
    };
    // change sku to item
    // create test
    // create a variable that holds the text and return the variable
    // this makes the text reusable and creates clean code
    addItemToBasket(item) {
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i].item === item && this.basket.length < this.basketSize) {
                this.basket.push(inventory[i]);
                return "item in the basket"
            } 
        }
        return 'Your basket is full, you can not add anymore items!'
    };

    removeItemFromBasket(item) {
        for (let i = 0; i < this.basket.length; i++) {
            if (this.basket[i].item === item) {
                this.basket.splice(i, 1)
            }
        }
        return 'The item does not exist in your basket!'
    }

    getItemPrice(product) {
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i].item === product) {
                return `The price of the item is £${inventory[i].price}`
            }
        }
        return 'The product is not available'
    }

    showBasket() {
        return this.basket
    }

    getBasketTotalMessage() {
        return this.price.getBasketTotalMessage(this.basket)
    }

    getReceipt() {
        return this.price.getReceipt(this.basket)
    }

    createBasket(sizeOfBasket) {
        this.basketSize = sizeOfBasket
        console.log(this.basketSize)
    }
};

module.exports = Basket;
