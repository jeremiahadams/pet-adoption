const template = document.querySelector('#pet-card-template')
const wrapper = document.createDocumentFragment()

async function main() {
    const weatherPromise = await fetch('https://api.weather.gov/gridpoints/MFL/110,50/forecast')
    const weatherData = await weatherPromise.json()
    const ourTempature = weatherData.properties.periods[0].temperature
    document.querySelector('#tempature-output').textContent = ourTempature
}

main()

async function petsArea() {
    const petsPromise = await fetch('https://learnwebcode.github.io/bootcamp-pet-data/pets.json')
    const petsData = await petsPromise.json()
    petsData.forEach((pet) => {
        const clone = template.content.cloneNode(true)
        clone.querySelector('h3').textContent = pet.name
        clone.querySelector('.pet-description').textContent = pet.description
        clone.querySelector('.pet-age').textContent = createAgeText(pet.birthYear)
        clone.querySelector('.pet-card-photo img').src = pet.photo
        clone.querySelector('.pet-card-photo img').alt = `A photo of ${pet.name} the ${pet.species}`
        wrapper.appendChild(clone)
    })
    document.querySelector('.list-of-pets').appendChild(wrapper)
}

petsArea()

function createAgeText(birthYear) {
    const currentYear = new Date().getFullYear()
    const age = currentYear - birthYear
    if (age == 1) {
        return '1 year old'
    } else if (age == 0) {
        return 'Baby, less than a year old'
    } else {
        return `${age} years old`
    }
}