function accordion() {
    let buttonText = document.getElementsByClassName('button')[0].textContent;
    let text = document.getElementById('extra');
    if (text.style.display === 'none') {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
    if (buttonText === 'More') {
        document.getElementsByClassName('button')[0].textContent = 'Less';
        
    } else {
        document.getElementsByClassName('button')[0].textContent = 'More';
        
    }
    console.log(buttonText);
}