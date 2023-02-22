const toggleYearlyElement = document.getElementById('annually');
const toggleMonthlyElement = document.getElementById('monthly');
const pricesElements = document.querySelectorAll('.card__price span');
const prices = [
  { monthly: '19.99', annually: '199.99' },
  { monthly: '24.99', annually: '249.99' },
  { monthly: '39.99', annually: '399.99' },
];

let discount = 0;

toggleYearlyElement.addEventListener('click', (e) => {
  console.log(toggleYearlyElement.checked);
  setDiscount(1);
  updatePrice(discount);
});

toggleMonthlyElement.addEventListener('click', (e) => {
  setDiscount(0);
  updatePrice(discount);
});

function setDiscount(discountRate) {
  discount = discountRate;
}

function updatePrice(discount) {
  for (let i = 0; i < pricesElements.length; i++) {
    pricesElements[i].textContent =
      discount == 0 ? prices[i].monthly : prices[i].annually;
  }
}
