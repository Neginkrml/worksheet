const bilgisayarlar = {
    lenovo: {
        modelİsmi: "IdeaPad 3",
        ekranBoyutu: "14 inç ekran",
        bellek: "8 GB RAM",
        dahiliHafiza: "256 GB SSD"
    },
    hp: {
        modelİsmi: "Pavilion 15",
        ekranBoyutu: "15.6 inç ekran",
        bellek: "16 GB RAM",
        dahiliHafiza: "1 TB SSD"
    },
    acer: {
        modelİsmi: "Aspire 5",
        ekranBoyutu: "15.6 inç Full HD ekran",
        bellek: "8 GB RAM",
        dahiliHafiza: "512 GB SSD"
    },
};
console.log(bilgisayarlar);
console.log(bilgisayarlar.hp);
//______________________________________________________________________________________________________________________________________________________________________________________________________________________________________

const apartmandaYaşayanlar = {
    kat1: {
        isim: "Kenan İmirzalioğlu",
        daire: "No:1",
    },
    kat2: {
        isim: "Kemal Kiliçdaroğlu",
        daire: "No:2",
    },
   genel : ["Kapici","usta"]
};
const ilkEleman = apartmandaYaşayanlar.kat1.isim;
const calisanlar = apartmandaYaşayanlar.genel;
const ilkCalisan = apartmandaYaşayanlar.genel[0]
console.log(ilkEleman);
console.log(calisanlar);
console.log(ilkCalisan);
//___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

apartmandaYaşayanlar.kat3 = {  // nesne ekleme
    isim: "Demet Akalin",
    daire: "No:3"
};
console.log(apartmandaYaşayanlar)
//__________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

const isim = "Negin Kerimli";               //Kısa özellikler
const yaş = 22;
const kendim = {
    isim,
    yaş,
}
console.log(kendim)

const eklenenİsim = "name";
const user = {
  age: 22,
};
user[eklenenİsim] = "Negin Kerimli";
console.log(user.name);


const email = "email";
const sifre = "password"

const instagram = {
    [email] : "ngnkrml03@gmail.com",
    [sifre] : "falanfilan",
}
console.log(instagram)
//___________________________________________________________________________________________________________________________________________________________________________________________________________________

const ev = {
    tip: "Daire",
    odaSayisi: 3,
    metrekare: 120,
    kat: 5,
    lokasyon: "İstanbul, Kadiköy",
    fiyat: "2.500.000 TL"
};
for (const key in ev) {
    console.log(key);
    console.log(ev[key])
}


const homeKeys = [];
const homeValues = [];
for (const key in ev) {
    homeKeys.push(key);
    homeValues.push(ev[key]);
};
console.log(homeKeys);
console.log(homeValues);


const cicek = {
    isim: "Gül",
    renk: "Kirmizi",
    anlam: "Aşk ve Tutku",
    yetistigiYer: "Bahçeler, Sera Ortamlari",
};

const cicekValues = [];
const cicekKeys = Object.keys(cicek);
for (const key of cicekKeys) {
    cicekValues.push(cicek[key])
};
console.log(cicekKeys);
console.log(cicekValues)

//___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

const telefonlar = {
    samsung: {
        modelAdi: "Galaxy S21",
        ekranBoyutu: "6.2 inç AMOLED",
        bellek: "8 GB RAM",
        dahiliDepolama: "128 GB",
        kamera: "64 MP"
    },
    apple: {
        modelAdi: "iPhone 13",
        ekranBoyutu: "6.1 inç Super Retina XDR",
        bellek: "4 GB RAM",
        dahiliDepolama: "256 GB",
        kamera: "12 MP"
    },
    xiaomi: {
        modelAdi: "Mi 11",
        ekranBoyutu: "6.81 inç AMOLED",
        bellek: "12 GB RAM",
        dahiliDepolama: "256 GB",
        kamera: "108 MP"
    }
};
// for (const key in telefonlar) {
//     console.log(telefonlar[key])
// }

const telefonlarKey = []
const telefonlarValue = []
for (const key in telefonlar) {
    telefonlarKey.push(key)
    telefonlarValue.push(telefonlar[key])
} 
console.log(telefonlarKey);
console.log(telefonlarValue);

