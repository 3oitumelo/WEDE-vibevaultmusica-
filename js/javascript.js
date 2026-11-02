document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------------------------------------
  // 1. Dynamic Date Display in Footer (Added to every web page)
  // -------------------------------------------------------------
  const footerDateElements = document.querySelectorAll(".current-date");
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);

  footerDateElements.forEach(el => {
    el.textContent = `Today's Date: ${formattedDate}`;
  });

  // -------------------------------------------------------------
  // 2. Contact Form Validation & Mailto Submission
  // -------------------------------------------------------------
 const contactForm = document.querySelector(".form");
  if (contactForm && document.getElementById("email")) {
    contactForm.addEventListener("submit", (e) => {
      let isValid = true;
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");

      // Validation checks
      if (!nameInput.value.trim()) {
        alert("Please enter your full name.");
        isValid = false;
      } else if (!emailInput.value.trim() || !emailInput.value.includes("@")) {
        alert("Please enter a valid email address.");
        isValid = false;
      } else if (!messageInput.value.trim() || messageInput.value.length < 5) {
        alert("Please enter a message with at least 5 characters.");
        isValid = false;
      }

      // If invalid, stop submission. If valid, let it submit to the form's action.
      if (!isValid) {
        e.preventDefault();
      }
    });
  }
});

// -------------------------------------------------------------
// 3. Shop Product Filtering Function
// -------------------------------------------------------------
function filterProducts(category) {
  const products = document.querySelectorAll('.product');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  products.forEach(product => {
    if (category === 'all' || product.getAttribute('data-category') === category) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

// -------------------------------------------------------------
// 3. Shop Product Filtering Function
// -------------------------------------------------------------
function filterProducts(category) {
  const products = document.querySelectorAll('.product');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  products.forEach(product => {
    if (category === 'all' || product.getAttribute('data-category') === category) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}
// -------------------------------------------------------------
// Gallery Lightbox Slideshow Functionality
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery-grid img");
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("lightboxImage");
  const closeBtn = document.querySelector(".close-lightbox");
  const prevBtn = document.querySelector(".lightbox-prev");
  const nextBtn = document.querySelector(".lightbox-next");

  let currentIndex = 0;
  const imagesArray = Array.from(galleryImages);

  if (modal && modalImg && galleryImages.length > 0) {
    // Open modal on image click
    galleryImages.forEach((img, index) => {
      img.style.cursor = "pointer";
      img.addEventListener("click", () => {
        currentIndex = index;
        openModal(imagesArray[currentIndex].src);
      });
    });

    function openModal(src) {
      modal.style.display = "block";
      modalImg.src = src;
    }

    function closeModal() {
      modal.style.display = "none";
    }

    // Next slide
    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % imagesArray.length;
        modalImg.src = imagesArray[currentIndex].src;
      });
    }

    // Previous slide
    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
        modalImg.src = imagesArray[currentIndex].src;
      });
    }

    // Close on button click
    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }

    // Close when clicking outside the image
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
});