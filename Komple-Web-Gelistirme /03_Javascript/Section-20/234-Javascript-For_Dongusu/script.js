// for dongusu

console.log(1);
console.log(2);
console.log(3);
console.log(4);

// ....

console.log(100);

for (let i = 0; i <= 100; i++) {
  // kodlar
  console.log(i);
}
console.log("*****************");

let sayilar = [1, 2, 3, 5, 6, 8, 0, 12];
let toplam = 0;

for (let i = 0; i < sayilar.length; i++) {
  console.log(sayilar[i]);
  toplam += sayilar[i];
}

console.log(toplam);
