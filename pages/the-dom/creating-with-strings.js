const item = document.querySelector('item');

const width = 500;
const src = `https://picsum.photo/${width}`;
const desc = `Cute Pup`;
const myHTML = `
<div class="wrapper">
    <h2>${desc}</h2>
    <img src="${src}" alt="${desc}"/>
</div>
`;


// turn a string into a dom element
const myFragment = document.createRange().createContectualFragment(myHTML);

document.body.appendChild(myFragment);