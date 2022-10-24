function solve() {

    let buttonReset = document.getElementById('reset');
    buttonReset.addEventListener('click', reset);
    function reset() {
        let recipientName = document.getElementById('recipientName');
        let title = document.getElementById('title');
        let message = document.getElementById('message');
        recipientName.value = '';
        title.value = '';
        message.value = '';
    }

    let buttonAdd = document.getElementById('add');
    buttonAdd.addEventListener('click', addFunc);
    function addFunc(e) {
        e.preventDefault();

        let recipientName = document.getElementById('recipientName');
        let title = document.getElementById('title');
        let message = document.getElementById('message');

        if (recipientName.value === '' || title.value === '' || message.value === '') {
            return;
        }

        let listMails = document.getElementById('list');
        let listItem = document.createElement('li');
        let headerTitle = document.createElement('h4');
        headerTitle.textContent = 'Title: ' + title.value;
        let headerRecipient = document.createElement('h4');
        headerRecipient.textContent = 'Recipient Name: ' + recipientName.value;
        let spanMessage = document.createElement('span');
        spanMessage.textContent = message.value;

        let divButtons = document.createElement('div');
        divButtons.setAttribute('id', 'list-action');
        let buttonSend = document.createElement('button');
        buttonSend.setAttribute('type', 'submit');
        buttonSend.setAttribute('id', 'send');
        buttonSend.textContent = 'Send';
        let buttonDelete = document.createElement('button');
        buttonDelete.setAttribute('type', 'submit');
        buttonDelete.setAttribute('id', 'delete');
        buttonDelete.textContent = 'Delete';
        divButtons.appendChild(buttonSend);
        divButtons.appendChild(buttonDelete);

        listItem.appendChild(headerTitle);
        listItem.appendChild(headerRecipient);
        listItem.appendChild(spanMessage);
        listItem.appendChild(divButtons);
        listMails.appendChild(listItem);

        recipientName.value = '';
        title.value = '';
        message.value = '';

        let listDelete = document.querySelector('ul.delete-list');

        buttonSend.addEventListener('click', sendMes);
        function sendMes() {
            listItem.remove();
            let listSent = document.querySelector('ul.sent-list');
            let listItemSent = document.createElement('li');
            let spanRecipient = document.createElement('span');
            spanRecipient.textContent = 'To: ' + headerRecipient.textContent.substring(16);
            let spanTitle = document.createElement('span');
            spanTitle.textContent = headerTitle.textContent;
            let divButtonDelete = document.createElement('div');
            divButtonDelete.classList.add('btn');
            let buttonDeleteSent = document.createElement('button');
            buttonDeleteSent.setAttribute('type', 'submit');
            buttonDeleteSent.classList.add('delete')
            buttonDeleteSent.textContent = 'Delete';

            divButtonDelete.appendChild(buttonDeleteSent);
            listItemSent.appendChild(spanRecipient);
            listItemSent.appendChild(spanTitle);
            listItemSent.appendChild(divButtonDelete);
            listSent.appendChild(listItemSent);

            buttonDeleteSent.addEventListener('click', deleteMesSent);
            function deleteMesSent() {
                listItemSent.remove();
                let listItemDeleteSent = document.createElement('li');
                listItemDeleteSent.appendChild(spanRecipient);
                listItemDeleteSent.appendChild(spanTitle);
                listDelete.appendChild(listItemDeleteSent);
            }
        }

        buttonDelete.addEventListener('click', deleteMes);
        function deleteMes() {
            listItem.remove();
            let spanRecipientDelete = document.createElement('span');
            spanRecipientDelete.textContent = 'To: ' + headerRecipient
            .textContent.substring(16);
            let spanTitleDelete = document.createElement('span');
            spanTitleDelete.textContent = headerTitle.textContent;
            
            let listItemDelete = document.createElement('li');
            listItemDelete.appendChild(spanRecipientDelete);
            listItemDelete.appendChild(spanTitleDelete);
            listDelete.appendChild(listItemDelete);
        }
    }
}
solve()