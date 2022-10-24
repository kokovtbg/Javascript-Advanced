function solve() {
    let buttonAdd = document.getElementById('add');
    buttonAdd.addEventListener('click', addTask);

    let sectionOpen = document.querySelectorAll('section')[1];
    let divInProgress = document.getElementById('in-progress');
    let divComplete = document.querySelectorAll('section')[3].querySelectorAll('div')[1];

    function addTask(e) {
        e.preventDefault();

        let task = document.getElementById('task');
        let description = document.getElementById('description');
        let date = document.getElementById('date');

        if (task.value === '' || description.value === '' 
        || date.value === '') {
            return;
        }
        
        let divSectionOpen = sectionOpen.querySelectorAll('div')[1];
        
        let article = document.createElement('article');
        
        let headerTask = document.createElement('h3');
        headerTask.textContent = task.value;

        let paragraphDescription = document.createElement('p');
        paragraphDescription.textContent = 'Description: ' + description.value;

        let paragraphDate = document.createElement('p');
        paragraphDate.textContent = 'Due Date: ' + date.value;

        let divButtons = document.createElement('div');
        divButtons.classList.add('flex');
        let buttonStart = document.createElement('button');
        buttonStart.classList.add('green');
        buttonStart.textContent = 'Start';
        let buttonDelete = document.createElement('button');
        buttonDelete.classList.add('red');
        buttonDelete.textContent = 'Delete';
        divButtons.appendChild(buttonStart);
        divButtons.appendChild(buttonDelete);

        article.appendChild(headerTask);
        article.appendChild(paragraphDescription);
        article.appendChild(paragraphDate);
        article.appendChild(divButtons);

        divSectionOpen.appendChild(article);

        buttonStart.addEventListener('click', startTask);
        buttonDelete.addEventListener('click', deleteTask);
    }

    function startTask(e) {
        let buttonFinish = document.createElement('button');
        buttonFinish.classList.add('orange')
        buttonFinish.textContent = 'Finish';
        e.target.parentElement.appendChild(buttonFinish);
        let article = e.target.parentElement.parentElement;
        e.target.remove();
        divInProgress.appendChild(article);

        buttonFinish.addEventListener('click', finishTask);
    }

    function deleteTask(e) {
        e.target.parentElement.parentElement.remove();
    }

    function finishTask(e) {
        let article = e.target.parentElement.parentElement;
        e.target.parentElement.remove();
        divComplete.appendChild(article);
    }
}