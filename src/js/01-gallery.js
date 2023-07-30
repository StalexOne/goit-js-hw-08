// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const markup = galleryItems.reduce(
    (acc, { original, preview, description }) => {
      return (
        acc +
        `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
      );
    },
    ''
  );
  
  const galleryContainer = document.querySelector('.gallery');
  galleryContainer.insertAdjacentHTML('beforeend', markup);
  
  new SimpleLightbox('.gallery a');