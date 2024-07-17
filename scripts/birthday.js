// Birthday page scripts

// Animation GSAP timeline on load event
window.addEventListener("load", () => {
  Swal.fire({
    title: "Mau dengerin pakai musik atau enggak?",
    // text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#468585",
    cancelButtonColor: "#9CDBA6",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector(".song").play();
      animationTimeline();
    } else {
      // Jika tidak memilih untuk memainkan musik, langsung jalankan animasi tanpa memanggil animationTimeline() lagi
      animationTimeline();
    }
  });
});

const animationTimeline = () => {
  // split chars that needs  to be animted individually
  const textBoxChars = document.getElementsByClassName("idea-1")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewY: "-15deg",
  };

  // animation timeline
  const tl = gsap.timeline(); // Menggunakan gsap.timeline() untuk membuat timeline baru

  tl.to(".container", { visibility: "visible" })
    .from(".one", { opacity: 0, y: 10, duration: 0.7 })
    .from(".two", { opacity: 0, y: 10, duration: 0.4 }, "-=0.3")
    .to(".one, .two", { opacity: 0, y: 10, duration: 0.7 }, "+=3.5")
    .from(".three", { opacity: 0, y: 10, duration: 0.7 }, "-=0.5")
    .to(".three", { opacity: 0, y: 10, duration: 0.7 }, "+=3")
    .from(".idea-1", ideaTextTrans)
    .to(".idea-1", ideaTextTransLeave, "+=2.5")
    .from(".idea-2", ideaTextTrans)
    .to(".idea-2", ideaTextTransLeave, "+=2.5")
    .from(".idea-3", ideaTextTrans)
    .to(".idea-3 strong", { scale: 1.1, x: 10, backgroundColor: "rgb(21, 161, 237)", color: "#fff" }, "+=2.5")
    .to(".idea-3", ideaTextTransLeave, "+=2.5")
    .from(".idea-4", ideaTextTrans)
    .to(".idea-4", ideaTextTransLeave, "+=2.5")
    .from(".idea-5", { rotationX: 15, rotationZ: -10, skewY: "-5deg", y: 50, z: 10, opacity: 0 }, "+=1.5")
    .to(".idea-5 span", { rotation: 90, x: 8 }, "+=1.4")
    .to(".idea-5", { scale: 0.2, opacity: 0 }, "+=2")
    .from(".idea-6", ideaTextTrans)
    .to(".idea-6", ideaTextTransLeave, "+=2.5")
    .from(".idea-7", ideaTextTrans)
    .to(".idea-7", ideaTextTransLeave, "+=2.5")
    .from(".idea-8", ideaTextTrans)
    .to(".idea-8", ideaTextTransLeave, "+=2.5")
    .from(".idea-9", ideaTextTrans)
    .to(".idea-9", ideaTextTransLeave, "+=2.5")
    .staggerFrom(".idea-10 span", 0.8, { scale: 3, opacity: 0, rotation: 15, ease: Expo.easeOut }, 0.2)
    .staggerTo(".idea-10 span", 0.8, { scale: 3, opacity: 0, rotation: -15, ease: Expo.easeOut }, 0.2, "+=1.5")
    .staggerFromTo(".ballons img", 2.5, { opacity: 0.9, y: 1400 }, { opacity: 1, y: -1000 }, 0.2)
    .from(".profile-picture", { scale: 3.5, opacity: 0, x: 25, y: -25, rotationZ: -45, duration: 0.5 }, "-=2")
    .staggerFrom(".wish-hbd span", 0.7, { opacity: 0, y: -50, rotation: 150, skewX: "30deg", ease: Elastic.easeOut.config(1, 0.5) }, 0.1, "party")
    .staggerFromTo(".wish-hbd span", 0.7, { scale: 1.4, rotationY: 150 }, { scale: 1, rotationY: 0, color: "#468585", ease: Expo.easeOut }, 0.1, "party")
    .from(".wish h5", { opacity: 0, y: 10, skewX: "-15deg", duration: 0.5 }, "party")
    .staggerTo(".eight svg", 1.5, { visibility: "visible", opacity: 0, scale: 80, repeat: 3, repeatDelay: 1.4 }, 0.3)
    .to(".six", { opacity: 0, y: 30, zIndex: "-1", duration: 0.5 })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)

  // restart animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
  window.open("https://wa.me/qr/BO7SBNDWLBBKA1", "_blank");
});

};
