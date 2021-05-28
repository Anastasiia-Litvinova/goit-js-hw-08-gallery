import galleryItems from './gallery-items.js';
import elems from './elems.js';

// ------Rendering of markup

const createGalleryItemsMarkUp = array => {
    return array.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
            </a>
        </li>`})
        .join('')
};

// ----------Modal opening--------------

const onOpenModal = e => {
    const imageTargetRef = e.target;
    if (!imageTargetRef.classList.contains('gallery__image')) {
        return;
    };
    e.preventDefault();
    
    elems.modalImage.alt = imageTargetRef.alt;
    elems.modalImage.src = imageTargetRef.dataset.source;
    elems.modal.classList.add('is-open');
}

//----------Modal closure----------

const onCloseModal = () => {
    
    elems.modal.classList.remove('is-open');
    elems.modalImage.src = '';
    elems.modalImage.alt = '';
};


elems.galleryContainer.innerHTML = createGalleryItemsMarkUp(galleryItems);
elems.galleryContainer.addEventListener('click', onOpenModal);
elems.btnModalClose.addEventListener('click', onCloseModal);