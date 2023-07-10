document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.section_div-appsContainer');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
  
    leftArrow.addEventListener('click', function() {
      container.scrollBy({
        left: -850, // Adjust the scroll amount as needed
        behavior: 'smooth'
      });
    });
  
    rightArrow.addEventListener('click', function() {
      container.scrollBy({
        left: 850, // Adjust the scroll amount as needed
        behavior: 'smooth'
      });
    });
  });
  