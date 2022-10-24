function solve(){
   let buttonCreate = document.querySelector('form button');
   buttonCreate.addEventListener('click', createPost);

   let author = document.getElementById('creator');
   let title = document.getElementById('title');
   let category = document.getElementById('category');
   let content = document.getElementById('content');

   let listArchive = document.querySelector('.archive-section ol');

   function createPost(e) {
      e.preventDefault();
      let section = document.querySelector('main section');
      
      let article = document.createElement('article');
      
      let headerTitle = document.createElement('h1');
      headerTitle.textContent = title.value;
      
      let paragraphCategory = document.createElement('p');
      paragraphCategory.textContent = 'Category: ';
      let strongCategory = document.createElement('strong');
      strongCategory.textContent = category.value;
      paragraphCategory.appendChild(strongCategory);

      let paragraphCreator = document.createElement('p');
      paragraphCreator.textContent = 'Creator: ';
      let strongCreator = document.createElement('strong');
      strongCreator.textContent = author.value;
      paragraphCreator.appendChild(strongCreator);

      let parragraphContent = document.createElement('p');
      parragraphContent.textContent = content.value;

      let divButtons = document.createElement('div');
      divButtons.classList.add('buttons');
      
      let buttonDelete = document.createElement('button');
      buttonDelete.classList.add('btn');
      buttonDelete.classList.add('delete');
      buttonDelete.textContent = 'Delete';

      let buttonArchive = document.createElement('button');
      buttonArchive.classList.add('btn');
      buttonArchive.classList.add('archive');
      buttonArchive.textContent = 'Archive';

      divButtons.appendChild(buttonDelete);
      divButtons.appendChild(buttonArchive);

      article.appendChild(headerTitle);
      article.appendChild(paragraphCategory);
      article.appendChild(paragraphCreator);
      article.appendChild(parragraphContent);
      article.appendChild(divButtons);

      section.appendChild(article);

      buttonArchive.addEventListener('click', archive);
      buttonDelete.addEventListener('click', deletePost);
   }

   function archive(e) {
      let titlePost = e.target.parentElement.parentElement.querySelector('h1'); 
      let item = document.createElement('li');
      item.textContent = titlePost.textContent;
      listArchive.appendChild(item);
      let sortedList = Array.from(listArchive.children)
      .sort((a, b) => a.textContent.localeCompare(b.textContent));
      listArchive.innerHTML = '';
      sortedList.forEach(e => listArchive.appendChild(e));
      e.target.parentElement.parentElement.remove();
   }

   function deletePost(e) {
      e.target.parentElement.parentElement.remove();
   }
}
