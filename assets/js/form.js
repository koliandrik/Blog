const user = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const modeButton = document.getElementById('mode');
const saveButton = document.getElementById('save');

saveButton.addEventListener('click', function(event) {
    event.preventDefault();

    const post = {
        user: user.value,
        title: title.value,
        content: content.value.trim(),
    };

    localStorage.setItem('post',JSON.stringify(post));
})