function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
   if(html.classList.contains("light")) {
    // se tiver ligth mode, adicionar a imagem ligth
   img.setAttribute("src", "./assets/avatar-light2.png")
   }   else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar1.png")
   }

}