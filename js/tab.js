const foodItems = document.querySelectorAll(".foodChoices li");

foodItems.forEach((item) => {
  item.addEventListener("click", () => {
    foodItems.forEach((i) => i.classList.remove("active"));

    item.classList.add("active");
  });
});
