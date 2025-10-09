document.querySelectorAll('.buy-prod').forEach(button => {
    button.addEventListener('click', addItemCart);
})

function addItemCart(event) {
    const productElement = event.target.closest('.card');
    const product = {
        title: productElement.querySelector('.title').textContent,
        price: parseFloat(productElement.querySelector('.price').textContent),
        quantity: 1
    }

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const existingProduct = cartItems.find(item => item.title === product.title);
    if (existingProduct) {
        existingProduct.quantity += 1;
    }
    else {
        cartItems.push(product);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItems();
    document.getElementById('cart-container').classList.add('active');
}
/*
document.querySelectorAll('.heart').forEach(el => {
    el.addEventListener('click', addFavorite);
})

function addFavorite(event) {
    const favElement = event.target.closest('.card');
    const fav = {
        title: favElement.querySelector('.title').textContent,
        price: parseFloat(favElement.querySelector('.price').textContent),
        favorite: true
    }

    let favItems = JSON.parse(localStorage.getItem('favItems')) || [];
    favItems.push(fav);
    localStorage.setItem('favItems', JSON.stringify(favItems));
    loadFavorites();
}

function loadFavorites() {
    const favElement = event.target.closest('.card');
    const heart = favElement.querySelector('.heart');
    const title = favElement.querySelector('.title').textContent;
    const price = parseFloat(favElement.querySelector('.price').textContent);

    let favItems = JSON.parse(localStorage.getItem('favItems')) || [];

    // Verificăm dacă produsul e deja în favorite
    const existingIndex = favItems.findIndex(item => item.title === title);

    if (existingIndex !== -1) {
        // Produsul există → îl scoatem
        favItems.splice(existingIndex, 1);
        heart.classList.remove('favorite');
    } else {
        // Produsul nu există → îl adăugăm
        favItems.push({ title, price });
        heart.classList.add('favorite');
    }


    favItems.forEach((item, index) => {
        console.log(item.title);
    })
}
*/
/*
// Atașăm click pe inimioare
document.querySelectorAll('.heart').forEach(el => {
  el.addEventListener('click', toggleFavorite);
});

function toggleFavorite(event) {
  const card = event.target.closest('.card');
  const heart = card.querySelector('.heart');
  const title = card.querySelector('.title').textContent;
  const price = parseFloat(card.querySelector('.price').textContent);

  // Luăm lista din localStorage
  let favItems = JSON.parse(localStorage.getItem('favItems')) || [];

  // Verificăm dacă produsul există deja
  const existingIndex = favItems.findIndex(item => item.title === title);

  if (existingIndex !== -1) {
    // Există → îl scoatem din favorite
    favItems.splice(existingIndex, 1);
    heart.classList.remove('favorite'); // scoatem clasa vizual
  } else {
    // Nu există → îl adăugăm
    favItems.push({ title, price });
    heart.classList.add('favorite'); // adăugăm clasa vizual
  }

  // Salvăm lista actualizată
  localStorage.setItem('favItems', JSON.stringify(favItems));
}

// La încărcarea paginii, sincronizăm inimioarele vizual cu localStorage
function loadFavorites() {
  const favItems = JSON.parse(localStorage.getItem('favItems')) || [];
  const favTitles = favItems.map(item => item.title);

  document.querySelectorAll('.card').forEach(card => {
    const heart = card.querySelector('.heart');
    const title = card.querySelector('.title').textContent;

    if (favTitles.includes(title)) {
      heart.classList.add('favorite');
    } else {
      heart.classList.remove('favorite');
    }
  });
}

// Apelează la load
document.addEventListener('DOMContentLoaded', loadFavorites);
*/
///////////////////
function loadCartItems() {

    const containerCart = document.getElementById('prod-content');
    containerCart.innerHTML = '';

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let total = 0;

    cartItems.forEach((item, index) => {

        const totalPrice = item.price * item.quantity;
        total += totalPrice;
        const cartItemsHTML = `
                <div class="prod" data-index="${index}">
                    <div class="title-cart">${item.title}<pre>  </pre>${item.price} lei X${item.quantity}</div>
                    <button class="decrease">&lt;</button>
                    <p class="quantity">${item.quantity}</p>
                    <button class="increase">&gt;</button>
                    <button class="remove">Remove</button>
                </div>
    `;
        containerCart.insertAdjacentHTML('beforeend', cartItemsHTML);
    });

    const totalAmountElement = document.getElementById('pric');
    totalAmountElement.textContent = `${total.toFixed(2)} lei`;

    const decrease = document.querySelectorAll('.decrease');
    decrease.forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    })

    const increase = document.querySelectorAll('.increase');
    increase.forEach(button => {
        button.addEventListener('click', increaseQuantity);
    })

    const remove = document.querySelectorAll('.remove');
    remove.forEach(button => {
        button.addEventListener('click', removeQuantity);
    })
}

