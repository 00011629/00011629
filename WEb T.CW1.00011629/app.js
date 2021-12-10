
    let searchBtn = document.querySelector(".search");
    let searchForm = document.querySelector('.search-bar-form');
    
    searchBtn.addEventListener('click', () =>
    {
        searchBtn.classList.toggle('fas fa-times');
        searchForm.classList.toggle('active');
    });
  
