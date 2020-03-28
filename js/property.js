// $("#price-slider").slider({
//   min: 0,
//   max: 100000,
//   values: [300],
//   step: 2,
//   slide: function(event, ui) {
//     var value = ui.values[0];
//     $("[name=value]").val(value);
// }
// });

// /* init input */
// var value = $("#price-slider").slider("values", 0);
// $("[name=value]").val(value);
const flats = [
  {
    name: 'Gorgeous Apartment bay view',
    imageSrc: '/image/flats/apartament-2.jpg',
    price: 5000,
    type: 'rent',
    district: 'holosiivsky',

  },
  {
    name: 'Contemporary apartment ',
    imageSrc: '/image/flats/apartament-3.jpg',
    price: 450,
    type: 'buy',
    district: 'shevchenkivsky',

  },
  {
    name: 'Modern apartment on the bay ',
    imageSrc: '/image/flats/apartament-4.jpg',
    price: 4500,
    type: 'buy',
    district: 'pechersʹkyy',

  },
  {
    name: 'ЖК LIKOGRAD Perfect Town ',
    imageSrc: '/image/flats/apartament-5.jpg',
    price: 700,
    type: 'rent',
    district: 'solom\'yansʹkyy',

  },
  {
    name: '17, ParkLand apartment',
    imageSrc: '/image/flats/apartament-6.jpg',
    price: 500,
    type: 'sold',
    district: 'holosiivsky',

  },
  {
    name: 'Specific penthouse',
    imageSrc: '/image/flats/apartament-7.jpg',
    price: 80000,
    type: 'buy',
    district: 'shevchenkivsky',

  },
  {
    name: 'For sale 2-room view apartment',
    imageSrc: '/image/flats/apartament-8.jpg',
    price: 65000,
    type: 'buy',
    district: 'svyatoshinsky',

  },
  {
    name: 'New, designer apartment',
    imageSrc: '/image/flats/apartament-9.jpg',
    price: 500,
    type: 'rent',
    district: 'pechersʹkyy',

  },
  {
    name: 'New, designer apartment',
    imageSrc: '/image/flats/apartament-9.jpg',
    price: 500,
    type: 'rent',
    district: 'pechersʹkyy',

  },
  {
    name: 'Smart house',
    imageSrc: '/image/flats/apartament-10.jpg',
    price: 300,
    type: 'sold',
    district: 'svyatoshinsky',

  },
  {
    name: 'Long-term apartment rental',
    imageSrc: '/image/flats/apartament-11.jpg',
    price: 450,
    type: 'rent',
    district: 'holosiivsky',

  },
  {
    name: 'Venice First time for rent!',
    imageSrc: '/image/flats/apartament-11.jpg',
    price: 600,
    type: 'rent',
    district: 'pechersʹkyy',
  },
  {
    name: 'High-end designer renovation',
    imageSrc: '/image/flats/apartament-13.jpg',
    price: 30000,
    type: 'buy',
    district: 'solom\'yansʹkyy',
  },
  {
    name: 'Bright warm apartment.',
    imageSrc: '/image/flats/apartament-14.jpg',
    price: 350,
    type: 'rent',
    district: 'shevchenkivsky',
  },
  {
    name: 'WITHOUT COMMISSION! Three-room apartment for sale.',
    imageSrc: '/image/flats/apartament-15.jpg',
    price: 95000,
    type: 'sold',
    district: 'svyatoshinsky',
  },
  {
    name: 'Sale of an apartment in a new house.',
    imageSrc: '/image/flats/apartament-16.jpg',
    price: 45000,
    type: 'buy',
    district: 'holosiivsky',
  },


];
function generator(flat) {
  return `<div class="product-box__item ">
                  <h3 class="product-box__title">${flat.name} </h3>
                  <div class="product-box__img">
                      <img class="img-fluid" src="${flat.imageSrc}">
                  </div>
                  <div class="product-box__meta">
                    
                      <div class="price-title">Price:</div>
                      <p>$${flat.price}</p>
                      <button class="product-box__btn">Buy</button>
                  </div>
                </div>`;
}
function updateFlatsContent() {
  const flatsContainer = document.querySelector('#flats');
  let flatsContent = '';
  let localFlats = flats.slice(0);
  const flatType = document.querySelector('#flat_type').value;
  const flatPrice = document.querySelector('#price').value;
  const flatDistrict = document.querySelector('#district').value;
  localFlats = localFlats.filter((flat) => {
    return (flatType != 'all' ? flat.type === flatType : true) &&
            (flatPrice != '' ? flat.price <= Number(flatPrice) : true) &&
            (flatDistrict != 'all' ? flat.district === flatDistrict : true);
  });
  localFlats.forEach((flat) => flatsContent+=generator(flat));
  flatsContainer.innerHTML = flatsContent;
}
document.addEventListener('DOMContentLoaded', function() {
  updateFlatsContent();
});
