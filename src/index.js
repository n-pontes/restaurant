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

};