const list = document.querySelector('.usernames');

// Adds an item to the end of the list
const lastItem = document.createElement('li');
lastItem.textContent = 'Poly';
list.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement('li');
firstItem.textContent = 'Ajax';
list.prepend(firstItem);

// const link = document.querySelector('.link-a');
// link.remove();

//_____________________________________________________________________________

const article = document.querySelector('.article-a');
console.log(article.innerHTML);

const title = document.querySelector('.title-h');
console.log(title.innerHTML);

const text = document.querySelector('.text-p');
console.log(text.innerHTML);

const link = document.querySelector('.link-a');
console.log(link.innerHTML);

title.innerHTML = 'New and <span class="accent">improved</span> title';

//_____________________________________________________________________________

list.insertAdjacentHTML('afterbegin', '<li>Başa eklendi</li>');
list.insertAdjacentHTML('beforeend', '<li>Sona eklendi</li>');


const singleBtn = document.querySelector("#single");
const handleClick = () => {
    console.log("click event listener callback");
}
singleBtn.handleClick("click", handleClick);