// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Example: Simple console log to verify connection
console.log("News site loaded successfully!");
const proxyUrl = 'http://localhost:5000/api/news';
const gridContainer = document.getElementById('news-grid-container');

fetch(proxyUrl)
  .then(response => response.json())
  .then(data => {
    // Clear out container first
    gridContainer.innerHTML = '';

    // Loop over the articles and create a card for each one
    data.articles.forEach(article => {
      const card = document.createElement('div');
      card.className = 'news-article-card';

      card.innerHTML = `
        <img class="news-card-img" src="${article.urlToImage || 'https://placeholder.com'}" alt="Story thumbnail">
        <div class="news-card-body">
          <h3 class="news-card-title">${article.title}</h3>
          <p class="news-card-text">${article.description || 'Click link to read coverage details.'}</p>
          <a class="news-card-link" href="${article.url}" target="_blank">Read Story →</a>
        </div>
      `;
      
      gridContainer.appendChild(card);
    });
  })
  .catch(error => {
    gridContainer.innerHTML = `<p>Error loading live articles from server.</p>`;
    console.error("Card generation failed:", error);
  });
