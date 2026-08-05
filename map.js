const svgObject = document.getElementById("svg-map");

svgObject.addEventListener("load", function () {

    console.log("SVG загружен!");

    const svg = svgObject.contentDocument;

    console.log(svg);

});
