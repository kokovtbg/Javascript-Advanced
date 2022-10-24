function solve() {
    let buttonAdd = document.getElementById('add-worker');
    buttonAdd.addEventListener('click', addWorker);
    let sumSalary = 0;
    let sum = document.getElementById('sum');

    function addWorker(e) {
        e.preventDefault();
        let firstName = document.getElementById('fname');
        let lastName = document.getElementById('lname');
        let email = document.getElementById('email');
        let birth = document.getElementById('birth');
        let position = document.getElementById('position');
        let salary = document.getElementById('salary');
        
        if (firstName.value === '' || lastName.value === '' 
        || email.value === '' || birth.value === '' 
        || position.value === '' || salary.value === '') {
            return;
        }
        let tableBody = document.getElementById('tbody');
        let row = document.createElement('tr');
        
        let dataFirstName = document.createElement('td');
        dataFirstName.textContent = firstName.value;
        let dataLastName = document.createElement('td');
        dataLastName.textContent = lastName.value;
        let dataEmail = document.createElement('td');
        dataEmail.textContent = email.value;
        let dataBirth = document.createElement('td');
        dataBirth.textContent = birth.value;
        let dataPosition = document.createElement('td');
        dataPosition.textContent = position.value;
        let dataSalary = document.createElement('td');
        dataSalary.textContent = salary.value;
        
        let dataButtons = document.createElement('td');
        let buttonFired = document.createElement('button');
        buttonFired.classList.add('fired');
        buttonFired.textContent = 'Fired';
        let buttonEdit = document.createElement('button');
        buttonEdit.classList.add('edit');
        buttonEdit.textContent = 'Edit';
        dataButtons.appendChild(buttonFired);
        dataButtons.appendChild(buttonEdit);

        row.appendChild(dataFirstName);
        row.appendChild(dataLastName);
        row.appendChild(dataEmail);
        row.appendChild(dataBirth);
        row.appendChild(dataPosition);
        row.appendChild(dataSalary);
        row.appendChild(dataButtons);
        tableBody.appendChild(row);

        sumSalary += Number(salary.value);
        sum.textContent = sumSalary.toFixed(2);
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        birth.value = '';
        position.value = '';
        salary.value = '';

        buttonEdit.addEventListener('click', editWorker);
        function editWorker() {
            row.remove();
            firstName.value = dataFirstName.textContent;
            lastName.value = dataLastName.textContent;
            email.value = dataEmail.textContent;
            birth.value = dataBirth.textContent;
            position.value = dataPosition.textContent;
            salary.value = dataSalary.textContent;
            sumSalary -= Number(salary.value);
            sum.textContent = sumSalary.toFixed(2);
        }
        buttonFired.addEventListener('click', fireWorker);
        function fireWorker() {
            row.remove();
            sumSalary -= Number(dataSalary.textContent);
            sum.textContent = sumSalary.toFixed(2);
        }
    }
}
solve()