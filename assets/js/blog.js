const body = document.body;
const header = document.createElement('header');
const main = document.createElement('main');
const posts = document.createElement('div');
const footer = document.createElement('footer');
const modeBtn = document.createElement('button');
const backBtn = document.createElement('button');

modeBtn.className = 'btn';
modeBtn.id = 'mode';

backBtn.className = 'btn';
backBtn.id = 'back';

posts.className = 'container';

body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);
main.appendChild(posts);

header.appendChild(modeBtn);

modeBtn.textContent = 'Dark Mode';

header.appendChild(backBtn);

backBtn.textContent = 'Back';
backBtn.addEventListener('click', () => {
    window.location = 'index.html';
});

const storedItems = localStorage.getItem('blogPosts')

if (storedItems) {
    blogPosts = JSON.parse(storedItems);
    for (let i = 0; i < blogPosts.length; i++) {
        const post = document.createElement('div');
        post.className = 'post';
        posts.appendChild(post);   
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        h2.textContent = blogPosts[i].name;
        h3.textContent = blogPosts[i].title;
        p.textContent = blogPosts[i].post;

        post.appendChild(h2);
        post.appendChild(h3);
        post.appendChild(p);
    }
}
