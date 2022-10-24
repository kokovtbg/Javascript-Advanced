function solve() {
    let buttonOnScreen = document.querySelector('form div button');
    buttonOnScreen.addEventListener('click', e => {
        e.preventDefault();

        let inputAll = document.querySelectorAll('input');
        let nameMovie = inputAll[0];
        let hall = inputAll[1];
        let ticketPrice = inputAll[2];
        if (nameMovie.value === '' || hall.value === '' 
        || ticketPrice.value === '' || !Number(ticketPrice.value)) {
            return;
        }

        let li = document.createElement('li');
        let span = document.createElement('span');
        span.textContent = nameMovie.value;
        let strong = document.createElement('strong');
        strong.textContent = `Hall: ${hall.value}`;
        let div = document.createElement('div');
        let strongPrice = document.createElement('strong');
        strongPrice.textContent = Number(ticketPrice.value).toFixed(2);
        let input = document.createElement('input');
        input.setAttribute('placeholder', 'Tickets Sold');
        let buttonArchive = document.createElement('button');
        buttonArchive.textContent = 'Archive';
        div.appendChild(strongPrice);
        div.appendChild(input);
        div.appendChild(buttonArchive);
        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(div);
        let listMovies = document.querySelector('#movies ul');
        listMovies.appendChild(li);
        nameMovie.value = '';
        hall.value = '';
        ticketPrice.value = '';

        buttonArchive.addEventListener('click', archiveMovie);
        function archiveMovie() {
            if (!Number(input.value) && input.value !== '0') {
                return;
            }
            listMovies.removeChild(li);
            let listArchive = document.querySelector('#archive ul');
            let listItemToArchive = document.createElement('li');
            let spanArchive = document.createElement('span');
            spanArchive.textContent = span.textContent;
            let strongArchive = document.createElement('strong');
            strongArchive.textContent = `Total amount: ${(Number(strongPrice.textContent) * Number(input.value)).toFixed(2)}`;
            let buttonDelete = document.createElement('button');
            buttonDelete.textContent = 'Delete';
            listItemToArchive.appendChild(spanArchive);
            listItemToArchive.appendChild(strongArchive);
            listItemToArchive.appendChild(buttonDelete);
            listArchive.appendChild(listItemToArchive);
            buttonDelete.addEventListener('click', deleteMovie);
            function deleteMovie() {
                listArchive.removeChild(listItemToArchive);
            }
        }
        let buttonClear = document.querySelector('#archive button');
        buttonClear.addEventListener('click', clearMovies);
        function clearMovies() {
            let listArchive = document.querySelector('#archive ul');
            listArchive.innerHTML = '';
        }
        
    });
}