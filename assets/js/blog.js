const body = document.body;
const header = document.createElement('header');
const main = document.createElement('main');
const div = document.createElement('div');
const footer = document.createElement('footer');
const modeBtn = document.createElement('button');
const backBtn = document.createElement('button');

modeBtn.className = 'btn';
modeBtn.id = 'mode';

backBtn.className = 'btn';
backBtn.id = 'back';

div.className = 'container';

body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);
main.appendChild(div);

header.appendChild(modeBtn);

modeBtn.textContent = 'Dark Mode';

header.appendChild(backBtn);

backBtn.textContent = 'Back';
backBtn.addEventListener('click', () => {
    history.back();
});