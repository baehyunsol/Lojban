"use strict";

var root_doc = document.querySelector(":root");
var is_dark = true;

function change_theme() {
    if (is_dark) {
        to_light();
        change_theme_button.innerHTML = "Set Dark Theme";
    }

    else {
        to_dark();
        change_theme_button.innerHTML = "Set Light Theme";
    }

    is_dark = !is_dark;
}

function to_dark() {
    
    root_doc.style.setProperty("--black", "#000000");
    root_doc.style.setProperty("--black-compl", "#ffffff");
    root_doc.style.setProperty("--black-trans", "#00000080");
    root_doc.style.setProperty("--black-compl-trans", "#ffffff80");
    
    root_doc.style.setProperty("--dark", "#404040");
    root_doc.style.setProperty("--dark-compl", "#bfbfbf");
    root_doc.style.setProperty("--dark-trans", "#40404080");
    root_doc.style.setProperty("--dark-compl-trans", "#bfbfbf80");
    
    root_doc.style.setProperty("--gray", "#808080");
    root_doc.style.setProperty("--gray-compl", "#7f7f7f");
    root_doc.style.setProperty("--gray-trans", "#80808080");
    root_doc.style.setProperty("--gray-compl-trans", "#7f7f7f80");
    
    root_doc.style.setProperty("--lightgray", "#c0c0c0");
    root_doc.style.setProperty("--lightgray-compl", "#3f3f3f");
    root_doc.style.setProperty("--lightgray-trans", "#c0c0c080");
    root_doc.style.setProperty("--lightgray-compl-trans", "#3f3f3f80");
    
    root_doc.style.setProperty("--white", "#ffffff");
    root_doc.style.setProperty("--white-compl", "#000000");
    root_doc.style.setProperty("--white-trans", "#ffffff80");
    root_doc.style.setProperty("--white-compl-trans", "#00000080");
    
    root_doc.style.setProperty("--red", "#c02020");
    root_doc.style.setProperty("--red-compl", "#3fdfdf");
    root_doc.style.setProperty("--red-trans", "#c0202080");
    root_doc.style.setProperty("--red-compl-trans", "#3fdfdf80");
    
    root_doc.style.setProperty("--green", "#20c020");
    root_doc.style.setProperty("--green-compl", "#df3fdf");
    root_doc.style.setProperty("--green-trans", "#20c02080");
    root_doc.style.setProperty("--green-compl-trans", "#df3fdf80");
    
    root_doc.style.setProperty("--slateblue", "#4040c0");
    root_doc.style.setProperty("--slateblue-compl", "#bfbf3f");
    root_doc.style.setProperty("--slateblue-trans", "#4040c080");
    root_doc.style.setProperty("--slateblue-compl-trans", "#bfbf3f80");
    
    root_doc.style.setProperty("--blue", "#2020c0");
    root_doc.style.setProperty("--blue-compl", "#dfdf3f");
    root_doc.style.setProperty("--blue-trans", "#2020c080");
    root_doc.style.setProperty("--blue-compl-trans", "#dfdf3f80");
    
    root_doc.style.setProperty("--aqua", "#40c0ff");
    root_doc.style.setProperty("--aqua-compl", "#bf3f00");
    root_doc.style.setProperty("--aqua-trans", "#40c0ff80");
    root_doc.style.setProperty("--aqua-compl-trans", "#bf3f0080");
    
    root_doc.style.setProperty("--emerald", "#40c040");
    root_doc.style.setProperty("--emerald-compl", "#bf3fbf");
    root_doc.style.setProperty("--emerald-trans", "#40c04080");
    root_doc.style.setProperty("--emerald-compl-trans", "#bf3fbf80");
    
    root_doc.style.setProperty("--turquoise", "#40ffc0");
    root_doc.style.setProperty("--turquoise-compl", "#bf003f");
    root_doc.style.setProperty("--turquoise-trans", "#40ffc080");
    root_doc.style.setProperty("--turquoise-compl-trans", "#bf003f80");
    
    root_doc.style.setProperty("--seagreen", "#20c0c0");
    root_doc.style.setProperty("--seagreen-compl", "#df3f3f");
    root_doc.style.setProperty("--seagreen-trans", "#20c0c080");
    root_doc.style.setProperty("--seagreen-compl-trans", "#df3f3f80");
    
    root_doc.style.setProperty("--violet", "#c040ff");
    root_doc.style.setProperty("--violet-compl", "#3fbf00");
    root_doc.style.setProperty("--violet-trans", "#c040ff80");
    root_doc.style.setProperty("--violet-compl-trans", "#3fbf0080");
    
    root_doc.style.setProperty("--pink", "#ff40c0");
    root_doc.style.setProperty("--pink-compl", "#00bf3f");
    root_doc.style.setProperty("--pink-trans", "#ff40c080");
    root_doc.style.setProperty("--pink-compl-trans", "#00bf3f80");
    
    root_doc.style.setProperty("--grassgreen", "#c0ff40");
    root_doc.style.setProperty("--grassgreen-compl", "#3f00bf");
    root_doc.style.setProperty("--grassgreen-trans", "#c0ff4080");
    root_doc.style.setProperty("--grassgreen-compl-trans", "#3f00bf80");
    
    root_doc.style.setProperty("--gold", "#ffc040");
    root_doc.style.setProperty("--gold-compl", "#003fbf");
    root_doc.style.setProperty("--gold-trans", "#ffc04080");
    root_doc.style.setProperty("--gold-compl-trans", "#003fbf80");
    
    root_doc.style.setProperty("--brown", "#c08020");
    root_doc.style.setProperty("--brown-compl", "#3f7fdf");
    root_doc.style.setProperty("--brown-trans", "#c0802080");
    root_doc.style.setProperty("--brown-compl-trans", "#3f7fdf80");
    
}

