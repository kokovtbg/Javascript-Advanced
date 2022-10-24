window.addEventListener("load", solve);

function solve() {
  let buttonPublish = document.getElementById('publish-btn');
  buttonPublish.addEventListener('click', publish);

  function publish(e) {
    e.preventDefault();

    let title = document.getElementById('post-title');
    let category = document.getElementById('post-category');
    let content = document.getElementById('post-content');
    
    if (title.value === '' || category.value === '' || content.value === '') {
      return;
    }
    let listReview = document.getElementById('review-list');
    let listItem = document.createElement('li');
    listItem.setAttribute('class', 'rpost');
    
    let article = document.createElement('article');
    let header4Title = document.createElement('h4');
    header4Title.textContent = title.value;
    let parCategory = document.createElement('p');
    parCategory.textContent = 'Category: ' + category.value;
    let parContent = document.createElement('p');
    parContent.textContent = 'Content: ' + content.value;
    article.appendChild(header4Title);
    article.appendChild(parCategory);
    article.appendChild(parContent);

    let buttonEdit = document.createElement('button');
    buttonEdit.classList.add('action-btn');
    buttonEdit.classList.add('edit');
    buttonEdit.textContent = 'Edit';
    let buttonApprove = document.createElement('button');
    buttonApprove.classList.add('action-btn');
    buttonApprove.classList.add('approve');
    buttonApprove.textContent = 'Approve';

    listItem.appendChild(article); 
    listItem.appendChild(buttonApprove);
    listItem.appendChild(buttonEdit);
    listReview.appendChild(listItem);

    title.value = '';
    category.value = '';
    content.value = '';

    buttonEdit.addEventListener('click', editPost);
    function editPost() {
      listItem.remove();
      title.value = header4Title.textContent;
      category.value = parCategory.textContent.substring(10);
      content.value = parContent.textContent.substring(9);
    }

    let publishedPostsList = document.getElementById('published-list');
    buttonApprove.addEventListener('click', approvePost);
    function approvePost() {
      listItem.remove();
      listItem.removeChild(buttonApprove);
      listItem.removeChild(buttonEdit);
      publishedPostsList.appendChild(listItem);
    }

    let buttonClear = document.getElementById('clear-btn');
    buttonClear.addEventListener('click', clear);
    function clear() {
      publishedPostsList.innerHTML = '';
    }
  }
}
