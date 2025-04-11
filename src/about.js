import { createNavBar } from './navbar.js';
import { createFooter } from './footer.js';


// About page
const about = () => {

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

    // Creates the div that is specific for the menu page
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-page');
    containerDiv.appendChild(menuDiv);

    //Creates the Logo text
    const welcomeDiv = document.createElement('div');
    welcomeDiv.classList.add('welcome');
    let welcomeText = document.createTextNode('Marinheiro');
    welcomeDiv.appendChild(welcomeText);
    menuDiv.appendChild(welcomeDiv);

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    let titleText = document.createTextNode('About Us');
    titleDiv.appendChild(titleText);
    menuDiv.appendChild(titleDiv);

    const itemContainerDiv = document.createElement('div');
    itemContainerDiv.classList.add('item-container');
    menuDiv.appendChild(itemContainerDiv);

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemContainerDiv.appendChild(itemDiv);


    const description= document.createElement('p');
    let descriptionText = document.createTextNode(`Marinheiro is a cherished seafood restaurant nestled in the heart of the Algarve, 
                            serving locals and visitors since 1969. With over five decades of history, 
                            we’ve become a beloved destination for those seeking the authentic flavors of the sea.
                            Founded by a family of fishermen, Marinheiro has always been about more than just food — 
                            it's a tribute to the ocean and the Algarve's rich maritime traditions. Our menu is inspired by the daily catch, 
                            featuring fresh, locally sourced seafood prepared with care and simplicity, just as it should be.
                            Whether you're here for a quiet dinner, a family gathering, or a long lunch with friends, Marinheiro offers a warm, 
                            welcoming atmosphere where the sound of the waves is never far away. 
                            Join us and discover why generations have chosen Marinheiro for unforgettable meals by the sea.`);
    itemDiv.appendChild(description);
    description.appendChild(descriptionText);

    // Add the reusable footer
    const footer = createFooter();
    document.body.appendChild(footer);

};

export { about };