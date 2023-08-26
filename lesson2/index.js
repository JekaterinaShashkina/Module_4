const Cart = function (arr) {
  this.arr = arr;
  this.totalPrice = 0;
  this.count = 0;
};
Cart.prototype.calculateGoodsPrice = function () {
  this.arr.forEach((good) => {
    this.totalPrice += good.price;
  });
  return this.totalPrice;
};
Cart.prototype.addGoods = function (obj) {
  this.increaseCount();
  return this.arr.push(obj);
};
Cart.prototype.getTotalPrice = function () {
  return this.calculateGoodsPrice();
};
Cart.prototype.increaseCount = function () {
  this.count += 1;
};
Cart.prototype.clear = function () {
  this.arr = [];
  this.totalPrice = 0;
  this.count = 0;
};

Cart.prototype.print = function () {
  console.log(JSON.stringify(this.arr));
  console.log(this.getTotalPrice());
};

const Goods = function (price, name, discount) {
  this.price = price;
  this.name = name;
  this.discount = discount;
};

const FoodGoods = function (price, name, discount, calories) {
  Goods.call(this, price, name, discount);
  this.calories = calories;
};

const СlothingGoods = function (price, name, discount, material) {
  Goods.call(this, price, name, discount);
  this.material = material;
};

const TechnicsGoods = function (price, name, discount, type) {
  Goods.call(this, price, name, discount);
  this.type = type;
};
const good = new Goods(300, 'Phone', 0);
const apple = new FoodGoods(10, 'Red Grown', 2, 30);
const orange = new FoodGoods(15, 'Red Grown', 2, 55);

const jeans = new СlothingGoods(100, 'Levis', 5, 'cotton');
const cart = new Cart([]);
cart.addGoods(apple);
cart.addGoods(good);
cart.addGoods(jeans);

cart.print();
cart.clear();
cart.print();
