function solve() {
    let buttonAdd = document.getElementById('add');
    buttonAdd.addEventListener('click', e => {
        e.preventDefault();

        let task = document.getElementById('task');
        let description = document.getElementById('description');
        let date = document.getElementById('date');

        if (task.value === '' || description.value === '' || date.value === '') {
            return;
        }
        let divArticle = document.getElementsByTagName('section')[1].children[1];
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = task.value;
        let paragraphDescription = document.createElement('p');
        paragraphDescription.textContent = 'Description: ' + description.value;
        let parDate = document.createElement('p');
        parDate.textContent = 'Due Date: ' + date.value;
        let divButtons = document.createElement('div');
        divButtons.setAttribute('class', 'flex');
        let buttonStart = document.createElement('button');
        buttonStart.setAttribute('class', 'green');
        buttonStart.textContent = 'Start';
        let buttonDelete = document.createElement('button');
        buttonDelete.setAttribute('class', 'red');
        buttonDelete.textContent = 'Delete';
        divButtons.appendChild(buttonStart);
        divButtons.appendChild(buttonDelete);
        article.appendChild(h3);
        article.appendChild(paragraphDescription);
        article.appendChild(parDate);
        article.appendChild(divButtons);
        divArticle.appendChild(article);

        buttonStart.addEventListener('click', progress);
        function progress() {
            divArticle.removeChild(article);
            let divInProgress = document.getElementById('in-progress');
            article.removeChild(divButtons);
            let divButtonsInProgress = document.createElement('div');
            divButtonsInProgress.setAttribute('class', 'flex');
            let buttonDeleteInProg = document.createElement('button');
            buttonDeleteInProg.setAttribute('class', 'red');
            buttonDeleteInProg.textContent = 'Delete';
            let buttonFinish = document.createElement('button');
            buttonFinish.setAttribute('class', 'orange');
            buttonFinish.textContent = 'Finish';
            divButtonsInProgress.appendChild(buttonDeleteInProg);
            divButtonsInProgress.appendChild(buttonFinish);
            article.appendChild(divButtonsInProgress);
            divInProgress.appendChild(article);

            buttonDeleteInProg.addEventListener('click', deleteInProg);
            function deleteInProg() {
                divInProgress.removeChild(article);
            }
            buttonFinish.addEventListener('click', finish);
            function finish() {
                divInProgress.removeChild(article);
                article.removeChild(divButtonsInProgress);
                let divFinish = document.getElementsByTagName('section')[3].children[1];
                divFinish.appendChild(article);
            }
        }
        buttonDelete.addEventListener('click', deleteFunc);
        function deleteFunc() {
            divArticle.removeChild(article);
        }
    });
}