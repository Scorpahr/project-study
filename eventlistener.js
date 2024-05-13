const image = document.querySelector("#img-pitch")
const title = document.querySelector(".container .title")

title.addEventListener ("click", () => {
  title.innerText = "Bienvenue Peach!"
  image.src = "images/peach.jpg"
})
