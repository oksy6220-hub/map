const svgObject = document.getElementById("svg-map");

svgObject.addEventListener("load", function () {

    const doc = svgObject.contentDocument;

    console.log("=== DOCUMENT ===");
    console.log(doc);

    console.log("=== documentElement ===");
    console.log(doc.documentElement);

    console.log("=== body ===");
    console.log(doc.body);

    console.log("=== SVG ===");
    console.log(doc.querySelector("svg"));

});
