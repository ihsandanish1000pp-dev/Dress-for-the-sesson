let buttonsList = document.querySelectorAll(".category-card button");
//  console.log(buttonsList);

buttonsList.forEach(function (item) {
  item.addEventListener("click", function () {
    alert("You clicked on " + item.innerText);
  });
});

let productlist = document.querySelectorAll(".product-card button");
// console.log(productlist);

productlist.forEach(function (item) {
  item.addEventListener("click", function () {
    let perent = item.parentElement;
    let productName = item.parentElement.querySelector("h3").textContent;
    let productPrice = item.parentElement.querySelector("p").textContent;
    alert("You clicked on " + productName + " with price " + productPrice);
  });
});



let arrivalsbuttons = document.querySelectorAll(".arrivals-card button");
// console.log(arrivalsbuttons);
arrivalsbuttons.forEach(function (item) {
  item.addEventListener("click", function () {
     let perent = item.parentElement;
    let productName = item.parentElement.querySelector("h3").textContent;
    let productPrice = item.parentElement.querySelector("p").textContent;
    alert('You clicked on' + productName +  ' with price ' + productPrice);
  });
});





  let sellerbuttons =  document.querySelectorAll(".seller-card button");
  // console.log(sellerbuttons);


   sellerbuttons.forEach(function(item){
     item.addEventListener('click', function(){
       let perent = item.parentElement;
       let productName = item.parentElement.querySelector('h3').textContent;
       let productPrice = item.parentElement.querySelector('p').textContent;

        alert('You clickde On' + productName + 'with price' + productPrice);
     })
   })