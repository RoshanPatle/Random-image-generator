document.addEventListener('DOMContentLoaded', () => {
    const loadImagesButton = document.getElementById('load-images');
    const imageGrid = document.getElementById('image-grid');

    const fetchRandomImages = async () => {
        const apiKey = '84APAsGm0mvdHaoLzQACGcjk_7enEp1Pbtj3ZgcbcDc'; // Replace with your Unsplash API key
        const response = await fetch(`https://api.unsplash.com/photos/random?count=9&client_id=${apiKey}`);
        const images = await response.json();
        return images;
    };

    const displayImages = async () => {
        const images = await fetchRandomImages();
        imageGrid.innerHTML = '';
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.urls.small;
            imgElement.alt = image.alt_description || 'Random Image';
            imageGrid.appendChild(imgElement);
        });
    };

    loadImagesButton.addEventListener('click', displayImages);

    // Load images on page load
    displayImages();
});
