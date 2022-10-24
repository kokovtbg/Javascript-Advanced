function solution() {
    let buttonAdd = document.querySelector('.card button');
    buttonAdd.addEventListener('click', addGift);

    function addGift(e) {
        let giftName = e.target.parentElement.querySelector('input');
        let list = e.target.parentElement.parentElement.parentElement.children[1].querySelector('ul');
        
        let item = document.createElement('li');
        item.classList.add('gift');
        item.textContent = giftName.value;
        
        let buttonSend = document.createElement('button');
        buttonSend.setAttribute('id', 'sendButton');
        buttonSend.textContent = 'Send';
    
        let buttonDiscard = document.createElement('button');
        buttonDiscard.setAttribute('id', 'discardButton');
        buttonDiscard.textContent = 'Discard';
    
        item.appendChild(buttonSend);
        item.appendChild(buttonDiscard);
        list.appendChild(item);
    
        let sortedList = Array.from(list.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent));
        list.innerHTML = '';
        sortedList.forEach(e => list.appendChild(e));
        giftName.value = '';
    
        buttonSend.addEventListener('click', sendGift);
        buttonDiscard.addEventListener('click', discardGift);
    }
    
    function sendGift(e) {
        let item = e.target.parentElement;
        Array.from(item.querySelectorAll('button'))
            .forEach(e => e.remove());
        let listSent = document.querySelectorAll('.card')[2].querySelector('ul');
        listSent.appendChild(item);
    }
    
    function discardGift(e) {
        let item = e.target.parentElement;
        Array.from(item.querySelectorAll('button'))
            .forEach(e => e.remove());
        let listDiscard = document.querySelectorAll('.card')[3].querySelector('ul');
        listDiscard.appendChild(item);
    }
}

