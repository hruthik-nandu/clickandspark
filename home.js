const plusButton = document.querySelector(".plus");
const menuContainer = document.querySelector(".menu-container");

plusButton.onclick = () => {
    menuContainer.classList.toggle("active");
}

// now lets add active effect using css