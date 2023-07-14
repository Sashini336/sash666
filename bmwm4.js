const images = [
  "https://mobistatic4.focus.bg/mobile/photosmob/354/1/big1/11662725891193354_9l.jpg",
  "https://mobistatic4.focus.bg/mobile/photosmob/354/1/big1/11662725891193354_UI.jpg", // Add more image URLs here
  "https://mobistatic4.focus.bg/mobile/photosmob/354/1/big1/11662725891193354_RS.jpg",
  "https://mobistatic4.focus.bg/mobile/photosmob/354/1/big1/11662725891193354_1u.jpg",
];

function switchImage(index) {
  const carImage = document.getElementById("car-image");
  carImage.src = images[index];
}