//_______________________________________________________________________________________________________________________________________________________________________________________________________________________________

const bina = {
    isim: "Empire State Binasi",
    yer: "New York, ABD",
    yükseklik: "443.2 metre",
    katSayisi: 102,
    yapimYili: 1931,
    mimar: "Shreve, Lamb & Harmon",
    kullanimAmaci: "Ofisler, Gözlem Deckleri",
};

const binaKeys = Object.keys(bina);
const binaValues = Object.values(bina);
console.log(binaKeys);
console.log(binaValues);

//____________________________________________________________________________________________________________________________________________________________________________________________________________________________________

const mobilyaMarkalari = {
    ikea: {
        urunAdi: "KALLAX Raf Ünitesi",
        malzeme: "Ahşap, Kontrplak",
        renk: "Beyaz",
        boyutlar: "77x147 cm",
        kullanim: "Depolama, Dekorasyon",
        fiyatAraligi: "Orta"
    },
    karacaHome: {
        urunAdi: "Luxury Yemek Masası",
        malzeme: "Mermer, Metal",
        renk: "Siyah",
        boyutlar: "160x90 cm",
        kullanim: "Yemek Odası",
        fiyatAraligi: "Yüksek"
    },
    bellona: {
        urunAdi: "Comfort Koltuk Takımı",
        malzeme: "Kumaş, Sünger",
        renk: "Bej",
        boyutlar: "3+2 Koltuk",
        kullanim: "Oturma Odası",
        fiyatAraligi: "Orta-Yüksek"
    },
};
const markalar = [];
const urunAdlari = [];
const renkler = [];
const boyutlari = [];
const kullanimlar = [];
const fiyatlari = [];
for (const marka in mobilyaMarkalari) {
    if (mobilyaMarkalari.hasOwnProperty(marka)) {
        const urun = mobilyaMarkalari[marka];

        markalar.push(marka);  // Markayı ekle
        urunAdlari.push(urun.urunAdi);  // Ürün adını ekle
        renkler.push(urun.renk);  // Rengi ekle
        boyutlari.push(urun.boyutlar);  // Boyutu ekle
        kullanimlar.push(urun.kullanim);  // Kullanım alanını ekle
        fiyatlari.push(urun.fiyatAraligi);  // Fiyat aralığını ekle
    }
}

console.log("Markalar:", markalar);
console.log("Ürün Adları:", urunAdlari);
console.log("Renkler:", renkler);
console.log("Boyutlar:", boyutlari);
console.log("Kullanım Alanları:", kullanimlar);
console.log("Fiyat Aralıkları:", fiyatlari);

//_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

const sacTokalari = [
    {
        isim: "Elmas Taşlı Saç Tokası",
        malzeme: "Gümüş, Elmas",
        renk: "Gümüş Rengi",
        boyut: "5 cm",
        tasarim: "Minimalist",
        marka: "Swarovski"
    },
    {
        isim: "Altın Kaplama Saç Tokası",
        malzeme: "Altın, Kristal",
        renk: "Altın Rengi",
        boyut: "6 cm",
        tasarim: "Gösterişli",
        marka: "Pandora"
    },
    {
        isim: "Renkli Taşlı Saç Tokası",
        malzeme: "Paslanmaz Çelik, Cam",
        renk: "Çok Renkli",
        boyut: "4.5 cm",
        tasarim: "Renkli",
        marka: "Accessorize"
    }
];

const tokaMalzemesi = [];
const tokaRengi = [];
for (const toka of sacTokalari) {
    tokaMalzemesi.push(toka.malzeme)
    tokaRengi.push(toka.renk)
};
console.log(tokaMalzemesi);
console.log(tokaRengi);

//____________________________________________________________________________________________________________________________________________________________________________________________________________________________

