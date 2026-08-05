const svgObject = document.getElementById("svg-map");

const svg = svgObject.contentDocument;

console.log(svg.documentElement);

const elements = svg.querySelectorAll("[id]");

elements.forEach(el => {
    console.log(el.id);
});

svgObject.addEventListener("load", function () {

    console.log("SVG загружен!");

    const svg = svgObject.contentDocument;

    console.log(svg);

});
