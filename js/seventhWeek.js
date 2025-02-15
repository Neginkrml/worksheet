// const button = document.querySelector(".btn");
// const handleClick = (event) => {
//     console.log("event:", event);
//     console.log("event type: ", event.type);
//     console.log("currentTarget: ", event.currentTarget);
// }
// button.addEventListener("click", handleClick);




const addListenerBtn = document.querySelector('.js-add');
const removeListenerBtn = document.querySelector('.js-remove');
const btn = document.querySelector(".target-btn");
const handleClick = () => {
  console.log("click event listener callback");
};
addListenerBtn.addEventListener("click", () => {
  btn.addEventListener("click", handleClick);
  console.log("click event listener was added to btn");
});
removeListenerBtn.addEventListener("click", () => {
  btn.removeEventListener("click", handleClick);
  console.log("click event listener was removed from btn");
});
