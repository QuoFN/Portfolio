// Получаем ссылки на элементы DOM
const addToCartButton = document.getElementById('add-to-cart');
const cartItemsList = document.getElementById('cart-items');

// Обработчик события для кнопки "Добавить товар"
addToCartButton.addEventListener('click', () => {
    // Создаем элемент списка для добавленного товара
    const newItem = document.createElement('li');
    newItem.textContent = 'Новый товар'; // Замените это на информацию о товаре

    // Добавляем элемент в корзину
    cartItemsList.appendChild(newItem);
});