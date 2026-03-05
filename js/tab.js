const foodItems = document.querySelectorAll(".foodChoices li");
const menuItems = document.querySelectorAll(".menuChoices li");

foodItems.forEach((item) => {
  item.addEventListener("click", () => {
    foodItems.forEach((i) => i.classList.remove("active"));

    item.classList.add("active");
    console.log(item.id);

    showCards(item.id);
  });
});

function showCards(id) {
  // Remove 'active' from all cards
  const allCards = document.querySelectorAll(".foodCard");
  allCards.forEach((card) => card.classList.remove("active"));

  // Add 'active' to cards that match the clicked li's id
  const targetCards = document.querySelectorAll(`.card_${id}`);
  targetCards.forEach((card) => card.classList.add("active"));
}

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((i) => i.classList.remove("active"));

    item.classList.add("active");
    console.log(item.id);

    showMenuCards(item.id);
  });
});

function showMenuCards(id) {
  // Remove 'active' from all cards
  const allCards = document.querySelectorAll(".menuCard");
  allCards.forEach((card) => card.classList.remove("active"));

  // Add 'active' to cards that match the clicked li's id
  const targetCards = document.querySelectorAll(`.card_${id}`);
  targetCards.forEach((card) => card.classList.add("active"));
}
