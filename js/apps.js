const clickButton = () => {
  loadData();
};

const loadData = () => {
  const searchValue = getIdFromUi("search-input");
  if (searchValue == "") {
    document.getElementById("hide").style.display = "block";
  } else {

    loading()

    document.getElementById("hide").style.display = "none";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayData(data.meals));
      


      // addLoading()
  }
};
//for loop function
const displayData = (meals) => {
  const mealontainers = document.getElementById("meal-container");
  mealontainers.textContent = "";
  if (meals == null) {
    addLoading()
    document.getElementById("hides").style.display = "block";
  } else {
    document.getElementById("hides").style.display = "none";
    meals.forEach((meal) => {
      displayMeal(meal, "meal-container", true);
      // console.log(meal);
    });
  }
};

//display meal detailes

const displayMeal = (meal, uiId, isIt) => {

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
    addLoading()
    mealontainer.appendChild(div);
  } else if (isIt == false) {
    mealontainer.innerHTML = `
    <div class="toast w-75 show mx-auto">
      <div class="toast-header">
        <button type="button" class="btn-close ms-auto" data-bs-dismiss="toast"></button>
      </div>
      <div class="toast-body d-flex">
            <div>
              <img src="${
               meal.strMealThumb
                }" class="card-img-top img-fluid w-100 " alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                <a href="${meal.strSource}" target="blank"> go for more</a>
            </div>
        </div>
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
/* loading */
const loading = () =>{
  const loadingButton = document.getElementById('loading');
  loadingButton.classList.remove('d-none')
}
// loading()
const addLoading = () =>{
  const loadingButton = document.getElementById('loading');
  loadingButton.classList.add('d-none')
}
// addLoading()