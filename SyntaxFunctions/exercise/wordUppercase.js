function words(text) {

    let regex = /, ?| |: ?|\. ?|; ?| ?- ?/;
    let regexReplace = /!|\?|\.\.\.| ?{|} ?| ?\[|\] ?| ?\(|\) ?/;
    
    let array = text.replace(regexReplace, "").toUpperCase().split(regex).join(", ");
    console.log(array);
}

words('Hi, how are... you?');
words("FUNCTIONS IN; JS CAN BE NESTED I.E. HOLD OTHER FUNCTIONS...");
words("How how are you? I am fine, thanks!");