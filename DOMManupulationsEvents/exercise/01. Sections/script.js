function create(words) {
   let contentDiv = document.getElementById('content');
   for (let element of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = element;
      div.appendChild(p);
      p.style.display = 'none';
      div.addEventListener('click', showParagraph);
      contentDiv.appendChild(div);
   }
   
   function showParagraph(event) {
      event.currentTarget.children[0].style.display = '';
   }
}