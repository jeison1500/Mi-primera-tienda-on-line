function products (products) {
   const db = [...products]

   function printproducts() {
    const productsDOM = document.querySelector('.products__container')
   let htmlProduct = ''

    for (let product of db) {
       htmlProduct += `<article class="product">
       <div class="product__image">
           <img src="${product.image}" alt="${product.name}">
       </div>
       <div class="product__content">                
           <button type="button" class="product__btn add--to--cart" data-id="${product.id}">
               <i class='bx bx-cart'></i>
           </button>
       <span class="product__price">$ ${product.price}</span>
       <span class="product__stock">${product.quantity}</span>
       <h3 class="product__title">${product.name}</h3>
       </div>
   </article>`

    }

    productsDOM.innerHTML = htmlProduct
   } 
   
    printproducts()

    return{
        db,
        printproducts
    }
}


export default products
