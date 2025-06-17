// Exercise : Constructors

// Player Constructor

/* 
const oyuncu1 = new Player ("Ahmet");
const oyuncu2 = new Player ("Cinar");
const oyuncu3 = new Player ("Yeliz");

oyuncu1.start(); // Ahmet oyuna basladi.

oyuncu2.stop(); //Cinar oyundan cıktı.

oyuncu3.pause() ; //Yeliz oyunu durdurdu.

oyuncu.add_scrote(50);

oyuncu1.show_score(); // ahmet isimli oyuncunun skoru 50.
*/

// const oyuncu1 = {
//   username: "Ahmet",
//   start: function () {
//     return `${this.username} oyuna basladi.`;
//   },
//   stop: function () {
//     return `${this.username} oyundan cikti.`;
//   },
//   pause: function () {
//     return `${this.username} oyunu durdurdu.`;
//   },
// };

function Player(username) {
  this.username = username;
  this.score = 0;
  this.start = function () {
    return `${this.username} oyuna basladi.`;
  };
  this.stop = function () {
    return `${this.username} oyundan cikti.`;
  };
  this.pause = function () {
    return `${this.username} oyunu durdurdu.`;
  };
  this.add_score = function (value) {
    this.score += value;
  };
  this.show_score = function () {
    return `${this.username} isimli oyunun skoru ${this.score}`;
  };
}

const oyuncu1 = new Player("Ahmet");
const oyuncu2 = new Player("Cinar");
const oyuncu3 = new Player("Yeliz");

console.log(oyuncu1.start());
console.log(oyuncu2.stop());
console.log(oyuncu3.pause());

console.log(oyuncu1.show_score());
oyuncu1.add_score(50);
console.log(oyuncu1.show_score());

oyuncu2.add_score(100);
console.log(oyuncu2.show_score());
