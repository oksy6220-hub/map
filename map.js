window.addEventListener("load", function () {

    const mapObject = document.getElementById("svg-map");

    if (!mapObject) {
        console.log("Объект карты не найден");
        return;
    }

    mapObject.addEventListener("load", function () {

        console.log("SVG загружен");

        const svgDoc = mapObject.contentDocument;

        if (!svgDoc) {
            console.log("Не удалось получить SVG");
            return;
        }

        console.log("SVG успешно открыт");

    });

});
