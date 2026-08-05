const svgObject = document.getElementById("svg-map");

svgObject.addEventListener("load", function () {

    const svg = svgObject.contentDocument;

    console.log("SVG:", svg);

    const all = svg.querySelectorAll("[id]");

    console.log("Количество элементов с id:", all.length);

    all.forEach(el => {
        console.log(el.id);
    });

});
