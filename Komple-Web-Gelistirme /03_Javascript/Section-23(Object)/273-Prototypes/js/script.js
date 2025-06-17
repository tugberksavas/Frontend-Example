// Prototypes

console.log([]);
console.log(new Array());

function Comment(title, body, username) {
  this.title = title;
  this.body = body;
  this.username = username;
  this.createdAt = Date.now();

  console.log(this);
}

Comment.prototype.display = function () {
  return this.title;
};

Comment.prototype.get_username = function () {
  return this.username;
};

const c1 = new Comment("güzel kurs", "kurusu cok begendim", "tugberksavas");
const c2 = new Comment("idare eder", "idare eder", "tugberksavas");
const c3 = new Comment("idare eder", "idare eder", "tugberksavas");

Array.prototype.get_number = function () {
  return this.length;
};

const arr = ["item 1", "item 2"];
console.log([]);
console.log(arr.get_number());
