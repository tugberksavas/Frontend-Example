let kursAdi = "Komple Uygulamali Web Gelistirme Egitimi";
let sonuc;

sonuc = kursAdi.toLowerCase();
console.log("küçük harf : " + sonuc); // küçük harf : komple uygulamali web gelistirme

sonuc = kursAdi.toUpperCase();
console.log("büyük harf : " + sonuc); // büyük harf : KOMPLE UYGULAMALI WEB GELISTIRME

sonuc = kursAdi.length;
console.log("kac karakter var : " + sonuc);

sonuc = kursAdi[30];
console.log("indexe gore harf : " + sonuc);

sonuc = kursAdi.slice(0, 6);
console.log("index araligina gore harf alma : " + sonuc);

sonuc = kursAdi.slice(10);
console.log("10'uncu indexten sonrasini al : " + sonuc);

sonuc = kursAdi.slice(-10, -5);
console.log("-10'uncudan -5e git indexten sonrasini al : " + sonuc);

sonuc = kursAdi.substring(0, 6);
console.log("karakter arasi boslugu al : " + sonuc);

sonuc = kursAdi.replace("Egitimi", "Kursu");
console.log("egitimi yerine kursu olur : " + sonuc);

sonuc = kursAdi.trim();
console.log("trim sagdan soldan bosluk silme : " + sonuc);

sonuc = kursAdi.trimStart();
console.log("trim soldan bosluk silme : " + sonuc);

sonuc = kursAdi.indexOf("Web");
console.log("indexof metodu web konumunu bulma : " + sonuc);

sonuc = kursAdi.split(" ");
console.log("kursAdi icindeki gerekli yerden bosluklari bol : " + sonuc);
sonuc = kursAdi.split(" ")[1];
console.log("kursAdi icindeki gerekli yerden indexe gore getir : " + sonuc);
