const body = document.body;
const wrapper = document.createElement('main');
const inputCard = document.createElement('div');
const titleCard = document.createElement('div');
const h1El = document.createElement('h1');
const btnEl = document.createElement('button');
const modeBtn = document.createElement('button');
const nameInput = document.createElement('input');
const titleInput = document.createElement('input');
const postInput = document.createElement('textarea');
let blogPosts = [];

wrapper.id = 'wrapper';

titleCard.className = 'card';
titleCard.id = 'title-card';

inputCard.className = 'card';
inputCard.id = 'input-card';

h1El.className = 'h1';

nameInput.className = 'input';
titleInput.className = 'input';
postInput.className = 'input';

nameInput.type = 'text';
titleInput.type = 'text';
postInput.type = 'text';

nameInput.placeholder = 'Name';
titleInput.placeholder = 'Title';
postInput.placeholder = "What's on your mind?";

nameInput.id = 'name';
titleInput.id = 'title';
postInput.id = 'post';

modeBtn.className = 'btn';
modeBtn.id = 'mode';

btnEl.className = 'btn';
btnEl.id = 'save';

h1El.innerText = 'My First Blog';
btnEl.innerText = 'Save';
modeBtn.innerText = 'Dark Mode';

body.appendChild(wrapper);

wrapper.appendChild(titleCard);
wrapper.appendChild(inputCard);

titleCard.appendChild(h1El);
titleCard.appendChild(modeBtn);

inputCard.appendChild(nameInput);
inputCard.appendChild(titleInput);
inputCard.appendChild(postInput);
inputCard.appendChild(btnEl);

btnEl.addEventListener('click', function(event) {
    event.preventDefault();

    if (nameInput.value === '' || titleInput.value === '' || postInput.value === '') {
        alert('Please fill out all fields');
        return;
    }

    addBlogPost(nameInput.value, titleInput.value, postInput.value);

    saveBlogPosts();

    nameInput.value = '';
    titleInput.value = '';
    postInput.value = '';

  alert('Your post has been saved!');
  window.location = 'blog.html';
});