// DALLANMA VE DÖNGÜLER

function yaşKontrolu(yaş) {  // burada yaş parametresini eklemedin
    if (yaş >= 18) {
        return "Bu kişi reşittir" // burada returnleri yazmamıştın
    } else {
       return  "Bu kişi reşit değildir"
    }
}
console.log(yaşKontrolu(15)) //console.log da fonkisyonu bütün çağırmadın
console.log(yaşKontrolu(22))


function stokKontrol(stok, siparişmiktarı) { // bu  fonskiyonda herşeyi doğru yazdın
    if (stok > siparişmiktarı) {
        return "Stokta yeterli kadar ürün vardır."
    } else {
        return "Stokta yeterli kadar ürün yoktur."
    }
}
console.log(stokKontrol(234, 325))
console.log(stokKontrol(678, 426))

function bavulKgÖlçüm(kg) {
    if (kg <= 22) {
        return "Sınır kilo seviyesinden azdır"
    } else if(kg === 23) {                     // eşittir işaresini düzgün koymamıştın
        return "Sınır kilo seviyesindesiniz."
    } else {
        return "Sınır kilo seviyesini aştınız"
    }
}
console.log(bavulKgÖlçüm(23))
console.log(bavulKgÖlçüm(18))
console.log(bavulKgÖlçüm(28))

function checkStorage(avilable, ordered) {
    if (ordered === 0) {
        return "There are no products in the order!"
    } else if (avilable > ordered) {
        return "Your order is too large, there are not enough items in stock!"
    } else {
        return "The order is accepted, our manager will contact you"  // return yazmayı unuttun
    }
}
console.log(checkStorage(1300, 0))
console.log(checkStorage(800,256))
console.log(checkStorage(600, 1300))


const kişiSayısı = 4
const kontrol = kişiSayısı <= 4
    ? "Çekirdek aile"    
    : "Geniş aile"
console.log(kişiSayısı) // ilk böyle çağırdın yanlış! aşağıdaki gibi yapman lazım
console.log(kontrol)  // Doğru yeri çağır

const f = 86
const g = 23
const büyükRakam = g > f
    ? g
    : f
console.log("Büyük rakam:", büyükRakam) // clg ya "" içinde metin yanında başka bir değer yazılacaksa virgül ile ayırmalısın

function checkPassword(password) {
    const correctPassword = "benimSaçımVar"
    return password === correctPassword
        ? "Access granted"
        : "Access denied wrong password"
}
console.log(checkPassword("TolgaÇevik"))
console.log(checkPassword("benimSaçımVar")) // fonksiyonu clg olmadan çağırdın!!!

const futbolcu = "Arda Güler"
switch (futbolcu) {
    case "Demba Ba":
        console.log("Demba Ba seçildi")
        break;
    case "Pepe":
        console.log("Pepe seçildi")
        break;
    case "Alex":
        console.log("Alex seçildi")
        break
    default:
        console.log("Hiçbir futbolcu seçilmedi")
}

// function fiyatKalite(fiyatı) {    bu fonksiyonda return kullanılmamıştır sw yapısı kendi içiinde doğru fonk için yanlış
//     switch (fiyatı) {
//         case 10:
//             console.log("Düşük bütceli ürün")
//             break
//         case 30:
//             console.log("Orta bütçeli ürün")
//             break
//         case 50:
//             console.log("Yüksek bütçeli ürün")
//             break
//         default:
//             console.log("Giriş yaptığınız fiyatta ürün bülünmamaktadır")
//     }
// }
// console.log(fiyatKalite(30))


function fiyatKalite(fiyatı) { //fonk da clg ve break kullanılmaz switch-case ve return yeterli 
    switch (fiyatı) {
        case 10:
            return "Düşük bütceli ürün"
        case 30:
            return "Orta bütçeli ürün"
        case 50:
            return "Yüksek bütçeli ürün"
        default:
            return "Giriş yaptığınız fiyatta ürün bülünmamaktadır"
    }
}
console.log(fiyatKalite(30))

console.log(Boolean(true))
console.log(Boolean(false))
console.log(Boolean(null))
console.log(Boolean(-7))

if (null) { // null un js da değeri false olduğu için  if değil else çalıştırıldı
    console.log ("Block if")
} else {
    console.log ("Block else")
}

if(-7) {
	console.log("Block if")
} else {
	console.log("Block else")
}

