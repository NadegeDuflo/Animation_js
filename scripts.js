//Animation 7 zoom card

const cardZoom = document.querySelector(".card-zoom");
const imageZoom = document.querySelector('.image-zoom')
const blocFocusTop = document.querySelector(".bloc-focus-top");
const blocFocusBottom = document.querySelector(".bloc-focus-bottom");
const blocContent = document.querySelector(".bloc-content-show");
const title = document.querySelector(".bloc-content-show h2");
const downloadLogo = document.querySelector(".bloc-content-show img");
const separation = document.querySelector(".card-zoom hr");
const allTxt = document.querySelectorAll(".card-zoom p");

const TLANIM = gsap.timeline({ paused: true });

TLANIM
  .fromTo(imageZoom, {scale: 1}, {scale: 2, y: -15, x:50, duration: 0.4,  ease:ExpoScaleEase.config(1, 2,"power2.inOut")})
  .to(blocFocusTop, { top: -8, left: -8, duration: 0.1 }, 0.5)
  .to(blocFocusBottom, { bottom: -8, right: -8, duration: 0.1 }, "-=0.1")
  .to(blocContent, { bottom: 50, duration: 0.2 }, '-=0.1')
  .from(title, { opacity: 0, duration: 0.2 }, '-=0.1')
  .from(downloadLogo, {scale: 0, duration: 0.2})
  .from(separation, { width: 0, duration: 0.2 }, '-=0.2')
  .from(allTxt, { opacity: 0, duration: 0.3, stagger: 0.2 });

cardZoom.addEventListener("mouseenter", () => {
  TLANIM.play();
});

cardZoom.addEventListener("mouseleave", () => {
     TLANIM.reverse();
});