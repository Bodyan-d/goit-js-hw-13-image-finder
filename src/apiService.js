const PIXABAY_KEY = '21922241-ac53faccd58a6508b64890669';
let page = 1;
export async function fetchImages(searchQuery) {
    const searchQueryNow = searchQuery;


    if (searchQuery) {
        try {
            const response = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQueryNow}&page=${page}&per_page=12&key=${PIXABAY_KEY}`);
            const users = response.json();
            console.log(page);
            incrementPage();


            return users;
        } catch (err) { console.error(err); };

    }

};

function incrementPage() {
    page += 1;
};

export function resetPage() {
    page = 1;
};