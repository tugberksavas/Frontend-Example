function UI() {
  this.quiz_bod = document.querySelector("#quiz-box");
  this.body = document.querySelector("#quiz-box #body");
}

UI.prototype.soruGoster = function (soru) {
  this.body.innerHTML = "";
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const title = document.createElement("h5");
  title.classList.add("question-title");
  title.textContent = soru.soruMetni;

  const optionList = document.createElement("div");
  optionList.classList.add("option-list");

  for (let [key, value] of Object.entries(soru.cevapSecenekleri)) {
    const option = document.createElement("div");
    option.classList.add("option");

    const span = document.createElement("span");
    span.textContent = key + ") " + value;

    option.appendChild(span);
    optionList.appendChild(option);
  }
  cardBody.appendChild(title);
  cardBody.appendChild(optionList);

  this.body.appendChild(cardBody);
};

//  <h5 class="question-title">
//                     1-Hangisi Javascript paket yönetim uygulamasıdır?
//                 </h5>
//                 <div class="option-list">
//                     <div class="option">
//                         <span>a: Node.js</span>
//                     </div>
//                     <div class="option">
//                         <span>b: Node.js</span>
//                     </div>
//                     <div class="option">
//                         <span>c: Node.js</span>
//                     </div>
//                     <div class="option">
//                         <span>d: Node.js</span>
//                     </div>
