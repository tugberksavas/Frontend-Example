// Fonksiyonlar

function selamlama(mesaj) {
  console.log(mesaj);
}

selamlama("merhaba");
selamlama("selam");
console.log("******************");
function yasHesaplama(dogumYili) {
  let simdi = new Date().getFullYear();
  return simdi - dogumYili;
}

let sonuc = yasHesaplama(1996);
console.log(sonuc);
console.log(yasHesaplama(1983));

console.log("************");
function emekliligeKacYılKaldı(dogumYili, isim) {
  let yas = yasHesaplama(dogumYili);

  let kalan_sene = 65 - yas;

  if (kalan_sene > 0) {
    console.log(`${isim} emekli olmaniza ${kalan_sene} yil kaldi`);
  } else {
    console.log("zaten emekli oldunuz");
  }
}

emekliligeKacYılKaldı(2000, "ali");
emekliligeKacYılKaldı(1950, "ayse");
