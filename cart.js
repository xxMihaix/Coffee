

function addItemCart(event) {
    const productElement = event.target.closest('.card');
    const product = {
        title: productElement.querySelector('.title').textContent,
        price: parseFloat(productElement.querySelector('.price').textContent),
        quantity: 1
    }

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const existingProduct = cartItems.find(item => item.title === product.title);
    if(existingProduct){
        existingProduct.quantity += 1;
    }
    else{
        cartItems.push(product);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItems();
    document.getElementById('cart-container').classList.add('active');
}

function loadCartItems(){

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

function decreaseQuantity(event){
    const itemElement = event.target.closest('.prod');
    const index = parseInt(itemElement.getAttribute('data-index'));
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if(cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
    }
    else{
        cartItems.splice(index, 1);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItems()
}

function increaseQuantity(event){
    const itemElement = event.target.closest('.prod');
    const index = parseInt(itemElement.getAttribute('data-index'));
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems[index].quantity += 1;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItems();
}

function removeQuantity(event){
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

document.querySelectorAll('.buy-prod').forEach(button => {
    button.addEventListener('click', addItemCart);
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