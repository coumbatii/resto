// Array of menu categories
const menuCategories = ['Déjeuner', 'Dîner', 'Sushi', 'Boissons', 'Desserts'];

// Function to get a random menu category
function getRandomCategory() {
  const randomIndex = Math.floor(Math.random() * menuCategories.length);
  return menuCategories[randomIndex];
}

// Function to handle click on specials thumbnail
document.getElementById('specials').addEventListener('click', function() {
  const randomCategory = getRandomCategory();
  window.location.href = `category.html?category=${randomCategory}`;
});
// Function to handle click on specials thumbnail
document.getElementById('specials').addEventListener('click', function() {
  const randomCategory = getRandomCategory();
  window.location.href = `category.html?category=${randomCategory}`;
});