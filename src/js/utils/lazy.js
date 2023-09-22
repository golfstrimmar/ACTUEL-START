"use ctrict";

export const Lazy = () => {
  let images = document.querySelectorAll("img");
  // const options = {
  //   root: null,
  //   rootMargin: "-255px",
  //   threshold: 0.1,
  // };
  // function handleImg(myImg, observer) {
  //   myImg.forEach((myImgSingle) => {
  //     // console.log(myImgSingle.intersectionRatio);
  //     if (myImgSingle.intersectionRatio > 0) {
  //       loadImg(myImgSingle.target);
  //     }
  //   });
  // }
  // function loadImg(img) {
  //   if (img.getAttribute("data")) {
  //     img.style.opacity = 1;

  //     img.src = img.getAttribute("data");
  //   }
  // }

  // const observer = new IntersectionObserver(handleImg, options);
  images.forEach((img) => {
    if (img.getAttribute("data")) {
      img.style.opacity = 0;
      // observer.observe(img);img.clientHeight
      window.addEventListener("scroll", function () {
        if (
          img.getBoundingClientRect().top <
          document.documentElement.clientHeight - 5
        ) {
          img.style.opacity = 1;
          img.src = img.getAttribute("data");
          return;
        }
      });
    }
  });

  // const MyLazysource = () => {
  //   // let images = document.querySelectorAll("source");
  //   const options = {
  //     root: null,
  //     rootMargin: "-5px",
  //     threshold: 0.1,
  //   };
  //   function handleImg(myImg, observer) {
  //     myImg.forEach((myImgSingle) => {
  //       // console.log(myImgSingle.intersectionRatio);
  //       if (myImgSingle.intersectionRatio > 0) {
  //         loadImg(myImgSingle.target);
  //       }
  //     });
  //   }
  //   function loadImg(img) {
  //     if (img.getAttribute("data")) {
  //       img.srcset = img.getAttribute("data");
  //       img.src = img.getAttribute("data");
  //     }
  //   }

  //   const observer = new IntersectionObserver(handleImg, options);
  //   images.forEach((img) => {
  //     observer.observe(img);
  //   });
  // };
  // MyLazysource();
};
