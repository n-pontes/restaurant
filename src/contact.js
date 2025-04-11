import { createNavBar } from './navbar';
import { createFooter } from './footer';

// Imports the coordinates image
import coordinatesImage from './images/coordinates.png';

// Creates the contact function
const contact = () => {

    // Clear the body to create a fresh page structure
    document.body.innerHTML = "";
    
    // Add the reusable navigation bar
    const nav = createNavBar();
    document.body.appendChild(nav);

    // Create content
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
    document.body.appendChild(contentDiv);

    // Create container
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');
    contentDiv.appendChild(containerDiv);

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-page');
    containerDiv.appendChild(menuDiv);

    const itemContainerDiv = document.createElement('div');
    itemContainerDiv.classList.add('item-container');
    menuDiv.appendChild(itemContainerDiv);

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemContainerDiv.appendChild(itemDiv);

    const itemA = document.createElement('p');
    let itemAText = document.createTextNode('Phone number: 123 456 789');
    itemDiv.appendChild(itemA);
    itemA.appendChild(itemAText);

    const itemB = document.createElement('p');
    let itemBText = document.createTextNode('Rua dos Pescadores 19, Albufeira, Algarve');
    itemDiv.appendChild(itemB);
    itemB.appendChild(itemBText);

    const image = document.createElement('img');
    image.classList.add('gps');
    image.src = coordinatesImage;
    itemContainerDiv.appendChild(image);

    // Add the reusable footer
    const footer = createFooter();
    document.body.appendChild(footer);

};

export { contact };