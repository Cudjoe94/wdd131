document.addEventListener("DOMContentLoaded", function () {
    // Get the current date and time
    const currentDate = new Date();

    // Format the date and time as 'MM/DD/YYYY HH:MM:SS'
    const formattedDate = currentDate.toLocaleString();

    // Insert the formatted date into the footer
    document.getElementById("current-date").textContent = formattedDate;
});



// Product Array
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
  ];
  

  
  // Populate Product Options
  window.addEventListener("load", () => {
    const productSelect = document.getElementById("product");
  
    // Dynamically add product options
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  });
  