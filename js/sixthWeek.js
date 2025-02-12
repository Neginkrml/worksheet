// const user = {
//     username: "Victor",
//     showName() {
//         console.log(this.username);
//     }
// }
// user.showName();

// const deneme = {
//     denemeİsim: "Negin",
//     showName() {
//         console.log(this.denemeİsim);
//     }
// }
// deneme.showName();

// function orn() {
//     console.log(this);
// }
// orn();

// const kisi = {
//     kullanici: "Ülker",
//     showThis() {
//         console.log(this);
//     }
// }
// kisi.showThis();

// "use strict";
// function yeniDeneme() {
//     console.log("this in showThis: ", this);
// };
// yeniDeneme();


// "use strict";
// function showThis() {
//   console.log("this in showThis: ", this);
// }
// const userr = {
//   username: "Poly",
// };
// userr.showContext = showThis;
// userr.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}
// showThis(); // "this in showThis: undefined"
//________________________________________________________________________________________
// function greet() {
//   console.log(`Hello, ${this.name}!`);
// }
// const person = { name: 'John' };
// greet.call(person);  // "Hello, John!"

function selam() {
    console.log(`Selam, ${this.isim}`);
}
const insan = { isim: 'Negin' };
selam.call(insan);

//_________________________________________________________________________________________

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}
const person = { name: 'Jane' };
greet.apply(person, ['Hi', '!']);  // "Hi, Jane!"


function karsilama(selamla, isaret) {
    console.log(`${selamla}, ${this.isim}${isaret}`);
};
const isim = { isim: 'Lale' };
karsilama.apply(isim, ['Selam', '!']);


function showName() {
	console.log(this.name);
}
const user = {
  name: "Alice",
};
showName.call(user);


function isimGoster() {
    console.log(this.isim)
}
const kullan = {
    isim: "Nuray",
};
isimGoster.call(kullan);


function calisan(isimm) {
    console.log(`Merhabalar ${isimm}, ben ${this.sirket} çalışanıyım!`);
}

const isimm = "Alican";
const metin = {
    sirket: "CodeMaster"
};
calisan.call(metin, "Ali");


function alisveris(isim) {
    console.log(`Merhabalar ${isim}, sipariş ettiğiniz ürünler: ${this.urunler} teslimat için hazırlanıyor`);
}
const sipIsmi = {
    urunler: ["Fileto", "makarna", ""]
};
alisveris.call(sipIsmi, "Aynur")

//___________________________________________________________________________________________________________________________--

function greet(str) {
  console.log(`${str}, ${this.username}, your room is ${this.room}!`);
}
const mango = {
  username: "Mango",
	room: 27
};
const poly = {
  username: "Poly",
	room: 191
};
greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"



// "use strict";
// const customer = {
//   username: "Jacob",
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`);
//   }
// };
// customer.sayHello(); // "Hello, Jacob!"
// const greet = customer.sayHello.bind(customer);
// greet(); // "Hello, Jacob!"

"use strict";
const calisann = {
    kullIsm: "Ayşegül",
    selamla() {
        console.log(`Selam sevgili çalışanımız ${this.kullIsm}`)
    }
}
const karsila = calisann.selamla.bind(calisann);
karsila();

"use strict";
const masal = {
    masalIsmi: "Rapunsel",
    masalGoster() {
        console.log(`${this.masalIsmi} masalını başlatmak istiyorsanız butona tıklayınız.`)
    }
}
const masalBaslat = masal.masalGoster.bind(masal);
masalBaslat();

//____________________________________________________________________________________________________________________________

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
function makeMessage(callback) {
	const username = callback();
	console.log(`Processing an application from ${username}`);
}
makeMessage(customer.getFullName.bind(customer)); 


const library = {
	books: 1923,
	logBookCount() {
		console.log(this.books);
	}
};
const showBooks = library.logBookCount.bind({ books: 724 });
showBooks();



// "use strict";
// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };
// function showBooks(callback) {
// 	callback()
// }
// showBooks(library.logBookCount.bind(library))


const showThis = () => {
  console.log("this in showThis: ", this);
};
showThis();

const elma = () => {
    console.log("this in showThis: ", this);
}
elma();

const parent = {
  surname: "Moore",
  heritage: "Irish",
};
const child = Object.create(parent);
child.name = "Jason";
child.age = 27;
console.log(child.surname); // "Moore" (parent'tan miras alındı)
console.log(child.heritage); // "Irish" (parent'tan miras alındı)


// const customer = {
// 	username: "Jacob"
// };
// const animal = { 
// 	legs: 4 
// };
// const dog = Object.create(animal);
// dog.name = "Mango";
// console.log(dog); // { name: "Mango", [[Prototype]]: animal }
// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false


const bilgisayar = {
    bilIsm: "Acer"
};
const ekCihazlar = {
    ekran: 1
};
const bilg = Object.create(ekCihazlar);
bilg.name = "Mango";
console.log(bilg);
console.log(ekCihazlar.isPrototypeOf(bilg));
console.log(bilg.isPrototypeOf(ekCihazlar));
console.log(bilgisayar.isPrototypeOf(bilg));