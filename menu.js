document.addEventListener('DOMContentLoaded', function () {
  const dinnerButton = document.getElementById('dinnerButton');
  const drinkButton = document.getElementById('drinkButton');
  const dinnerImage = document.getElementById('dinnerImage');
  const drinkImage = document.getElementById('drinkImage');

  // Initially show the dinner menu and hide the drink menu
  dinnerImage.style.display = 'block';
  drinkImage.style.display = 'none';

  dinnerButton.addEventListener('click', function () {
    dinnerImage.style.display = 'block';
    drinkImage.style.display = 'none';
  });

  drinkButton.addEventListener('click', function () {
    dinnerImage.style.display = 'none';
    drinkImage.style.display = 'block';
  });
});
