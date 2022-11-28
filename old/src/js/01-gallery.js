import { galleryItems } from './gallery-items.js';
// Change code below this line


const instance = basicLightbox.create(`
    <div class="modal">
        <img class="modal-img" src=""/>
    </div>
`)


const refs = {
    gallery: document.querySelector(".gallery"),
    modalImg: instance.element().querySelector('.modal-img'),
    // modal: instance.element().querySelector('.modal'),
}

// console.log(instance);
console.log(refs.gallery);
console.log(refs.modalImg);

function createGallery(items ) {
    const markup = items.map(({preview, original, description}) =>
        `
        <div class="gallery__item">
      <a class="gallery__link" href=${original}>
        <img
          class="gallery__image"
          src=${preview}
          data-source=${original}
          alt=${description}
        />
      </a>
    </div>
        `
    )
    .join('');
    return markup
};

const lis =  createGallery(galleryItems);

refs.gallery.insertAdjacentHTML('beforeend', lis);


function galleryView (e) {
// console.log('click', e.target.dataset.source);
if (!e.target.classList.contains('gallery__image')) {
    return
};
    e.preventDefault();

    refs.modalImg.src = e.target.dataset.source;
    instance.show();

};

refs.gallery.addEventListener('click', galleryView);

// refs.modal.addEventListener('keydown', (e) => {
//     if(e.key === 'Escape') {instance.close();}
// });