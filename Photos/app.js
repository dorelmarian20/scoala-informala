const auth = '563492ad6f9170000100000194da500084d14160b19e304dedd75f54';
const gallery = document.querySelector('.gallery');
const searchInput = document.querySelector('.search-input');
const form = document.querySelector('.search-form');
let searchValue;

//Event Listners
searchInput.addEventListener('input', updateInput);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    searchPhotos(searchValue);
});




function updateInput(e){
    searchValue = e.target.value;
}

async function fetchApi(url){
    const dataFetch = await fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'appliction/json',
            Authorization: auth
        });
        const data = await dataFetch.json();
        return data;
}

async function curatedPhotos(){
    const dataFetch = await fetch("https://api.pexels.com/v1/curated?per_page=15&page=1",{
        method: 'GET',
        headers: {
            Accept: 'appliction/json',
            Authorization: auth
        }
    });
    const data = await dataFetch.json();
    data.photos.forEach(photo => {
        const galleryImg = document.createElement('div');
        galleryImg.classList.add('gallery-img');
        galleryImg.innerHTML = `<img src=${photo.src.large}></img>
            <p>${photo.photographer}</p>
        `;
        gallery.appendChild(galleryImg);
    });
}

async function searchPhotos(query){
    const dataFetch = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`,{
        method: 'GET',
        headers: {
            Accept: 'appliction/json',
            Authorization: auth
        }
    });
    const data = await dataFetch.json();
    data.photos.forEach(photo => {
        const galleryImg = document.createElement('div');
        galleryImg.classList.add('gallery-img');
        galleryImg.innerHTML = `<img src=${photo.src.large}></img>
            <p>${photo.photographer}</p>
        `;
        gallery.appendChild(galleryImg);
    });
}

curatedPhotos();


