let input = document.getElementById("input")
let form = document.querySelector("form")
let ul = document.querySelector("ul")

function mytodo(e){
    e.preventDefault()
     
    let todotext = input.value

    let listelement  = document.createElement("li")
      
    listelement.className = "lis"



   

   
 

    let hat = document.createElement("img")
    hat.className = "hat"
    hat.setAttribute("src", "./img/pngwing.com.png");
    listelement.appendChild(hat)

    // listelement.innerText = todotext

    let text = document.createTextNode(todotext)
    listelement.appendChild(text)

    let knife = document.createElement("img")
    knife.className = "knife"
    knife.setAttribute("src", "./img/knife.png");
    listelement.appendChild(knife)

    console.log(listelement)
    ul.appendChild(listelement)

    form.reset()


}

ul.addEventListener("click" , deletetodo)

function deletetodo(e){
    if(e.target.className.includes("knife")){
        let deleteLi = e.target.parentElement
        ul.removeChild(deleteLi)
    }
}










form.addEventListener("submit" , mytodo)