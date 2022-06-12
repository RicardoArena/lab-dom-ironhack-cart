// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');

  const quantity = product.querySelector('.quantity input');

  let htmlPrice = Number(price.innerHTML);

  let htmlQuantity = quantity.value;

  let subTotalPrice = htmlPrice * htmlQuantity;

  let subTotal = product.querySelector('.subtotal span');

  return (subTotal.innerHTML = subTotalPrice);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  let sum = 0;

  allProducts.forEach((product) => {
    sum += updateSubtotal(product);
  });

  // ITERATION 3
  let totalPrice = document.querySelector('#total-value span');
  return (totalPrice.innerHTML = sum);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
