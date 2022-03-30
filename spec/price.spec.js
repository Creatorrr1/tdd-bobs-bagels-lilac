const Basket = require("../src/basket.js");

describe("Basket", () => {
    let basket

    beforeEach(() => {
      basket = new Basket();
    });

it("a user can check item price before adding it to the basket", () => {
    const expected = 'The price of the item is £2.99'
    const result = basket.price.getItemPrice('BGSN')
    expect(result).toEqual(expected);
  });

  it("a user knows the total price of the items in their basket", () => {
    const expected = 'The total price of the items in your basket is £1.37'
    basket.addItemToBasket('BGLO')
    basket.addItemToBasket('BGLP')
    basket.addItemToBasket('BGLS')
    const result = basket.getBasketTotalMessage()
    expect(result).toEqual(expected);
  });

  it("a user knows the total price of the items in their basket", () => {
    const expected = 'The total price of the items in your basket is £1.37'
    basket.addItemToBasket('BGLO')
    basket.addItemToBasket('BGLP')
    basket.addItemToBasket('BGLS')
    const result = basket.getBasketTotalMessage()
    expect(result).toEqual(expected);
  });

//   it("a user knows the total price of the items in their basket", () => {
// //     const receipt = "
// //             Bob's Bagels
// //             2022-02-02 16:00:00
// //             -------------------
// //             2x Bagel
// //                         £0.98
// //             12x Cheese Bagel
// //                         £1.99
// //             -------------------
// //             Total £12.00
// //             "

// //   });

})