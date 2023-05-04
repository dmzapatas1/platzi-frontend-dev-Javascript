const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')

function toggleDesktopMenu(){
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
  }
  desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
  }
  
 mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
 
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }
  if (!isDesktopMenuClosed) {
   desktopMenu.classList.add('inactive'); 
  }

  shoppingCartContainer.classList.toggle('inactive');
}

function renderProducts(arr){
  
for (product of arr){
  const productCard = document.createElement('div')
  productCard.classList.add('product-card')
 
  const productImg = document.createElement('img')
  productImg.setAttribute('src', product.image)
 
  const productInfo = document.createElement('div')
 productInfo.classList.add('product-info')
 
 const productInfoDiv = document.createElement('div')
 
 const productPrice = document.createElement('p')
 productPrice.innerText = '$' + product.price;
 const productName = document.createElement('p')
 productName.innerText = product.name
 
 productInfoDiv.appendChild(productPrice)
 productInfoDiv.appendChild(productName)
 
 const productInfoFigure = document.createElement('figure')
 const productImgCart = document.createElement('img')
 productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
 
 productInfoFigure.appendChild(productImgCart)
 
 productInfo.appendChild(productInfoDiv)
 productInfo.appendChild(productInfoFigure)
 
 productCard.appendChild(productImg)
 productCard.appendChild(productInfo)
 
 cardsContainer.appendChild(productCard)
 }
}
const productList = []
productList.push({
  name: 'Bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: 'Juego Sala',
  price: 1200,
  image: "https://images.pexels.com/photos/276510/pexels-photo-276510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
  name: 'Mueble',
  price: 700,
  image: "https://images.pexels.com/photos/276519/pexels-photo-276519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

renderProducts(productList)
menuEmail.addEventListener('click', toggleDesktopMenu)
burgerMenu.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)     