function decreaseQuantity(event) {
    const itemElement = event.target.closest('.prod');
    const index = parseInt(itemElement.getAttribute('data-index'));
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
    }
    else {
        cartItems.splice(index, 1);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItems()
}

function increaseQuantity(event) {
    const itemElement = event.target.closest('.prod');
    const index = parseInt(itemElement.getAttribute('data-index'));
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems[index].quantity += 1;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItems();
}

function removeQuantity(event) {
    const itemElement = event.target.closest('.prod');
    const index = parseInt(itemElement.getAttribute('data-index'));
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));

    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItems();
}

window.addEventListener('load', () => {
    loadCartItems();
})


/*
    function addItemCart(event) {
    const productElement = event.target.closest('.card');
    const product = {
        title: productElement.querySelector('.title').textContent,
        price: parseFloat(productElement.querySelector('.price').textContent.replace(' lei', '')),
        quantity: 1
    };

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const existingProduct = cartItems.find(item => item.title === product.title);
    if(existingProduct){
        existingProduct.quantity += 1;
    } else {
        cartItems.push(product);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItems();
}

function loadCartItems() {
    const containerCart = document.getElementById('prod-content');
    containerCart.innerHTML = '';

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let total = 0;

    cartItems.forEach((item, index) => {
        const totalPrice = item.price * item.quantity;
        total += totalPrice;

        const cartItemsHTML = `
            <div class="prod" data-index='${index}'>
                <div class="title-cart">${item.title}</div>
                <button class="decrease">&lt;</button>
                <p class="quantity">${item.quantity}</p>
                <button class="increase">&gt;</button>
                <button class="remove">Remove</button>
            </div>
        `;
        containerCart.insertAdjacentHTML('beforeend', cartItemsHTML);
    });

    document.getElementById('pric').textContent = `${total.toFixed(2)} lei`;

    document.querySelectorAll('.decrease').forEach(btn => btn.addEventListener('click', decreaseQuantity));
    document.querySelectorAll('.increase').forEach(btn => btn.addEventListener('click', increaseQuantity));
    document.querySelectorAll('.remove').forEach(btn => btn.addEventListener('click', removeQuantity));
}

function decreaseQuantity(event) {
    const itemElement = event.target.closest('.prod');
    const index = parseInt(itemElement.getAttribute('data-index'));
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if(cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
    } else {
        cartItems.splice(index, 1);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItems();
}

function increaseQuantity(event) {
    const itemElement = event.target.closest('.prod');
    const index = parseInt(itemElement.getAttribute('data-index'));
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems[index].quantity += 1;

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItems();
}

function removeQuantity(event) {
    const itemElement = event.target.closest('.prod');
    const index = parseInt(itemElement.getAttribute('data-index'));
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.splice(index, 1);

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItems();
}

window.addEventListener('load', () => {
    loadCartItems();

    // Atașăm event listener pentru toate butoanele "Cumpără"
    document.querySelectorAll('.buy-prod').forEach(button => {
        button.addEventListener('click', addItemCart);
    });
});
*/