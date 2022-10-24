function solve() {
    let sentenceArray = document.getElementById('input')
    .value.split('.').filter(p => p.length > 0);
    
    for (let i = 0; i < sentenceArray.length; i += 3) {
        let arr = [];
        for (let y = 0; y < 3; y++) {
            if (sentenceArray[i + y]) {
                arr.push(sentenceArray[i + y]);
            }
        }
        let paragraph = arr.join('. ') + '.';
        document.getElementById('output').innerHTML += `<p>${paragraph}</p>`;
    }
}