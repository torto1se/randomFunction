const imageUrls = [
    'https://biggirlslimming.files.wordpress.com/2015/10/5.jpg',
    'https://st3.depositphotos.com/1016929/14228/i/1600/depositphotos_142282828-stock-photo-3d-gold-80-eighty-percent.jpg',
    'https://thumbs.dreamstime.com/b/gold-fifty-percent-discount-sign-sale-off-sale-banner-template-special-offer-off-tag-minus-sticker-sale-94221871.jpg',
    // Добавьте здесь дополнительные URL-ы изображений
  ];

  // Функция для генерации случайного числа
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  // Функция для генерации случайной картинки
  function generateRandomImage() {
    const randomIndex = getRandomNumber(imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];
    const randomImageElement = document.getElementById('randomImage');
    randomImageElement.src = randomImageUrl;
  }