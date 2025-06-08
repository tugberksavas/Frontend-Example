// 1- "Kiraz,Karpuz,Kavun,Erik" elemanlarına sahip bir dizi oluşturunuz.
let meyveler = ["Kiraz", "Karpuz", "Kavun", "Erik", "Uzum"];

// 2- Dizi kaç elemanlıdır?
let sonuc;
sonuc = meyveler.length;

// 3- Dizinin ilk ve son elemanlarını yazdırınız.
sonuc = meyveler[0];
sonuc = meyveler[meyveler.length - 1];

// 4- Kavun dizinin bir elemanımıdır?
sonuc = meyveler.indexOf("Kavun");
sonuc = meyveler.includes("Kavun");

// 5- Çilek elemanını dizinin sonuna ekleyiniz.
meyveler.push("Çilek");
// console.log(meyveler);

// 6- Dizinin son 2 elemanını siliniz.
// meyveler.pop();
// meyveler.pop();
// console.log(meyveler);

// meyveler.splice(meyveler.length - 2, 2);
// console.log(meyveler);
// console.log(sonuc);

// 7- Aşağıdaki bilgileri bir dizide saklayınız ve
//    her öğrencinin yaşını ve not ortalamasını hesaplayınız.

/*
    Öğrenci 1: Yiğit Bilgi 2010 [60,90,80]
    Öğrenci 2: Ada Bilgi 2012 [70,80,80]
    Öğrenci 3: Çınar Turan 2017 [60,50,80]
*/

let ogrenci1 = ["Yigit", "Bilgi", 2010, [60, 90, 80]];
let ogrenci2 = ["Ada", "Bilgi", 2012, [90, 80, 80]];
let ogrenci3 = ["Cinar", "Turan", 2017, [60, 50, 80]];

let ogrenciler = [ogrenci1, ogrenci2, ogrenci3];

// yaslar
console.log(2025 - ogrenciler[0][2]);
console.log(2025 - ogrenciler[1][2]);
console.log(2025 - ogrenciler[2][2]);
console.log(ogrenciler);

//notlar

let yigit_not = (ogrenci1[3][0] + ogrenci1[3][1] + ogrenci1[3][2]) / 3;
console.log(Math.ceil(yigit_not));
console.log(yigit_not);

let ada_not = (ogrenci2[3][0] + ogrenci2[3][1] + ogrenci2[3][2]) / 3;
console.log(Math.ceil(ada_not));
console.log(ada_not);

let cinar_not = (ogrenci3[3][0] + ogrenci3[3][1] + ogrenci3[3][2]) / 3;
console.log(Math.ceil(cinar_not));
console.log(cinar_not);
