const svgObject = document.getElementById("svg-map");

svgObject.addEventListener("load", function () {

    const doc = svgObject.contentDocument;

    console.log(doc.querySelector("#moscow"));

});
