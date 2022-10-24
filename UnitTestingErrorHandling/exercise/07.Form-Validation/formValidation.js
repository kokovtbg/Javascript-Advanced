function validate() {
    let isCompany = false;
    setEventHandlers();

    function setEventHandlers() {
        let button = document.getElementById('submit');
        button.addEventListener('click', e => {
            e.preventDefault();
            validateData();
        });

        let company = document.getElementById('company');
        company.addEventListener('change', function () {
            let companyInfo = document.getElementById('companyInfo');
            if (company.checked) {
                companyInfo.style.display = 'block';
                isCompany = true;
            } else {
                companyInfo.style.display = 'none';
                isCompany = false;
            }
        });
    }

    function validateData() {
        let allRight = true;
        let username = document.getElementById('username');
        let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
        manipulateFields(allRight, username, usernameRegex);

        let email = document.getElementById('email');
        let emailRegex = /^[^@.]+@[^@]*\.[^@]*$/;
        manipulateFields(allRight, email, emailRegex);

        let password = document.getElementById('password');
        let passwordRegex = /^\w{5,15}$/;
        manipulateFields(allRight, password, passwordRegex);

        let confirmPassword = document.getElementById('confirm-password');
        manipulateFields(allRight,confirmPassword, passwordRegex);

        if (!passwordRegex.test(password.value) 
        && passwordRegex.test(confirmPassword.value)) {
            confirmPassword.style.borderColor = 'red';
            allRight = false;
        } else if (passwordRegex.test(password.value) 
        && !passwordRegex.test(confirmPassword.value)) {
            password.style.borderColor = 'red';
            allRight = false;
        } else if (passwordRegex.test(password.value)
            && passwordRegex.test(confirmPassword.value)
            && password.value !== confirmPassword.value) {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            allRight = false;
        } else if (passwordRegex.test(password.value)
            && passwordRegex.test(confirmPassword.value)
            && password.value === confirmPassword.value) {
            password.style.borderBlockColor = '';
            confirmPassword.style.borderBlockColor = '';
        } 

        if (isCompany) {
            let companyNumber = document.getElementById('companyNumber');
            if (Number(companyNumber.value) < 1000
                || Number(companyNumber.value) > 9999) {
                companyNumber.style.borderColor = 'red';
                allRight = false;
            } else {
                companyNumber.style.borderColor = '';
            }
        }


        let divValid = document.getElementById('valid');
        if (allRight) {
            divValid.style.display = 'block';
        } else {
            divValid.style.display = 'none';
        }

        function manipulateFields(boolean, field, regex) {
            if (!regex.test(field.value)) {
                field.style.borderColor = 'red';
                boolean = false;
            } else {
                field.style.borderColor = '';
            }
        }
    }
}
