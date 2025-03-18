const time = () => {
  console.log('Bu kod 5 saniye sonra yazıldı');
};
const timerId = setTimeout(time, 5000);
clearTimeout(timerId);

const love = () => {
  console.log('Aşkım seni çok seviyorum');
};
const tekrarla = setInterval(love, 2000);
clearInterval(tekrarla);

const btnDeneme = document.querySelector('.js-start');
btnDeneme.addEventListener('click', () => {
  const zamanlayici = () => {
    console.log('Bu yazı butona tıklandıktan 5 saniye sonra çalışıyor');
  };
  setTimeout(zamanlayici, 5000);
});

const datee = new Date();
console.log(datee);

const secilenTarih = new Date('2003-10-21');
console.log(secilenTarih);

const date2 = new Date(2030, 2, 16, 14, 25, 0, 0);
console.log(date2); // "Sat Mar 16 2030 14:25:00 GMT+0200 "

const startTime = Date.now();

for (let i = 0; i <= 10; i += 1) {
  console.log(i);
}

const endTime = Date.now();
const elapsedTime = endTime - startTime;

console.log(`Elapsed time: ${elapsedTime} ms`);

const date = new Date('March 16, 2030 14:25:00');
console.log('Date: ', date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// 1 ile 31 arasında günü döndürür
console.log('Day: ', date.getDate()); // 16

// 0 ile 6 arasında haftanın gününü döndürür, Pazar 0'dır
console.log('Day of the week: ', date.getDay()); // 6

// 0 ile 11 arasında ayı döndürür
console.log('Month: ', date.getMonth()); // 2

// 4 haneli yılı döndürür
console.log('Full year: ', date.getFullYear()); // 2030

// Saati döndürür
console.log('Hours: ', date.getHours()); // 14

// Dakikaları döndürür
console.log('Minutes: ', date.getMinutes()); // 25

// Saniyeleri döndürür
console.log('Seconds: ', date.getSeconds()); // 0

// Milisaniyeleri döndürür
console.log('Milliseconds: ', date.getMilliseconds()); // 0

const isSuccess = true;
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 2000);
});

// console.log(promise); // Promise nesnesi

promise.then(
  value => {
    console.log(value);
  },
  error => {
    console.log(error);
  }
);
