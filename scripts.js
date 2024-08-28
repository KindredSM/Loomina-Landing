document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate header elements
  gsap.from("header h1", {
    duration: 1.2,
    y: -70,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.2,
    rotationX: 90,
  });

  gsap.from("header p", {
    duration: 0.8,
    scale: 0.5,
    opacity: 0,
    delay: 0.3,
    ease: "back.out(1.7)",
  });

  // Animate main sections
  gsap.from(".main-section, .main-section-learn", {
    scrollTrigger: {
      trigger: ".main-section",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
  });

  // Animate cards with a more dynamic effect
  gsap.from(".card-container", {
    scrollTrigger: {
      trigger: ".cards-section",
      start: "top 70%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    scale: 0.8,
    rotation: 15,
    duration: 0.7,
    stagger: 0.15,
    ease: "back.out(1.5)",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const watchVideoBtn = document.getElementById("watchVideoBtn");
  const videoPopup = document.getElementById("videoPopup");
  const closePopup = document.querySelector(".close-popup");
  const video = document.querySelector("#videoPopup video");

  watchVideoBtn.addEventListener("click", function () {
    videoPopup.style.display = "block";
    video.play();
  });

  closePopup.addEventListener("click", function () {
    videoPopup.style.display = "none";
    video.pause();
    video.currentTime = 0;
  });

  window.addEventListener("click", function (event) {
    if (event.target == videoPopup) {
      videoPopup.style.display = "none";
      video.pause();
      video.currentTime = 0;
    }
  });
});
