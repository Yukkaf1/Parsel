import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const refs = {
    gallery: document.querySelector(".gallery"),
}



function createGallery(items ) {
    const markup = items.map(({preview, original, description}) =>
        `
      <a class="gallery__item" 
      href=${original}>
        <img
          class="gallery__image"
          src=${preview}
          alt=${description}
        />
      </a>
        `
    )
    .join('');
    return markup
};


function galleryView (e) {
        e.preventDefault(); 
    };


const lis =  createGallery(galleryItems);

refs.gallery.insertAdjacentHTML('beforeend', lis);

refs.gallery.addEventListener('click', galleryView);


const lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: "alt", captionDelay: 250});

