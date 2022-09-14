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



  