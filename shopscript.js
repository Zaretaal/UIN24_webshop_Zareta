console.log(products)

let productsHTML = "<h2>Ninjago</h2>"

products.map(product => productsHTML += `<article>
<img src="website_images/PROD_${product.imagefile}" alt="${product.title}" />
<a href="#">${product.category}</a>
<h3>${product.title}</h3>
<span>Kr. ${product.price}</span>
<button onclick="addToCart"(${product.prodid})>Legg i handlekurv</button>
</article>`)

//console.log(productsHTML)

const main = document.getElementsByTagName("main")
main[0].innerHTML = productsHTML

//handlevogn funksjonalitet
function addToCart(productid) {
    let exist = cart.findIndex(p => productid === p.product)
    console.log("Exist: " + exist)
    if(exist === -1) {
        cart.push({product: productid, quantity: 1})
    }else {
        cart[exist].quantity += 1
    }
    //console.log("addToCart kjører: " + productid)
    cart.push({product: productid, quantity: 1})
    console.log(cart)
    updateCartDisplay()
}
function updateCartDisplay() {
    let cartHTML = ""
    if(cart.length === 0) {
        cart.HTML += "<li> Du har ingen produkter i handlevognen"

    }else{
    cart.map(prod => {
    let filteredProduct = cart.filter(filterprod => prod === filterprod.prodid)
    console.log(filteredProduct)
        cartHTML.innerHTML += ` <li>
                    <span class="title">${filteredProduct[0].title}</span>
                    <span class="price">${filteredProduct[0].Price}</span>
                    <span class="quantity"${prod.quantity}</span>
                    <span class="functions">
                        <button>X</button>
                    </span>
                </li>`
            })
            document.getElementById("cartlist").innerHTML = cartHTML
        }

        function removeFromCart(index) {
            console.log("Removing" + index)
            cart.splice(index, 1)
            updateCartDisplay()
        }
        updateCartDisplay()
}