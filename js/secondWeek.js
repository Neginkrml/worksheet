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

