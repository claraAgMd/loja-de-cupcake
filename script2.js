let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');
let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');
let cartItem = document.querySelector('.cart-item-container');
let cartBtn = document.querySelector('#cart-btn');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
});

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
});

cartBtn.addEventListener('click', () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
});
