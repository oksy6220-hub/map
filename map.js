const svgObject = document.getElementById("svg-map");

svgObject.addEventListener("load", () => {

    const doc = svgObject.contentDocument;

    console.log("=== Проверка ===");

    console.log("getElementById:", doc.getElementById("moscow"));

    console.log("querySelector:", doc.querySelector("#moscow"));

    console.log("Все path:", doc.querySelectorAll("path").length);

});
