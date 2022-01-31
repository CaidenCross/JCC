/*
const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('item2');
const item2Image = item2.querySelector('img');
const heading = document.querySelector('h2');
console.log(heading.textContent);
// set the textcontent property on that element
heading.textContent = "JJ is cool"
console.log(heading.textContent);
console.log(heading.innerText)

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

pizzaList.insertAdjacentText('beforeend', 'test')
*/

//Classes!
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.toggle('')
console.log(pic.classList);

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function(){
    alert(`welcome ${custom.dataste.name} ${custom.dataset.last}`);
});