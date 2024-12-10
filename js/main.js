// Function to fetch image data and render the cards
fetch('https://thrilling-square-glitter.glitch.me/images') // Ensure URL is correct for your server
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    renderImageCards(data.images); // Call function to render cards with fetched data
  })
  .catch(error => console.error('Error fetching images:', error));

// Function to render image cards
function renderImageCards(images) {
  const imageScroll = document.querySelector('.image-scroll');

  images.forEach((image, index) => {
    // Create card container
    const card = document.createElement('div');
    card.className = 'image-card';

    // Create image element
    const img = document.createElement('img');
    img.src = `./images/${image}`; // Path to the image in the public directory
    img.alt = `Image ${index + 1}`;

    const audio = new Audio(`./audios/audio${index+1}.mp3`)
    img.addEventListener('click', () => {
      audio.play();
    });

    // Create title element
    const title = document.createElement('div');
    title.className = 'image-title';
    title.textContent = `Image Title ${index + 1}`;

    // Create description element
    const description = document.createElement('div');
    description.className = 'image-description';
    description.textContent = `Description of Image ${index + 1}`;

    // Append elements to card
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);

    // Append card to scroll container
    imageScroll.appendChild(card);
  });
}
