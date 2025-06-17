// Constructors

//Funcktion Contructor
function Product(title, description, price, stock) {
  //Properties
  this.title = title;
  this.description = description;
  this.price = price;
  this.stock = stock;
  //Methods
  this.display = function () {
    return `Urun basligi ${this.title} urun aciklamasi : ${this.description} ve fiyat : ${this.price}`;
  };
  this.is_active = function () {
    return this.stock > 0 ? "satista" : "stok yok";
  };
}

//Object
const product1 = new Product("Samsung s25", "iyi telefon", 60000, 100);
const product2 = new Product("samsung s26", "iyi telefon", 70000, 0);
const product3 = new Product("samsung s27", "iyi telefon", 80000, 300);

// console.log(
//   product1.title,
//   product1.description,
//   product1.price,
//   product1.stock
// );
// console.log(
//   product2.title,
//   product2.description,
//   product2.price,
//   product2.stock
// );
// console.log(
//   product3.title,
//   product3.description,
//   product3.price,
//   product3.stock
// );

console.log(product1.display());
console.log(product2.display());
console.log(product3.display());

console.log(product1.is_active());
console.log(product2.is_active());
console.log(product3.is_active());
