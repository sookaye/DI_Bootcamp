const button = getButton()
const shuffleButton = document.getElementById('shuffle')


button?.addEventListener('click', handleclick)
shuffleButton?.addEventListener('click', shuffleStory)

function getFormValues() {
    const noun = document.getElementById('noun').value
    const adjective = document.getElementById('adjective').value
    const person = document.getElementById('person').value
    const verb = document.getElementById('verb').value
    const place = document.getElementById('place').value
    return {
        noun,
        adjective,
        person,
        verb,
        place
    }
}
function handleclick(e) {
    shuffleStory(e, true)
    }
function shuffleStory(e, isFirstory = false) {
    e.preventDefault()
    const {noun, adjective, person, verb, place} = getFormValues()
    if ([noun, adjective, person, verb, place].includes('')) return

    const randomNumber = getRandomNumber()
    const stories = [writeStory(), writeStory2(), writeStory3()]
    const story = isFirstory ? stories[0] : stories[randomNumber]
    appendStoryToPage(story)
}

function getRandomNumber() {
    return Math.floor(Math.random() * 3)
}
function appendStoryToPage(story) {
    const paragraph = document.getElementById('story')
    const span = document.createElement('span')
    span.innerText = story
    paragraph.textContent = ''
    paragraph?.appendChild(span)
}

function writeStory() {
    const {noun, adjective, person, verb, place} = getFormValues()
    return `I can get ${noun}, the best ${adjective}'s ${person} with an ${verb} to your nearest ${place}`
}
function writeStory2() {
    const {noun, adjective, person, verb, place} = getFormValues()
    return `I can't get ${noun}, the worst ${adjective}'s ${person} with some ${verb} to your farest ${place}`
}

function writeStory3() {
    const {noun, adjective, person, verb, place} = getFormValues()
    return `I will get ${noun}, the same ${adjective}'s ${person} with little ${verb} to your best ${place}`
}

function getButton() {
    return document.getElementById('lib-button')
}

