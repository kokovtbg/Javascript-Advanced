function encodeAndDecodeMessages() {
   let textToEncodeArea = document.querySelector('div main div textarea');
   let buttonEncode = document.querySelector('div main div button');
   let textToDecodeArea = document.querySelectorAll('div main div textarea')[1];
   let buttonDecode = document.querySelectorAll('div main div button')[1];
   buttonEncode.addEventListener('click', encode);
   buttonDecode.addEventListener('click', decode);

   function encode() {
    let encodedText = '';
    let textToEncode = textToEncodeArea.value;
    for (let i = 0; i < textToEncode.length; i++) {
        let letterAsNumber = textToEncode.charCodeAt(i);
        letterAsNumber++;
        encodedText += String.fromCharCode(letterAsNumber); 
    }
    textToDecodeArea.value = encodedText;
    textToEncodeArea.value = '';
   }

   function decode() {
    let decodedText = '';
    let textToDecode = textToDecodeArea.value;
    for (let i = 0; i < textToDecode.length; i++) {
        let letterAsNumber = textToDecode.charCodeAt(i);
        letterAsNumber--;
        decodedText += String.fromCharCode(letterAsNumber);
    }
    textToDecodeArea.value = decodedText;
   }
   
}