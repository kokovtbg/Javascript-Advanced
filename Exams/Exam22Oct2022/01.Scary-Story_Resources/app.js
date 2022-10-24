window.addEventListener("load", solve);

function solve() {
  let formButton = document.getElementById('form-btn');
  formButton.addEventListener('click', publish);

  function publish(e) {
    e.preventDefault();

    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let age = document.getElementById('age');
    let title = document.getElementById('story-title');
    let genre = document.getElementById('genre');
    let story = document.getElementById('story');
    
    if(firstName.value === '' || lastName.value === '' 
    || age.value === '' || title.value === '' || story.value === '') {
      return;
    }

    let list = document.getElementById('preview-list');
    e.target.disabled = true;

    let item = document.createElement('li');
    item.classList.add('story-info');

    let article = document.createElement('article');
    let headerName = document.createElement('h4');
    headerName.textContent = 'Name: ' + firstName.value + ' ' + lastName.value;
    let parAge = document.createElement('p');
    parAge.textContent = 'Age: ' + age.value;
    let parTitle = document.createElement('p');
    parTitle.textContent = 'Title: ' + title.value;
    let parGenre = document.createElement('p');
    parGenre.textContent = 'Genre: ' + genre.value;
    let parStory = document.createElement('p');
    parStory.textContent = story.value;
    
    article.appendChild(headerName);
    article.appendChild(parAge);
    article.appendChild(parTitle);
    article.appendChild(parGenre);
    article.appendChild(parStory);

    item.appendChild(article);

    let buttonSave = document.createElement('button');
    buttonSave.classList.add('save-btn');
    buttonSave.textContent = 'Save Story';
    let buttonEdit = document.createElement('button');
    buttonEdit.classList.add('edit-btn');
    buttonEdit.textContent = 'Edit Story';
    let buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete-btn');
    buttonDelete.textContent = 'Delete Story';

    buttonSave.disabled = false;
    buttonEdit.disabled = false;
    buttonDelete.disabled = false;

    item.appendChild(buttonSave);
    item.appendChild(buttonEdit);
    item.appendChild(buttonDelete);

    list.appendChild(item);

    firstName.value = '';
    lastName.value = '';
    age.value = '';
    title.value = '';
    story.value = '';

    buttonEdit.addEventListener('click', editStory);
    buttonSave.addEventListener('click', saveStory);
    buttonDelete.addEventListener('click', deleteStory);
  }

  function editStory(e) {
    let buttons = Array.from(e.target.parentElement.querySelectorAll('button'));
    buttons.forEach(b => b.disabled = true);
    let item = e.target.parentElement;
    let headerNames = item.querySelector('h4');
    let firstName = headerNames.textContent.split(' ')[1];
    let lastName = headerNames.textContent.split(' ')[2];
    let pars = Array.from(item.querySelectorAll('p'));
    let age = pars[0].textContent.split(' ')[1];
    let title = pars[1].textContent.split(': ')[1];
    let genre = pars[2].textContent.split(' ')[1];
    let story = pars[3].textContent;

    let firstNameInput = document.getElementById('first-name');
    let lastNameInput = document.getElementById('last-name');
    let ageInput = document.getElementById('age');
    let titleInput = document.getElementById('story-title');
    let genreInput = document.getElementById('genre');
    let storyInput = document.getElementById('story');
  
    firstNameInput.value = firstName;
    lastNameInput.value = lastName;
    ageInput.value = age;
    titleInput.value = title;
    genreInput.value = genre;
    storyInput.value = story;

    item.remove();
    formButton.disabled = false;
  }
  
  function saveStory() {
    let mainDiv = document.getElementById('main');
    mainDiv.innerHTML = '';
    let header = document.createElement('h1');
    header.textContent = "Your scary story is saved!";
    mainDiv.appendChild(header);
  }

  function deleteStory(e) {
    let item = e.target.parentElement;
    item.remove();
    formButton.disabled = false;
  }
}
