let total = 0;

const atualizaTotal = (total) =>{
    document.querySelector("h1").innerHTML = total
}

const init = () => {
    const table = document.querySelector("table")
    for (let i = 0; i < 10; i++) {
        //criar tr
        let tr = document.createElement("tr")

        for (let j = 0; j < 10; j++) {

            let newImg = document.createElement("img")

            newImg.src = 'https://baldochi.unifei.edu.br/COM222/stars/star_off.gif'

            newImg.addEventListener("click", (event) => {
                event.preventDefault()
                if (newImg.src == 'https://baldochi.unifei.edu.br/COM222/stars/star_on.gif') {
                    newImg.src = 'https://baldochi.unifei.edu.br/COM222/stars/star_off.gif'
                    total--
                } else {
                    newImg.src = 'https://baldochi.unifei.edu.br/COM222/stars/star_on.gif'
                    total++
                }
                atualizaTotal(total)
                
            })

            let td = document.createElement("td").appendChild(newImg)

            tr.appendChild(td)
        }
        table.appendChild(tr)
    }

}

const turn = () => {
    
    imgs = document.querySelectorAll("img")

    for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].src == 'https://baldochi.unifei.edu.br/COM222/stars/star_on.gif') {
            imgs[i].src = 'https://baldochi.unifei.edu.br/COM222/stars/star_off.gif'
            total--
        } else {
            imgs[i].src = 'https://baldochi.unifei.edu.br/COM222/stars/star_on.gif'
            total++
        }
    }
    let button = document.querySelector(".invert")
    atualizaTotal(total)
}

const turnAll = () =>{
    let button = document.querySelector(".turnAll")
    let imgs = document.querySelectorAll("img")

    if(total == 100){
        button.innerHTML = "Apagar Todas"
        for(img in imgs){
            imgs[img].src = 'https://baldochi.unifei.edu.br/COM222/stars/star_off.gif'
            total = 0
        }
    }else{
        for(img in imgs){
            imgs[img].src = 'https://baldochi.unifei.edu.br/COM222/stars/star_on.gif'
            total = 100
        }
        button.innerHTML = "Acender Todas"
    }
    atualizaTotal(total)
}