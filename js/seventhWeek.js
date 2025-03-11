const jsn = {
  name: 'Josh',
  weight: 175,
  age: 30,
  eyecolor: 'brown',
  isHappy: true,
  cars: ['Chevy', 'Honda'],
  favoriteBook: {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
};

const json = JSON.stringify(jsn);

console.log(json);
console.log(jsn);

//!  bir fonksiyonu JSON'a dönüştürmeye çalıştığınızda sonuç undefined olacaktır

//? STRİNGFY-  JavaScript nesnesini json'a dönüştürür

//? PARSE -yöntemi json'u alır ve onu JavaScript verilerine dönüştürür  , json'dan veri ayrıştırır
//? JSON.parse yöntemine geçersiz JSON verildiğinde bir hata oluşturacaktır.

// const data = JSON.parse('{username: "Mango"}'); // Error

try {
  // Code that may throw a runtime error
} catch (error) {
  // Error handling
}

//? İlk olarak, try bloğu içindeki kod çalıştırılır.
//? Hata olmadığı sürece, catch bloğu görmezden gelinir ve kontrol devam eder.
//? try bloğunda bir hata oluşursa, çalışması durdurulur ve yürütücü catch bloğuna geçer.

try {
  const data = JSON.parse('Well, this is awkward');
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
}
console.log('✅ This is fine, we handled parsing error in try...catch');

//! Kod, içinde geçerli bir JSON bulunmayan bir metni JSON.parse() ile dönüştürmeye çalışıyor. Bu işlem başarısız olduğu için bir hata (error) oluşuyor. try...catch bloğu sayesinde bu hata yakalanıp düzgün bir şekilde işleniyor.
//! JSON'da tüm metinler çift tırnak (" ") içinde olmalıdır, ama burada çift tırnak yok.

//! catch (error) bölümü hatayı yakalar ve hata bilgilerini konsola yazdırır. olanları bilgi içeren bir hata nesnesidir.
//! error.name → Hatayı tanımlayan isimdir. "SyntaxError" olarak döner.
//! error.message → Hatanın ayrıntıları hakkında bir bildirim. Hata mesajıdır. "Unexpected token W in JSON at position 0" mesajını verir.
//! stack - Hatanın oluştuğu sırada işlev çağrılarının yığını. Hata ayıklama amacıyla kullanılır.

try {
  const zuhre = JSON.parse('Selam Ben Zühre');
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
console.log('Zure seni seviyorum');

console.log(localStorage);
// Storage {length: 0}

localStorage.setItem('ui-theme', 'light');
localStorage.setItem('Zuhre', 'cok guzel');

const settings = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
};
localStorage.setItem('settings', JSON.stringify(settings));

const elma = {
  renk: 'kirmizi',
  boy: 'buyuk',
  sayi: [1, 2, 3],
};
localStorage.setItem('elma', JSON.stringify(elma));

console.log(localStorage);

const elmayiAl = localStorage.getItem('elma');
console.log(elmayiAl);

//!Depo içinde belirtilen anahtarla kayıt bulunmuyorsa, yöntem null değerini döndürür.

const parsedElma = JSON.parse(elmayiAl);
console.log(parsedElma);

localStorage.removeItem('elma');
console.log(localStorage.getItem('elma'));

console.log(localStorage);

//________________________________________________________________________________________________________________________________

sessionStorage.setItem('meyve', 'ananas');
sessionStorage.setItem(
  'biletler',
  JSON.stringify({ nereden: 'İstanbul', nereye: 'Ankara', adet: 2 })
);
sessionStorage.setItem(
  'kitaplar',
  JSON.stringify({ yazar: 'Victor Hugo', kitap: 'Sefiller' })
);

let kutupane = JSON.parse(sessionStorage.getItem('kitaplar'));
console.log(kutupane);

sessionStorage.removeItem('biletler');

sessionStorage.clear();
localStorage.clear();

console.log(window.sessionStorage); // Storage {length: 0}

//________________________________________________________________________________________________________________________________________

//!  Web geliştirme araçları --- Otomasyon
