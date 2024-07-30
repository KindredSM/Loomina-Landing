document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("header h1", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power1.out",
  });

  gsap.from("header p", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: "power1.out",
  });

  gsap.from(".cards-section", {
    scrollTrigger: {
      trigger: ".cards-section",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
  });
});
