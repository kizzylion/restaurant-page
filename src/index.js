import createRestaurantHomepage from "./restaurant.js";
import createContactTab from "./contact.js";
import createMenuTab from "./menu.js";

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

document.getElementById('menu-tab').addEventListener('click', ()=> {
    clearContent();
    createMenuTab();
})

document.getElementById('contact-tab').addEventListener('click', ()=> {
    clearContent();
    createContactTab();
})