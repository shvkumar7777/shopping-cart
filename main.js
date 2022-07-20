

const shopItems  = document.querySelector('#shopping-items');
const buttons = document.querySelector('.handleButtonClick')

const items = [{
  id:1,
  title:"Casual Shirt",
  desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates autem veritatis aperiam adipisci atque alias! Optio quam, laboriosam porro beatae exercitationem fugiat, assumenda sint libero obcaecati, ab quo eos consequatur.",
  price:100,
  image:"./images/img-1.jpg"
},{
  id:2,
  title:"Office Shirt",
  desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates autem veritatis aperiam adipisci atque alias! Optio quam, laboriosam porro beatae exercitationem fugiat, assumenda sint libero obcaecati, ab quo eos consequatur.",
  price:200,
  image:"./images/img-2.jpg"
},{
  id:3,
  title:"T Shirt",
  desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates autem veritatis aperiam adipisci atque alias! Optio quam, laboriosam porro beatae exercitationem fugiat, assumenda sint libero obcaecati, ab quo eos consequatur.",
  price:900,
  image:"./images/img-3.jpg"
},{
  id:4,
  title:"Mens Shirt",
  desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates autem veritatis aperiam adipisci atque alias! Optio quam, laboriosam porro beatae exercitationem fugiat, assumenda sint libero obcaecati, ab quo eos consequatur.",
  price:400,
  image:"./images/img-4.jpg"
}]


const getShopItems = () =>{
  return shopItems.innerHTML = 
  items.map((item)=>{
    return `
    <div class="item">
    <img src=${item.image} alt="shirt" width="200px">
    <div class="item-details">
      <h1>${item.title}</h1>
      <p class="subdetails">${item.desc}</p>
      <div class="price-quantity">
        <p class="price">$${item.price}</p>
        <div class="buttons">
          <i class="bi bi-plus-lg" onclick="handleIncrement(${item.id})"></i>
          <div id=${item.id} class="quantity">0</div>
          <i class="bi bi-dash-lg" onclick="handleDecrement(${item.id})"></i>
      </div>
      </div>
    </div>
  </div>
    `
  })
  
}

getShopItems();

let quantity ;
let cartQuantity = parseInt(document.getElementById("cart-quantity").textContent);

function handleIncrement(id){
  // console.log(id);
  quantity = parseInt(document.getElementById(id).textContent);
  quantity = quantity + 1;
  document.getElementById(id).innerHTML = quantity;
  IncrementCartQuantity(quantity)
}

function handleDecrement(id){
  // console.log("Decrement button got clicked");
  // console.log(id);
  quantity = parseInt(document.getElementById(id).textContent);
  // if (quantity!==0) {
  //   quantity = quantity - 1;
  // }
  if (quantity) {
    quantity =  quantity -1;
    document.getElementById(id).innerHTML = quantity;
    DecrementCartQuantity(quantity);
  }
  
}

function IncrementCartQuantity(quantity) {
  cartQuantity = cartQuantity + 1;
  console.log(cartQuantity);
  document.getElementById("cart-quantity").innerHTML = cartQuantity;
}

function DecrementCartQuantity(quantity) {
  cartQuantity ? cartQuantity = cartQuantity - 1:cartQuantity;
  console.log(cartQuantity);
  document.getElementById("cart-quantity").innerHTML = cartQuantity;
}