// Objects

//Person, Product, Comment,

const product = {
  // porperties
  title: "Samsung s25",
  description: "Güzel bir telefon",
  price: 70000,
  stock: 100,
  //methods
  display: function () {
    return `Urun basligi ${this.title} urun aciklamasi : ${this.description} ve fiyat : ${this.price}`;
  },
  is_active: function () {
    return this.stock > 0 ? "satista" : "stok yok";
  },
};

const product2 = {
  // porperties
  title: "Samsung s25",
  description: "Güzel bir telefon",
  price: 70000,
  stock: 100,
  //methods
  display: function () {
    return `Urun basligi ${this.title} urun aciklamasi : ${this.description} ve fiyat : ${this.price}`;
  },
  is_active: function () {
    return this.stock > 0 ? "satista" : "stok yok";
  },
};

console.log(product.title);
console.log(product.description);
console.log(product.price);

console.log(product.display());
console.log(product.is_active());

// kalip = kopya1, kopya2

// reactagle => baslik,genislik,yukseklik,alan,cevre
// Person => ad, soyad , dogumYılı , yasHesapla
