// Dizi Metotlari

let ogrenciler = ["cinar", "yigit", "ada"];
let sonuc;

sonuc = ogrenciler.length;
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" ");

//eleman silme
// sonuc = ogrenciler.pop(); // son elemeani siler
// sonuc = ogrenciler.shift(); // ilk elemani siler

//eleman ekleme
// sonuc = ogrenciler.push("sona eklenir");
// sonuc = ogrenciler.unshift("ilkbasa eklenir");

//eleman arama
// sonuc = ogrenciler.indexOf("yigit"); //ilk buldugunu getirir
// sonuc = ogrenciler.lastIndexOf("yigit"); //son buldugunu getirir

// sonuc = ogrenciler.includes("yigit"); // var mi yok mu

//silme - ekleme
sonuc = ogrenciler.splice(0, 1, "ali", "canan");

console.log(sonuc);
console.log(ogrenciler);
