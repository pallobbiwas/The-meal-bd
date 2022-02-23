const clickButton = () => {
  loadData();
};

const loadData = () => {
  const searchValue = getIdFromUi("search-input");
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data.meals));
};
//for loop function
const displayData = (meals) => {
  meals.forEach((meal) => {
    displayMeal(meal, "meal-container", true);
    // console.log(meal);
  });
};

//display meal detailes

const displayMeal = (meal, uiId, isIt) => {
  // console.log(meal.idMeal);
  const mealontainer = document.getElementById(uiId);
  const div = document.createElement("div");
  if (isIt == true) {
    div.innerHTML = `
        <div onclick = "displaySingelIteam (${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                <a href="${meal.strYoutube}" target = "blank"> go for more</a>
            </div>
        </div>
    `;
    mealontainer.appendChild(div);
  } else if (isIt == false) {
    mealontainer.innerHTML = `
        <div onclick = "displaySingelIteam (${meal.idMeal})" class="card">
            <img  src="${
              meal.strMealThumb
            }" class="card-img-top img-fluid h-50" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <h5 class="card-title">${meal.strTags}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            <a href="${meal.strSource}" target = "blank"> go for more</a>
            </div>
        </div>
    `;
  }
};
const displaySingelIteam = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeal(data.meals[0], "display-container", false));
};

//comon function for get id from ui
const getIdFromUi = (id) => {
  const idValue = document.getElementById(id);
  const idValueText = idValue.value;
  idValue.value = "";
  return idValueText;
};
