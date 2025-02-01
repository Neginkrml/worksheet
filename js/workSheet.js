const oyuncu = {
    isim: "Kemal",
    soyisim: "Sunal",
    memleket: {
        ulke: "Türkiye",
        sehir: "Malatya",
    }
};
console.log(oyuncu.memleket);
console.log(oyuncu);

function sehirBulma(sehir) {
    sehir = prompt("Bir Şehir Giriniz:");
    const stSehir = sehir.toLowerCase();
    if (stSehir === oyuncu.memleket.sehir.toLowerCase()) {
        alert("Kemal Sunal'ın şehri Malatya'ya hoşgeldiniz!");
    } else {
      alert(`${sehir} şehrinde bir ünlü bulunamadı`)
    }
}
sehirBulma()