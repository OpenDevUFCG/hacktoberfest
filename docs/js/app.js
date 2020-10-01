let current_page = 1
const questions_per_page = 2
const itemTemplate = document.querySelector('.faq-template').cloneNode(true);

window.addEventListener('load', () => {
    setListenerFunctions()
    renderQuestionPage(current_page)
})

const setListenerFunctions = () => {
    const prevBtn = document.querySelector('.prev')
    const nextBtn = document.querySelector('.next')

    //prevBtn.addEventListener('click', prev)
    nextBtn.addEventListener('click', next)
}

const getNumPages = () => {
    return Math.ceil(questions.length/ questions_per_page)
}

const prev = () => {
    if(current_page > 1){
        current_page--;
        renderQuestionPage(current_page);
    } 
}

const next = () =>{
    if(current_page < getNumPages()){
        current_page++;
        renderQuestionPage(current_page);
    }
}

const renderQuestionPage = (page) => {
    const questionContainer = document.getElementById('faq-list');

    questionContainer.innerHTML = "";

    for(let i = (page-1) * questions_per_page; i < (page * questions_per_page); i++){
        if(questions[i]){

            const item = itemTemplate.cloneNode(true);
            const question = item.querySelector('.question');
            const answer = item.querySelector('.answer');
    
            question.innerHTML = questions[i].question;
            answer.innerHTML = questions[i].answer;
    
            questionContainer.appendChild(item);
        }
    }
}
