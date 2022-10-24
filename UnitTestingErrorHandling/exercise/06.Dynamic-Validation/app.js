function validate() {
    let email = document.getElementById('email');
    email.addEventListener('change', validMail);

    function validMail() {
        let regex = /[a-z]+@[a-z]+\.[a-z]+/;
        if (!regex.test(email.value)) {
            email.classList.add('error');
            return;
        }
        email.classList.remove('error');
    }
}