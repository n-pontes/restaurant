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

     // Add menu items
     const menuItems = [
        { name: 'Coconut Shrimp', price: '€10.99', description: 'Freshly prepared shrimp, served in a dish with coconut milk sauce.' },
        { name: 'Grilled Octopus', price: '€19.99', description: 'Tender octopus grilled to perfection, served with garlic butter and roasted potatoes.' },
        { name: 'Seafood Paella', price: '€25.85', description: 'A classic Spanish dish with saffron-infused rice, shrimp, mussels, clams, and chorizo.' },
        { name: 'Lobster Thermidor', price: '€34.99', description: 'Lobster meat baked in a creamy brandy sauce, topped with cheese and served in the shell.' },
        { name: 'Seared Scallops', price: '€15.99', description: 'Pan-seared scallops over truffle mashed potatoes, finished with a citrus beurre blanc.' },
        { name: 'Garlic Butter Lobster Tail', price: '€18.99', description: 'Succulent lobster tail broiled in garlic herb butter, served with lemon asparagus.' },
        { name: 'Grilled Octopus', price: '€16.50', description: 'Char-grilled Mediterranean octopus on a bed of smoky paprika chickpea purée.' },
        { name: 'Blackened Swordfish Steak', price: '€17.75', description: 'Cajun-seasoned swordfish seared and served with charred corn salsa and lime aioli.' },
        { name: 'Chili-Lime Shrimp Skewers', price: '€14.90', description: 'Grilled shrimp marinated in chili-lime glaze, served over cilantro jasmine rice.' },
        { name: 'Miso Glazed Cod', price: '€16.80', description: 'Delicate Atlantic cod in a sweet miso glaze with pickled daikon and seaweed salad.' },
        { name: 'Stuffed Calamari', price: '€15.60', description: 'Tender calamari tubes stuffed with herbed ricotta and sun-dried tomatoes, baked in a tomato white wine sauce.' },
        { name: 'Crab & Avocado Tartare', price: '€14.25', description: 'Blue crab tossed in citrus dressing, layered with avocado and mango salsa, served chilled.' }
    ];

    menuItems.forEach((item) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        const priceDiv = document.createElement('div');
        priceDiv.classList.add('price');

        const dishName = document.createElement('h1');
        dishName.textContent = item.name;
        priceDiv.appendChild(dishName);

        const dishPrice = document.createElement('h1');
        dishPrice.textContent = item.price;
        priceDiv.appendChild(dishPrice);

        const description = document.createElement('p');
        description.textContent = item.description;

        itemDiv.appendChild(priceDiv);
        itemDiv.appendChild(description);
        itemContainerDiv.appendChild(itemDiv);
    });

   // Add the reusable footer
   const footer = createFooter();
   document.body.appendChild(footer);
};

export { menu };