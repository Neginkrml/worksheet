console.log("Selamlar");

function selamla(isim) {
    return `Selam ${isim}`
}
console.log(selamla("Kenan"));
console.log(selamla);

//___________________________________________________________________________________________________________________________________

function makePizza() {
    return "Your pizza is being prepared, please wait.";
}

const result = makePizza();
const pointer = makePizza;

console.log(result);  // "Your pizza is being prepared, please wait."
console.log(makePizza)
console.log(pointer()); // "Your pizza is being prepared, please wait."
console.log(pointer)
 
//____________________________________________________________________________________________________________________________________

function selam(isim) {
    console.log(`Merhaba ${isim} , nasılsın? `)
}

function karsilama(isim) {
    console.log(`191 numaralı okulumuz için ${} kişisini seçtik`)
}