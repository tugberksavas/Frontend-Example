/* 
    1- İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

        öğrenci 1: 
            isim                : ada bilgi
            doğum tarihi        : 2012
            matematik notları   : 70, 70, 80

        öğrenci 2: 
            isim                : yiğit bilgi
            doğum tarihi        : 2010
            matematik notları   : 40, 40, 50

    2- Öğrencilerinin yaş bilgilerini değişkende tutunuz.
    3- Öğrencilerinin ders ortalama notunu değişkende saklayınız.
    4- Öğrencilerin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.
*/

let ogr1_ad = "Ada";
let ogr1_soyad = "Bilgi";
let ogr1_dogumTarihi = 2012;
let ogr1_mat1 = 70;
let ogr1_mat2 = 70;
let ogr1_mat3 = 80;
let ogr1_yas = 2025 - ogr1_dogumTarihi;
let ogr1_ortlama = (ogr1_mat1 + ogr1_mat2 + ogr1_mat3) / 3;
let ogr1_derstenGectimi = ogr1_ortlama > 50;

console.log(ogr1_yas);
console.log("ogrenci1 yas bilgisi : " + ogr1_yas);
console.log(ogr1_ortlama);
console.log("ogrenci1 mat ders ortlama : " + ogr1_ortlama);
console.log("ogrenci1 mat ders ortlama : " + typeof ogr1_ortlama);
console.log("ogrenci1 mat ders ortlama : " + parseInt(ogr1_ortlama));
console.log("ogrenci1 mat ders ortlama : " + parseFloat(ogr1_ortlama));
console.log("dersten gecti mi : " + ogr1_derstenGectimi);

console.log("***********************************");

let ogr2_ad = "Yigit";
let ogr2_soyad = "Bilgi";
let ogr2_dogumTarihi = 2010;
let ogr2_mat1 = 40;
let ogr2_mat2 = 40;
let ogr2_mat3 = 50;
let ogr2_yas = 2025 - ogr2_dogumTarihi;
let ogr2_ortlama = (ogr2_mat1 + ogr2_mat2 + ogr2_mat3) / 3;
let ogr2_derstenGectimi = ogr2_ortlama > 50;

console.log(ogr2_yas);
console.log("ogrenci2 yas bilgisi : " + ogr2_yas);
console.log(ogr2_ortlama);
console.log("ogrenci2 mat ders ortlama : " + ogr2_ortlama);
console.log("dersten gecti mi : " + ogr2_derstenGectimi);
