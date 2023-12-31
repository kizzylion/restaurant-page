import createRestaurantHomepage from "./restaurant.js";
import createContactTab from "./contact.js";

createRestaurantHomepage();

//Function to clearContent
function clearContent(){
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";
}

//Event listeners for each tab
document.getElementById('home-tab').addEventListener('click', ()=> {
    clearContent();
    createRestaurantHomepage();
})

document.getElementById('contact-tab').addEventListener('click', ()=> {
    clearContent();
    createContactTab();
})