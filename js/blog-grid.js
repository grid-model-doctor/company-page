const blogPosts = [
    {
        image: 'images/hidden-cost.jpg',
        alt: 'Grid modeling',
        date: '08-08-2025',
        title: 'The Hidden Costs of Poor Grid Models',
        excerpt: 'Discover how low-quality CYME models are costing utilities millions in planning errors and operational inefficiencies.',
        slug: 'hidden-costs',
    },
    {
        image: 'images/5_common.jpg',
        alt: 'Power distribution',
        date: '08-01-2025',
        title: '5 Common CYME Model Errors and How to Fix Them',
        excerpt: 'A technical guide to the most frequent issues we encounter in utility grid models and proven solutions.',
        slug: 'cyme'
    },
    {
        image: 'images/grid-model-validation.jpg',
        alt: 'Software development',
        date: 'Coming Soon',
        title: 'Automating Grid Model Validation: A Technical Deep Dive',
        excerpt: 'Learn about the algorithms and methodologies behind automated grid model validation and repair.',
        slug: 'automating-validation'
    }
];

// Select the blog grid container
const blogGrid = document.querySelector('.blog-grid');

// Loop through blog data and create cards
blogPosts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'blog-card';

    card.innerHTML = `
    <img src="${post.image}" alt="${post.alt}">
    <div class="blog-content">
      <div class="blog-date">${post.date}</div>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <a href="post.html?post=${post.slug}" class="blog-link">Read More →</a>
    </div>
  `;

    blogGrid.appendChild(card);
});
