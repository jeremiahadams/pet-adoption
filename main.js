async function main() {
    const weatherPromise = await fetch('https://api.weather.gov/gridpoints/MFL/110,50/forecast')
    const weatherData = await weatherPromise.json()
    const ourTempature = weatherData.properties.periods[0].temperature
    document.querySelector('#tempature-output').textContent = ourTempature
}

main()