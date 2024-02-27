fetch('blog-posts.json')
.then(response => response.json())
.then(data => {
    if (Array.isArray(data.posts)) {
        displayBlogPosts(data.posts.reverse()); 
    } else {
        console.error('Invalid data structure. Expected an array of posts.');
    }
})
.catch(error => console.error('Error fetching blog posts:', error));

function displayBlogPosts(posts) {
const blogPostsContainer = document.getElementById('blog-posts');

posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.date}</p>
        <p>${post.content}</p>
        <hr>
    `;
    blogPostsContainer.appendChild(postElement);
});
}