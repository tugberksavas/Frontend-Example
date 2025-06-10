//While Dongusu

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("****************");

// break , continue

let i = 1;
while (i <= 10) {
  i++;
  if (i % 2 == 1) {
    break;
  }
  console.log(i);
}
console.log("dongu bitti");

console.log("************");

let doWhile = 1;
do {
  console.log(doWhile);
  doWhile++;
} while (doWhile <= 10);
