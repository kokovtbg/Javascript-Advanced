window.addEventListener('load', solve);

function solve() {
    let buttonAdd = document.getElementById('add');
    buttonAdd.addEventListener('click', addFurniture);
    let total = 0;

    function addFurniture(e) {
        e.preventDefault();

        let model = document.getElementById('model');
        let year = document.getElementById('year');
        let description = document.getElementById('description');
        let price = document.getElementById('price');
        
        if (model.value === '' || year.value === '' 
        || description.value === '' || price.value === '') {
            return;
        }
        if (!Number(year.value) || !Number(price.value) 
        || Number(year.value) < 0 || Number(price.value) < 0) {
            return;
        }

        let furnitureList = document.getElementById('furniture-list');
        let rowInfo = document.createElement('tr');
        rowInfo.classList.add('info');
        let dataModel = document.createElement('td');
        dataModel.textContent = model.value;
        let dataPrice = document.createElement('td');
        dataPrice.textContent = Number(price.value).toFixed(2);
        let dataButtons = document.createElement('td');
        let buttonMoreInfo = document.createElement('button');
        buttonMoreInfo.classList.add('moreBtn');
        buttonMoreInfo.textContent = 'More Info';
        let buttonBuy = document.createElement('button');
        buttonBuy.classList.add('buyBtn');
        buttonBuy.textContent = 'Buy it';
        dataButtons.appendChild(buttonMoreInfo);
        dataButtons.appendChild(buttonBuy);

        rowInfo.appendChild(dataModel);
        rowInfo.appendChild(dataPrice);
        rowInfo.appendChild(dataButtons);
        furnitureList.appendChild(rowInfo);

        let rowMore = document.createElement('tr');
        rowMore.classList.add('hide');
        let dataYear = document.createElement('td');
        dataYear.textContent = 'Year: ' + year.value;
        let dataDescription = document.createElement('td');
        dataDescription.setAttribute('colspan', 3);
        dataDescription.textContent = 'Description: ' + description.value;
        rowMore.appendChild(dataYear);
        rowMore.appendChild(dataDescription);
        furnitureList.appendChild(rowMore);

        model.value = '';
        year.value = '';
        description.value = '';
        price.value = '';

        buttonMoreInfo.addEventListener('click', moreInfo);
        function moreInfo() {
            buttonMoreInfo.textContent = 'Less Info';
            rowMore.style.display = 'contents';
            buttonMoreInfo.addEventListener('click', lessInfo);
            function lessInfo() {
                buttonMoreInfo.textContent = 'More Info';
                rowMore.style.display = 'none';
            }
        }

        buttonBuy.addEventListener('click', buyFunc);
        function buyFunc() {
            furnitureList.removeChild(rowInfo);
            furnitureList.removeChild(rowMore);
            let totalPrice = document.querySelector('.total-price');
            total += Number(dataPrice.textContent);
            totalPrice.textContent = total.toFixed(2);
        }
    }
}
