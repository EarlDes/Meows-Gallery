let startTheShowBtn = document.getElementById('start-btn');
let catGallerySection = document.getElementById('cat-gallery');
let heroSection = document.getElementById('hero');
let darkModeToggle = document.getElementById('dark-mode-toggle');
let audio = document.getElementById('music');

function handleImageClick(url) {
  window.open(url, '_blank');
}

startTheShowBtn.addEventListener('click', () => {
  catGallerySection.style.display = "block";
  audio.loop = true;
  audio.play();
  window.location.href = "#cat-gallery";
  heroSection.style.display = "none";
});

let images = document.getElementById('images');

function renderImage(url) {
  let li = document.createElement('li');
  let row = document.createElement('div');
  row.className = "row";
  let image = document.createElement('img');
  image.setAttribute("src", url);

  image.addEventListener('click', () => {
    handleImageClick(url);
  });

  images.appendChild(row);
  row.appendChild(li);
  li.appendChild(image);
}

function fetchImages() {
  for (let i = 0; i < 1000; i++) {
    fetch('https://cataas.com/cat?json=true')
      .then(response => response.json())
      .then(data => {
        renderImage(`https://cataas.com${data.url}`);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}

fetchImages();

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.classList.toggle('dark-mode');
});
