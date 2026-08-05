const svgObject = document.getElementById("svg-map");

svgObject.addEventListener("load", function () {

    const doc = svgObject.contentDocument;

    const svg = doc.querySelector("svg");

    console.log("SVG элемент:", svg);

    const region = svg.querySelector("#moscow");

    console.log("Москва:", region);

});
