console.log("testeasd")
let carousel = document.querySelector("#initial")
let header = document.querySelector("header")
let examples = document.querySelector("#examples")

const loadWolvesExamples = async () => {
    !wolves && examples.remove()
    
    let wolvesNumber = wolves.length
    for (let i = 0; i < wolvesNumber; i++) {
        wolf = wolves[i]
        console.log(wolf)
        let name = document.createElement("h3")
        name.appendChild(document.createTextNode(wolf.name))
        
        let age = document.createElement("p")
        age.appendChild(document.createTextNode(`Idade: ${wolf.age} anos`))
        
        let description = document.createElement("p") 
        description.appendChild(document.createTextNode(wolf.description))
        
        let wrapper = document.createElement("div")
        wrapper.appendChild(name)
        wrapper.appendChild(age)
        wrapper.appendChild(description)
        
        let image = document.createElement("img")
        image.setAttribute("src", wolf.link_image)
        image.setAttribute("alt", "Wolf image")
        
        let example = document.createElement("div")
        example.classList.add("example")
        example.appendChild(image)
        example.appendChild(wrapper)
        
        let container = examples.querySelector(".container")
        container.appendChild(example)
    }
}

const updateHeader = () => { 
    this.scrollY > 200 ? header.style.padding = "5px 0" : null
    this.scrollY === 0 ? header.style.padding = "20px 0" : null
}

window.addEventListener("scroll", updateHeader , false)

let wolves = []
const fetchWolves = async () => {
    let res = await fetch("https://lobinhos.herokuapp.com/wolves")
    wolves = await res.json()
}

const main = async () => {
    await fetchWolves()
    loadWolvesExamples()
    initialCarousel()
}

main()