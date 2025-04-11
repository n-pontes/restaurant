import { createNavBar } from './navbar.js';
import { createFooter } from './footer.js';

//Create function for the menu tab
const menu = () => {

    // Clear the body to create a fresh page structure
    document.body.innerHTML = "";

    // Add the reusable navigation bar
    const nav = createNavBar();
    document.body.appendChild(nav);

    // Create content
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
    document.body.appendChild(contentDiv);

    //Create container
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');
    contentDiv.appendChild(containerDiv);

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-page');
    containerDiv.appendChild(menuDiv);

    const welcomeDiv = document.createElement('div');
    welcomeDiv.classList.add('welcome');
    menuDiv.appendChild(welcomeDiv);
    let welcomeText = document.createTextNode('Marinheiro');
    welcomeDiv.appendChild(welcomeText);

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    menuDiv.appendChild(titleDiv);
    let titleText = document.createTextNode('Menu');
    titleDiv.appendChild(titleText);

     // Create item-container
     const itemContainerDiv = document.createElement('div');
     itemContainerDiv.classList.add('item-container');
     menuDiv.appendChild(itemContainerDiv);
}