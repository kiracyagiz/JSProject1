let mens = document.getElementById("mensButton");
let jeweleryB = document.getElementById("jeweleryButton");
let electronics = document.getElementById("electronicsButton");
let womensC = document.getElementById("womensButton");

let mainTitle = document.getElementById("mainTitle");

const loadingScreen = document.getElementById('loadingScreen');


let url = "https://fakestoreapi.com/products";



fetch(url)
.then((response) => response.json())
.then((data) => {
  loadingScreen.className = 'flex justify-center'
  const myProductList = document.getElementById("productList");


  for (i = 0; i < data.length; i++) {
    const myImage = document.createElement("img");
    const myDiv = document.createElement("div");



      myImage.id = "myImage";
      myImage.src = data[i].image;

      myDiv.appendChild(myImage);

      myDiv.className = "h-24 w-24";

      myProductList.appendChild(myDiv);
    


  }
});

mens.addEventListener("click", function () { 
  mainTitle.textContent = "Men's Clothing Pictures";
  getData("men's clothing")
});

jeweleryB.addEventListener("click", function () {
  mainTitle.textContent = "Jewelery Pictures";
  getData('jewelery')

});

electronics.addEventListener("click", function () {
  mainTitle.textContent = "Electronics Pictures";
  getData('electronics')
});

womensC.addEventListener("click", function () {
  mainTitle.textContent = "Woman Clothing Pictures";
  getData("women's clothing")
});




function clearDiv(elementId)
{
  document.getElementById(elementId).innerHTML = '';
}


function getData(categoryC)
{
  clearDiv('productList');
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const myProductList = document.getElementById("productList");


    for (i = 0; i < data.length; i++) {
      const myImage = document.createElement("img");
      const myDiv = document.createElement("div");

      if(data[i].category == categoryC)
      {
        myImage.id = "myImage";
        myImage.src = data[i].image;

        myDiv.appendChild(myImage);

        myDiv.className = "h-24 w-24";

        myProductList.appendChild(myDiv);
      }


    }
  });
}


const search = document.getElementById('input');

search.addEventListener('keypress', (e) => {
  const searchOut = e.target.value.toLowerCase();

  clearDiv('productList');

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const myProductList = document.getElementById("productList");

      for (let i = 0; i < data.length; i++) {
        const title = data[i].title.toLowerCase();

        if (title.includes(searchOut)) {
          const myImage = document.createElement("img");
          const myDiv = document.createElement("div");

          myImage.id = "myImage";
          myImage.src = data[i].image;
          myDiv.appendChild(myImage);
          myDiv.className = "h-24 w-24";
          myProductList.appendChild(myDiv);
        }
      }
    });
});
