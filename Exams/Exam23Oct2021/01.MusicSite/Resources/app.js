window.addEventListener('load', solve);

function solve() {
    let buttonAdd = document.getElementById('add-btn');
    buttonAdd.addEventListener('click', addSong);

    function addSong(e) {
        e.preventDefault();

        let genre = document.getElementById('genre');
        let name = document.getElementById('name');
        let author = document.getElementById('author');
        let date = document.getElementById('date');
        if (genre.value === '' || name.value === '' 
        || author.value === '' || date.value === '') {
            return;
        }

        let divAllHits = document.querySelector('div.all-hits-container');
        let divHitsInfo = document.createElement('div');
        divHitsInfo.classList.add('hits-info');
        let imageSong = document.createElement('img');
        imageSong.setAttribute('src', './static/img/img.png');
        let headerGenre = document.createElement('h2');
        headerGenre.textContent = 'Genre: ' + genre.value;
        let headerName = document.createElement('h2');
        headerName.textContent = 'Name: ' + name.value;
        let headerAuthor = document.createElement('h2');
        headerAuthor.textContent = 'Author: ' + author.value;
        let headerDate = document.createElement('h3');
        headerDate.textContent = 'Date: ' + date.value;

        let buttonSave = document.createElement('button');
        buttonSave.classList.add('save-btn');
        buttonSave.textContent = 'Save song';
        let buttonLike = document.createElement('button');
        buttonLike.classList.add('like-btn');
        buttonLike.textContent = 'Like song';
        let buttonDelete = document.createElement('button');
        buttonDelete.classList.add('delete-btn');
        buttonDelete.textContent = 'Delete';

        divHitsInfo.appendChild(imageSong);
        divHitsInfo.appendChild(headerGenre);
        divHitsInfo.appendChild(headerName);
        divHitsInfo.appendChild(headerAuthor);
        divHitsInfo.appendChild(headerDate);
        divHitsInfo.appendChild(buttonSave);
        divHitsInfo.appendChild(buttonLike);
        divHitsInfo.appendChild(buttonDelete);
        divAllHits.appendChild(divHitsInfo);

        genre.value = '';
        name.value = '';
        author.value = '';
        date.value = '';

        buttonLike.addEventListener('click', likeSong);
        function likeSong() {
            let paragraphLikes = document.querySelector('#total-likes p');
            let countLikes = Number(paragraphLikes.textContent.substring(13));
            countLikes++;
            paragraphLikes.textContent = 'Total Likes: ' + countLikes;
            buttonLike.disabled = true;
        }

        buttonSave.addEventListener('click', saveSong);
        function saveSong() {
            let savedContainer = document.querySelector('div.saved-container');
            divHitsInfo.remove();
            divHitsInfo.removeChild(buttonSave);
            divHitsInfo.removeChild(buttonLike);
            savedContainer.appendChild(divHitsInfo);
        }

        buttonDelete.addEventListener('click', deleteSong);
        function deleteSong() {
            divHitsInfo.remove();
        }
    }
}