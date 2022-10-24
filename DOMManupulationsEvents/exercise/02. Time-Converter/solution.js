function attachEventsListeners() {
    let buttons = Array.from(document.querySelectorAll("input[type = 'button']"));
    let inputTextFields = document.querySelectorAll("input[type = 'text']");
    
    buttons.forEach(b => b.addEventListener('click', convert));

    function convert(event) {
        let currentButton = event.currentTarget;
        let buttonId = currentButton.getAttribute('id');
        
        let inputValue;
        switch (buttonId) {
            case "daysBtn":
                inputValue = Number(inputTextFields[0].value);
                inputTextFields[1].value = inputValue * 24;
                inputTextFields[2].value = inputValue * 24 * 60;
                inputTextFields[3].value = inputValue * 24 * 60 * 60;
                break;
            case "hoursBtn":
                inputValue = Number(inputTextFields[1].value);
                inputTextFields[0].value = inputValue / 24;
                inputTextFields[2].value = inputValue * 60;
                inputTextFields[3].value = inputValue * 60 * 60;
                break;
            case "minutesBtn":
                inputValue = Number(inputTextFields[2].value);
                inputTextFields[0].value = inputValue / 60 / 24;
                inputTextFields[1].value = inputValue / 60;
                inputTextFields[3].value = inputValue * 60;
                break;
            case "secondsBtn":
                inputValue = Number(inputTextFields[3].value);
                inputTextFields[0].value = inputValue / 60 / 60 / 24;
                inputTextFields[1].value = inputValue / 60 / 60;
                inputTextFields[2].value = inputValue / 60;
                break;
        }
    }
}