// Diziler

// let urun1 = "iPhone 15";
// let urun2 = "iPhone 16";
// let urun3 = "iPhone 17";

let urunler = ["iphone 15", "iphone 16", "iphone17"];
let fiyatlar = [50000, 60000, 70000];
let renkler = ["gold", "black", "silver"];

let sonuc;
sonuc = `${urunler[0]}`;
sonuc = `${urunler[0]} - ${fiyatlar[0]} - ${renkler[0]}`;
sonuc = `${urunler[1]} - ${fiyatlar[1]} - ${renkler[1]}`;
sonuc = `${urunler[2]} - ${fiyatlar[2]} - ${renkler[2]}`;

let urun1 = ["iPhone 15", 50000, ["gold", "black", "silver"]];
let urun2 = ["iPhone 16", 60000, "black"];
let urun3 = ["iPhone 16", 70000, "silveer"];

// guncelleme
urun1[0] = "iPhone 15 Pro";

sonuc = `${urun1[0]} ${urun1[1]} ${urun1[2][1]}`;
// sonuc = `${urun2[0]} ${urun2[1]} ${urun2[2]}`;

console.log(sonuc);
