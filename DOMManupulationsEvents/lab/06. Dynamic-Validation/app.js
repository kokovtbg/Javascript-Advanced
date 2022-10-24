function validate() {
    let inputField = document.querySelector('input');
    inputField.addEventListener('change', changeFunction);

    function changeFunction(event) {
        let inputField = event.currentTarget;
        let regex = /[a-z]+@[a-z]+\.[a-z]+/g;
        if (!regex.test(inputField.value)) {
            inputField.classList.add('error');
        } else {
            inputField.classList.remove('error');
        }
    }
}