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

// const rakamlar = [1, 2, 3, 4, 5];
// rakamlar.forEach(function (rakam,index) {
//     console.log(`${rakam} rakamının index numarası: ${index}`)
// })

// const rakamlar2 = [6, 7, 8, 9, 10];
// rakamlar2.forEach((rakam, index) => {
//     console.log(`${rakam} rakamının index numarası: ${index}`)
// })
// console.log("______________________________________________________________________")

// const reqemler = [2, 4, 6, 8]
// reqemler.forEach((rakam, index) => {
//     console.log(`${rakam} rakamının index numarası: ${index}`)
// })

//__________________________________________________________________________________________________________________________________

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};
console.log(pureMultiply([2, 4, 6, 8], 2));

const examp = [2, 4, 6, 8]
const doubleExamp = pureMultiply(examp, 2) 
console.log(examp);
console.log(doubleExamp)

const carpmaİslemi = (rakam, carpan) => {
    const dizi = [];
    rakam.forEach(eleman => {
        dizi.push(eleman * carpan);
    })
    return dizi;
};
console.log(carpmaİslemi([1, 3, 5, 7], 3));

//___________________________________________________________________________________________________________________________________
function changeEven(numbers, value) {
    const newArray = [];
    numbers.forEach((number) => {
        newArray.push(number % 2 === 0 ? number + value : number)
    })
    return newArray;
}

function bolmeİslemi(rakamlar, deger) {
    const bolunendizi = [];
    rakamlar.forEach((rakam) => {
        bolunendizi.push(rakam % 2 === 0 ? rakam + deger : rakam)
    })
    return bolunendizi;
}
console.log(bolmeİslemi([10,11,20,30,40],2))
//_________________________________________________________________________________________________

const meyveler = ["elma", "nar", "ananas"];
meyveler.forEach((oge, indeks, dizi) => {
    console.log(`Öğe:${oge}, İndex: ${indeks}, Dizi:${dizi}`)
});

const numbers = [10, 20, 30];

const squaredNumbers = numbers.map((item) => item * item)
console.log(squaredNumbers) //map() Metodu → Yeni bir dizi döndürür

const mapDeneme = numbers.map((item) => item - 2)
console.log(mapDeneme)

//______________________________________________________________________________


const fileteredNumbers = numbers.filter((item) => item > 10)
console.log(fileteredNumbers);      //filter() Metodu → Belirtilen koşulu sağlayan elemanları döndürür.

const urunler = ["Renkli Taşlı Saç Tokası", "Elmas Taşlı Saç Tokası"];
const harfArama = urunler.filter((item) => item.includes("n"));   // item yerine sürekli dizi ismini yazıyosun 
console.log(harfArama);

const urunİsimleri = ["Koltuk", "Kitap", "Battaniye", "Yorgan"];
const urunBulma = urunİsimleri.filter((item) => item.includes("t"));
console.log(urunBulma);

//___________________________________________________________________________

const sum = numbers.reduce((acc, item) => acc + item, 0);   //reduce() Metodu → Dizideki tüm elemanları tek bir değere indirger.
console.log(sum); 

const urunFiyatlar = [50, 60, 80, 40];
const fiyatTopla = urunFiyatlar.reduce((acc, item) => acc + item, 0);
console.log(fiyatTopla)

const gezegenler = ["EarTh", "MaRs", "VeNus", "Jupİter"];
const buyukGezegen = gezegenler.map(gezegen => gezegen.toUpperCase());
const kucukGezegen = gezegenler.map(gezegen => gezegen.toLowerCase());
console.log(buyukGezegen);
console.log(kucukGezegen);

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const stName = students.map(student => student.name);
const stScore = students.map(student => student.score);
console.log(stName);
console.log(stScore);

const studentts = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];
const sttName = studentts.map((student) => student.name);
const sttCourses = studentts.map((student) => student.courses);
console.log(sttCourses);
console.log(sttName);

//____________________________________________________________________________________________________________________________________

const values = [25, 86, 95, -32, -25, 43];
const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues);
const negativeValues = values.filter(value => value < 0);
console.log(negativeValues);
const bigValues = values.filter(values => values > 1000);
console.log(bigValues);
//___________________________________________________________
 
const LOW_STOCK = 10;
const HIGH_STOCK = 50;
const products = [
  { name: "Laptop", stock: 5 },
  { name: "Mouse", stock: 25 },
  { name: "Keyboard", stock: 60 },
  { name: "Monitor", stock: 8 },
  { name: "Printer", stock: 45 },
];
const best = products.filter((product) => product.stock >= HIGH_STOCK);
const worst = products.filter((product) => product.stock < LOW_STOCK);
const average = products.filter(
  ({ stock }) => stock >= LOW_STOCK && stock < HIGH_STOCK
);

console.log("Yüksek Stoklu Ürünler (best):", best);
console.log("Düşük Stoklu Ürünler (worst):", worst);
console.log("Orta Stoklu Ürünler (average):", average);

//______________________________________________________________________________________________________________________________________

//find() metodu, bir dizide tek bir öğeyi bulmak istediğinizde kullanışlıdır

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

console.log(colorPickerOptions.find((option) => option.label === "blue"));
console.log(colorPickerOptions.find((option) => option.label === "pink"));
console.log(colorPickerOptions.find((option) => option.label === "white"));

//_________________________________________________________________________________________________________
const fruits = [
	{ name: "apple", quantity: 2 },
	{ name: "orange", quantity: 5 },
	{ name: "plum", quantity: 0 },
];
const everyFruits = fruits.every((fruit) => fruit.quantity > 0);
console.log(everyFruits);

const ciftRakamlar = [2, 4, 6, 8];
const ciftRakamKontrol = ciftRakamlar.every((rakam) => rakam % 2 === 0);
console.log(ciftRakamKontrol); // true

//_________________________________________________________________________________________________________

const fruits1 = [
  { name: "apple", quantity: 2 }, 
  { name: "orange", quantity: 5 }, 
  { name: "plum", quantity: 0 },  
];

const someFruits = fruits1.some((fruiit) => fruiit.quantity > 0);
console.log(someFruits);

//_______________________________________________________________________________________________________

const total = [2, 5, 6, 9, 8].reduce((prev, num) => prev + num, 0);
console.log(total);

const icindeTopla = [3, 4, 9, 7, 6].reduce((elma, rkm) => elma + rkm, 0);
console.log(icindeTopla);

//_________________________________________________________________________________________________________

const studennts = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const totalScoree = studennts.reduce((total, studennts) => {
    return total + studennts.score;
}, 0);
const averageScoree = totalScoree + studennts.length;
console.log(averageScoree);

//___________________________________________________________________________________________________________

const sayilar = [5, 9, 3, 2, 1, 7, 8, 0,4];
const siraliSayilar = sayilar.toSorted();
console.log(siraliSayilar);

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const ascendingReleaseDates = releaseDates.toSorted();
console.log(ascendingReleaseDates);

//____________________________________________________________________________________________________________


const ogrenci = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
const harflerinSiralanmasi = ogrenci.toSorted((a, b) => a.localCompare(b));
console.log(harflerinSiralanmasi);

