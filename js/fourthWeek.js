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
    lokasyon: "İstanbul, Kadıköy",
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