 function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // random kiểu màu
  const type = Math.random() < 0.5 ? "dark" : "light";
  heart.classList.add(type);

  const size = Math.random() * 0.5 + 0.6;
  const duration = Math.random() * 4 + 6;

  const rotateStart = Math.random() * 360 + "deg";
  const rotateMid = (Math.random() * 360 - 180) + "deg";
  const rotateEnd = (Math.random() * 360 - 180) + "deg";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = duration + "s";

  heart.style.setProperty("--size", size);
  heart.style.setProperty("--rotate-start", rotateStart);
  heart.style.setProperty("--rotate-mid", rotateMid);
  heart.style.setProperty("--rotate-end", rotateEnd);

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createHeart, 700);