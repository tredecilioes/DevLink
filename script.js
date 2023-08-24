function toggleMode() {
    
    const html = document.documentElement 
    html.classList.toggle('light')
    
    const img = document.querySelector('#profile img')
    /* adicionar imagem trocando por click
    if(html.classList.contains(light)) {
        img.setAttribute('src', './')
    } else {
        img.setAttribute('src', './')
    }
    */
}