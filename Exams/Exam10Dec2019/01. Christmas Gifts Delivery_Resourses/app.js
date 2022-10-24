function solution() {
    let button = document.querySelector('button');
    button.addEventListener('click', addGift);

    function addGift() {
        let gift = document.querySelector('input');
        
        let listGifts = document.querySelectorAll('section')[1].querySelector('ul');
        let item = document.createElement('li');
        item.classList.add('gift');
        item.textContent = gift.value;
        
        let buttonSend = document.createElement('button');
        buttonSend.setAttribute('id', 'sendButton');
        buttonSend.textContent = 'Send';

        let buttonDiscard = document.createElement('button');
        buttonDiscard.setAttribute('id', 'discardButton');
        buttonDiscard.textContent = 'Discard';

        item.appendChild(buttonSend);
        item.appendChild(buttonDiscard);
        listGifts.appendChild(item);

        let sortedList = Array.from(listGifts.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent));
        listGifts.innerHTML = '';
        sortedList.forEach(e => listGifts.appendChild(e));

        gift.value = '';

        buttonSend.addEventListener('click', sendGift);
        buttonDiscard.addEventListener('click', discardGift);
    }

    function sendGift(e) {
        let item = e.target.parentElement;
        let buttons = Array.from(item.querySelectorAll('button'));
        buttons.forEach(b => b.remove());
        item.remove();
        let list = document.querySelectorAll('section')[2].querySelector('ul');
        list.appendChild(item);
        
    }

    function discardGift(e) {
        let item = e.target.parentElement;
        let buttons = Array.from(item.querySelectorAll('button'));
        buttons.forEach(b => b.remove());
        item.remove();
        let list = document.querySelectorAll('section')[3].querySelector('ul');
        list.appendChild(item);
        
    }
}