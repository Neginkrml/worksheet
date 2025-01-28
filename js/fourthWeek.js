//NESNELER

const kitap = {
    yazar: "Sabahattin Ali",
    eser: "Kürk Mantolu Madonna",
    sayfa: 177,
    yayınYılı: 1943,
    konu: "Aşk",
};
console.log(kitap)
console.log(kitap.yazar)


const oyuncu = {
    isim: "Kemal",
    soyisim: "Sunal",
    memleket: {
        ülke: "Türkiye",
        şehir: "Malatya",
    }
};
console.log(oyuncu.memleket)
console.log(oyuncu)

const fullStack = {
    öğretilenDersler: ["Javascript", "HTML", "CSS", "Node.js", "React"],
    ekipmanlar: ["Bilgisayar", "Tablet", "Not Defteri"],
    eğitimArayüzü: ["LMS", "VsCode", "Zoom", "Slack", "YouTube"],
    eğitmen: "Burak Sarpkaya",
    mentor : "Betül hanım"
}
console.log(fullStack.öğretilenDersler.length)
console.log(fullStack.eğitimArayüzü[1])
console.log(fullStack.eğitmen)
console.log(fullStack["mentor"])
console.log(fullStack["ekipmanlar"])

const alışveriş = {
    elma: "1kg",
    sosis: "1 kg",
    ekmek : "1 adet"
}
alışveriş.elma = "0.5 kg"
console.log(alışveriş.elma)
alışveriş.saçKremi = "Panten"
console.log(alışveriş.saçKremi)

const ad = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
    ad,
    price,
    imsge,
    tags,
};
console.log(product)


const credentials = {};
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};