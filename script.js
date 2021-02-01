let menu_btn = document.getElementById("menu-adaptive-btn")
        let menu_adaptive = document.getElementById("menu-adaptive")

        
        menu_btn.onclick = function myFunction() {
if (menu_adaptive.className === "header-navbar") {
    menu_adaptive.className = "header-navbar display_block";
} else {
    menu_adaptive.className = "header-navbar";
}
}


let ddd = document.getElementById("dashbord-control-btn")
let aaa = document.getElementById("dasboard_controll")
let qqq = document.getElementById("dasboard_controll_2")

ddd.onclick = function (){
if(qqq.className === "dasboard_controll with-white-bg"){
    qqq.className = "dasboard_controll with-white-bg display_none"
}
else{
    qqq.className = "dasboard_controll with-white-bg"
}
    //     if (aaa.className === "dasboard_controll") {
//         aaa.className = "dasboard_controll display_none";
// } else {
// aaa.className = "dasboard_controll";
// }
}


