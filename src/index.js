import './sass/main.scss';
import { fetchImages, resetPage } from './apiService';
import cardImagesTpl from './templates/cardImage.hbs'

const galleryRef = document.querySelector('.gallery-js');
const searchRef = document.querySelector('.search-form-input');
const loadMoreBtnRef = document.querySelector('.load-more-btn');



const debounce = require('lodash.debounce');

searchRef.addEventListener('input', debounce(onInput, 300));

loadMoreBtnRef.addEventListener('click', onLoadMoreClick);
loadMoreBtnRef.addEventListener('click', debounce(onClickToScroll, 1500));


let imageToSearch = NaN;

function onInput(e) {

    imageToSearch = e.target.value;
    if (!imageToSearch.trim()) {
        return;
    }

    console.log(loadMoreBtnRef.classList.remove('visually-hidden'));

    resetPage();

    galleryRef.innerHTML = "";
    fetchingImages(imageToSearch);
}

function fetchingImages(images) {
    fetchImages(images).then(r => {
        addMurkup(r);
    });
};

function addMurkup(images) {
    const imagesMurkup = cardImagesTpl(images);

    galleryRef.insertAdjacentHTML('beforeend', imagesMurkup);
};

function onLoadMoreClick(e) {
    fetchingImages(imageToSearch);

};

function onClickToScroll(e) {
    loadMoreBtnRef.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
    });
}