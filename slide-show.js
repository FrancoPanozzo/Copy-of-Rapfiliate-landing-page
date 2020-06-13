document
  .querySelector("#slide-text-1")
  .addEventListener("click", function (event) {
    document.querySelector("#slide-img-1").style.opacity = "1";
    document.querySelector("#slide-img-2").style.opacity = "0";
    document.querySelector("#slide-img-3").style.opacity = "0";
    document.querySelector("#slide-text-1").classList.add("active");
    document.querySelector("#slide-text-2").classList.remove("active");
    document.querySelector("#slide-text-3").classList.remove("active");
  });

document.querySelector("#slide-text-2").addEventListener("click", function () {
  document.querySelector("#slide-img-1").style.opacity = "0";
  document.querySelector("#slide-img-2").style.opacity = "1";
  document.querySelector("#slide-img-3").style.opacity = "0";
  document.querySelector("#slide-text-1").classList.remove("active");
  document.querySelector("#slide-text-2").classList.add("active");
  document.querySelector("#slide-text-3").classList.remove("active");
});

document.querySelector("#slide-text-3").addEventListener("click", function () {
  document.querySelector("#slide-img-1").style.opacity = "0";
  document.querySelector("#slide-img-2").style.opacity = "0";
  document.querySelector("#slide-img-3").style.opacity = "1";
  document.querySelector("#slide-text-1").classList.remove("active");
  document.querySelector("#slide-text-2").classList.remove("active");
  document.querySelector("#slide-text-3").classList.add("active");
});

document.querySelector("#slide-text-4").addEventListener("click", function () {
  document.querySelector("#slide-img-4").style.opacity = "1";
  document.querySelector("#slide-img-5").style.opacity = "0";
  document.querySelector("#slide-img-6").style.opacity = "0";
  document.querySelector("#slide-text-4").classList.add("active");
  document.querySelector("#slide-text-5").classList.remove("active");
  document.querySelector("#slide-text-6").classList.remove("active");
});

document.querySelector("#slide-text-5").addEventListener("click", function () {
  document.querySelector("#slide-img-4").style.opacity = "0";
  document.querySelector("#slide-img-5").style.opacity = "1";
  document.querySelector("#slide-img-6").style.opacity = "0";
  document.querySelector("#slide-text-4").classList.remove("active");
  document.querySelector("#slide-text-5").classList.add("active");
  document.querySelector("#slide-text-6").classList.remove("active");
});

document.querySelector("#slide-text-6").addEventListener("click", function () {
  document.querySelector("#slide-img-4").style.opacity = "0";
  document.querySelector("#slide-img-5").style.opacity = "0";
  document.querySelector("#slide-img-6").style.opacity = "1";
  document.querySelector("#slide-text-4").classList.remove("active");
  document.querySelector("#slide-text-5").classList.remove("active");
  document.querySelector("#slide-text-6").classList.add("active");
});
