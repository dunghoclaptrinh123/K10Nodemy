let listDivImg = document.querySelector(".list-img div");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let imgWrap = document.querySelector(".img-wrap img");

let currentIndex = 0;

setCurreent(currentIndex);

function setCurreent(index) {
  currentIndex = index;
  imgWrap.src = listDivImg[currentIndex].querySelector("img").src;

  // remove all active img
  listDivImg.forEach((item) => {
    item.classList.remove("active");
  });

  // set active
  listDivImg[currentIndex].classList.add("active");
}

listDivImg.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    setCurreent(index);
  });
});

next.addEventListener("click", () => {
  if (currentIndex == listDivImg.length - 1) {
    currentIndex = 0;
  } else currentIndex++;

  setCurreent(currentIndex);
});

prev.addEventListener("click", () => {
  if (currentIndex == 0) currentIndex = listDivImg.length - 1;
  else currentIndex--;

  setCurreent(currentIndex);
});
