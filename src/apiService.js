const PIXABAY_KEY = '21922241-ac53faccd58a6508b64890669';

export default async function fetchImages(searchQuery) {
    if (searchQuery) {
        try {
            const response = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${PIXABAY_KEY}`);
            const users = response.json();

            return users;
        } catch (err) { console.error(err); };

    }
};