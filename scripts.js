document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  gsap.registerPlugin(ScrollTrigger);


  const headerTimeline = gsap.timeline({ defaults: { ease: "power2.out" } });

  headerTimeline
    .from("header h1", {
      duration: 0.5,
      y: 30,
      opacity: 0,
    })
    .from(
      ".subheader",
      {
        duration: 0.5,
        y: 20,
        opacity: 0,
      },
      "-=0.4"
    )
    .from(
      ".header-buttons",
      {
        duration: 0.5,
        y: 20,
        opacity: 0,
      },
      "-=0.4"
    );


  gsap.utils.toArray(".main-section").forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  gsap.utils.toArray(".card-container").forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: "power2.out",
      delay: index * 0.1,
    });
  });

  // Video playback functionality
  const headerVideo = document.querySelector('.header-video video');
  const videoOverlay = document.querySelector('.video-overlay');
  const watchVideoBtn = document.querySelector(".watch-video-btn");
  const videoPopup = document.getElementById('videoPopup');
  const popupVideo = videoPopup.querySelector('.video-popup-video');

  const openVideoPopup = () => {
    if (!popupVideo.src) {
      popupVideo.src = headerVideo.dataset.src;
    }
    videoPopup.style.display = 'flex';
    popupVideo.play();
  };

  const closeVideoPopup = () => {
    videoPopup.style.display = 'none';
    popupVideo.pause();
  };

  if (watchVideoBtn) {
    watchVideoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openVideoPopup();
    });
  }

  if (videoOverlay) {
    videoOverlay.addEventListener('click', (e) => {
      e.preventDefault();
      openVideoPopup();
    });
  }

  if (headerVideo) {
    headerVideo.addEventListener('click', (e) => {
      e.preventDefault();
      openVideoPopup();
    });
  }

  videoPopup.addEventListener('click', (e) => {
    if (e.target !== popupVideo) {
      closeVideoPopup();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoPopup.style.display === 'flex') {
      closeVideoPopup();
    }
  });

  const navbar = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
      navbar.classList.remove('scrolled');
    } else {
      navbar.classList.add('scrolled');
    }
  });

  const burgerMenu = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.nav-menu');
  const body = document.body;

  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });

  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !burgerMenu.contains(e.target) && navMenu.classList.contains('active')) {
      burgerMenu.classList.remove('active');
      navMenu.classList.remove('active');
      body.style.overflow = '';
    }
  });

  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerMenu.classList.remove('active');
      navMenu.classList.remove('active');
      body.style.overflow = '';
    });
  });
});
