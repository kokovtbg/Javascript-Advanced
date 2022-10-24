function focused() {
    let insideDivs = Array.from(document.querySelector('div').children);
    for (let divElement of insideDivs) {
        divElement.children[1].addEventListener('focus', focusFunction);
        divElement.children[1].addEventListener('blur', blurFunction);
        divElement.parentNode
    }

    function focusFunction(event) {
        event.currentTarget.parentNode.classList.add('focused');
    }

    function blurFunction(event) {
        event.currentTarget.parentNode.classList.remove('focused');
    }
}