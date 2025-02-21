// JavaScript for displaying the last modified date
document.getElementById('lastModified').textContent = new Intl.DateTimeFormat(
    "en-US", { dateStyle: "short" }
).format(new Date(document.lastModified));