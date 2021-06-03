const PIXABAY_KEY = '21922241-ac53faccd58a6508b64890669';

export default function fetchImages(searchQuery) {
    if (searchQuery) {
        return fetch(
                `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=номер_страницы&per_page=12&key='PIXABAY_KEY'`,
            )
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Error fetching data');
            })
            .catch(error => {
                console.error('Error: ', error);
            });
    }

};