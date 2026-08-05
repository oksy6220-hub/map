const svgObject = document.getElementById("svg-map");

const region = svg.getElementById("moscow");

console.log(region);

svgObject.addEventListener("load", function () {

    console.log("SVG загружен!");

    const svg = svgObject.contentDocument;

    console.log(svg);

});
