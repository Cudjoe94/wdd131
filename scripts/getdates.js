document.addEventListener('DOMContentLoaded', function () {
    // Set the current year dynamically
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Set the last modified date dynamically
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;
});
