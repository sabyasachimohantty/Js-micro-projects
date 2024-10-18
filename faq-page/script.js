const questions = document.querySelectorAll(".qna")

questions.forEach((question) => {
    const btn = question.querySelector('.expand-button')
    const contracBtn = question.querySelector('.contract-button')
    const answer = question.querySelector('.answer')
    btn.onclick = function() {
        questions.forEach((item) => {
            const ans = item.querySelector(".answer")
            minusBtn = item.querySelector('.contract-button')
            plusBtn = item.querySelector('.expand-button')
            if (ans !== answer) {   
                ans.classList.remove("show")
                plusBtn.classList.add('show')
                minusBtn.classList.remove('show')
            }
        })
        contracBtn.classList.toggle('show')
        btn.classList.toggle('show')
        answer.classList.toggle("show")
    }
})
