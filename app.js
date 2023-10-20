const plusButton = document.querySelector(".plus");
const menuContainer = document.querySelector(".menu-container");

plusButton.onclick = () => {
    menuContainer.classList.toggle("active");
}

// adding search function javascript
const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase(); // Use .value instead of .ariaValueMax to get the input value.
    const storeitems = document.getElementById("product-list");
    const products = document.querySelectorAll(".product"); // Correct the variable name.
    const pname = storeitems.getElementsByTagName("h2"); // Use getElementsByTagName on storeitems to select all h2 elements.

    for (var i = 0; i < pname.length; i++) {
        let match = pname[i];
        if (match) {
            let textvalue = match.textContent || match.innerHTML;
            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                products[i].style.display = ""; // Show the product if there's a match.
            } else {
                products[i].style.display = "none"; // Hide the product if there's no match.
            }
        }
    }
}
