import './sass/main.scss';
import { fetchImages, resetPage } from './apiService';
import cardImagesTpl from './templates/cardImage.hbs'

const galleryRef = document.querySelector('.gallery-js');
const searchRef = document.querySelector('.search-form-input');
const loadMoreBtnRef = document.querySelector('.load-more-btn');


searchRef.addEventListener('input', onInput);

loadMoreBtnRef.addEventListener('click', onLoadMoreClick);

let imageToSearch = NaN;

function onInput(e) {

    imageToSearch = e.target.value;
    if (!imageToSearch.trim()) {
        return;
    }

    resetPage()
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