console.log("elma" && "elma şekeri") // true olunca sağdakini yazdırır
console.log("Ayşegül" && 81)
console.log(0 && 81) // false değer 0 diye onu yazdırdı

const n = 18
console.log(n <= 18 && n > 3)

const elma = "meyve"
console.log(elma === "meyve" && elma !== "sebze")

const screenWidth = 700;
const sm = 320;
const md = 768;
const lg = 1200;
if(screenWidth <= sm) {
	console.log("Mobile screen");
} else if(screenWidth > sm && screenWidth <= md) {
	console.log("Tablet screen");
} else if(screenWidth > md && screenWidth <= lg) {
	console.log("Desktop screen");
} else {
	console.log("Godzilla screen");
}

function isNumberInRange(start, end, number) {
    return number >= start && number <= end;
}
console.log(isNumberInRange(25, 86, 32))

console.log(15 || 0)
console.log(true || false)

const a = 5;
console.log(a < 10 || a > 30); // true || false -> true

const b = 50;
console.log(b < 10 || b > 30); // false || true -> true

const c = 20;
console.log(c - 20 || c * 2); // 0 || 40 -> 40


const screennWidth = 700;
const smm = 320;
const mmd = 768;
const lgg = 1200;

if(screennWidth <= smm || screennWidth > mmd) {
	console.log("Mobile or Desktop screen");
  // koşullardan hiçbiri doğru olmadığı için konsol boş olacaktır
}

function checkAccess(subType) {
    return subType === "Pro" || subType === "vip"
}


const isBlocked = false;
const canChat = !isBlocked; // !false -> true
if(canChat) {
	console.log("Can type in chat!")
} else {
	console.log("Blocked from typing in chat!")
}


const love = "Canım sevgilim seni çok seviyorum"
console.log(love.toUpperCase())
console.log(love.slice())

const manifest = "Saçlarım bir ayda çok hızlı uzadı 777"
console.log(manifest.toUpperCase())
console.log(manifest.slice(8, 15))
console.log(manifest.slice(8))
console.log(manifest.slice())

function getSubstring(string, length) {
  return string.slice(0, length);
}
console.log(getSubstring("Selam Güzelim", 13))
console.log(getSubstring("Nasılsın fıstık", 8))

const dua = "İNşalLAH ÜLKEME SAĞ salim DÖNÜP GeleYİM"
console.log(dua.toUpperCase())
console.log(dua.toLowerCase())

function normalizeInput(input, to) {
    return to === "upper"
        ? input.toUpperCase()
        : input.toLowerCase();
}
console.log(normalizeInput("This ISN'T SpaM", "lower"))
console.log(normalizeInput("Alma almaya benzer", "upper"))

function yazımDüzeltme(metin, komut) {
    return komut === "büyüt"
        ? metin.toUpperCase()
        : metin.toLowerCase();
}
console.log(yazımDüzeltme("Ana senin üçün çox darıxmışam", "büyüt"))
console.log(yazımDüzeltme("NOLDU PAŞİNYAN", "küçült"))

const üni = "Ben Kütahya Dumlupınar Üniversitesinde okuyorum"
console.log(üni.includes("Dumlupınar"))
console.log(üni.includes("elma"))

function checkForName(fullName, firstName) {
  return fullName.toLowerCase().includes(firstName.toLowerCase());
}
console.log(checkForName("Jason Neis", "Jason"))

function isimKontrol(isim, ad) {
    return isim.toUpperCase().includes(ad.toUpperCase())
}
console.log(isimKontrol("Negin Kerimli", "Ali"))

const havaLiman = "Bakü Haydar Aliyev Havaalanına Hoşgeldiniz!"
console.log(havaLiman)
console.log(havaLiman.endsWith("Hoşgeldiniz!"))
console.log(havaLiman.startsWith("Bakü"))
const indexH = havaLiman.indexOf("Bakü")
console.log(indexH)

function getFileName(file) {
  const index = file.indexOf(".");
    return index === -1
        ? file
        : file.slice(0, index);
}
console.log(getFileName("index.html"))

const input = " JavaScript is awesome!    ";
const trimmedInput = input.trim();
console.log(trimmedInput); // "JavaScript is awesome!"
console.log(input); // " JavaScript is awesome!    "

// son iki kod örbeğine çalış