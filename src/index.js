import './sass/main.scss';
import fetchImages from './apiService';
import cardImagesTpl from './templates/cardImage.hbs'

const galleryRef = document.querySelector('.gallery-js');
const searchRef = document.querySelector('.search-form-input');

searchRef.addEventListener('input', onInput);

function onInput(e) {

    const images = e.target.value;
    if (!images.trim()) {
        return;
    }

    fetchImages(images).then(r => {
        galleryRef.innerHTML = "";
        addMurkup(r);
    });
}

function addMurkup(images) {
    const imagesMurkup = cardImagesTpl(images);

    galleryRef.insertAdjacentHTML('beforeend', imagesMurkup);
};