function solve() {
  let count = 0;
  let countTrueAnswers = 0;
  let sections = document.getElementsByTagName('section');
  let paragraphs = Array.from(document.querySelectorAll('section ul li div p'));
  let finalResult = document.querySelector('ul#results li h1');
  let ulResults = document.getElementById('results');
  
  paragraphs.forEach(e => e.addEventListener('click', check));

  function check(event) {
    count++;
    if (event.target.textContent === 'onclick' 
    || event.target.textContent === 'JSON.stringify()' 
    || event.target.textContent === 'A programming API for HTML and XML documents') {
      countTrueAnswers++;
    }
    event.target.parentElement.parentElement.parentElement.parentElement
    .style.display = 'none';
    if (sections[count]) {
      sections[count].style.display = 'block';
    }
    
    if (countTrueAnswers === 3 && count === 3) {
      finalResult.textContent = "You are recognized as top JavaScript fan!";
      ulResults.style.display = 'block';
    } else if (count === 3) {
      finalResult.textContent = `You have ${countTrueAnswers} right answers`;
      ulResults.style.display = 'block';
    }
  }
}
