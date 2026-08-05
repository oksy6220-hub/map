// Ждем загрузки SVG-карты
window.addEventListener("load", () => {

    const object = document.getElementById("svg-map");

    object.addEventListener("load", () => {

        const svg = object.contentDocument;

        if (!svg) {
            console.error("SVG не найден");
            return;
        }

        console.log("SVG успешно загружен");

    });

});
