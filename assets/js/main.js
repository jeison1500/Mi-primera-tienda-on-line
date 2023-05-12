import cart from './components/cart.js'
import loader from './components/loader.js'
import products from './components/products.js'
import showMenu from'./components/showMenu.js'
import showcart from './components/showcart.js'
import getproducts from './helpers/getProducts.js'


loader()


// muestra showMwnu

showMenu()

// Mostrar carrito 

showcart()

// end ui elements

// products

const { db, printProducts } = products (await getproducts())

// carrito

cart (db, printProducts)
