document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("last-modified");
    const menuButton = document.getElementById("menu");
    const navMenu = document.getElementById("nav-menu");
    const filterButtons = document.querySelectorAll(".filter");
    const templeContainer = document.getElementById("temple-container");

    // Set current year
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Set last modified date
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    // Toggle navigation menu
    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("open");
        });
    }

    // Temple Data
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005-08-07",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888-05-21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015-06-07",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        }
    ];

    // Function to display temples
    function displayTemples(filter = "home") {
        if (!templeContainer) return;
        templeContainer.innerHTML = "";
        let filteredTemples = temples;
        
        if (filter === "old") {
            filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
        } else if (filter === "new") {
            filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
        } else if (filter === "large") {
            filteredTemples = temples.filter(t => t.area > 90000);
        } else if (filter === "small") {
            filteredTemples = temples.filter(t => t.area < 10000);
        }
        
        filteredTemples.forEach(temple => {
            const templeCard = document.createElement("div");
            templeCard.classList.add("temple-card");
            templeCard.innerHTML = `
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${new Date(temple.dedicated).toDateString()}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            `;
            templeContainer.appendChild(templeCard);
        });
    }

    // Event listeners for filters
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            displayTemples(button.dataset.filter);
        });
    });

    // Initial display
    displayTemples();
});
