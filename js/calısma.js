/* let isim = prompt("İsminizi giriniz: ");
let tckn = prompt(" TC Kimlik Numaranızı giriniz: ");

function giris(isim, tckn) {
    if (isim !== "") {
        if (tckn.length === 11) {
            console.log("İsim ve TC kimlik numarası başarıyla girilmiştir")
        } else {
            console.log("TC kimlik numarası doğru girilmemiştir")
        }
    } else {
        console.log("İsminizi doğru giriniz!!!")
    }
};
giris(isim, tckn); */

//!___________________________________________________________________________________

/* let boy = Number(prompt("Boyunuzu metre cinsinden girin (örn: 1.75):"));
let kilo = Number(prompt("Kilonuzu girin:"));
let sonuc = kilo / (boy * boy);  // Doğru BMI hesaplama

function kitleolcumu(sonuc) {
  if (sonuc < 18.5) {
    console.log("İdeal kilonun altında");
  } else if (sonuc >= 18.5 && sonuc <= 24.9) {
    console.log("İdeal kiloda");
  } else if (sonuc >= 25 && sonuc <= 29.9) {
    console.log("İdeal kilonun üstünde");
  } else if (sonuc >= 30 && sonuc <= 39.9) {
    console.log("İdeal kilonun çok üstünde (obez)");
  } else if (sonuc >= 40) {
    console.log("İdeal kilonun çok üstünde (morbid obez)");
  } else {
      console.log("Vücut kitleniz hesaplanamıyor")
  }
}
kitleolcumu(sonuc); */


//!___________________________________________________________________________________

/* let dizel = 24.53, benzin = 22.25, lpg = 11.1
const yenisatir = "\r\n"

const yakitmetni = "1-Dizel" + yenisatir
    + "2-Benzin" + yenisatir
    + "3-LPG" + yenisatir
    + "Yakıt türünü seçiniz"

let yakitTipi = prompt(yakitmetni);
let yakitLitresi = Number(prompt("Yakıt litresini giriniz"));
let bakiye = Number(prompt("Bakiyenizi girin"));

if (yakitTipi == "1") {
    let odenecektutar = dizel * yakitLitresi;
    if (odenecektutar < bakiye) {
        bakiye = bakiye - odenecektutar
        alert("Yakıt alma işlemi başarılı" + yenisatir
            + "Kalan bakiye: " +(odenecektutar-bakiye)
        )
    } else {
        alert("Bakiyeniz yeterli değil" + yenisatir
            + "Ödenecek tutar: " + odenecektutar + yenisatir
            + "Bakiyeniz: " + bakiye + yenisatir
            +"Eksik tutar: "+(odenecektutar-bakiye)
        )
    }
} else if (yakitTipi == "2") {
    let odenecektutar = benzin * yakitLitresi;
    if (odenecektutar < bakiye) {
        bakiye = bakiye - odenecektutar
        alert("Yakıt alma işlemi başarılı" + yenisatir
            + "Kalan bakiye: " +(odenecektutar-bakiye)
        )
    } else {
        alert("Bakiyeniz yeterli değil" + yenisatir
            + "Ödenecek tutar: " + odenecektutar + yenisatir
            + "Bakiyeniz: " + bakiye + yenisatir
            +"Eksik tutar: "+(odenecektutar-bakiye)
        )
    }
} else if (yakitTipi == "3") {
    let odenecektutar = lpg * yakitLitresi;
    if (odenecektutar < bakiye) {
        bakiye = bakiye - odenecektutar
        alert("Yakıt alma işlemi başarılı" + yenisatir
            + "Kalan bakiye: " +(odenecektutar-bakiye)
        )
    } else {
        alert("Bakiyeniz yeterli değil" + yenisatir
            + "Ödenecek tutar: " + odenecektutar + yenisatir
            + "Bakiyeniz: " + bakiye + yenisatir
            +"Eksik tutar: "+(odenecektutar-bakiye)
        )
    }
} else {
    alert("Lütfen geçerli bir yakıt türü giriniz")
}*/


//!___________________________________________________________________________________

