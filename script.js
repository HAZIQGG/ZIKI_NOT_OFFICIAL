const slide = [
    "images/kasut ziki.png",
    "images/kasut ziki 2.png",
    "images/kasut ziki 3.png"
];

const produk = [
    "images/kasut_ziki-removebg-preview.png",
    "images/kasut_ziki_2-removebg-preview.png",
    "images/kasut_ziki_3-removebg-preview.png"
];

let index =0;

function selepas() {
    index++;
    if (index >=slide.length) {
        index = 0;
    }
    document.getElementById("slide").src = slide[index];
    document.getElementById("produk").src = produk[index];
}

function sebelum() {
    index--;
    if (index < 0) {
        index = slide.length - 1;
    }
    document.getElementById("slide").src = slide[index];
    document.getElementById("produk").src = produk[index];
}