function getproducts () {
  return window.fetch('https://ecommercebackend.fundamentos-29.repl.co/').then((res) => res.json()).then((data) => data) 
}

export default getproducts