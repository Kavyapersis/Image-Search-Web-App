const accessKey = "0zxJsIrOwvgAKJrwRwpHw_DESKvkK5KTcU6s35umSk0"; // Replace with your Unsplash API Key
const imageContainer = document.getElementById("imageContainer");
const searchInput = document.getElementById("searchInput");

let imageSet = new Set(); // To avoid duplicate image URLs
let debounceTimer;

// Debounce function to limit API calls while typing
function debounce(func, delay) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(func, delay);
}

// Clear previous results
function clearResults() {
    imageContainer.innerHTML = "";
    imageSet.clear();
}

// Display fetched images
function displayImages(data) {
    if (data.length === 0) {
        imageContainer.innerHTML = "<p>No images found.</p>";
        return;
    }

    data.forEach(photo => {
        if (!imageSet.has(photo.urls.small)) {
            imageSet.add(photo.urls.small);

            const card = document.createElement("div");
            card.className = "image-card";
            card.innerHTML = `
        <img src="${photo.urls.small}" alt="${photo.alt_description}" />
        <p>${photo.alt_description || "No description available"}</p>
      `;
            imageContainer.appendChild(card);
        }
    });
}

// Fetch images from Unsplash API
async function searchImages() {
    const query = searchInput.value.trim();

    if (!query) {
        alert("Please enter a valid search term.");
        return;
    }

    clearResults();
    imageContainer.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=${accessKey}`);
        const result = await response.json();

        displayImages(result.results);
    } catch (error) {
        console.error("Error fetching images:", error);
        imageContainer.innerHTML = "<p>Error loading images. Try again.</p>";
    }
}

// Optional: trigger search on Enter key
searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        debounce(searchImages, 500); // 500ms debounce
    }
});