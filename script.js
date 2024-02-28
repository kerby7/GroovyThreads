const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const cartIcon = document.querySelector("#lg");
const cart = document.querySelector(".add-to-cart");
const closeCart = document.querySelector("#cart-close");



/* Hamburger click function */
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

/* Closing the hamburger */
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

/* Opening cart */
cartIcon.addEventListener('click', () => {
    cart.classList.add('activity');
});

closeCart.addEventListener('click', () =>{
  cart.classList.remove('activity');
});


