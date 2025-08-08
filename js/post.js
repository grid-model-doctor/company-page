// js/post.js
function getPostSlug() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('post');
}

async function loadPost(slug) {
    try {
        const response = await fetch(`../blogs/${slug}.md`);
        if (!response.ok) throw new Error('Blog not found');

        const markdown = await response.text();
        const html = marked.parse(markdown);

        document.getElementById('post-content').innerHTML = html;

        Prism.highlightAll();
    } catch (err) {
        document.getElementById('post-content').innerHTML = `<p>Sorry, the post could not be loaded.</p>`;
    }
}

const slug = getPostSlug();
if (slug) loadPost(slug);
