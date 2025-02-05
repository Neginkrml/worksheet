const meyveFiyatlari = {
    elma: 10,
    muz: 15,
    çilek: 20,
    portakal: 12
};
function fiyatGoster(meyve) {
    if (meyveFiyatlari[meyve]) {
        console.log(`${meyve} fiyatı: ${meyveFiyatlari[meyve]}'TL`)
    } else {
        console.log(`${meyve} stokta yok.`);
    }
}
function meyveSorgula(meyve, callback) {
    console.log(`Sorgulanan meyve: ${meyve}`)
    callback(meyve);
}
meyveSorgula("elma", fiyatGoster)
meyveSorgula("muz", fiyatGoster);
//__________________________________________________________________________________________________________________________________

const kutuphaneKitaplari = {
    "Suç ve Ceza": { yazar: "Fyodor Dostoyevski", durum: "Mevcut" },
    "1984": { yazar: "George Orwell", durum: "Ödünç Alındı" },
    "Küçük Prens": { yazar: "Antoine de Saint-Exupéry", durum: "Mevcut" },
    "Dönüşüm": { yazar: "Franz Kafka", durum: "Mevcut" }
};

function kitapDurumuSorgula(kitapAdi) {
    if (kutuphaneKitaplari[kitapAdi]) {
        const kitap = kutuphaneKitaplari[kitapAdi];
        console.log(`Kitap: ${kitapAdi}`);
        console.log(`Yazar: ${kitap.yazar}`);
        console.log(`Durum: ${kitap.durum} `)
    } else {
         console.log(`"${kitapAdi}" adlı kitap kütüphanede bulunmamaktadır.`);
    }
}

function kutuphaneSorgula(kitapAdi, callback) {
    console.log(`Kütüphanede sorgulanan kitap: ${kitapAdi}`);
    callback(kitapAdi);
}

kutuphaneSorgula("Küçük Prens",kitapDurumuSorgula)

//____________________________________________________________________________________________________________________________________

const filmKoleksiyonu = {
    "Başlangıç": { yonetmen: "Christopher Nolan", yil: 2010 },
    "Yüzüklerin Efendisi": { yonetmen: "Peter Jackson", yil: 2001 },
    "Prestij": { yonetmen: "Christopher Nolan", yil: 2006 },
    "Dövüş Kulübü": { yonetmen: "David Fincher", yil: 1999 }
};

function filmDetaylariGoster(filmAdi) {
    if (filmKoleksiyonu[filmAdi]) {
        const film = filmKoleksiyonu[filmAdi]
        console.log(`Film: ${filmAdi}`);
        console.log(`Yönetmen: ${film.yonetmen}`);
        console.log(`Yıl: ${film.yıl}`)
    } else {
        console.log(`"${filmAdi}" adlı film koleksiyonumuzda bulunmamaktadır.`);
    }
}
function filmSorgula(filmAdi,callback) {
    console.log(`Sorgulanan film: ${filmAdi}`);
    callback(filmAdi);
}
filmSorgula("Başlangıç", filmDetaylariGoster);
filmSorgula("Inception", filmDetaylariGoster);
//______________________________________________________________________________________________________________________________________

function meyveSiparisi(meyveAdi, callback) {
    console.log(`Sipariş için hazırlanıyor:  ${meyveAdi} `)
    callback(meyveAdi);
}
meyveSiparisi("Elma", function teslimSiparis(meyveAdi) {
    console.log(`Siparişte teslim edilen meyve: ${meyveAdi}`)
})

function pizzaSiparisi(pizzaismi, callback) {
    console.log(`${pizzaismi} adlı pizza siparişiniz hazırlanıyor`);
    callback(pizzaismi);
}
pizzaSiparisi("Pepperoni", function pizzateslimi(pizzaismi) {
    console.log(`"${pizzaismi}" isimli pizza siparişiniz yola çıkmıştır.`);
})
pizzaSiparisi("Pepperoni", function pizzaGeriBildirim(pizzaismi) {
    console.log(`${pizzaismi} pizzanız teslim edilmiştir. Hizmetimiz hakkında fikir bildirmeyi unutmayın`)
})

//_______________________________________________________________________________________________________________________________________

const daireNumaralari = [25, 26, 32, 49, 51];
daireNumaralari.forEach(function (daire, index) {
    console.log(`Daire numarası:${daire}, daire indeksi${index}`);
});

function uzunKelimeleriFiltrele(kelimeler, uzunluk) {
    const filtrelenmisKelimeler = [];
    kelimeler.forEach(function (kelime) {
        if (kelime.length > uzunluk) {  // 'lenght' yerine 'length' kullanılmalı
            filtrelenmisKelimeler.push(kelime);
        }
    });
    return filtrelenmisKelimeler;
};
console.log(uzunKelimeleriFiltrele(["Kitap", "Aynure", "Nazlı", "Xudaferin", "Negin"], 5));
console.log(uzunKelimeleriFiltrele(["elma", "armut", "çilek", "kavun", "karpuz"], 5));

//__________________________________________________________________________________________________________________________________________

const toplama = (a, b, c) => {
    return a + b + c  
}
console.log(toplama(5, 3, 8))

const selamla = () => {
    console.log("Selam")
}
selamla()

const toplama2 = (a, b, c)=> {
    console.log(a, b, c);
    return a + b + c;
}
const toplama3 = (a, b, c) => a + b + c;

//________________________________________________________________________________________________________________________________________

const rakamlar = [1, 2, 3, 4, 5];
rakamlar.forEach(function (rakam,index) {
    console.log(`${rakam} rakamının index numarası: ${index}`)
})

const rakamlar2 = [6, 7, 8, 9, 10];
rakamlar2.forEach((rakam, index) => {
    console.log(`${rakam} rakamının index numarası: ${index}`)
})
console.log("______________________________________________________________________")

const reqemler = [2, 4, 6, 8]
reqemler.forEach((rakam, index) => {
    console.log(`${rakam} rakamının index numarası: ${index}`)
})