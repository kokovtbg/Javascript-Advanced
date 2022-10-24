function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(b => b.addEventListener('click', showMore));

    function showMore(event) {
        let currButton = event.currentTarget;
        let id = currButton.parentNode.children[9].getAttribute('id');
        
        let checkedUnlock = currButton.parentNode.children[4].checked;
        if (checkedUnlock) {
            document.querySelector('div#' + id).style.display = 'inline';
            currButton.textContent = 'Hide it';

            currButton.addEventListener('click', hide);
        }
    }

    function hide(event) {
        let currButton = event.currentTarget;
        let id = currButton.parentNode.children[9].getAttribute('id');
        
        let checkedUnlock = currButton.parentNode.children[4].checked;
        if (checkedUnlock) {
            document.querySelector('div#' + id).style.display = 'none';
            currButton.textContent = 'Show more';

            currButton.addEventListener('click', showMore);
        }
    }
}