let sonuc;

// sonuc = document.all;
// sonuc = document.all[5];
sonuc = document.all.length;
sonuc = document.documentElement;

sonuc = document.head;
sonuc = document.body;

sonuc = document.body.children;

sonuc = document.doctype;
sonuc = document.URL;
sonuc = document.characterSet;
sonuc = document.contentType;

sonuc = document.forms;
sonuc = document.forms[0];
sonuc = document.forms[0].method;
sonuc = document.forms[0].action;

sonuc = document.links;
sonuc = document.links[0];
sonuc = document.links[0].id = "hepsi";
sonuc = document.links[0].innerHTML = "hepsi";
sonuc = document.links[0].className;
sonuc = document.links[0].className = "active";

sonuc = document.images;
sonuc = document.images[0];

console.log(sonuc);
