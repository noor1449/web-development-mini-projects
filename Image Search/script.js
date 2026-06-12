const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value.trim();
    
    // If the user didn't type anything, don't do anything
    if (!keyword) return;

    if (page === 1) {
        searchResult.innerHTML = "";
    }
    
    // We generate 9 keyword-targeted images per page
    const imagesPerPage = 9; 

    for (let i = 0; i < imagesPerPage; i++) {
        // We use a random seed number combined with the page index 
        // This forces the browser to fetch fresh, different images for your keyword
        const randomSeed = page * imagesPerPage + i;
        
        // Open-source keyword image endpoints (No key required!)
        const imageUrl = `https://images.unsplash.com/photo-1506744038136-46273834b3fb?utm_source=embed&q=80&w=400&auto=format&fit=crop&sig=${keyword}-${randomSeed}`;
        
        // Alternative completely open endpoint fallback if you want raw keyword injection:
        const fallbackUrl = `https://loremflickr.com/400/300/${encodeURIComponent(keyword)}?lock=${randomSeed}`;

        // Create the image element
        const image = document.createElement("img");
        image.src = fallbackUrl; // Using LoremFlickr here as it has excellent keyword tracking without keys
        image.alt = keyword;
        
        // Create a link wrapper so clicking the image opens it full size
        const imgLink = document.createElement("a");
        imgLink.href = `https://loremflickr.com/1200/800/${encodeURIComponent(keyword)}?lock=${randomSeed}`;
        imgLink.target = "_blank";
        
        imgLink.appendChild(image);
        searchResult.appendChild(imgLink);
    }
     
    // Reveal the "Show more" button
    showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1; 
    searchImages();
});

showMoreBtn.addEventListener("click", () => {
    page++; 
    searchImages();
});