function to_light() {
    
    root_doc.style.setProperty("--black", "#ffffff");
    root_doc.style.setProperty("--black-compl", "#000000");
    root_doc.style.setProperty("--black-trans", "#ffffff80");
    root_doc.style.setProperty("--black-compl-trans", "#00000080");
    
    root_doc.style.setProperty("--dark", "#bfbfbf");
    root_doc.style.setProperty("--dark-compl", "#404040");
    root_doc.style.setProperty("--dark-trans", "#bfbfbf80");
    root_doc.style.setProperty("--dark-compl-trans", "#40404080");
    
    root_doc.style.setProperty("--gray", "#7f7f7f");
    root_doc.style.setProperty("--gray-compl", "#808080");
    root_doc.style.setProperty("--gray-trans", "#7f7f7f80");
    root_doc.style.setProperty("--gray-compl-trans", "#80808080");
    
    root_doc.style.setProperty("--lightgray", "#3f3f3f");
    root_doc.style.setProperty("--lightgray-compl", "#c0c0c0");
    root_doc.style.setProperty("--lightgray-trans", "#3f3f3f80");
    root_doc.style.setProperty("--lightgray-compl-trans", "#c0c0c080");
    
    root_doc.style.setProperty("--white", "#000000");
    root_doc.style.setProperty("--white-compl", "#ffffff");
    root_doc.style.setProperty("--white-trans", "#00000080");
    root_doc.style.setProperty("--white-compl-trans", "#ffffff80");
    
    root_doc.style.setProperty("--red", "#3fdfdf");
    root_doc.style.setProperty("--red-compl", "#c02020");
    root_doc.style.setProperty("--red-trans", "#3fdfdf80");
    root_doc.style.setProperty("--red-compl-trans", "#c0202080");
    
    root_doc.style.setProperty("--green", "#df3fdf");
    root_doc.style.setProperty("--green-compl", "#20c020");
    root_doc.style.setProperty("--green-trans", "#df3fdf80");
    root_doc.style.setProperty("--green-compl-trans", "#20c02080");
    
    root_doc.style.setProperty("--slateblue", "#bfbf3f");
    root_doc.style.setProperty("--slateblue-compl", "#4040c0");
    root_doc.style.setProperty("--slateblue-trans", "#bfbf3f80");
    root_doc.style.setProperty("--slateblue-compl-trans", "#4040c080");
    
    root_doc.style.setProperty("--blue", "#dfdf3f");
    root_doc.style.setProperty("--blue-compl", "#2020c0");
    root_doc.style.setProperty("--blue-trans", "#dfdf3f80");
    root_doc.style.setProperty("--blue-compl-trans", "#2020c080");
    
    root_doc.style.setProperty("--aqua", "#bf3f00");
    root_doc.style.setProperty("--aqua-compl", "#40c0ff");
    root_doc.style.setProperty("--aqua-trans", "#bf3f0080");
    root_doc.style.setProperty("--aqua-compl-trans", "#40c0ff80");
    
    root_doc.style.setProperty("--emerald", "#bf3fbf");
    root_doc.style.setProperty("--emerald-compl", "#40c040");
    root_doc.style.setProperty("--emerald-trans", "#bf3fbf80");
    root_doc.style.setProperty("--emerald-compl-trans", "#40c04080");
    
    root_doc.style.setProperty("--turquoise", "#bf003f");
    root_doc.style.setProperty("--turquoise-compl", "#40ffc0");
    root_doc.style.setProperty("--turquoise-trans", "#bf003f80");
    root_doc.style.setProperty("--turquoise-compl-trans", "#40ffc080");
    
    root_doc.style.setProperty("--seagreen", "#df3f3f");
    root_doc.style.setProperty("--seagreen-compl", "#20c0c0");
    root_doc.style.setProperty("--seagreen-trans", "#df3f3f80");
    root_doc.style.setProperty("--seagreen-compl-trans", "#20c0c080");
    
    root_doc.style.setProperty("--violet", "#3fbf00");
    root_doc.style.setProperty("--violet-compl", "#c040ff");
    root_doc.style.setProperty("--violet-trans", "#3fbf0080");
    root_doc.style.setProperty("--violet-compl-trans", "#c040ff80");
    
    root_doc.style.setProperty("--pink", "#00bf3f");
    root_doc.style.setProperty("--pink-compl", "#ff40c0");
    root_doc.style.setProperty("--pink-trans", "#00bf3f80");
    root_doc.style.setProperty("--pink-compl-trans", "#ff40c080");
    
    root_doc.style.setProperty("--grassgreen", "#3f00bf");
    root_doc.style.setProperty("--grassgreen-compl", "#c0ff40");
    root_doc.style.setProperty("--grassgreen-trans", "#3f00bf80");
    root_doc.style.setProperty("--grassgreen-compl-trans", "#c0ff4080");
    
    root_doc.style.setProperty("--gold", "#003fbf");
    root_doc.style.setProperty("--gold-compl", "#ffc040");
    root_doc.style.setProperty("--gold-trans", "#003fbf80");
    root_doc.style.setProperty("--gold-compl-trans", "#ffc04080");
    
    root_doc.style.setProperty("--brown", "#3f7fdf");
    root_doc.style.setProperty("--brown-compl", "#c08020");
    root_doc.style.setProperty("--brown-trans", "#3f7fdf80");
    root_doc.style.setProperty("--brown-compl-trans", "#c0802080");
    
}

var change_theme_button = document.getElementById("changethemebutton");
change_theme_button.addEventListener("click", change_theme);

function save_color_settings () {
    window.localStorage.setItem("is_dark", is_dark);
}

document.getElementById("savesettingsbutton").addEventListener("click", save_color_settings);

if (window.localStorage.getItem("settings") === 'true') {
    is_dark = (window.localStorage.getItem("is_dark") === 'true');

    if (!is_dark) {
        console.log("3", is_dark);
        to_light();
        change_theme_button.innerHTML = "Set Dark Theme";
    }
}
