// Object storing site details
const siteInfo = {
    name: "Healthy Meal Prep and Nutrition",
    author: "Francis Uba Ezieme",
    year: new Date().getFullYear(),
};

// Update the copyright year dynamically
document.getElementById('year').textContent = siteInfo.year;

// Display the last modified date
document.getElementById('lastModified').textContent = new Intl.DateTimeFormat(
    "en-US", { dateStyle: "short" }
).format(new Date(document.lastModified));

// Function to check meal prep tips based on day
function checkMealPlan(day) {
    const mealPlans = {
        Monday: "Grilled chicken with quinoa",
        Tuesday: "Salmon with roasted vegetables",
        Wednesday: "Vegan stir-fry with tofu",
        Thursday: "Beef and broccoli with brown rice",
        Friday: "Shrimp and avocado salad",
        Saturday: "Cheat day! Enjoy in moderation.",
        Sunday: "Meal prep for the week ahead."
    };

    return mealPlans[day] || "Invalid day. Please enter a valid weekday.";
}

// Array of ingredients and displaying them dynamically
const healthyIngredients = ["Spinach", "Quinoa", "Chicken", "Salmon", "Avocado"];
const ingredientList = healthyIngredients.map(ingredient => `<li>${ingredient}</li>`).join("");
document.body.insertAdjacentHTML("beforeend", `<section><h2>Healthy Ingredients</h2><ul>${ingredientList}</ul></section>`);

// Store and retrieve the site name using localStorage
localStorage.setItem("siteName", siteInfo.name);
const storedSiteName = localStorage.getItem("siteName");

console.log(`Stored Site Name: ${storedSiteName}`);

// Random Recipe Button Feature
const recipes = [
    "Oatmeal with fresh berries",
    "Grilled salmon with quinoa",
    "Chicken and vegetable stir-fry",
    "Greek yogurt with honey and almonds",
    "Lentil soup with whole-grain bread"
];

function getRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    alert(`Try this recipe: ${recipes[randomIndex]}`);
}

// Create and insert a "Random Recipe" button
const randomButton = document.createElement("button");
randomButton.textContent = "Get a Random Recipe";
randomButton.addEventListener("click", getRandomRecipe);
document.body.appendChild(randomButton);
