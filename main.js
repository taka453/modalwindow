'use strict'

const modal = document.querySelector('#js-modal');
const modalClass = document.querySelector('#js-modalClose');
const button = document.querySelector('#button');

button.addEventListener('click', () => {
    document.body.classList.add('show');
});

modalClass.addEventListener('click', () => {
    document.body.classList.remove('show');
});