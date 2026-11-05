const cart = JSON.parse(localStorage.getItem('dew_cart')) || {};
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  localStorage.setItem('dew_cart', JSON.stringify(cart));
  document.getElementById('cartIcon').classList.add('bounce');
  setTimeout(()=>document.getElementById('cartIcon').classList.remove('bounce'), 500);
  updateCartCount();
}
function updateCartCount() {
  const total = Object.values(cart).reduce((a,b)=>a+b,0);
  document.getElementById('cartCount').innerText = total;
}
updateCartCount();
