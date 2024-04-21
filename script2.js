document.addEventListener('DOMContentLoaded', function() {
    // Récupérer la catégorie de menu à partir de l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
  
    // Afficher le titre de la catégorie
    document.getElementById('category-title').innerText = `Catégorie : ${category}`;
  
    // Appeler une fonction pour récupérer les éléments de menu de la catégorie spécifiée (peut être une requête Ajax ou une liste prédéfinie)
    const menuItems = getItemsForCategory(category);
  
    // Afficher les éléments de menu sur la page
    const menuItemsContainer = document.getElementById('menu-items');
    menuItems.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.innerText = item;
      menuItemsContainer.appendChild(itemElement);
    });
  });
  
  // Fonction de démonstration pour récupérer les éléments de menu de la catégorie spécifiée
  function getItemsForCategory(category) {
    // Vous pouvez remplacer cette fonction avec une requête Ajax pour récupérer les éléments de menu depuis un serveur
    // ou utiliser une liste prédéfinie selon vos besoins
    // Dans cet exemple, je vais simplement retourner une liste prédéfinie en fonction de la catégorie
    switch (category) {
      case 'Déjeuner':
        return ['Omelette', 'Pancakes', 'Croissant', 'Café'];
      case 'Dîner':
        return ['Steak', 'Poulet rôti', 'Pâtes', 'Salade César'];
      case 'Sushi':
        return ['Maki au saumon', 'Sashimi assorti', 'California rolls', 'Temaki au thon'];
      case 'Boissons':
        return ['Eau minérale', 'Soda', 'Jus de fruits', 'Café'];
      case 'Desserts':
        return ['Gâteau au chocolat', 'Tiramisu', 'Crème brûlée', 'Glaces'];
      default:
        return ['Aucun élément trouvé'];
    }
  }
  