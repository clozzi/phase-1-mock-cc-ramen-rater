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
    ramenImg.addEventListener('click', (e) => {
            let ramenFocusImg = document.querySelector('.detail-image')
            ramenFocusImg.src = ramen['image']
            let ramenName = document.querySelector('.name')
            ramenName.textContent = ramen['name']
            let ramenRest = document.querySelector('.restaurant')
            ramenRest.textContent = ramen['restaurant']
            let rating = document.getElementById('rating-display')
            rating.textContent = ramen['rating']
            let comment = document.getElementById('comment-display')
            comment.textContent = ramen['comment']
        })
    ramenMenu.append(ramenImg)
}