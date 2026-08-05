document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("svg-map");

    try {
        const response = await fetch("https://oksy6220-hub.github.io/map/LASTMAP.svg");

        if (!response.ok) {
            throw new Error(`Ошибка загрузки SVG: ${response.status}`);
        }

        const svgText = await response.text();

        container.innerHTML = svgText;

        console.log("✅ SVG успешно вставлен в страницу");

    } catch (error) {
        console.error("Ошибка:", error);
    }
});
