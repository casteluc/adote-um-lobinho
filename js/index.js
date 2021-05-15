let carousel = document.querySelector("#initial")
let header = document.querySelector("header")
let examples = document.querySelector("#examples")

const fetchWolves = async () => {
    let res = await fetch("https://lobinhos.herokuapp.com/wolves")
    return await res.json()
}

const loadWolvesExamples = async (wolves) => {
    !wolves && examples.remove()
    
    let wolvesNumber = 2
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

const initialCarousel = (wolves, carouselLimit) => {
    let bgImagesRefs = []
    wolves.map(wolf => {
        bgImagesRefs.push(wolf.link_image)
    })
    
    let count = 0
    setInterval(() => {
        count = count === carouselLimit ? 0 : count
        carousel.style.backgroundImage = `url(${bgImagesRefs[count]})`
        count++
    }, 3000)
}

const updateHeader = () => { 
    this.scrollY > 200 ? header.style.padding = "5px 0" : null
    this.scrollY === 0 ? header.style.padding = "20px 0" : null
}

window.addEventListener("scroll", updateHeader , false)

const main = async () => {
    wolves = await fetchWolves()
    loadWolvesExamples(wolves)
    initialCarousel(wolves, 10)
}

main()