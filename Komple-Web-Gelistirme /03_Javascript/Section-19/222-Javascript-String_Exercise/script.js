// String Uygulamaları

let url = "https://www.tugberksavas.com";
let kursAdi = "Komple Web Geliştirme Kursu";
let sonuc;

// 1- url kaç karakterlidir?
sonuc = url.length;
console.log("url kac karakterli : " + sonuc);

// 2- kursAdi kaç kelimeden oluşmaktadır?
sonuc = kursAdi.split(" ").length;
console.log("kursAdi kaç kelimeden oluşmaktadır : " + sonuc);

// 3- url https ile mi başlıyor? (js string metotları)
sonuc = url.startsWith("https");
console.log("url https ile mi başlıyor : " + sonuc);

// 4- kursAdi içerisinde Eğitimi kelimesi var mı?
sonuc = kursAdi.indexOf("Egitimi");
console.log("kursAdi içerisinde Eğitimi kelimesi var mı : " + sonuc);

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.
sonuc = `${url}/${kursAdi
  .toLowerCase()
  .replaceAll(" ", "-")
  .replaceAll("ş", "s")
  .replaceAll("ı", "i")}`;
console.log(sonuc);
// https://www.tugberksavas.com/komple-web-gelistirme-kursu
