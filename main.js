document.querySelectorAll(".banner-content").forEach((content) => {
  content.onclick = () => {
    document.querySelector(".popup-content").style.display = "block";
    const elPopupImg = document.querySelector(".popup-img");
    const elPopulTitle = document.querySelector(".popup-title");
    const elContent = content.querySelector("img");
    const elContentTitle = content.querySelector(".banner-title");
    elPopupImg.src = elContent.getAttribute("src");
    elPopupImg.srcset = elContent.getAttribute("srcset");
    elPopulTitle.textContent = elContentTitle.textContent
  };
});
const elClose = document.querySelector(".popup-close").addEventListener("click", () => {
  document.querySelector(".popup-content").style.display = "none";
})
const elPopupClose = document.querySelector(".popup-back").addEventListener("click", () => {
  document.querySelector(".popup-content").style.display = "none";
  document.querySelector(".popup-request").style.display = "none";
})

// Request Cards

document.querySelector(".popup-contact").addEventListener("click", () => {
  document.querySelector(".popup-request").style.display = "block";
  document.querySelector(".popup-content").style.display = "none";
})
document.querySelector(".request-close").addEventListener("click", () => {
  document.querySelector(".popup-request").style.display = "none";
  document.querySelector(".popup-content").style.display = "none";
  document.querySelector(".popup-content").style.display = "none";
})


// Main Modal start

document.querySelector(".main-btn").addEventListener("click", () => {
  document.querySelector(".main-popup").style.display = "block";
})
document.querySelector(".main-popup__close").addEventListener("click", () => {
  document.querySelector(".main-popup").style.display = "none";
})
  
// Offer Modal Start

document.querySelectorAll(".offer-content").forEach(card => {
  card.querySelector(".offer-about__btn").addEventListener("click", () => {
    document.querySelector(".offer-popup").style.display = "block";
    const elOfferTitle = card.querySelector(".offer-about__title")
    const elOfferSubtitle = card.querySelector(".offer-about__subtitle");
    document.querySelector(".offer-popup__title").textContent = elOfferTitle.textContent
    document.querySelector(".offer-popup__subtitle").textContent = elOfferSubtitle.textContent
  })
})
document.querySelector(".offer-popup__close").addEventListener("click", () => {
  document.querySelector(".offer-popup").style.display = "none"
})
document.querySelector(".offer-back").addEventListener("click", () => {
  document.querySelector(".offer-popup").style.display = "none"
})


// Offer More Modal

document.querySelector(".offer-content__more-btn").addEventListener("click", () => {
  document.querySelector(".popup-more").style.display = "block";
})
document.querySelector(".more-close").addEventListener("click", () => {
  document.querySelector(".popup-more").style.display = "none";
})
document.querySelector(".more-bg").addEventListener("click", () => {
  document.querySelector(".popup-more").style.display = "none";
})