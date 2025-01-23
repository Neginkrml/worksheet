//3.DERS DİZİLER VE FONKSİYONLAR

const gezegenler = ["Dünya", "Mars", "Venüs", "Jüpiter"]
const aySayılar = [1, 2, 3, 4, 5]
console.log(gezegenler)
console.log(aySayılar)
console.log(gezegenler.indexOf("Dünya"))

const şehirler = ["Antalya", "Kütahya", "Konya", "Bakü", "Celilabad"]
const ilkEleman = şehirler[0]
console.log (ilkEleman)
console.log(şehirler[2])
console.log(şehirler[8])

const karışık = ["Pizza Dilimi", 1981, false]
const karışıkİlk = karışık[0]
console.log(karışık)
console.log(karışıkİlk)

const meyveler = ["elma", "mango", "şeftali", "böğürtlen"]
console.log(meyveler)
meyveler[0] = "avokado"
console.log(meyveler)

const eşyalar = ["kanepe", "koltuk", "yemek masası", "halı", "sehpa"]
console.log(eşyalar.length)

if (eşyalar >= 5) {
    console.log("Dizede 5 eleman var")
} else {
    console.log("Dizede 5 den fazla eleman var.")
}

function getOrderQuantity(order) {
    return order.lenght;
}
console.log(["kanepe", "koltuk", "yemek masası", "halı", "sehpa"])

function dersleer(miktar) {
    return miktar.lenght
}
console.log(["Dış Ticaret", "Risk ve Sigortacılık", "İşletme"])

const dersler = ["Dış Ticaret", "Risk ve Sigortacılık", "İşletme", "Matematik"];
const dersSonEleman = dersler.length - 1;
console.log(dersler[dersSonEleman]);

function getLastElementMeta(array) {   //bu fonk yazıyorum aynısı olmuyo
  const lastElementIndex = array.length - 1;
  const lastElement = array[lastElementIndex];
  return [lastElementIndex, lastElement];
}
console.log(getLastElementMeta(["apple", "peach", "pear"]))

function evEşyaları(salon) {
    const birinci = salon[0];
    const sonuncu = salon[salon.length - 1]
    return [birinci,sonuncu]
}
console.log(evEşyaları(["kanepe", "koltuk", "yemek masası", "halı", "sehpa"]))

function ailem(evdekiler) {
    const annem = evdekiler[0]
    const babam = evdekiler[evdekiler.length - 1]  //[evdekiler.lenght - 1]   [evdekiler.length - 1]
    return [annem,babam]
}
console.log(ailem(["Vüsale", "Gündüz", "Negin", "Zafer"]))

let n = 21
let m = n
console.log(n)
console.log(m)
n = 35
console.log(n)
console.log(m)

let kapı = ["Tahta Kapı", "Plastik Kapı"]  // const ile tanımladın bunlar
let kapılar = kapı
console.log(kapı)
console.log(kapılar)
kapı = ["Çelik Kapı", "Sokak Kapısı"]      //burada kapıyı 2. kez tanımlarken let kullandın
console.log(kapı)
console.log(kapılar)
kapı[0] = "Cam Kapı"
kapılar = kapı
console.log(kapı)
console.log(kapılar)

const sıra1 = [1, 2, 3]
const sıra2 = [1, 2, 3]
console.log(sıra1 === sıra2)

const teknolojiAletler = ["Tablet", "Bilisayar", "Telefon", "Televizyon"]
console.log(teknolojiAletler.join(""))
console.log(teknolojiAletler.join("-"))
console.log(teknolojiAletler.join("_"))

function kelimeAyrım (kelimeler){
    const söz = kelimeler.split("-");
    return söz.join("_");
}
console.log(kelimeAyrım("Baba-beni-okula-gönder"))
console.log(kelimeAyrım("Avrupa-Yakası"))

function calculateEngravingPrice(message, pricePerWord) {
  // Mesajı boşluklardan ayırarak kelime sayısını bul
  const wordCount = message.split(" ").length;

  // Toplam maliyeti hesapla
  const totalPrice = wordCount * pricePerWord;

  // Toplam maliyeti döndür
  return totalPrice;
}
console.log(calculateEngravingPrice("JavaScript is in my blood", 10))

function cümle(kelimeleri, kelimeSayısı) {
    const kelimeBulmak = kelimeleri.split(" ").length; // spilt yerine split ve lenght yerine length
    const toplamRakam = kelimeBulmak * kelimeSayısı;
    return toplamRakam;
}
console.log(cümle("Dünyanın en güzel kızı", 5));

const isim = "Negin"
const harfler = isim.split("")
console.log(harfler)

const cümmle = "Meyvelerin Söhbeti"
const söözler = cümmle.split(" ")
console.log(söözler)

function getLength(aarray) {
  // Diziyi tek bir dizeye boşluk olmadan birleştir
  const combinedString = aarray.join("");
  
  // Birleştirilen dizenin uzunluğunu hesapla
  const length = combinedString.length;

  // Uzunluğu döndür
  return length;
}
console.log(getLength(["Mango", "hurries", "to", "the", "train"]))

function birleşme(birleşim) {
    const kelimeBirleşim = birleşim.join(""); // Kelimeleri birleştir
    const sayı = kelimeBirleşim.length; // length doğru yazılmalı
    return sayı;
}
console.log(birleşme(["Antalya", "Kütahya", "Konya", "Bakü", "Celilabad"]));

function birleştir(sözz, rakam) {
    return sözz.split("").length * rakam; 
}
console.log(birleştir("Merhaba", 3)); 

const bilgisayarMarka = ["Acer", "Lenovo", "Monster", "Hp", "Asus"]
console.log(bilgisayarMarka.slice(0,2))
const bMark = bilgisayarMarka.slice(2, 4)
console.log(bMark)

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(-3);
console.log(firstTwoEls)
console.log(nonExtremeEls)
console.log(lastThreeEls)

const firstArray = ["Mercury", "Venus"];
const secondArray = ["Mars", "Jupiter"];
const arrayMix = firstArray.concat(secondArray)
console.log(arrayMix) 

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];
const allClients = oldClients.concat(newClients);
console.log(allClients)

const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1

const konular = ["Dış Ticaret", "Risk ve Sigortacılık", "İşletme"]
console.log(konular.indexOf("Dış Ticaret"))

function mobilya(ad, değer) {
    const index = ad.indexOf(değer)
    if (index === -1) {
        return [];
    }
    return ad.slice(0, index + 1)
} 
console.log(["Dünya", "Mars", "Venüs", "Jüpiter"], "Jüpiter")
console.log(["Dünya", "Mars", "Venüs", "Jüpiter"], "Neptün")

const üniversiteler = ["9 Eylül", "İstanbul", "Dumlupınar",]
console.log(üniversiteler)
üniversiteler.push("Mimar Sinan", "ODTÜ")
console.log(üniversiteler)

function createArrayOfNumbers(min, max) {
  // Boş bir dizi oluştur
  const numbers = [];

  // min'den max'e kadar döngü oluştur
  for (let i = min; i <= max; i++) {
    // Her döngüde sayıyı diziye ekle
    numbers.push(i);
  }

  // Diziyi döndür
  return numbers;
}
console.log(createArrayOfNumbers(29, 34))