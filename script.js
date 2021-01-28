let menu_btn = document.getElementById("menu-adaptive-btn")
        let menu_adaptive = document.getElementById("menu-adaptive")

        
        menu_btn.onclick = function myFunction() {
if (menu_adaptive.className === "header-navbar") {
    menu_adaptive.className = "header-navbar display_block";
} else {
    menu_adaptive.className = "header-navbar";
}
}