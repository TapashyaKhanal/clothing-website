
  const menuOpenButton = document.querySelector("#menu-open-button");

  const menuCloseButton = document.querySelector("#menu-close-button");
  

  menuOpenButton.addEventListener("click",() => {
    document.body.classList.toggle("show-mobile-menu");
  });

  menuCloseButton.addEventListener("click",() => {
   document.body.classList.remove("show-mobile-menu")
    
});
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor:true,
  spaceBetween:25,

  
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    0:{
      slidesPerView:1
    },
    1024:{
      slidesPerView:2
    }
  }

});
const collectionList = document.querySelector('.collection-list');
const addButton = document.getElementById('add-item-button');

const sampleImages = [
  'c1.jpg', 'c2.jpg', 'c3.jpg', 'c4.jpg', 'c5.jpg',
  'hb.jpg', 'c7.jpg', 'c8.jpg', 'c9.jpg', 'hb1.jpg', 'r1.jpg', 'r2.jpg'
];

let currentIndex = 0;


collectionList.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-icon')) {
    const item = event.target.closest('.collection-item');
    if (item) {
      item.remove();
    }
  }
});


addButton.addEventListener('click', () => {
  if (currentIndex < sampleImages.length) {
    const imageSrc = sampleImages[currentIndex];
    currentIndex++;

    const newItem = document.createElement('li');
    newItem.classList.add('collection-item');
    newItem.style.position = 'relative'; 

    const newImg = document.createElement('img');
    newImg.src = imageSrc;
    newImg.alt = 'collection';
    newImg.classList.add('collection-image');

  
    const removeBtn = document.createElement('i');
    removeBtn.classList.add('fas', 'fa-xmark', 'remove-icon');
    

    newItem.appendChild(newImg);
    newItem.appendChild(removeBtn);
    collectionList.insertBefore(newItem, collectionList.firstChild);
  } else {
    console.log("All images have been shown.");
  }
});


document.addEventListener('DOMContentLoaded', () => {
  
  document.querySelectorAll('.collection-item').forEach(item => {
    if (!item.querySelector('.remove-icon')) {
      const removeBtn = document.createElement('i');
      removeBtn.classList.add('fas', 'fa-xmark', 'remove-icon');
      removeBtn.style.position = 'absolute';
      removeBtn.style.top = '8px';
      removeBtn.style.right = '8px';
      removeBtn.style.cursor = 'pointer';
      removeBtn.style.color = 'white';
      removeBtn.style.backgroundColor = 'rgba(0,0,0,0.6)';
      removeBtn.style.borderRadius = '50%';
      removeBtn.style.padding = '6px';
      removeBtn.style.zIndex = '10';

      if (getComputedStyle(item).position === 'static') {
        item.style.position = 'relative';
      }

      item.appendChild(removeBtn);
    }
  });
});
