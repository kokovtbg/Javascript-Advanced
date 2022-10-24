function solve() {
 
 
 
  let tableBody = document.querySelector('table tbody');
  let buttonGenerate = document.querySelector('div div button');
  buttonGenerate.addEventListener('click', insertRows);
 
  let buttonBuy = document.querySelector('div div').children[5];
  buttonBuy.addEventListener('click', buy);
 
  let areaFinal = document.querySelector('div div').children[4];
 
  function insertRows() {
    let textarea = document.getElementsByTagName('textarea')[0].value;
    let array = JSON.parse(textarea);
    for (let element of array) {
      let row = document.createElement('tr');
 
      let dataImg = document.createElement('td');
      let img = document.createElement('img');
      img.setAttribute('src', element.img);
      dataImg.appendChild(img);
      row.appendChild(dataImg);
 
      let dataName = document.createElement('td');
      let paragraphName = document.createElement('p');
      paragraphName.textContent = element.name;
      dataName.appendChild(paragraphName);
      row.appendChild(dataName);
 
      let dataPrice = document.createElement('td');
      let paragraphPrice = document.createElement('p');
      paragraphPrice.textContent = element.price;
      dataPrice.appendChild(paragraphPrice);
      row.appendChild(dataPrice);
 
      let dataDecFactor = document.createElement('td');
      let paragraphDecFactor = document.createElement('p');
      paragraphDecFactor.textContent = element.decFactor;
      dataDecFactor.appendChild(paragraphDecFactor);
      row.appendChild(dataDecFactor);
 
      let dataInput = document.createElement('td');
      let inputCheckbox = document.createElement('input');
      inputCheckbox.setAttribute('type', 'checkbox');
      dataInput.appendChild(inputCheckbox);
      row.appendChild(dataInput);
 
      tableBody.appendChild(row);
    }
  }
 
  function buy() {
    areaFinal.value = '';
    let totalDecFactor = 0;
    let price = 0;
    let furniture = [];
    let rows = tableBody.children;
    for (let i = 0; i < rows.length; i++) {
      let dataInput = rows[i].children[4];
      let inputCheckbox = dataInput.children[0];
      if (inputCheckbox.checked) {
        totalDecFactor += Number(rows[i].children[3].children[0].textContent);
        price += Number(rows[i].children[2].children[0].textContent);
        furniture.push(rows[i].children[1].children[0].textContent);
      }
 
    }
    areaFinal.value += `Bought furniture: ${furniture.join(", ")}\n`;
    areaFinal.value += `Total price: ${price.toFixed(2)}\n`;
    areaFinal.value += `Average decoration factor: ${totalDecFactor / furniture.length}`;
  }

}

