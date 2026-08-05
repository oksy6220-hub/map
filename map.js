const svgObject = document.getElementById("svg-map");

const svg = svgObject.contentDocument;

console.log(svg.documentElement);

svgObject.addEventListener("load", function () {

    console.log("SVG загружен!");

    const svg = svgObject.contentDocument;

    console.log(svg);

});
