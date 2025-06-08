//numbers

let sonuc;

sonuc = 10;
sonuc = "10";
// sonuc = Number("10");
sonuc = parseInt("11.7"); //numbera cevirir ve kusuratı almaz
sonuc = parseFloat("10.7"); //numbera cevirir
sonuc = parseInt("10a");

sonuc = isNaN("a10"); // is not a number
sonuc = Number.isInteger(9.5);

let sayi = 10.1245678;

sonuc = sayi.toPrecision(5);
sonuc = sayi.toFixed(1);

sonuc = Math.round(2.3); // en yakın sayiya yuvarlar
sonuc = Math.ceil(2.3); // hep yukari yuvarlar
sonuc = Math.floor(2.3); // hep asagi yuvarlar
sonuc = Math.sqrt(25); // kok alma
sonuc = Math.pow(2, 3); // 2yi 3 kez carp
sonuc = Math.min(2, 3, 3, 5, 7, 9); // en kucugu gonderir
sonuc = Math.max(2, 3, 3, 5, 7, 9); // en buyugu gonderir

sonuc = Math.random() * 10 + 1;
sonuc = Math.floor(Math.random() * 100 + 1);

console.log(typeof sonuc);
console.log(sonuc);
