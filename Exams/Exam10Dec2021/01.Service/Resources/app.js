window.addEventListener('load', solve);

function solve() {
    let button = document.querySelector('form button');
    button.addEventListener('click', sendForm);

    function sendForm(e) {
        e.preventDefault();

        let typeProduct = document.getElementById('type-product');
        let description = document.getElementById('description');
        let clientName = document.getElementById('client-name');
        let clientPhone = document.getElementById('client-phone');

        if (description.value === '' || clientName.value === ''
            || clientPhone.value === '') {
            return;
        }
        let receivedOrders = document.getElementById('received-orders');
        let divContainer = document.createElement('div');
        divContainer.classList.add('container');
        let headerProductType = document.createElement('h2');
        headerProductType.textContent = 'Product type for repair: ' + typeProduct.value;
        let headerClientInfo = document.createElement('h3');
        headerClientInfo.textContent = 'Client information: ' + clientName.value + ', ' + clientPhone.value;
        let headerDescription = document.createElement('h4');
        headerDescription.textContent = 'Description of the problem: ' + description.value;
        let buttonStart = document.createElement('button');
        buttonStart.classList.add('start-btn');
        buttonStart.textContent = 'Start repair';
        let buttonFinish = document.createElement('button');
        buttonFinish.classList.add('finish-btn');
        buttonFinish.disabled = true;
        buttonFinish.textContent = 'Finish repair';

        divContainer.appendChild(headerProductType);
        divContainer.appendChild(headerClientInfo);
        divContainer.appendChild(headerDescription);
        divContainer.appendChild(buttonStart);
        divContainer.appendChild(buttonFinish);
        receivedOrders.appendChild(divContainer);

        description.value = '';
        clientName.value = '';
        clientPhone.value = '';

        buttonStart.addEventListener('click', startRepair);
        function startRepair() {
            buttonStart.disabled = true;
            buttonFinish.disabled = false;

            buttonFinish.addEventListener('click', finishRepair);
            function finishRepair() {
                divContainer.remove();
                divContainer.removeChild(buttonStart);
                divContainer.removeChild(buttonFinish);
                let completedOrders = document.getElementById('completed-orders');
                completedOrders.appendChild(divContainer);
            }
        }

    }
    let buttonClear = document.querySelector('.clear-btn');
    buttonClear.addEventListener('click', clear);
    function clear() {
        let allDivContainers = Array.from(document.querySelectorAll('#completed-orders .container'));
        allDivContainers.forEach(c => c.remove());
    }
}