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
    displayMeal(meal);
    console.log(meal);
  });
};

//display meal detailes

const displayMeal = (meal) => {
  const mealontainer = document.getElementById("meal-container");
  const div = document.createElement("div");
  div.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                <a href="${meal.strYoutube}" target = "blank"> go for more</a>
            </div>
        </div>
    `;
    mealontainer.appendChild(div)
};

//comon function for get id from ui
const getIdFromUi = (id) => {
  const idValue = document.getElementById(id);
  const idValueText = idValue.value;
  idValue.value = '';
  return idValueText;
};
