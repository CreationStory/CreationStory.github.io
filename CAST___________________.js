document.addEventListener('DOMContentLoaded', function() {
const Books = document.querySelectorAll('.B:not(.Casts)');
const Cast = document.querySelector('.T');
let isMouseOverT = false;
let isBookOpen = false;
let shouldNotTriggerEffect = window.location.hash !== '';
function isInViewport(element) {
const rect = element.getBoundingClientRect();
const marginBooks = 4;
const bookHeight = element.clientHeight;
const topMargin = -bookHeight * marginBooks;
const bottomMargin = window.innerHeight + (bookHeight * marginBooks);
return (rect.top <= bottomMargin && rect.bottom >= topMargin && rect.left >= 0 && rect.right <= window.innerWidth);}
function engage() {if (isMouseOverT || isBookOpen || shouldNotTriggerEffect) {return;}
const visibleBooks = Array.from(Books).filter((element) => isInViewport(element));
visibleBooks.forEach((element, index) => {setTimeout(() => {element.classList.add('Cast'); setTimeout(() => {element.classList.remove('Cast');}, 408);}, index * 208);});}
function getInterval() {const intervals = [10024, 28000, 48000]; const randomIndex = Math.floor(Math.random() * intervals.length); return intervals[randomIndex];}
setInterval(engage, getInterval());
Cast.addEventListener('mouseover', () => isMouseOverT = true);
Cast.addEventListener('mouseout', () => isMouseOverT = false);
Books.forEach((book) => {book.addEventListener('click', () => {isBookOpen = !isBookOpen;});});
window.addEventListener('hashchange', () => {shouldNotTriggerEffect = window.location.hash !== '';});});