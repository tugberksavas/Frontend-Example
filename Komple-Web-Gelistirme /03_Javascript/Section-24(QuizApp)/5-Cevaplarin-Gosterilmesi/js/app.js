const soruListesi = [
  new Soru(
    "1-Hangisi Javascript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Nuget", d: "Npm" },
    "d"
  ),
  new Soru(
    "2-Hangisi frontend kapsamında değerlendirilmez?",
    { a: "css", b: "html", c: "javascipt", d: "sql" },
    "d"
  ),
  new Soru(
    "3-Hangisi backend kapsamında değerlendirilir?",
    { a: "node.js", b: "typescript", c: "angular", d: "react" },
    "a"
  ),
  new Soru(
    "4-Hangisi javascript programlama dilini kullanmaz?",
    { a: "react", b: "angular", c: "vuejs", d: "asp.net" },
    "d"
  ),
];

const quiz = new Quiz(soruListesi);
const ui = new UI();

document.getElementById("btnSoruGetir").addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex) {
    // console.log(quiz.soruGetir());
    ui.soruGoster(quiz.soruGetir());

    console.log(quiz);
  } else {
    console.log("quiz bitti");
  }
});

function optionSelected(e) {
  // console.log(e.target.textContent[0]);
  const cevap = e.target.textContent[0];
  const soru = quiz.soruGetir();
  // console.log(soru);
  if (soru.cevabiKontrolEt(cevap)) {
    e.target.classList.add("correct");
    e.target.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    e.target.classList.add("inCorrect");
    e.target.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
  }

  quiz.soruIndex += 1;

  ui.disableAllOption();
}
