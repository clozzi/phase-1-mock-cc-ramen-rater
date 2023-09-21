document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/ramens')
        .then((res) => res.json())
        .then(ramens => ramens.forEach(ramen => {
            displayRamen(ramen)
        }))
})

function displayRamen(ramen) {
    console.log(ramen['restaurant'])
    let ramenImg = document.createElement('img')
    let ramenMenu = document.getElementById('ramen-menu')
    ramenImg.src = ramen['image']
    ramenImg.id = ramen['name']
    ramenImg.alt = ramen['restaurant']
    ramenImg.addEventListener('click', displayClicked)
    ramenMenu.append(ramenImg)
}

function displayClicked(e) {
    console.log(e.target.src)
    let ramenFocusImg = document.querySelector('.detail-image')
    ramenFocusImg.src = e.target.src
    let ramenName = document.querySelector('.name')
    ramenName.textContent = e.target.id
    let ramenRest = document.querySelector('.restaurant')
    ramenRest.textContent = e.target.alt
}