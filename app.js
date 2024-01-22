console.log("Working");

const accessKey = "yatmYfJkdbM9yR9r8Icqdx7Gp_Xn3jlv1uzU5tMH8Ig";
let query = "nature";
const perPage = 9;

async function searchImages() {
  const searchInput = document.getElementById("search-input");
  query = searchInput.value || "nature";

  const endpoint = `https://api.unsplash.com/photos/random/?query=${query}&count=${perPage}&client_id=${accessKey}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    const imageContainer = document.getElementById("image-gallery");
    imageContainer.innerHTML = "";

    data.forEach((photo) => {
      const imageElement = document.createElement("div");
      imageElement.classList.add("image-container");

      const overlay = document.createElement("div");
      overlay.classList.add("image-overlay");

      const overlayText = document.createElement("div");
      overlayText.classList.add("overlay-text");
      overlayText.innerText =
        photo.alt_description || "No description available";

      overlay.appendChild(overlayText);

      imageElement.appendChild(overlay);

      imageElement.innerHTML += `<img src="${photo.urls.regular}" alt="${photo.alt_description}">`;
      imageContainer.appendChild(imageElement);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

searchImages();
