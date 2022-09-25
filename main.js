document.querySelectorAll(".banner-content").forEach((content) => {
  content.onclick = () => {
    const elPopupImg = document.querySelector(".popup-img");
    const elPopulTitle = document.querySelector(".modal-title");
    const elContent = content.querySelector("img");
    const elContentTitle = content.querySelector(".banner-title");
    elPopupImg.src = elContent.getAttribute("src");
    elPopupImg.srcset = elContent.getAttribute("srcset");
    elPopulTitle.textContent = elContentTitle.textContent
  };
});




  
// Offer Modal Start

document.querySelectorAll(".offer-content").forEach(card => {
  card.querySelector(".offer-about__btn-more").addEventListener("click", () => {
    const elOfferTitle = card.querySelector(".offer-about__title")
    const elOfferSubtitle = card.querySelector(".offer-about__subtitle");
    const elOfferImg = card.querySelector(".offer-img")
    document.querySelector(".offer-popup__title").textContent = elOfferTitle.textContent
    document.querySelector(".offer-popup__subtitle").textContent = elOfferSubtitle.textContent
    document.querySelector(".offer-popup__img").src = elOfferImg.getAttribute("src")
    document.querySelector(".offer-popup__img").srcset = elOfferImg.getAttribute("srcset")
    console.log("wolf");
  })
})

const elSelectOffice = document.querySelector(".footer-map__office"),
      elSelectFactory = document.querySelector(".footer-map__factory"),
      elMapOffice = document.querySelector(".map-office"),
      elMapFactory = document.querySelector(".map-factory");

elSelectOffice.addEventListener("click", ()=> {
  elMapFactory.style.display = "none"
  elMapOffice.style.display = "block"
  elSelectFactory.classList.remove("active")
  elSelectOffice.classList.add("active")
})
elSelectFactory.addEventListener("click", () => {
  elMapFactory.style.display = "block";
  elMapOffice.style.display = "none";
  elSelectOffice.classList.remove("active")
  elSelectFactory.classList.add("active")
})
 
// Hammburger

document.querySelector(".hamburger").addEventListener("click", ()=> {
  document.querySelector(".nav-media").classList.toggle("hamburger-active")
})
 




 