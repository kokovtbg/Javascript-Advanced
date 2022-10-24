
function solve() {
    let contacts = [
        new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
        new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
        new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
      ];
      contacts.forEach(c => c.render('main'));
      
      // After 1 second, change the online status to true
      setTimeout(() => contacts[1].online = true, 2000);
}
class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }
    render(id) {
        let element = document.getElementById(id);
        let articleContact = document.createElement('article');
        let divNames = document.createElement('div');
        divNames.setAttribute('class', 'title');
        divNames.textContent = `${this.firstName} ${this.lastName}`;
        let button = document.createElement('button');
        button.textContent = '\u2139';
        divNames.appendChild(button);
        articleContact.appendChild(divNames);
        element.appendChild(articleContact);
        
        let divMore = document.createElement('div');
        divMore.setAttribute('class', 'info');
        let spanPhone = document.createElement('span');
        spanPhone.textContent = '\u260E ' + `${this.phone}`;
        let spanMail = document.createElement('span');
        spanMail.textContent = '\u2709 ' + `${this.email}`;
        divMore.appendChild(spanPhone);
        divMore.appendChild(spanMail);
        divMore.style.display = 'none';
        articleContact.appendChild(divMore);
        
        button.addEventListener('click', () => {
            let divMore = button.parentElement.parentElement.querySelector('.info');
            divMore.style.display = 'block';
        });
    }
    /**
     * @param {boolean} value
     */
    set online(value) {
        this._online = value;
        let allDivNames = Array.from(document.querySelectorAll('.title'));
        allDivNames
        .filter(e => e.textContent.includes(`${this.firstName} ${this.lastName}`))
        .forEach(e => {
            value === true ? e.classList.add('online') : e.classList.remove('online');

        });
        
    }
    get online() {
        return this._online;
    }
}