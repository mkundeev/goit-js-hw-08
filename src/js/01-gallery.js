import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import galleryTemplate from '../templates/gallery.hbs';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = galleryTemplate(galleryItems); 

new SimpleLightbox('.gallery__item', { captionsData: "alt", captionDelay: "250"});
