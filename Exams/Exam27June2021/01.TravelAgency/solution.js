window.addEventListener('load', solution);

function solution() {
  let buttonSubmit = document.getElementById('submitBTN');
  buttonSubmit.addEventListener('click', submitFunc);
  let buttonEdit = document.getElementById('editBTN');
  buttonEdit.addEventListener('click', edit);
  let buttonContinue = document.getElementById('continueBTN');
  buttonContinue.addEventListener('click', endReservation);

  let listPreview = document.getElementById('infoPreview');

  let fullName = document.getElementById('fname');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let address = document.getElementById('address');
  let code = document.getElementById('code');

  let itemFullName;
  let itemEmail;
  let itemPhone;
  let itemAddress;
  let itemCode;

  function createElement(field) {
    let text = '';
    switch(field) {
      case fullName:
        text = 'Full Name: ';
        break;
      case email:
        text = 'Email: ';
        break;
      case phone:
        text = 'Phone Number: ';
        break;
      case address:
        text = 'Address: ';
        break;
      case code:
        text = 'Postal Code: ';
        break;
    }
    let item = document.createElement('li');
    item.textContent = text + field.value;
    return item;
  }

  function submitFunc() {
  
    if (fullName.value === '' || email.value === '') {
      return;
    }

    itemFullName = createElement(fullName);
    itemEmail = createElement(email);
    itemPhone = createElement(phone);
    itemAddress =createElement(address);
    itemCode = createElement(code);

    listPreview.appendChild(itemFullName);
    listPreview.appendChild(itemEmail);
    listPreview.appendChild(itemPhone);
    listPreview.appendChild(itemAddress);
    listPreview.appendChild(itemCode);

    fullName.value = '';
    email.value = '';
    phone.value = '';
    address.value = '';
    code.value = '';

    buttonSubmit.disabled = true;
    buttonEdit.disabled = false;
    buttonContinue.disabled = false;
  }

  function edit() {
    Array.from(listPreview.children).forEach(e => e.remove());
    fullName.value = itemFullName.textContent.split(': ')[1];
    email.value = itemEmail.textContent.split(': ')[1];
    phone.value = itemPhone.textContent.split(': ')[1];
    address.value = itemAddress.textContent.split(': ')[1];
    code.value = itemCode.textContent.split(': ')[1];
    buttonEdit.disabled = true;
    buttonContinue.disabled = true;
    buttonSubmit.disabled = false;
  }

  function endReservation() {
    let divBlock = document.getElementById('block');
    divBlock.innerHTML = '';
    let header = document.createElement('h3');
    header.textContent = "Thank you for your reservation!";
    divBlock.appendChild(header);
  }
}
