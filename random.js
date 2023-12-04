const imageUrls = {
    'https://biggirlslimming.files.wordpress.com/2015/10/5.jpg': 5,
    'https://st3.depositphotos.com/1016929/14228/i/1600/depositphotos_142282828-stock-photo-3d-gold-80-eighty-percent.jpg': 80,
    'https://thumbs.dreamstime.com/b/gold-fifty-percent-discount-sign-sale-off-sale-banner-template-special-offer-off-tag-minus-sticker-sale-94221871.jpg': 50,
    'https://img.freepik.com/premium-photo/15-percent_172429-112.jpg': 15,
    'https://e7.pngegg.com/pngimages/913/192/png-clipart-25-discount-tag-others-text-logo.png':25,
    'https://img.freepik.com/premium-photo/40-percent_172429-119.jpg':40,
};

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function generateRandomImage() {
  const randomUrls = Object.keys(imageUrls);
  const randomIndex = getRandomNumber(randomUrls.length);
  const randomImageUrl = randomUrls[randomIndex];
  const randomImageElement = document.getElementById('randomImage');
  randomImageElement.src = randomImageUrl;
  const discountText = document.getElementById('discountText');
  const discountPercentage = imageUrls[randomImageUrl];
  discountText.innerText = `Вы получили скидку в размере ${discountPercentage}%`;
}

function toggleDiscount() {
  const button = document.querySelector('button');
  if (button.innerText === 'Получить скидку') {
    generateRandomImage();
    button.innerText = 'Вернуться на главную страницу';
  } else {
      resetPage();
    }
}

function resetPage() {
  const button = document.querySelector('button');
  const randomImageElement = document.getElementById('randomImage');
  const discountText = document.getElementById('discountText');
  button.innerText = 'Получить скидку';
  randomImageElement.src = 'https://novostidnja.ru/wp-content/uploads/2023/08/67738207_s-e1525278398508.jpg';
  discountText.innerText = '';
}

