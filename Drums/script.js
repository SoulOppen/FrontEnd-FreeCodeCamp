const drumPad = document.querySelectorAll(".drum-pad");
const click = (element) => {
  const dis = document.getElementById("display");
  dis.textContent = element.id;
  const audio = element.querySelector(".clip");
  audio.play();
};
drumPad.forEach((element) => {
  element.addEventListener("click", () => click(element));
});
document.addEventListener("keydown", (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);
  audio.play();
});
