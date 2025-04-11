// Create the home function

export const home = () => {

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

    // index-page div is now a child of the div content
    // All the content for the home page goes here
    const indexPage = document.createElement('div');
    indexPage.classList.add('index-page');
    contentDiv.appendChild(indexPage);
    // Welcome div
    const welcomeDiv = document.createElement('div');
    indexPage.appendChild(welcomeDiv);
    welcomeDiv.classList.add('welcome');
    let welcomeText = document.createTextNode('Marinheiro');
    welcomeDiv.appendChild(welcomeText);
    // Tittle Div
    const titleDiv = document.createElement('div');
    indexPage.appendChild(titleDiv);
    titleDiv.classList.add('title');
    let titleText = document.createTextNode('Marisqueira');
    titleDiv.appendChild(titleText);

    // Line Div
    const lineDiv = document.createElement('div');
    lineDiv.classList.add('line');
    indexPage.appendChild(lineDiv);

    // Subtitle Div
    const subtitleDiv = document.createElement('div');
    indexPage.appendChild(subtitleDiv);
    subtitleDiv.classList.add('subtitle');
    let subtitleText = document.createTextNode('Onde o mar encontra o sabor, desde 1969!');
    subtitleDiv.appendChild(subtitleText);

    //Creates the menu button
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-small');
    let menuButtonText = document.createTextNode('CHECK THE MENU');
    menuButton.appendChild(menuButtonText);
    indexPage.appendChild(menuButton);

};