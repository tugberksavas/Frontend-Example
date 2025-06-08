// Nesneler (Objects)

// let kullanici = ["Tugberk", "Savas", 29];

//key - value

let kullanici1 = {
  ad: "Tugberk",
  sayad: "Savas",
  yas: "29",
  adres: {
    sehir: "Istanbul",
    ilce: "Etiler",
  },
  hobiler: ["sinema", "spor"],
};

let kullanici2 = {
  ad: "Angelina",
  sayad: "Savas",
  yas: "29",
  adres: {
    sehir: "Istanbul",
    ilce: "Etiler",
  },
  hobiler: ["sinema", "spor"],
};

let kullanicilar = [kullanici1, kullanici2];

let sonuc;

sonuc = kullanici1["ad"];
sonuc = kullanici1["sayad"];
sonuc = kullanici1["adres"]["sehir"];
sonuc = kullanici1.adres.ilce;
sonuc = kullanici1.hobiler[0];
sonuc = kullanicilar[1].ad;

console.log(sonuc);
