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
});

// Video popup functionality (unchanged)
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
