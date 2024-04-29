function addBlogPost(name, title, post) {
  blogPosts.push({
    name: name,
    title: title,
    post: post
  });
}

function saveBlogPosts() {
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
}

function loadBlogPosts() {
  let blogPostsStr = localStorage.getItem('blogPosts');
  if (blogPostsStr) {
    blogPosts = JSON.parse(blogPostsStr);
  }
}

loadBlogPosts();

const mode = localStorage.getItem('mode');
if (mode === 'dark') {
  body.classList.add('dark-mode');
  modeBtn.innerText = 'Light Mode';
} else {
  body.classList.remove('dark-mode');
  modeBtn.innerText = 'Dark Mode';
}

modeBtn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('mode', 'dark');
    modeBtn.innerText = 'Light Mode';
  } else {
    localStorage.setItem('mode', 'light');
    modeBtn.innerText = 'Dark Mode';
  }
});