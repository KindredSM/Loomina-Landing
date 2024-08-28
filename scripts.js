// document.addEventListener("DOMContentLoaded", () => {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.from("header h1", {
//     duration: 1,
//     y: -50,
//     opacity: 0,
//     ease: "power1.out",
//   });

//   gsap.from("header p", {
//     duration: 1,
//     y: 50,
//     opacity: 0,
//     delay: 0.5,
//     ease: "power1.out",
//   });

//   gsap.from(".cards-section", {
//     scrollTrigger: {
//       trigger: ".cards-section",
//       start: "top 80%",
//       end: "bottom 20%",
//       toggleActions: "play none none none",
//     },
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     stagger: 0.3,
//   });
// });

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
