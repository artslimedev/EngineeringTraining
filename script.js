console.log('Engineering Training')

const modalButton = document.getElementById('modalButton')

console.log(`modalButton ${modalButton.outerHTML}`)

modalButton.addEventListener('click', (e) => {
    console.log('clicked button!')
})

const modalContainer = document.getElementById('modalContainer')

modalContainer.classList.toggle('hidden')

const closeModalButton = document.getElementsByClassName('close-modal-button')

console.log('closeModalButton', closeModalButton)