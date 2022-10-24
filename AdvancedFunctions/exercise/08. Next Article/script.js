function getArticleGenerator(articles) {
    let contentDiv = document.getElementById('content');
    let count = 0;
    
    return function() {
        if (count < articles.length) {
            let articleEl = document.createElement('article');
            articleEl.textContent = articles[count];
            contentDiv.appendChild(articleEl);
        }
        count++;
    }
        
}
