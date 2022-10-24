window.addEventListener("load", solve);

function solve() {
  let buttonPublish = document.getElementById('publish');
  buttonPublish.addEventListener('click', publishFunc);
  let sum = 0;
  function publishFunc(e) {
    e.preventDefault();
    let make = document.getElementById('make');
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let fuel = document.getElementById('fuel');
    let originalCost = document.getElementById('original-cost');
    let sellingPrice = document.getElementById('selling-price');

    if (!make.value|| !model.value || !year.value 
    || !fuel.value || !originalCost.value || !sellingPrice.value) {
      return;
    }
    if (Number(sellingPrice.value) < Number(originalCost.value)) {
      return;
    }

    let tableBody = document.getElementById('table-body');
    let row = document.createElement('tr');
    row.setAttribute('class', 'row');
    let dataMake = document.createElement('td');
    dataMake.textContent = make.value;
    let dataModel = document.createElement('td');
    dataModel.textContent = model.value;
    let dataYear = document.createElement('td');
    dataYear.textContent = year.value;
    let dataFuel = document.createElement('td');
    dataFuel.textContent = fuel.value;
    let dataOriginalCost = document.createElement('td');
    dataOriginalCost.textContent = originalCost.value;
    let dataSellingPrice = document.createElement('td');
    dataSellingPrice.textContent = sellingPrice.value;

    let dataButtons = document.createElement('td');
    let buttonEdit = document.createElement('button');
    buttonEdit.classList.add('action-btn');
    buttonEdit.classList.add('edit');
    buttonEdit.textContent = 'Edit';
    let buttonSell = document.createElement('button');
    buttonSell.classList.add('action-btn');
    buttonSell.classList.add('sell');
    buttonSell.textContent = 'Sell';
    dataButtons.appendChild(buttonEdit);
    dataButtons.appendChild(buttonSell);

    row.appendChild(dataMake);
    row.appendChild(dataModel);
    row.appendChild(dataYear);
    row.appendChild(dataFuel);
    row.appendChild(dataOriginalCost);
    row.appendChild(dataSellingPrice);
    row.appendChild(dataButtons);
    tableBody.appendChild(row);

    make.value = '';
    model.value = '';
    year.value = '';
    fuel.value = '';
    originalCost.value = '';
    sellingPrice.value = '';

    buttonEdit.addEventListener('click', edit);
    function edit() {
      make.value = dataMake.textContent;
      model.value = dataModel.textContent;
      year.value = dataYear.textContent;
      fuel.value = dataFuel.textContent;
      originalCost.value = dataOriginalCost.textContent;
      sellingPrice.value = dataSellingPrice.textContent;
      row.remove();
    }

    buttonSell.addEventListener('click', sell);
    function sell() {
      row.remove();
      let listCars = document.getElementById('cars-list');
      let listItem = document.createElement('li');
      listItem.setAttribute('class', 'each-list');
      let spanMakeModel = document.createElement('span');
      spanMakeModel.textContent = dataMake.textContent + ' ' + dataModel.textContent;
      let spanYear = document.createElement('span');
      spanYear.textContent = dataYear.textContent;
      let spanDiffPrices = document.createElement('span');
      spanDiffPrices.textContent = Number(dataSellingPrice.textContent) 
      - Number(dataOriginalCost.textContent);
      listItem.appendChild(spanMakeModel);
      listItem.appendChild(spanYear);
      listItem.appendChild(spanDiffPrices);
      listCars.appendChild(listItem);

      sum += Number(spanDiffPrices.textContent);
      let profit = document.getElementById('profit');
      profit.textContent = sum.toFixed(2);
    }
  }

}
