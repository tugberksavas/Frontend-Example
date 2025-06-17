function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

const soruListesi = [
  new Soru(
    "1-Hangisi Javascript paket yonetim uygulamasidir?",
    { a: "Node.js", b: "Typescript", c: "Nuget", d: "Npm" },
    "d"
  ),
  new Soru(
    "1-Hangisi Frontend kapsamında degerlendirlmez?",
    { a: "Css", b: "Html", c: "Javascript", d: "Sql" },
    "d"
  ),

  new Soru(
    "1-Hangisi Backend kapsamında degerlendirilir?",
    { a: "Node.js", b: "Typescript", c: "Angular", d: "React" },
    "a"
  ),

  new Soru(
    "1-Hangisi javascript programlama dilini kullanmaz?",
    { a: "React", b: "Angular", c: "vuejs", d: "asp.Net" },
    "d"
  ),
];


