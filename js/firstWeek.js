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
console.log(ürün[4]) // köşeli parantezle indeks sayısını belirtiyoruz
console.log(ürün[sonİndeks])
console.log(sonİndeks)

const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElementSayı = courseTopic.length - 1;
const lastElementHarf = courseTopic[courseTopic.length - 1];
console.log("Konu Uzunluğu:", courseTopicLength);
console.log("İlk Karakter:", firstElement);
console.log("Son Karakter:", lastElementHarf);
console.log("Son Karakter İndexi:", lastElementSayı);


// 2. GÜN ÇALIŞMALARI

const a = 86;
const b = 25;
console.log(a > b);
console.log(b < a);
console.log(a >= b);
console.log(b <= a);
console.log(b > a);
console.log(b >= a);

const yaşı = 18
const reşit = yaşı >= 18
console.log(reşit) //True değeri döndürüyor reşit diye yazdırmıyor

const doğruŞifre = "sarıkalpliyastık"
const girilenŞifre = "benimsaçımvar"
const isValid = girilenŞifre === doğruŞifre;
console.log(isValid)//false döndürecek

console.log(Number("86")); //86
console.log(Number(true)); //1
console.log(Number(null)); //0
console.log(Number("elma")) //NaN
console.log(Number("34px")) //NaN

console.log("41" - 21);
console.log(74 - true);
console.log(51 - "elma");
console.log(16 - null);

console.log(Number.parseInt("15.24cm")) //15
console.log(Number.parseInt("2m31")) //2
console.log(Number.parseInt("m431")) // NaN

console.log(Number.parseFloat("31.42santim")) //31.42
console.log(Number.parseFloat("1m32")) //1
console.log(Number("mr3146")) //NaN

const değer = "53.94mm"
const numerical = Number.parseFloat(değer)
const secondNumerical =Number.parseInt(değer)
console.log(numerical) // 53.94
console.log(secondNumerical) // 53

console.log(Math.floor(1.5)) // 1
console.log(Math.ceil(1.5)) // 2
console.log(Math.floor(3.8)) 
console.log(Math.ceil(3.8)) 
console.log(Math.round(1.7))
console.log(Math.round(10.2))
console.log(Math.max(25, 31, 56, 98, 42))
console.log(Math.min(25, 31, 56, 98, 42))

//_______________________________________________________________________

function kıyafetler() {
    const etek = 1;
    const kazak = 2;
    const pantolon = 5;
    const toplamKıyafetPuanı = etek + kazak + pantolon;
    return `Dolapta ${toplamKıyafetPuanı} puanlık kıyafet mevcut`;
}
console.log(kıyafetler());

function selamla() {
    console.log("Merhaba, İşletmemize Hoşgeldiniz!")
}
selamla(); //Fonksiyon aslında böyle çağrılır

function carpmaIslemi(x, y, z) {
    console.log(`Sonuç: ${x * y * z}`)
}
carpmaIslemi(2, 3, 5) //burada fonkisyonu yanlış çağırdın
carpmaIslemi(4, 8, 12)
carpmaIslemi(2, 6, 3)

function sepet(a, b, c) {
    const toplamMeyve = a + b + c
    console.log(`Sepette ${toplamMeyve} adet meyve vardır.`)
}
sepet(5, 8, 21)
sepet(3, 6, 9)

function ogrenciler(kızlar, erkekler) {
    const toplam = kızlar + erkekler;
    return toplam;
}
const toplamOgrenciler = ogrenciler(12, 22)
console.log(toplamOgrenciler)

function ekip(yöneticiler, çalışanlar) {
    const bütün = yöneticiler + çalışanlar;
    return bütün;                    //burada return olmasaydı console.log da cevap undefined olarak dönerdi 
}
const toplamEkip = ekip(2, 15)
console.log(toplamEkip)


function toplama(a, b) {
    console.log("returnden önce yazılan cümle ve bu sebeple gözükecek")
    return a + b
    console.log("Bu kod returnden sonra yazıldı ve bu sebeple gözükmeyecek")
}
console.log(toplama(2, 6))

function bölme(a, b, c) {
    console.log(`Sonuç ${a / b / c}`)
}
console.log("Bölmeden önceki log")
bölme(8, 2, 5)
console.log("Bölmeden sonraki log")

function toplamSipariş(isim, ücret, adet) {
    const toplamUcret = ücret * adet
    return `Sayın ${isim}, ücreti ${ücret}TL olan ${adet} adet kapının toplam fiyatı ${toplamUcret} TL'dir.`
}
console.log(toplamSipariş("Zafer", 1500, 5)) // console.log yazmayı unuttuğun için kod çalışmıyordu

//_______________________________________________________________________________________________________

//ÖDEVE BENZER ÇALIŞMALAR ÇIKTISI(GÖREV ÖRNEKLERİ CHATGPT DEN ALINMIŞTIR)

// TASK-1

function calculateBookOrder(bookQuantity, pricePerBook) {
    totalBookPrice = bookQuantity * pricePerBook
    return `You ordered ${bookQuantity} books worth ${totalBookPrice}  credits!`
}
console.log(calculateBookOrder(5, 150));
console.log(calculateBookOrder(3, 200)); 


// TASK-2

function getElectronicsDeliveryCost(country, price, deliveryFee) { 
    totalShippingPrice = price * deliveryFee
    return `Shipping to ${country} will cost ${totalShippingPrice} credits`
}
console.log(getElectronicsDeliveryCost("USA", 1000, 50)); 
console.log(getElectronicsDeliveryCost("Canada", 800, 40)); 

// TASK-3

function getButtonWidth(content, padding, border) {
    const contentWidth = parseFloat(content)
    const paddingWidth = parseFloat(padding)
    const borderWidth = parseFloat(border)
    const totalWidth = contentWidth + paddingWidth * 2 + borderWidth * 2
    return totalWidth
}
console.log(getButtonWidth("300px", "10px", "5px")); 
console.log(getButtonWidth("150px", "8px", "4px")); 

