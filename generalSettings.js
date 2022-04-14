
// onFocus settings
  const searchBtn = document.getElementById('navbar-search');
  const searchForm = document.getElementById('header-search__form');

  searchBtn.onclick = function() {
    searchForm.classList.toggle('open');
  };


  function onFocus() {
  document.getElementById('page-overlay').setAttribute('class', 'blury');
}

function onFocusOut() {
  document.getElementById('page-overlay').setAttribute('class', '');
}

// list of array on enter event
const categories = ['масла','смазки', 'жидкости'];

if (screen.width < 1000) {
  const productsList = document.getElementById('dropdownProductListMob');
}
const productsList = document.getElementById('dropdownProductList');

categories.forEach((item) => {
   const option = document.createElement('option');
   option.value = item;
   productsList.appendChild(option);
});

