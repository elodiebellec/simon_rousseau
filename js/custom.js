const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class=’fa fa-bars’></i>";
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class=’fa fa-times’></i>";
    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);

function showFeature(cellId) {
    // Hide all feature elements
    document.querySelectorAll(".feature").forEach(function(el){
        el.style.display = 'None';
    });
    
    // Show all cells
    document.querySelectorAll(".cell").forEach(function(el){
        el.style.display = '';
    });
    
    // Show the one feature we need
    document.querySelector(".feature[data-cell-id='" + cellId + "']").style.display = ''
    
    // Hide the associated cell
    document.querySelector(".cell[data-cell-id='" + cellId + "']").style.display = 'None'
}
