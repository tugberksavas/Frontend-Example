// Dates ve Times

let simdi = new Date();

// get methods
sonuc = simdi;
sonuc = simdi.getDate(); //gün
sonuc = simdi.getDay(); // 0-6 0:pazar 6:cumartesi
sonuc = simdi.getFullYear(); // yil bilgisi

// set methods
simdi.setFullYear(2027);
simdi.setMonth(1);
simdi.setDate(20);

sonuc = simdi;

console.log(sonuc);

console.log("*******************");

let dogumTarihi = new Date(1990, 5, 15);
sonuc = dogumTarihi;
sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

let yas = simdi.getFullYear() - dogumTarihi.getFullYear();

let milisecond = simdi - dogumTarihi;

let saniye = milisecond / 1000;
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;
let hafta = gun / 7;
let yil = gun / 365;

console.log(yil);

console.log("Geçen gün: " + Math.floor(gun));
console.log("Geçen hafta: " + Math.floor(hafta));
console.log("Geçen yıl: " + Math.floor(yil));
console.log("Yaş: " + yas);
