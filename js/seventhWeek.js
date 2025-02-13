// const link = document.querySelector(".link");
// console.log(link.href); 
// link.href = "https://www.youtube.com/";
// console.log(link.href);
//___________________________________________________________________

const el = document.querySelector(".text")
const nested = document.querySelector(".sub-text")
console.log(el.textContent);
console.log(nested.textContent);
el.textContent = "Username: Poly";
console.log(el.textContent);

//__________________________________________________________________

const link = document.querySelector(".link");
console.log(link.classList); 
// ["link", "is-active", length: 2, value: "link is-active"]

//____________________________________________________________________

const hasActiveClass = link.classList.contains("is-active");
const hasActiveTitle = link.classList.contains("title");
console.log(hasActiveClass);
console.log(hasActiveTitle);


const elma = document.querySelector(".elmaSevgisi");
const elmaVarMi = elma.classList.contains("elmaSevgisi");
const armutVarMi = elma.classList.contains("armutSevgisi");
console.log(elmaVarMi);
console.log(armutVarMi);

//______________________________________________________________________

elma.classList.add("Sevgi");
console.log(elma.classList);

elma.classList.remove("elmaSevgisi");
console.log(elma.classList);

//______________________________________________________________________

elma.style.fontSize = "24px";
elma.style.color = "teal";

//hasAttribute(name): Bu metot, belirtilen özelliğin öğede olup olmadığını kontrol eder. Eğer varsa true, yoksa false döner.
//getAttribute(name): Bu metot, öğenin belirtilen özelliğinin değerini döndürür. Özellik yoksa null döner.
//setAttribute(name, value): Bu metot, öğenin belirli bir özelliğine yeni bir değer atar.
//removeAttribute(name): Bu metot, öğeden belirtilen özelliği kaldırır.