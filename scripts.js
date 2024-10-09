document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Header animations
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

  // Scroll-triggered animations
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

  if (headerVideo && videoOverlay) {
    const loadAndPlayVideo = () => {
      if (!headerVideo.src) {
        headerVideo.src = headerVideo.dataset.src;
      }
      headerVideo.play();
      videoOverlay.style.opacity = '0';
    };

    const pauseVideo = () => {
      headerVideo.pause();
      videoOverlay.style.opacity = '1';
    };

    const toggleVideo = () => {
      if (headerVideo.paused) {
        loadAndPlayVideo();
      } else {
        pauseVideo();
      }
    };

    if (watchVideoBtn) {
      watchVideoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleVideo();
      });
    }

    if (videoOverlay) {
      videoOverlay.addEventListener('click', (e) => {
        e.preventDefault();
        loadAndPlayVideo();
      });
    }

    headerVideo.addEventListener('click', toggleVideo);

    headerVideo.addEventListener('ended', () => {
      videoOverlay.style.opacity = '1';
    });

    // Remove poster after video starts playing
    headerVideo.addEventListener('play', () => {
      headerVideo.removeAttribute('poster');
    });
  }
});