const camasirMakineleri = [
    {
        urunAdi: "Bosch",
        yikamaKapasitesi: "9 kg",
        devirHizi: "1400 devir/dakika",
    },
    {
        urunAdi: "Arçelik",
        yikamaKapasitesi: "9 kg",
        devirHizi: "1000 devir/dakika",
    },
    {
        urunAdi: "Samsung",
        yikamaKapasitesi: "9 kg",
        devirHizi: "1400 devir/dakika",
    },
    {
        urunAdi: "Vestel",
        yikamaKapasitesi: "9 kg",
        devirHizi: "1200 devir/dakika",
    }
];

const kaliteliUrun = "Bosch";

for (const urun of camasirMakineleri) {
    if (urun.urunAdi === kaliteliUrun) {
        console.log(urun.urunAdi);
        console.log(urun.yikamaKapasitesi);
        console.log(urun.devirHizi);
    }
} 

//____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

function urunFiyatlandirmasi(urununAdi) {
    const sutMarkalari = [
        {
            adi: "İçim",
            fiyat: 36,
            adet: 5,
        },
        {
            adi: "Pinar",
            fiyat: 35,
            adet: 3,
        },
        {
            adi: "Dost",
            fiyat: 31,
            adet: 4,
        }
    ];

    for (const sut of sutMarkalari) {
        if (urununAdi === sut.adi) {
            return sut.fiyat;
        }
    }
    return null;
}

const fiyat = urunFiyatlandirmasi("Mis");
console.log(fiyat); // 35

//__________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

const kitaplar = [
  { baslik: "The Last Kingdom", yazar: "Bernard Cornwell", puan: 8.2 },
  { baslik: "Beside Still Waters", yazar: "Robert Sheckley", puan: 9 },
  { baslik: "The Dream of a Ridiculous Man", yazar: "Fyodor Dostoevsky", puan: 6.8 }
];

let toplamPuan = 0;

for (const kitap of kitaplar) {
    toplamPuan += kitap.puan
}

const ortalamaSonuc = toplamPuan / kitaplar.length
console.log(ortalamaSonuc)

//___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  for (const product of products) {
    if (productName === product.name) {
      return product.price * product.quantity;
    }
  }
  return `Product ${productName} not found!`;
}
console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Tablet"));

//_____________________________________________________________________________________________________________________________________________________________________________________________

const movieCollection = {
  movies: ["Inception", "Interstellar"],

  getMovies() {
    console.log(this.movies);
  },

  addMovie(movieName) {
    this.movies.push(movieName);
    console.log(`${movieName} koleksiyona eklendi.`);
  }
};
movieCollection.addMovie("The Matrix")
movieCollection.getMovies();


const studentList = {
  students: ["Ahmet", "Zeynep"],

  getStudents() {
    console.log(this.students);
  },

  addStudent(studentName) {
    this.students.push(studentName);
    console.log(`${studentName} listeye eklendi.`);
  }
};
studentList.addStudent("Mehmet");
studentList.getStudents();

//____________________________________________________________________________________________________________________________________________________________________________________________________________________________________-

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 }
  ],

  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    this.potions.push(newPotion);
  },

  getTotalPrice() {
    let totalPrice = 0;
    for (const potion of this.potions) {
      totalPrice += potion.price;
    }
    return totalPrice;
  }
};

console.log(atTheOldToad.getTotalPrice());
atTheOldToad.addPotion({ name: "Healing Potion", price: 300 });
console.log(atTheOldToad.getTotalPrice());

//____________________________________________________________________________________________________________________________________________________________________________________________

const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "1984", author: "George Orwell" },
  ],

  getBooks() {
    return this.books;
  },

  addBook(newBook) {
    this.books.push(newBook);
  },

  updateBookTitle(oldTitle, newTitle) {
    for (const book of this.books) {
      if (book.title === oldTitle) {
        book.title = newTitle;
      }
    }
  }
};

library.addBook({ title: "Brave New World", author: "Aldous Huxley" });
console.log("Önce:", library.getBooks());

library.updateBookTitle("1984", "Nineteen Eighty-Four");
console.log("Sonra:", library.getBooks());

console.log("___________________________________________")

