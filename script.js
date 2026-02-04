// Gallery backgrounds
document.querySelectorAll('.photo').forEach(photo => {
  const img = photo.dataset.img;
  if (img) photo.style.backgroundImage = `url(${img})`;
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox-close');

document.querySelectorAll('.photo').forEach(photo => {
  photo.addEventListener('click', () => {
    lightboxImg.src = photo.dataset.img;
    lightbox.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

// Scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));
