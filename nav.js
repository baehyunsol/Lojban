"use strict";

var settings = document.getElementById("settingsmenubg");

function open_settings() {
    settings.style.display = "flex";
}

function close_settings() {
    settings.style.display = "none";
}

document.getElementById("settingsopenbutton").addEventListener("click", open_settings);
document.getElementById("settingsclosebutton").addEventListener("click", close_settings);

var root_doc = document.querySelector(":root");
var horizontal_padding = 0;

function grow_horiz() {
    horizontal_padding -= 24;

    if (horizontal_padding < 0) {
        horizontal_padding = 0;
    }

    root_doc.style.setProperty("--horiz-padding", horizontal_padding + "px");
}

function shrink_horiz() {
    horizontal_padding += 24;

    if (horizontal_padding > 288) {
        horizontal_padding = 288;
    }

    root_doc.style.setProperty("--horiz-padding", horizontal_padding + "px");
}

document.getElementById("growhorizontalbutton").addEventListener("click", grow_horiz);
document.getElementById("shrinkhorizontalbutton").addEventListener("click", shrink_horiz);

var font_size_landscape = 19;
var font_size_portrait = 14;

function shrink_font() {
    font_size_landscape -= 1;
    font_size_portrait -= 1;

    if (font_size_landscape < 8) {
        font_size_landscape = 8;
    }

    if (font_size_portrait < 3) {
        font_size_portrait = 3;
    }

    root_doc.style.setProperty("--font-size-landscape", font_size_landscape + "px");
    root_doc.style.setProperty("--font-size-portrait", font_size_portrait + "px");
}

function grow_font() {
    font_size_landscape += 1;
    font_size_portrait += 1;

    if (font_size_landscape > 50) {
        font_size_landscape = 50;
    }

    if (font_size_portrait > 45) {
        font_size_portrait = 45;
    }

    root_doc.style.setProperty("--font-size-landscape", font_size_landscape + "px");
    root_doc.style.setProperty("--font-size-portrait", font_size_portrait + "px");
}

document.getElementById("growfontbutton").addEventListener("click", grow_font);
document.getElementById("shrinkfontbutton").addEventListener("click", shrink_font);

function save_settings () {
    window.localStorage.setItem("horizontal_padding", horizontal_padding);
    window.localStorage.setItem("font_size_portrait", font_size_portrait);
    window.localStorage.setItem("font_size_landscape", font_size_landscape);
    window.localStorage.setItem("settings", true);
}

function discard_settings() {
    window.localStorage.clear();
}

document.getElementById("savesettingsbutton").addEventListener("click", save_settings);
document.getElementById("discardsettingsbutton").addEventListener("click", discard_settings);

if (window.localStorage.getItem("settings") === 'true') {
    horizontal_padding = Number(window.localStorage.getItem("horizontal_padding"));
    font_size_portrait = Number(window.localStorage.getItem("font_size_portrait"));
    font_size_landscape = Number(window.localStorage.getItem("font_size_landscape"));

    root_doc.style.setProperty("--horiz-padding", horizontal_padding + "px");
    root_doc.style.setProperty("--font-size-landscape", font_size_landscape + "px");
    root_doc.style.setProperty("--font-size-portrait", font_size_portrait + "px");
}
