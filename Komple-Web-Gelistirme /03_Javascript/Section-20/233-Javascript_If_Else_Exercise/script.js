// If Else Uygulamaları

// 1- Bir sayinin 50 - 100 arasında olup olmadigini kontrol ediniz.
let sayi = 20;

if (sayi >= 50 && sayi <= 100) {
  console.log("sayi 50 den buyuk sayi 100den kucuk");
} else {
  console.log("50 ile 100 arasinda bir sayi degil");
}

// 2- Bir sayinin pozitif cift sayi olup olmadigini kontrol ediniz.
let sayiPozitifCift = 10;

if (sayi % 2 == 0 && sayiPozitifCift > 0) {
  console.log("sayi pozitif cift sayidir.");
} else {
  console.log("sayi bizim istedigimiz deger degil");
}

// 3- x,y,z sayilarinin buyuk karsilastirmasini yapınız
let x = 70,
  y = 50,
  z = 30;

if (x > y && x > z) {
  console.log("x en buyuk");
} else if (y > x && y > z) {
  console.log("y en buyuk");
} else if (z > x && z > y) {
  console.log("z en buyuk");
} else {
  console.log("hatali bilgi");
}

// 4- 2 vize (%40) ve 1 final (%60) notuna gore ortalama hesaplayiniz
// a- eger ortalama 50 ve ustundeyse gecti degilse kaldi yazsin.
// b- gecmek icin ortalama 50 bile olsa final notu en az 50 olmalidir.
// c- finalden 70 alındıgında ortalama 50'nın altinda olsa bile gecmis sayilsin.

let vize1 = 10;
let vize2 = 10;
let final = 70;

// a- eger ortalama 50 ve ustundeyse gecti degilse kaldi yazsin.
let ortalama = ((vize1 + vize2) / 2) * 0.4 + final * 0.6;
console.log(ortalama);

if (ortalama >= 50) {
  console.log("gecti");
} else {
  console.log("kaldi");
}

// b- gecmek icin ortalama 50 bile olsa final notu en az 50 olmalidir.

if (ortalama >= 50 && final >= 50) {
  console.log("gecti");
} else {
  console.log("kaldi");
}

// c- finalden 70 alındıgında ortalama 50'nın altinda olsa bile gecmis sayilsin.
if (ortalama >= 50 || final >= 70) {
  console.log("gecti");
} else {
  console.log("kaldi");
}
