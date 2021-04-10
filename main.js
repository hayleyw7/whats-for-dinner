///////// ARRAYS /////////

var sidesArray = ["French Fries", "Mashed Potatoes", "Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", "Caeser Salad", "Egg Rolls", "Garlic Bread", "Hush Puppies"]
var mainArray = ["Lasagna", "Sushi", "Beef Stew", "Tacos", "Pineapple Chicken", "Shakshuka", "Bibimbap", "Ramen", "Empanadas", "Chicken Fried Rice", "Margarita Pizza"]
var dessertArray = ["Cookies", "Ice Cream", "Apple Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler", "Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Macaroons", "Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"]

///////// QUERY SELECTORS /////////

var letsCookButton = document.querySelector(".letscook")
var transparentBoxRight = document.querySelector(".transparent-box-right")

var recipe = document.querySelector(".recipe")
var eatThis = document.querySelector(".eatthis")
var cookpot = document.querySelector(".cookpot")
var hidden = document.querySelector("hidden")
var clearButton = document.querySelector(".clear-button")

///////// EVENT LISTENERS /////////

letsCookButton.addEventListener("click", letsCook)
clearButton.addEventListener("click", clear)

///////// FUNCTIONS /////////

// randomizer

function getRandomIndex(array) {
  return Math.floor(Math.random()*array.length);
};

// specific recipe arrays

function getRandomSide() {
	var randomSideIndex = getRandomIndex(sidesArray);
  return sidesArray[randomSideIndex];
}

function getRandomMain() {
	var randomMainIndex = getRandomIndex(mainArray);
  return mainArray[randomMainIndex];
}

function getRandomDessert() {
	var randomDessertIndex = getRandomIndex(dessertArray);
  return dessertArray[randomDessertIndex];
}

// after letsCookButton clicked

function preventDefault() {
  event.preventDefault()
}

function clear() {
  cookpot.classList.remove("hidden");
  recipe.classList.add("hidden");
  eatThis.classList.add("hidden");
  clearButton.classList.add("hidden");
}

function letsCook() {
  var circleSide = document.getElementById("circle-side");
  var circleMain = document.getElementById("circle-main");
  var circleDessert = document.getElementById("circle-dessert");
  cookpot.classList.add("hidden");
  recipe.classList.remove("hidden");
  eatThis.classList.remove("hidden");
  clearButton.classList.remove("hidden");
  preventDefault();
  if (circleSide.checked === true) {
    recipe.innerText = getRandomSide() + "!"
  } else if (circleMain.checked === true) {
    recipe.innerText = getRandomMain() + "!"
  } else if (circleDessert.checked === true) {
    recipe.innerText = getRandomDessert() + "!"
  }
}
