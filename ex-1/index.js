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
