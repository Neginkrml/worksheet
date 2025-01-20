// 1. GÜN ÇALIŞMALARI
//JAVASCRİPT TEMEL TERİMLER - DEĞİŞKENLER VE VERİ TÜRLERİ - STRİNGLER

// Dize ifade --> string
// Sayısal ifade --> number

console.log("Gumball")
console.log(16)

const fullName = "Negin Kerimli";
const age = 21;
console.log(fullName, age);

let meyve = "Ananas"
meyve = "Hindistan Cevizi"
console.log(meyve)

let Baku
console.log(Baku)

const isModalOpen = true
const isLoggedIn = false 

console.log(typeof (isModalOpen))
console.log(typeof (isLoggedIn))
console.log(typeof (fullName))
console.log(typeof (age))

let value = null
console.log(value)
console.log(typeof (value))

const x = 6
const y = 7
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(x ** y)

const price = 500
const order = 16
const totalPrice = price * order
console.log(totalPrice)

let elma = 3
elma = elma + 3
console.log(elma)

let armut = 4
armut += 8
console.log(armut)

const love = "İsmet'im " + "Seni " + "Çok " + "Seviyorum."
console.log(love)

const yaş = 5
const yaşMetni = "Selin'in " + yaş + " yaşı var."
console.log(yaşMetni)

const koltukNo = "21A"
const isim = "Ali Rzayev"
const karşılama = `Merhaba ${isim}, siz ${koltukNo} numaralı koltukta seyahat edeceksiniz.`
console.log(karşılama)

const siparişNo = 1
const siparişMiktarı = 5000
const fiyat = 200
const toplamFiyat = siparişMiktarı * fiyat
const siparişMesajı = `Merhaba ${isim} sizin  ${siparişNo} numaralı siparişinizin toplam fiyatı ${toplamFiyat} TL eder `
console.log(siparişMesajı)

console.log(isim.length)
console.log(koltukNo.length)

const ağaç = "köknar ve çınar"
const ağaçElemanSayısı = `${ağaç} ağaçlarının eleman sayısı ${ağaç.length} adettir.`
console.log(ağaçElemanSayısı)

const ürün = "çörekotlu sabun"
const sonİndeks = ürün.length-1
console.log(ürün[4])
console.log(ürün[sonİndeks])
console.log(sonİndeks)

const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1]; // Burayla ilgili soru sorulacak
console.log("Konu Uzunluğu:", courseTopicLength);
console.log("İlk Karakter:", firstElement);
console.log("Son Karakter:", lastElement);
