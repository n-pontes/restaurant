import { home } from "./index";
import { menu } from "./menu";
import { about } from "./about";
import { contact } from "./contact";

// navbar.js
export const createNavBar = () => {
    const headerEl = document.createElement('header');
    const navEl = document.createElement('nav');
    headerEl.appendChild(navEl);
  
    // Create navigation buttons
    const buttons = ['Home', 'Menu', 'About', 'Contact'];
    buttons.forEach((buttonText) => {
      const buttonEl = document.createElement('button');
      buttonEl.textContent = buttonText;
      navEl.appendChild(buttonEl);
  
      // Add navigation event listeners
      buttonEl.addEventListener('click', () => {
        switch (buttonText) {
          case 'Home':
            home();
            break;
          case 'Menu':
            menu();
            break;
          case 'About':
            about();
            break;
          case 'Contact':
            contact();
            break;
        }
      });
    });
  
    return headerEl; // Return the nav structure
  };