const recipeManager = {
  recipes: [
    { name: "Spaghetti Bolognese", ingredients: ["spaghetti", "ground beef", "tomato sauce"] },
    { name: "Chicken Curry", ingredients: ["chicken", "curry powder", "coconut milk"] },
  ],

  getRecipes() {
    return this.recipes;
  },

  addRecipe(newRecipe) {
    this.recipes.push(newRecipe);
  },

  updateRecipeName(oldName, newName) {
    for (const recipe of this.recipes) {
      if (recipe.name === oldName) {
        recipe.name = newName;
      }
    }
  }
};

recipeManager.addRecipe({ name: "Caesar Salad", ingredients: ["lettuce", "chicken", "caesar dressing"] });
console.log("Önce:", recipeManager.getRecipes());

recipeManager.updateRecipeName("Chicken Curry", "Spicy Chicken Curry");
console.log("Sonra:", recipeManager.getRecipes());

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

function sira(...args) {
    console.log(args)
};
sira(1, 2, 3)


function add(...args) {
    let total = 0
    for (const arg of args) {
        total += arg
    }
    return total
}
console.log(add(1, 2, 3, 5))
console.log(add(5, 10))

function aşk(...args) {
    let total = 0
    for (const arg of args) {
        total += arg
    }
    return total
}

console.log(aşk(8.5, 15, 11.1))

//__________________________________________________________________________________________________________________________________________________________________________________________________________----

function strawBerry(first, second, ...args) {
    console.log(first, second, args)
}
strawBerry(1, 2, 5, 9)


function addOverNum(value, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > value) {
      total += arg;
    }
  }

  return total;
}

console.log(addOverNum(5, 1, 2, 6, 7, 3)); // 13 (6 + 7)
console.log(addOverNum(10, 1, 20, 15, 5)); // 35 (20 + 15)
console.log(addOverNum(0, -5, 10, -3, 7)); // 17 (10 + -3 + 7)

console.log("___________________________________________________")

function sumAboveLimit(limit, ...numbers) {
  let totalSum = 0;

  for (const num of numbers) {
    if (num > limit) {
      totalSum += num;
    }
  }

  return totalSum;
}

console.log(sumAboveLimit(8, 4, 9, 10, 12, 5, 7)); // 31 (9 + 10 + 12)
console.log(sumAboveLimit(0, -1, 2, -3, 4, 5));   // 11 (2 + 4 + 5)
console.log(sumAboveLimit(20, 30, 40, 10, 25));    // 95 (30 + 40 + 25)
console.log(sumAboveLimit(50, 40, 60, 70));        // 130 (60 + 70)

//_____________________________________________________________________________________________________________________________________________________________________________________________________________________

function getExtremeScores(scores) {
  return {
    best: Math.max(...scores),
    worst: Math.min(...scores),
  };
}

const scores = [78, 92, 85, 61, 94];
const result = getExtremeScores(scores);
console.log(result);     // Çıktı: { best: 94, worst: 61 }


function buyukRakam(rakam) {
    return {
        enİyi: Math.max(...rakam),
        enKotu: Math.min(...rakam),
    }
}
const rakam = [86, 54, 31, 49, 55];
const sonuc = buyukRakam(rakam)
console.log(sonuc)

//___________________________________________________________________________________________________________________________________________________________________________________________________________________________

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

console.log(bestScore);  // 97
console.log(worstScore); // 14


const teamOneScores = [72, 56, 88];
const teamTwoScores = [90, 35, 62, 41];
const teamThreeScores = [51, 75, 29, 68, 84];

const combinedScores = [
  ...teamOneScores,
  ...teamTwoScores,
  ...teamThreeScores,
];

const highestScore = Math.max(...combinedScores);
const lowestScore = Math.min(...combinedScores);

console.log(highestScore); // En yüksek puan
console.log(lowestScore);  // En düşük puan

//________________________________________________________________________________________________________________________________________________________________________________________________________________-

const birinciRaf = ["şiirler", "hikayeler", "masallar"];
const ikinciRaf = ["destan", "roman", "novella"]

const dolap = { ...birinciRaf, ...ikinciRaf }; //ikinciyi yazdıracak
console.log(dolap)

const dolap2 = { ...ikinciRaf, ...birinciRaf }  // birinciyi yazdıracak
console.log(dolap2)

