let body = document.querySelector('.cards')
let btn = document.querySelector('.btn')
let popup = document.querySelector('.popup')
let close = document.querySelector('.close')
let btn_add = document.querySelector('.btn_add')

const questions = [
    {
        id: 1,
        question: `New York qayerda joylashgan?`,
        answers: [`AQSH`, `Rassiya`, `Germaniya`, `Qozog'iston`],
        correct: `AQSH`
    },

    {
        id: 2,
        question: `Rossiyaning poytahti qayer?`,
        answers: [`Berlin`, `Canada`, `London`, `Moskva`],
        correct: `Moskva`
    },
    {
        id: 3,
        question: `AQSH ni poytahti qayer?`,
        answers: [`Berlin`, `Vashington`, `London`, `Moskva`],
        correct: `Vashington`
    }
]

btn.addEventListener('click', () => {
    popup.style.display = 'flex'
})
close.addEventListener('click', () => {
    popup.style.display = 'none'
})

btn_add.addEventListener('click', (e) => {
    console.log()
    let question_inp = document.querySelector('.question_inp')
    let one = document.querySelector('.one')
    let two = document.querySelector('.two')
    let three = document.querySelector('.three')
    let four = document.querySelector('.four')
    let correct_answer = document.querySelector('.correct_answer')

    questions.push({
        id: Date(),
        question: question_inp.value,
        answers: [one.value, two.value, three.value, four.value],
        correct: correct_answer.value
    })
    renderTable()
})
const renderTable = () => {
    body.innerHTML = ''
    questions.forEach(e => {
        body.insertAdjacentHTML('beforeend', `
        <div class="card">
        <span class="number">Question: ${e.id}</span>
        <h2 class="question">${e.question}</h2>
        <ul class="answers">
            <li class="${e.correct === e.answers[0]}">${e.answers[0]}</li>
            <li class="${e.correct === e.answers[1]}">${e.answers[1]}</li>
            <li class="${e.correct === e.answers[2]}">${e.answers[2]}</li>
            <li class="${e.correct === e.answers[3]}">${e.answers[3]}</li>
        </ul>
            <p class="correctAnswer"></p>
            </div>
            `)
    })
}

renderTable()

let cards = document.querySelectorAll('.card');

cards.forEach((e, index) => {
    let answers = e.querySelectorAll('li')
    answers.forEach(element => {
        element.addEventListener('click', () => {
            console.log(index);
            let correctAnswer = e.querySelector('.correctAnswer')
            if (element.innerHTML === questions[index].correct) {
                element.style.color = 'blue'
                answers.forEach(x => {
                    x.style.pointerEvents = 'none'
                })
            } else {
                element.style.color = 'red'
                answers.forEach(x => {
                    x.style.pointerEvents = 'none'
                })

                answers.forEach(o => {
                    if (o.innerHTML === questions[index].correct) {
                        o.style.color = 'blue'
                    }
                })

                correctAnswer.innerHTML = `Tog'ri javob: ${questions[index].correct} edi`

            }
        })
    })
})
setTimeout(() => {
    let loader = document.querySelector('.loader_box')
    loader.style.height = 0
}, 1)

setTimeout(() => {
    let loader = document.querySelector('.loader_box')
    let add = document.querySelector('.btn_p')
    loader.style.display = "none"
    add.style.display = "block"
}, 2)
