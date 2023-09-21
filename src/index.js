document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/ramens')
        .then((res) => res.json())
        .then(ramens => ramens.forEach(ramen => {
            displayRamen(ramen)
        }))
})

let ramenMenu = document.getElementById('ramen-menu')

function displayRamen(ramen) {
    console.log(ramen['restaurant'])
    let ramenImg = document.createElement('img')
    ramenImg.src = ramen['image']
    ramenImg.id = ramen['name']
    ramenImg.alt = ramen['restaurant']
    ramenImg.addEventListener('click', () => {
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

document.addEventListener('submit', (e) => {
    let nameInput = document.getElementById('new-name').value
    let newName = document.createElement('p')
    newName.textContent = nameInput
    newName.hidden = true
    ramenMenu.append(newName)
    let restInput = document.getElementById('new-restaurant').value
    let newRest = document.createElement('p')
    newRest.textContent = restInput
    newRest.hidden = true
    ramenMenu.append(newRest)
    let imgInput = document.getElementById('new-image').value
    let newImg = document.createElement('img')
    newImg.src = imgInput
    ramenMenu.append(newImg)
    let ratingInput = document.getElementById('new-rating').value
    let newRating = document.createElement('p')
    newRating.textContent = ratingInput
    newRating.hidden = true
    ramenMenu.append(newRating)
    let commentInput = document.getElementById('new-comment').value
    let newComment = document.createElement('p')
    newComment.textContent = commentInput
    newComment.hidden = true
    ramenMenu.append(newComment)

    newImg.addEventListener('click', () => {
        let ramenFocusImg = document.querySelector('.detail-image')
        ramenFocusImg.src = newImg.src
        let ramenName = document.querySelector('.name')
        ramenName.textContent = newName.textContent
        let ramenRest = document.querySelector('.restaurant')
        ramenRest.textContent = newRest.textContent
        let rating = document.getElementById('rating-display')
        rating.textContent = newRating.textContent
        let comment = document.getElementById('comment-display')
        comment.textContent = newComment.textContent
    })

    e.preventDefault()
})