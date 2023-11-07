console.log('Engineering Training')

const modalButton = document.getElementById('modalButton')

console.log(`modalButton ${modalButton.outerHTML}`)

modalButton.addEventListener('click', (e) => {
    console.log('clicked button!')
    modalContainer.classList.toggle('hidden')
})

const closeModalButton = document.getElementsByClassName('close-modal-button')

console.log('closeModalButton', closeModalButton)

closeModalButton[0].addEventListener('click', (e) => {
    console.log('clicked close modal button')
    const modalContainer = document.getElementById('modalContainer')
    modalContainer.classList.toggle('hidden')
})

const jiraLinks = ['https://totalwine.atlassian.net/browse/TT-2',
'https://totalwine.atlassian.net/browse/TT-16',
'https://totalwine.atlassian.net/browse/TT-17',
'https://totalwine.atlassian.net/browse/TT-18',
'https://totalwine.atlassian.net/browse/TT-19'
]

const jiraTitles = ['Create a public repository under your GitHub account',
'Create a new script file, and import it into index.html and add a console log',
'JavaScript: Variables',
'JavaScript: Event Listeners - Add Toggle Button Inside of Modal',
'JavaScript: Functions - Write a function to toggle hidden class on modal',
]

console.log('jiraTitles', jiraTitles)
console.log('jiraLinks', jiraLinks)
const jiraObject = {
    title: [],
    link: [],
}

const jiraObjectPrint = () => {
    jiraLinks.forEach((i) => jiraObject.link.push(i))
    jiraTitles.forEach((i) => jiraObject.title.push(i))

    console.log('jiraObject', jiraObject)
}

jiraObjectPrint()


const jiraObjectPrint2 = () => {
    const jiraObject2 = {
        title: '',
        link: '',
    }
    for (let i = 0; i < 6; i++) {
        jiraObject2.link = jiraLinks[i];
        jiraObject2.title= jiraTitles[i];

        console.log('jiraObject2', jiraObject)
    }
}

jiraObjectPrint2()